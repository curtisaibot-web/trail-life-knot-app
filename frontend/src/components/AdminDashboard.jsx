import React, { useState } from 'react';

const MOCK_PENDING_REVIEWS = [
    { id: 101, username: 'SamT', knotName: 'Bowline', submittedAt: '2 hours ago', aiConfidence: 0.92, mediaType: 'photo' },
    { id: 102, username: 'AlexM', knotName: 'Clove Hitch', submittedAt: '5 hours ago', aiConfidence: 0.67, mediaType: 'video' },
    { id: 103, username: 'JohnD', knotName: 'Square Knot', submittedAt: '1 day ago', aiConfidence: 0.45, mediaType: 'photo' },
];

const MOCK_TROOP_STATS = {
    totalMembers: 12,
    activeThisWeek: 8,
    knotsMastered: 34,
    avgStreak: 4.2,
    topScorer: 'CurtisA',
};

const AdminDashboard = ({ troopName = 'Troop 117', leaderId = 1 }) => {
    const [pendingReviews, setPendingReviews] = useState(MOCK_PENDING_REVIEWS);
    const [activeTab, setActiveTab] = useState('reviews'); // reviews | stats | members
    const [selectedReview, setSelectedReview] = useState(null);

    const handleApprove = (reviewId) => {
        setPendingReviews(prev => prev.filter(r => r.id !== reviewId));
        setSelectedReview(null);
        // POST /api/verification/:reviewId/approve
    };

    const handleReject = (reviewId, feedback) => {
        setPendingReviews(prev => prev.filter(r => r.id !== reviewId));
        setSelectedReview(null);
        // POST /api/verification/:reviewId/reject { feedback }
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="bg-forest-pine rounded-card p-5 text-center">
                <p className="text-xs font-mono text-cream-white opacity-70">Troop Leader Dashboard</p>
                <h2 className="text-2xl font-display text-cream-white mt-1">{troopName}</h2>
                <p className="text-xs font-body text-campfire-orange mt-1">{pendingReviews.length} reviews pending</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-parchment rounded-button p-1">
                {[
                    { key: 'reviews', label: '📋 Reviews', count: pendingReviews.length },
                    { key: 'stats', label: '📊 Stats' },
                    { key: 'members', label: '👥 Members' },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex-1 py-2 rounded-button text-xs font-body font-semibold transition-all ${
                            activeTab === tab.key ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'
                        }`}
                    >
                        {tab.label} {tab.count ? `(${tab.count})` : ''}
                    </button>
                ))}
            </div>

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
                <div className="space-y-3">
                    {pendingReviews.length === 0 ? (
                        <div className="text-center py-8 bg-cream-white rounded-card">
                            <p className="text-4xl mb-2">✅</p>
                            <p className="font-display text-forest-pine">All caught up!</p>
                            <p className="text-xs font-body text-bark-gray">No pending reviews.</p>
                        </div>
                    ) : (
                        pendingReviews.map(review => (
                            <div key={review.id} className="bg-cream-white rounded-card shadow-knot-card p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="font-display text-forest-pine text-base">{review.username}</p>
                                        <p className="text-xs font-body text-bark-gray">{review.submittedAt}</p>
                                    </div>
                                    <span className="text-xs font-mono bg-parchment px-2 py-1 rounded-chip">
                                        {review.mediaType === 'photo' ? '📸' : '🎥'} {review.knotName}
                                    </span>
                                </div>

                                {/* AI Confidence Bar */}
                                <div className="mb-3">
                                    <div className="flex justify-between text-xs font-mono text-bark-gray mb-1">
                                        <span>AI Confidence</span>
                                        <span className={review.aiConfidence >= 0.8 ? 'text-sage-green' : review.aiConfidence >= 0.6 ? 'text-campfire-orange' : 'text-trail-red'}>
                                            {Math.round(review.aiConfidence * 100)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-parchment rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all ${
                                                review.aiConfidence >= 0.8 ? 'bg-sage-green' : review.aiConfidence >= 0.6 ? 'bg-campfire-orange' : 'bg-trail-red'
                                            }`}
                                            style={{ width: `${review.aiConfidence * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleApprove(review.id)}
                                        className="flex-1 bg-sage-green text-cream-white font-display font-bold py-2 rounded-button text-sm"
                                    >
                                        ✅ Approve
                                    </button>
                                    <button
                                        onClick={() => setSelectedReview(review)}
                                        className="flex-1 bg-parchment text-bark-gray font-body font-semibold py-2 rounded-button text-sm border border-bark-gray border-opacity-30"
                                    >
                                        👁️ Review
                                    </button>
                                    <button
                                        onClick={() => handleReject(review.id, 'Please retie and resubmit.')}
                                        className="flex-1 bg-trail-red text-cream-white font-display font-bold py-2 rounded-button text-sm"
                                    >
                                        ❌ Reject
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Stats Tab */}
            {activeTab === 'stats' && (
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { label: 'Total Members', value: MOCK_TROOP_STATS.totalMembers, icon: '👥' },
                        { label: 'Active This Week', value: MOCK_TROOP_STATS.activeThisWeek, icon: '🟢' },
                        { label: 'Knots Mastered', value: MOCK_TROOP_STATS.knotsMastered, icon: '🪢' },
                        { label: 'Avg Streak', value: `${MOCK_TROOP_STATS.avgStreak} days`, icon: '🔥' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                            <span className="text-2xl">{stat.icon}</span>
                            <p className="text-2xl font-display text-forest-pine mt-1">{stat.value}</p>
                            <p className="text-xs font-body text-bark-gray">{stat.label}</p>
                        </div>
                    ))}
                    <div className="col-span-2 bg-campfire-gradient rounded-card p-4 text-center">
                        <p className="text-xs font-mono text-cream-white opacity-70">Top Scorer</p>
                        <p className="text-2xl font-display text-cream-white">🏆 {MOCK_TROOP_STATS.topScorer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
