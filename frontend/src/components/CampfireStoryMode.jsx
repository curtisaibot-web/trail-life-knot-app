import React, { useState } from 'react';

const STORIES = [
    {
        id: 1, title: 'The Sailor\'s Lifeline', knotName: 'Bowline', readTime: '3 min', xpReward: 25,
        icon: '⛵',
        chapters: [
            { text: 'It was 1805, and the HMS Victory was cutting through the Atlantic. A young sailor named Thomas had just joined the crew. He was terrified of the towering masts and the endless sea.', image: null },
            { text: '"Boy!" the bosun shouted. "Tie a bowline around that barrel before it rolls overboard!" Thomas froze. He had never tied a bowline under pressure before.', image: null },
            { text: 'An old sailor named Ezra knelt beside him. "Listen, lad. The rabbit comes out of the hole, goes around the tree, and back down the hole." Thomas\'s hands moved. The rope held. The barrel was saved.', image: null },
            { text: 'From that day on, Thomas tied a bowline every morning before breakfast. By the time he became a captain, he could tie one behind his back, in the dark, in a storm. The bowline had saved his life more than once.', image: null },
            { text: 'The bowline is called the "King of Knots" for a reason. It has been used by sailors for over 500 years. It never slips, never jams, and can always be untied. Now it\'s your turn to master it.', image: null },
        ],
        quiz: { question: 'What is the bowline often called?', options: ['The Queen of Knots', 'The King of Knots', 'The Sailor\'s Friend', 'The Loop Master'], correct: 1 },
    },
    {
        id: 2, title: 'The Bridge That Held', knotName: 'Clove Hitch', readTime: '3 min', xpReward: 25,
        icon: '🌉',
        chapters: [
            { text: 'In 1944, a group of Army engineers needed to build a rope bridge across a river in Normandy. The enemy was close, and they had minutes, not hours.', image: null },
            { text: 'Sergeant Miller grabbed a coil of rope. "Clove hitches on every post!" he ordered. His men moved like a machine. Wrap, cross, wrap, tuck. Each hitch took three seconds.', image: null },
            { text: 'The bridge held. Thirty-two soldiers crossed in under four minutes. The clove hitch—simple, fast, and reliable—had done its job.', image: null },
            { text: 'The clove hitch is the workhorse of the knot world. It\'s used to start lashings, secure ropes to poles, and build everything from camp shelters to pioneering towers. It\'s not the strongest knot, but it\'s the fastest.', image: null },
        ],
        quiz: { question: 'What is the clove hitch best known for?', options: ['Being the strongest knot', 'Speed and versatility', 'Decorative use', 'Fishing'], correct: 1 },
    },
    {
        id: 3, title: 'The Tent That Survived', knotName: 'Taut-Line Hitch', readTime: '2 min', xpReward: 25,
        icon: '⛺',
        chapters: [
            { text: 'It was the first night of the Trail Life campout, and a storm was rolling in. The wind was picking up, and every tent in camp was flapping like a flag.', image: null },
            { text: 'But one tent stood firm. It belonged to Troop 117. Their patrol leader, Marcus, had taught every boy to use a taut-line hitch on their guy lines.', image: null },
            { text: 'While other troops scrambled to re-stake their tents, Troop 117 simply slid their hitches up the rope to tighten the tension. No re-tying needed. The tent didn\'t move an inch.', image: null },
            { text: 'The taut-line hitch is the only knot in your toolkit that lets you adjust tension without untying. It\'s the secret weapon of experienced campers. Master it, and you\'ll never lose a tent to the wind again.', image: null },
        ],
        quiz: { question: 'What makes the taut-line hitch special?', options: ['It\'s decorative', 'It can be adjusted without untying', 'It\'s the strongest knot', 'It works underwater'], correct: 1 },
    },
];

const CampfireStoryMode = ({ userId = 1 }) => {
    const [selectedStory, setSelectedStory] = useState(null);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [completedStories, setCompletedStories] = useState([]);

    const handleNextChapter = () => {
        if (currentChapter < selectedStory.chapters.length - 1) {
            setCurrentChapter(currentChapter + 1);
        } else {
            setShowQuiz(true);
        }
    };

    const handleQuizAnswer = (index) => {
        setQuizAnswer(index);
        if (index === selectedStory.quiz.correct) {
            setCompletedStories([...completedStories, selectedStory.id]);
        }
    };

    const handleBack = () => {
        setSelectedStory(null);
        setCurrentChapter(0);
        setShowQuiz(false);
        setQuizAnswer(null);
    };

    return (
        <div className="space-y-5">
            {/* Story List */}
            {!selectedStory && (
                <>
                    <div className="text-center bg-charcoal rounded-card p-6">
                        <span className="text-5xl block mb-2">🔥</span>
                        <h2 className="text-2xl font-display text-campfire-orange">Campfire Stories</h2>
                        <p className="text-sm font-body text-cream-white opacity-70 mt-1">Learn the history behind every knot</p>
                    </div>

                    <div className="space-y-3">
                        {STORIES.map(story => {
                            const isCompleted = completedStories.includes(story.id);
                            return (
                                <button
                                    key={story.id}
                                    onClick={() => setSelectedStory(story)}
                                    className="w-full bg-cream-white rounded-card shadow-knot-card p-4 text-left hover:shadow-card transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{story.icon}</span>
                                        <div className="flex-1">
                                            <p className="font-display text-forest-pine">{story.title}</p>
                                            <p className="text-xs font-body text-bark-gray">Knot: {story.knotName} | {story.readTime}</p>
                                        </div>
                                        <div className="text-right">
                                            {isCompleted ? (
                                                <span className="text-sage-green text-sm">✅</span>
                                            ) : (
                                                <span className="text-xs font-mono text-campfire-orange">+{story.xpReward} XP</span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </>
            )}

            {/* Story Reader */}
            {selectedStory && !showQuiz && (
                <div className="space-y-4">
                    {/* Ambient Header */}
                    <div className="bg-charcoal rounded-card p-5 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
                        <div className="relative z-10">
                            <span className="text-4xl block mb-2">{selectedStory.icon}</span>
                            <h3 className="text-xl font-display text-campfire-orange">{selectedStory.title}</h3>
                            <p className="text-xs font-mono text-cream-white opacity-50 mt-1">
                                Chapter {currentChapter + 1} of {selectedStory.chapters.length}
                            </p>
                        </div>
                    </div>

                    {/* Chapter Progress */}
                    <div className="flex gap-1">
                        {selectedStory.chapters.map((_, i) => (
                            <div key={i} className={`flex-1 h-1 rounded-full ${i <= currentChapter ? 'bg-campfire-orange' : 'bg-parchment'}`} />
                        ))}
                    </div>

                    {/* Story Text */}
                    <div className="bg-cream-white rounded-card shadow-card p-6">
                        <p className="text-base font-body text-charcoal leading-relaxed italic">
                            "{selectedStory.chapters[currentChapter].text}"
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                        <button onClick={handleBack} className="px-4 py-3 bg-parchment text-bark-gray font-body rounded-button text-sm">
                            Exit
                        </button>
                        {currentChapter > 0 && (
                            <button onClick={() => setCurrentChapter(currentChapter - 1)} className="px-4 py-3 bg-parchment text-forest-pine font-body rounded-button text-sm">
                                ◀ Back
                            </button>
                        )}
                        <button onClick={handleNextChapter} className="flex-1 bg-forest-pine text-cream-white font-display font-bold py-3 rounded-button shadow-button">
                            {currentChapter < selectedStory.chapters.length - 1 ? 'Continue ▶' : 'Take the Quiz'}
                        </button>
                    </div>
                </div>
            )}

            {/* Quiz */}
            {showQuiz && (
                <div className="bg-cream-white rounded-card shadow-card p-6 space-y-4 animate-slide-up">
                    <div className="text-center">
                        <span className="text-4xl block mb-2">🧠</span>
                        <h3 className="text-xl font-display text-forest-pine">Story Quiz</h3>
                    </div>
                    <p className="text-sm font-body text-charcoal text-center">{selectedStory.quiz.question}</p>
                    <div className="space-y-2">
                        {selectedStory.quiz.options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => handleQuizAnswer(i)}
                                disabled={quizAnswer !== null}
                                className={`w-full p-3 rounded-badge text-sm font-body text-left transition-all ${
                                    quizAnswer === null ? 'bg-parchment text-charcoal hover:bg-forest-pine hover:text-cream-white'
                                    : i === selectedStory.quiz.correct ? 'bg-sage-green text-cream-white'
                                    : quizAnswer === i ? 'bg-trail-red text-cream-white'
                                    : 'bg-parchment text-bark-gray opacity-50'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {quizAnswer !== null && (
                        <div className="text-center space-y-2">
                            <p className={`font-display ${quizAnswer === selectedStory.quiz.correct ? 'text-sage-green' : 'text-trail-red'}`}>
                                {quizAnswer === selectedStory.quiz.correct ? '🎉 Correct! +25 XP' : '❌ Not quite. Try reading the story again!'}
                            </p>
                            <button onClick={handleBack} className="bg-forest-pine text-cream-white font-display font-bold px-6 py-3 rounded-button shadow-button">
                                Back to Stories
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CampfireStoryMode;
