# Voice Narration: ElevenLabs to Supabase Porting Guide

The Trail Knotz application uses ElevenLabs for high-quality, multi-language voice narration. To optimize costs and reduce latency, we are porting the dynamic API calls to a static, pre-generated audio architecture hosted on Supabase Storage.

This document outlines the architecture, database schema, and migration script required to achieve this.

## 1. Architecture Shift

**Current State (Dynamic):**
1. User opens `SkillLab.jsx`.
2. Frontend requests audio for the current step.
3. Backend calls ElevenLabs API.
4. ElevenLabs streams audio back to the client.
*Drawbacks:* High latency, high API cost, requires constant internet connection.

**Target State (Static/Supabase):**
1. Audio files are pre-generated via an admin script.
2. Files are uploaded to a public Supabase Storage bucket (`knot-audio`).
3. Supabase database stores the CDN URLs mapped to specific knot steps and languages.
4. Frontend fetches the URL from the database and plays the audio instantly.

## 2. Supabase Storage Structure

Create a new public bucket in Supabase named `knot-audio`.

**Folder Structure Convention:**
`/{knot_slug}/{language_code}/{step_number}.mp3`

**Example:**
- `/bowline/en-US/step_1.mp3`
- `/bowline/es-MX/step_1.mp3`
- `/square-knot/en-US/step_2.mp3`

## 3. Supabase Database Schema Update

We need to link the static audio files to the knot instructions in the database.

```sql
-- Create the audio_narration table
CREATE TABLE knot_audio_narration (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    knot_id INTEGER REFERENCES knots(id) ON DELETE CASCADE,
    step_number INTEGER NOT NULL,
    language_code VARCHAR(10) NOT NULL DEFAULT 'en-US',
    voice_profile VARCHAR(50) NOT NULL, -- e.g., 'Marcus (American)', 'Elena (Spanish)'
    audio_url TEXT NOT NULL, -- The Supabase Storage CDN URL
    duration_seconds DECIMAL(5,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(knot_id, step_number, language_code)
);

-- Add index for fast lookups
CREATE INDEX idx_audio_lookup ON knot_audio_narration(knot_id, language_code);
```

## 4. Migration Script (Node.js)

This script automates the process of reading the knot steps, generating the audio via ElevenLabs, and uploading it to Supabase.

*Save this as `scripts/generate_audio.js` in the backend.*

```javascript
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = 'pNInz6obpgDQGcFmaJcg'; // Example Voice ID (e.g., Adam)

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function generateAndUploadAudio(knotSlug, stepNumber, text, languageCode = 'en-US') {
    try {
        console.log(`Generating audio for ${knotSlug} Step ${stepNumber}...`);

        // 1. Call ElevenLabs API
        const response = await axios({
            method: 'POST',
            url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            headers: {
                'Accept': 'audio/mpeg',
                'xi-api-key': ELEVENLABS_API_KEY,
                'Content-Type': 'application/json',
            },
            data: {
                text: text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: { stability: 0.5, similarity_boost: 0.75 }
            },
            responseType: 'arraybuffer'
        });

        const fileName = `step_${stepNumber}.mp3`;
        const filePath = `${knotSlug}/${languageCode}/${fileName}`;

        // 2. Upload to Supabase Storage
        console.log(`Uploading to Supabase: ${filePath}...`);
        const { data: uploadData, error: uploadError } = await supabase
            .storage
            .from('knot-audio')
            .upload(filePath, response.data, {
                contentType: 'audio/mpeg',
                upsert: true
            });

        if (uploadError) throw uploadError;

        // 3. Get Public URL
        const { data: publicUrlData } = supabase
            .storage
            .from('knot-audio')
            .getPublicUrl(filePath);

        console.log(`Success: ${publicUrlData.publicUrl}`);
        return publicUrlData.publicUrl;

    } catch (error) {
        console.error(`Failed to process ${knotSlug} Step ${stepNumber}:`, error.message);
        return null;
    }
}

// Example Usage
// generateAndUploadAudio('bowline', 1, "First, make a small loop in the standing part of the rope. This is the rabbit hole.");
```

## 5. Frontend Integration Update

Update `VoiceNarration.jsx` to fetch the Supabase URL instead of hitting the backend API.

```javascript
// Inside VoiceNarration.jsx
const playStepAudio = async (knotId, stepNumber, language = 'en-US') => {
    try {
        // Fetch URL from Supabase database
        const { data, error } = await supabase
            .from('knot_audio_narration')
            .select('audio_url')
            .eq('knot_id', knotId)
            .eq('step_number', stepNumber)
            .eq('language_code', language)
            .single();

        if (error) throw error;

        // Play the audio
        const audio = new Audio(data.audio_url);
        audio.play();
    } catch (err) {
        console.error("Audio playback failed:", err);
    }
};
```

## 6. Offline Support (Optional but Recommended)

For Trail Life camping scenarios without cell service:
1. When a user downloads a "Knot Pack" (e.g., Navigator Core Knots), use a Service Worker or the Cache API to pre-fetch the `.mp3` files from the Supabase URLs.
2. Store them locally on the device.
3. Modify `playStepAudio` to check the local cache before attempting to stream from Supabase.
