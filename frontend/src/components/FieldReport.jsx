import React, { useState, useEffect } from 'react';

/**
 * FieldReport - Weekly Progress Email to Parents
 * 
 * Every Sunday, the app auto-generates a "Field Report" email sent to a
 * parent/guardian. Shows knots mastered, streak maintained, XP earned,
 * and badge progress percentage. Parents can see their scout's journey
 * without needing to install the app.
 * 
 * Backend route: /api/field-report/
 */

const FieldReport = ({ userId }) => {
  const [settings, setSettings] = useState({
    enabled: true,
    parentEmail: '',
    parentName: '',
    frequency: 'weekly', // 'weekly' | 'biweekly' | 'monthly'
    dayOfWeek: 'sunday',
    includeDetails: true,
    includeEncouragement: true,
    includePhotos: false,
  });
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [sendingTest, setSendingTest] = useState(false);
  const [testSent, setTestSent] = useState(false);
  const [reportHistory, setReportHistory] = useState([]);

  useEffect(() => {
    fetchSettings();
    fetchPreview();
    fetchHistory();
  }, [userId]);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`/api/field-report/settings/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
    } catch (error) {
      console.error('Failed to fetch field report settings:', error);
    }
  };

  const fetchPreview = async () => {
    try {
      const response = await fetch(`/api/field-report/preview/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setPreviewData(data);
      }
    } catch (error) {
      // Demo preview data
      setPreviewData({
        scoutName: 'Curtis',
        weekOf: 'May 11 - May 17, 2026',
        stats: {
          knotsMasteredThisWeek: 2,
          totalKnotsMastered: 8,
          totalKnotsAvailable: 15,
          currentStreak: 12,
          longestStreak: 14,
          xpEarnedThisWeek: 175,
          totalXp: 1450,
          practiceMinutes: 45,
          badgeProgress: 53,
        },
        knotsCompleted: [
          { name: 'Clove Hitch', date: 'May 14', badge: 'gold' },
          { name: 'Taut-Line Hitch', date: 'May 16', badge: 'scouts_honor' },
        ],
        nextKnots: ['Figure Eight', 'Sheet Bend'],
        encouragement: 'Curtis is on a 12-day streak! Encourage them to keep going — they\'re more than halfway to mastering all 15 core knots.',
      });
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch(`/api/field-report/history/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReportHistory(data.reports || []);
      }
    } catch (error) {
      setReportHistory([
        { id: 1, sentDate: '2026-05-11', recipientEmail: 'parent@example.com', opened: true },
        { id: 2, sentDate: '2026-05-04', recipientEmail: 'parent@example.com', opened: true },
        { id: 3, sentDate: '2026-04-27', recipientEmail: 'parent@example.com', opened: false },
      ]);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch(`/api/field-report/settings/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleSendTest = async () => {
    if (!settings.parentEmail) return;
    setSendingTest(true);
    try {
      await fetch(`/api/field-report/send-test/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: settings.parentEmail }),
      });
      setTestSent(true);
      setTimeout(() => setTestSent(false), 5000);
    } catch (error) {
      console.error('Failed to send test report:', error);
    } finally {
      setSendingTest(false);
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <h1 className="text-parchment font-bold text-2xl font-arvo">Field Report</h1>
        <p className="text-parchment/70 text-sm mt-1">
          Weekly progress emails for parents and guardians.
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Enable/Disable Toggle */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-charcoal">Field Reports</h3>
              <p className="text-charcoal/40 text-sm">
                Auto-send progress emails to a parent or guardian.
              </p>
            </div>
            <button
              onClick={() => setSettings((s) => ({ ...s, enabled: !s.enabled }))}
              className={`w-14 h-8 rounded-full transition-colors ${
                settings.enabled ? 'bg-forest-pine' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                  settings.enabled ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {settings.enabled && (
          <>
            {/* Parent Email */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-charcoal mb-3">Recipient</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-charcoal/50 text-xs mb-1 block">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    value={settings.parentName}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, parentName: e.target.value }))
                    }
                    placeholder="Mom, Dad, Guardian..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-pine/30"
                  />
                </div>
                <div>
                  <label className="text-charcoal/50 text-xs mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={settings.parentEmail}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, parentEmail: e.target.value }))
                    }
                    placeholder="parent@example.com"
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-pine/30 ${
                      settings.parentEmail && !isValidEmail(settings.parentEmail)
                        ? 'border-red-300'
                        : 'border-gray-200'
                    }`}
                  />
                  {settings.parentEmail && !isValidEmail(settings.parentEmail) && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Frequency */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-charcoal mb-3">Frequency</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'weekly', label: 'Weekly', desc: 'Every Sunday' },
                  { value: 'biweekly', label: 'Bi-Weekly', desc: 'Every other Sunday' },
                  { value: 'monthly', label: 'Monthly', desc: '1st of each month' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setSettings((s) => ({ ...s, frequency: option.value }))
                    }
                    className={`p-3 rounded-xl text-center transition-colors ${
                      settings.frequency === option.value
                        ? 'bg-forest-pine text-parchment'
                        : 'bg-gray-50 text-charcoal/60'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        settings.frequency === option.value
                          ? 'text-parchment/70'
                          : 'text-charcoal/30'
                      }`}
                    >
                      {option.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Report Options */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-charcoal mb-3">Report Content</h3>
              <div className="space-y-3">
                {[
                  {
                    key: 'includeDetails',
                    label: 'Detailed Breakdown',
                    desc: 'Include specific knots learned and practice time',
                  },
                  {
                    key: 'includeEncouragement',
                    label: 'Encouragement Note',
                    desc: 'Auto-generated motivational message for parents',
                  },
                  {
                    key: 'includePhotos',
                    label: 'Include Photos',
                    desc: 'Attach knot verification photos (if available)',
                  },
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() =>
                      setSettings((s) => ({
                        ...s,
                        [option.key]: !s[option.key],
                      }))
                    }
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                        settings[option.key]
                          ? 'bg-forest-pine text-white'
                          : 'border-2 border-gray-300'
                      }`}
                    >
                      {settings[option.key] && '✓'}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        {option.label}
                      </p>
                      <p className="text-charcoal/40 text-xs">{option.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            {previewData && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full p-4 flex items-center justify-between"
                >
                  <h3 className="font-bold text-charcoal">Email Preview</h3>
                  <span className="text-charcoal/40 text-sm">
                    {showPreview ? 'Hide' : 'Show'}
                  </span>
                </button>

                {showPreview && (
                  <div className="px-4 pb-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      {/* Email Header */}
                      <div className="border-b border-gray-200 pb-3 mb-3">
                        <p className="text-charcoal/40 text-xs">
                          From: Knot Mastery &lt;reports@knotmastery.app&gt;
                        </p>
                        <p className="text-charcoal/40 text-xs">
                          To: {settings.parentName || 'Parent'} &lt;{settings.parentEmail || 'parent@example.com'}&gt;
                        </p>
                        <p className="text-charcoal font-bold text-sm mt-1">
                          Subject: {previewData.scoutName}'s Weekly Knot Report — {previewData.weekOf}
                        </p>
                      </div>

                      {/* Email Body Preview */}
                      <div className="space-y-3">
                        <p className="text-charcoal text-sm">
                          Hi {settings.parentName || 'there'},
                        </p>
                        <p className="text-charcoal/70 text-sm">
                          Here's {previewData.scoutName}'s knot-tying progress for the week of {previewData.weekOf}:
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center">
                            <p className="text-forest-pine font-bold text-lg">
                              {previewData.stats.knotsMasteredThisWeek}
                            </p>
                            <p className="text-charcoal/40 text-xs">New Knots This Week</p>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <p className="text-campfire-orange font-bold text-lg">
                              {previewData.stats.currentStreak}
                            </p>
                            <p className="text-charcoal/40 text-xs">Day Streak</p>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <p className="text-earthy-gold font-bold text-lg">
                              {previewData.stats.xpEarnedThisWeek}
                            </p>
                            <p className="text-charcoal/40 text-xs">XP Earned</p>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <p className="text-blue-600 font-bold text-lg">
                              {previewData.stats.badgeProgress}%
                            </p>
                            <p className="text-charcoal/40 text-xs">Badge Progress</p>
                          </div>
                        </div>

                        {/* Knots Completed */}
                        {settings.includeDetails && previewData.knotsCompleted.length > 0 && (
                          <div>
                            <p className="text-charcoal font-bold text-xs mb-1">
                              Knots Completed This Week:
                            </p>
                            {previewData.knotsCompleted.map((knot, idx) => (
                              <p key={idx} className="text-charcoal/60 text-xs">
                                • {knot.name} ({knot.date}) —{' '}
                                {knot.badge === 'gold' ? '🥇 Leader Verified' : '🤝 Scout\'s Honor'}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Next Knots */}
                        {settings.includeDetails && previewData.nextKnots.length > 0 && (
                          <p className="text-charcoal/60 text-xs">
                            <span className="font-bold text-charcoal">Up Next:</span>{' '}
                            {previewData.nextKnots.join(', ')}
                          </p>
                        )}

                        {/* Encouragement */}
                        {settings.includeEncouragement && previewData.encouragement && (
                          <div className="bg-forest-pine/5 rounded-lg p-3">
                            <p className="text-forest-pine text-xs italic">
                              {previewData.encouragement}
                            </p>
                          </div>
                        )}

                        {/* Progress Bar */}
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-charcoal/40 text-xs">Overall Progress</p>
                            <p className="text-charcoal/40 text-xs">
                              {previewData.stats.totalKnotsMastered}/{previewData.stats.totalKnotsAvailable} knots
                            </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-forest-pine rounded-full h-2 transition-all"
                              style={{
                                width: `${(previewData.stats.totalKnotsMastered / previewData.stats.totalKnotsAvailable) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleSave}
                disabled={saving || !isValidEmail(settings.parentEmail)}
                className={`w-full font-bold py-4 rounded-full transition-colors ${
                  saving || !isValidEmail(settings.parentEmail)
                    ? 'bg-gray-200 text-gray-400'
                    : saved
                    ? 'bg-forest-pine text-parchment'
                    : 'bg-forest-pine text-parchment hover:bg-forest-pine/90'
                }`}
              >
                {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
              </button>

              <button
                onClick={handleSendTest}
                disabled={sendingTest || !isValidEmail(settings.parentEmail)}
                className={`w-full font-bold py-3 rounded-full transition-colors ${
                  sendingTest || !isValidEmail(settings.parentEmail)
                    ? 'bg-gray-100 text-gray-400'
                    : testSent
                    ? 'bg-campfire-orange/10 text-campfire-orange'
                    : 'bg-campfire-orange/10 text-campfire-orange hover:bg-campfire-orange/20'
                }`}
              >
                {sendingTest ? 'Sending...' : testSent ? 'Test Email Sent!' : 'Send Test Email'}
              </button>
            </div>

            {/* Report History */}
            {reportHistory.length > 0 && (
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-bold text-charcoal mb-3">Sent Reports</h3>
                <div className="space-y-2">
                  {reportHistory.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="text-charcoal text-sm">
                          {new Date(report.sentDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                        <p className="text-charcoal/30 text-xs">{report.recipientEmail}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          report.opened
                            ? 'bg-forest-pine/10 text-forest-pine'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {report.opened ? 'Opened' : 'Not opened'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FieldReport;
