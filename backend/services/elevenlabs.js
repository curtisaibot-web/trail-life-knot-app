const axios = require('axios');

// ElevenLabs API integration for generating multi-language knot instructions
// Note: In production, store the API key in .env (ELEVENLABS_API_KEY)
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY || 'mock_key_for_prototype';
const BASE_URL = 'https://api.elevenlabs.io/v1/text-to-speech';

// Voice IDs for different accents/languages (These are examples from ElevenLabs default library)
const VOICE_PROFILES = {
    'american_male': 'pNInz6obbfDQGcgMyIGC', // e.g., "Adam"
    'british_male': 'ErXwobaYiN019PkySvjV',  // e.g., "Antoni"
    'scottish_male': 'TxGEqn5rmIQihQCvXG0H', // e.g., "Josh"
    'spanish_female': 'ThT5KcBeYPX3keUQqHPh',// e.g., "Dorothy" (using multi-lingual model)
};

/**
 * Generates an MP3 audio buffer from text using ElevenLabs API
 * 
 * @param {string} text - The instruction text to narrate
 * @param {string} voiceProfile - Key from VOICE_PROFILES
 * @param {string} modelId - e.g., 'eleven_multilingual_v2' for multiple languages
 * @returns {Promise<Buffer>} - The MP3 audio data
 */
async function generateNarration(text, voiceProfile = 'american_male', modelId = 'eleven_multilingual_v2') {
    try {
        const voiceId = VOICE_PROFILES[voiceProfile] || VOICE_PROFILES['american_male'];
        const url = `${BASE_URL}/${voiceId}`;

        const response = await axios.post(
            url,
            {
                text: text,
                model_id: modelId,
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75,
                    style: 0.0,
                    use_speaker_boost: true
                }
            },
            {
                headers: {
                    'Accept': 'audio/mpeg',
                    'xi-api-key': ELEVENLABS_API_KEY,
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer' // Crucial for receiving binary audio data
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error generating narration from ElevenLabs:', error.message);
        if (error.response) {
            console.error(error.response.data.toString('utf8'));
        }
        throw new Error('Failed to generate audio');
    }
}

/**
 * Example usage for generating the Bowline instructions in multiple accents
 */
async function generateAllBowlineAudio() {
    const instructions = {
        en: "Make a loop, or the rabbit hole. The rabbit comes out of the hole, goes around the tree, and back down the hole.",
        es: "Haz un bucle, o la madriguera del conejo. El conejo sale de la madriguera, da la vuelta al árbol y vuelve a bajar a la madriguera."
    };

    // In a real build script, you would write these buffers to S3 or local disk
    // const americanAudio = await generateNarration(instructions.en, 'american_male');
    // const scottishAudio = await generateNarration(instructions.en, 'scottish_male');
    // const spanishAudio = await generateNarration(instructions.es, 'spanish_female');
    
    console.log("Mock: Audio files generated successfully.");
}

module.exports = {
    generateNarration,
    VOICE_PROFILES
};
