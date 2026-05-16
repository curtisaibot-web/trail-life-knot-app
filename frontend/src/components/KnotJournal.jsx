import React, { useState } from 'react';

const MOCK_ENTRIES = [
    { id: 1, date: '2026-05-15', knotName: 'Bowline', rating: 4, notes: 'Got it on the third try! The rabbit-through-the-hole trick really helped.', timeSpent: 12, location: 'Backyard', mood: 'proud' },
    { id: 2, date: '2026-05-14', knotName: 'Clove Hitch', rating: 3, notes: 'Still struggling with the second wrap. Need more practice on a real pole.', timeSpent: 18, location: 'Living Room', mood: 'determined' },
    { id: 3, date: '2026-05-12', knotName: 'Square Knot', rating: 5, notes: 'Nailed it! Can do it with my eyes closed now.', timeSpent: 5, location: 'Troop Meeting', mood: 'confident' },
];

const MOODS = {
    proud: { emoji: '😊', label: 'Proud' },
    determined: { emoji: '💪', label: 'Determined' },
    confident: { emoji: '😎', label: 'Confident' },
    frustrated: { emoji: '😤', label: 'Frustrated' },
    curious: { emoji: '🤔', label: 'Curious' },
    excited: { emoji: '🤩', label: 'Excited' },
};

const KnotJournal = ({ userId = 1 }) => {
    const [entries, setEntries] = useState(MOCK_ENTRIES);
    const [showNewEntry, setShowNewEntry] = useState(false);
    const [newEntry, setNewEntry] = useState({ knotName: '', rating: 3, notes: '', location: '', mood: 'proud', timeSpent: 0 });
    const [filterKnot, setFilterKnot] = useState('all');

    const uniqueKnots = [...new Set(entries.map(e => e.knotName))];
    const filteredEntries = filterKnot === 'all' ? entries : entries.filter(e => e.knotName === filterKnot);

    const handleSaveEntry = () => {
        const entry = {
            ...newEntry,
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
        };
        setEntries([entry, ...entries]);
        setShowNewEntry(false);
        setNewEntry({ knotName: '', rating: 3, notes: '', location: '', mood: 'proud', timeSpent: 0 });
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-display text-forest-pine">Knot Journal</h2>
                    <p className="text-xs font-body text-bark-gray">{entries.length} entries logged</p>
                </div>
                <button
                    onClick={() => setShowNewEntry(true)}
                    className="bg-campfire-orange text-cream-white font-display font-bold px-4 py-2 rounded-button shadow-button text-sm"
                >
                    + New Entry
                </button>
            </div>

            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                <button onClick={() => setFilterKnot('all')} className={`flex-shrink-0 px-3 py-1.5 rounded-chip text-xs font-body ${filterKnot === 'all' ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                    All Knots
                </button>
                {uniqueKnots.map(knot => (
                    <button key={knot} onClick={() => setFilterKnot(knot)} className={`flex-shrink-0 px-3 py-1.5 rounded-chip text-xs font-body ${filterKnot === knot ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                        {knot}
                    </button>
                ))}
            </div>

            {/* Entries */}
            <div className="space-y-3">
                {filteredEntries.map(entry => (
                    <div key={entry.id} className="bg-cream-white rounded-card shadow-knot-card p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{MOODS[entry.mood]?.emoji}</span>
                                <div>
                                    <p className="font-display text-forest-pine">{entry.knotName}</p>
                                    <p className="text-xs font-mono text-bark-gray">{entry.date} | {entry.location}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <span key={star} className={`text-sm ${star <= entry.rating ? 'text-xp-gold' : 'text-bark-gray text-opacity-30'}`}>★</span>
                                    ))}
                                </div>
                                <p className="text-xs font-mono text-bark-gray">{entry.timeSpent} min</p>
                            </div>
                        </div>
                        <p className="text-sm font-body text-charcoal bg-parchment rounded-badge p-2 italic">"{entry.notes}"</p>
                    </div>
                ))}
            </div>

            {/* New Entry Modal */}
            {showNewEntry && (
                <div className="fixed inset-0 bg-charcoal bg-opacity-50 z-50 flex items-end justify-center" onClick={() => setShowNewEntry(false)}>
                    <div className="bg-cream-white rounded-t-card w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 space-y-4 animate-slide-up" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-display text-forest-pine">New Journal Entry</h3>

                        {/* Knot Name */}
                        <div>
                            <label className="text-xs font-display text-forest-pine">Which knot did you practice?</label>
                            <input
                                type="text" value={newEntry.knotName}
                                onChange={e => setNewEntry({ ...newEntry, knotName: e.target.value })}
                                placeholder="e.g., Bowline"
                                className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal border border-transparent focus:border-forest-pine outline-none"
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="text-xs font-display text-forest-pine">How did it go?</label>
                            <div className="flex gap-2 mt-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button key={star} onClick={() => setNewEntry({ ...newEntry, rating: star })} className="text-3xl">
                                        <span className={star <= newEntry.rating ? 'text-xp-gold' : 'text-bark-gray text-opacity-30'}>★</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mood */}
                        <div>
                            <label className="text-xs font-display text-forest-pine">How are you feeling?</label>
                            <div className="flex gap-2 mt-1 flex-wrap">
                                {Object.entries(MOODS).map(([key, mood]) => (
                                    <button key={key} onClick={() => setNewEntry({ ...newEntry, mood: key })}
                                        className={`px-3 py-1.5 rounded-chip text-xs font-body ${newEntry.mood === key ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                                        {mood.emoji} {mood.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="text-xs font-display text-forest-pine">Notes & Reflections</label>
                            <textarea
                                value={newEntry.notes}
                                onChange={e => setNewEntry({ ...newEntry, notes: e.target.value })}
                                placeholder="What worked? What was tricky? Any tips for next time?"
                                rows={3}
                                className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal border border-transparent focus:border-forest-pine outline-none resize-none"
                            />
                        </div>

                        {/* Time & Location */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-display text-forest-pine">Time Spent (min)</label>
                                <input type="number" value={newEntry.timeSpent} onChange={e => setNewEntry({ ...newEntry, timeSpent: parseInt(e.target.value) || 0 })}
                                    className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal outline-none" />
                            </div>
                            <div>
                                <label className="text-xs font-display text-forest-pine">Location</label>
                                <input type="text" value={newEntry.location} onChange={e => setNewEntry({ ...newEntry, location: e.target.value })} placeholder="e.g., Backyard"
                                    className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal outline-none" />
                            </div>
                        </div>

                        {/* Save */}
                        <button onClick={handleSaveEntry} className="w-full bg-forest-pine text-cream-white font-display font-bold py-3 rounded-button shadow-button">
                            Save Entry
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KnotJournal;
