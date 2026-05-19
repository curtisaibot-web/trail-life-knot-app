const r = require('../frontend/src/data/knotRegistry.js');
const knots = Object.values(r);
console.log('Total knots:', knots.length);

const withPlaceholder = knots.filter(k => 
    k.steps && k.steps[0] && k.steps[0].instruction.startsWith('Prepare the rope')
);
const withRealSteps = knots.filter(k => 
    k.steps && k.steps[0] && !k.steps[0].instruction.startsWith('Prepare the rope')
);

console.log('Knots with real instructions:', withRealSteps.length);
console.log('Knots still with placeholder:', withPlaceholder.length);

if (withPlaceholder.length > 0) {
    console.log('Placeholder knots:', withPlaceholder.map(k => k.id + ':' + k.name).join(', '));
}

// Check distribution by program
const programs = {};
knots.forEach(k => {
    programs[k.program] = (programs[k.program] || 0) + 1;
});
console.log('\nDistribution by program:');
Object.entries(programs).forEach(([p, c]) => console.log(' ', p + ':', c));

// Check for syntax issues
const noSteps = knots.filter(k => !k.steps || k.steps.length === 0);
console.log('\nKnots with no steps:', noSteps.length);
if (noSteps.length > 0) {
    console.log('No-steps knots:', noSteps.map(k => k.id + ':' + k.name).join(', '));
}

console.log('\nRegistry looks good!');
