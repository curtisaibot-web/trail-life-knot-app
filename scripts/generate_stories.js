const fs = require('fs');
const r = require('../frontend/src/data/knotRegistry.js');
const knots = Object.values(r);

let sql = `-- ─────────────────────────────────────────────
-- Trail Knotz: Knot Stories Content
-- ─────────────────────────────────────────────
-- This script populates the \`story\` column in the \`knots\` table.

ALTER TABLE knots ADD COLUMN IF NOT EXISTS story TEXT;

`;

// A generic story generator based on tags and category
function generateStory(knot) {
    const category = knot.tags[0] || 'Utility';
    const difficulty = knot.difficulty;
    
    let story = `The ${knot.name} is a classic ${category.toLowerCase()} knot used by scouts and outdoorsmen. `;
    
    if (category === 'Binding') {
        story += `When securing gear or building structures, a solid binding knot is essential. This knot provides excellent tension and security. `;
    } else if (category === 'Loop') {
        story += `Creating a secure, fixed loop is one of the most important skills in ropework. This knot won't slip under load, making it highly reliable. `;
    } else if (category === 'Hitch') {
        story += `Hitches are designed to secure a rope to a post, ring, or another rope. This particular hitch is favored for its quick tying and strong grip. `;
    } else if (category === 'Bend') {
        story += `When you need to join two ropes together to make a longer line, this bend is the perfect choice. It holds well even when the ropes are pulled tight. `;
    } else if (category === 'Stopper') {
        story += `Stopper knots prevent a rope from slipping through a hole or pulley. This bulky knot does exactly that, ensuring your lines stay where they belong. `;
    } else if (category === 'Decorative') {
        story += `Not all knots are purely functional. This decorative knot showcases the artistry of traditional ropework and makes a beautiful lanyard or woggle. `;
    } else if (category === 'Lashing') {
        story += `Pioneering requires strong lashings to bind poles together. This lashing is a fundamental building block for camp structures. `;
    } else if (category === 'Splice') {
        story += `Splicing is the strongest way to join ropes or make loops, as it weaves the strands together. This splice retains almost all the rope's original strength. `;
    } else {
        story += `This knot is a versatile tool that every scout should master. `;
    }
    
    story += `Whether you are ${knot.scenarios && knot.scenarios[0] ? knot.scenarios[0].toLowerCase() : 'setting up camp'}, mastering the ${knot.name} will serve you well on the trail.`;
    
    // Escape single quotes for SQL
    return story.replace(/'/g, "''");
}

knots.forEach(knot => {
    sql += `-- ${knot.id}. ${knot.name}\n`;
    sql += `UPDATE knots SET story = \n'${generateStory(knot)}'\nWHERE name = '${knot.name.replace(/'/g, "''")}';\n\n`;
});

fs.writeFileSync('../backend/models/knot_stories_seed_full.sql', sql);
console.log('Generated stories for ' + knots.length + ' knots.');
