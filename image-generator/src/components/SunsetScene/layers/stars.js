import { CANVAS_MAX_WIDTH, HORIZON_HEIGHT, STAR_RADIUS, STAR_TONES, STAR_APPEARANCE_PERCENTAGE } from '../constants';
import { makeArr, isInPercentage } from '../utilities';

export function drawStars(p5, metadata) {
    let starCount = Math.floor(Math.random() * (150 - 50) + 50);
    // 5% chance of having no stars 
    if(isInPercentage(STAR_APPEARANCE_PERCENTAGE)){
        starCount = 0;
    }
    metadata.starCount = starCount;

    const xCoords = makeArr(0, CANVAS_MAX_WIDTH, starCount);
    const coords = xCoords.map((x) => {
        return { x: x, y: Math.random() * HORIZON_HEIGHT };
    });

    coords.forEach((coord) => {
        const randomIndex = Math.floor(Math.random() * 2);
        const starRotation = Math.floor(Math.random() * (5 - 1) + 1);

        const [inner, outer] = STAR_RADIUS[randomIndex];
        p5.push();
        p5.translate(coord.x, coord.y);
        p5.rotate(p5.PI / starRotation);
        star(p5, 0, 0, inner, outer, 5, STAR_TONES);
        p5.pop();
    });
}

function star(p5, x, y, radius1, radius2, npoints, colors) {
    let angle = p5.TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    const [r, g, b] = colors[0];
    const alpha = Math.floor(Math.random() * (150 - 20) + 20);
    p5.fill(r, g, b, alpha);
    p5.noStroke();

    p5.beginShape();
    for (let a = 0; a < p5.TWO_PI; a += angle) {
        let sx = x + p5.cos(a) * radius2;
        let sy = y + p5.sin(a) * radius2;
        p5.vertex(sx, sy);
        sx = x + p5.cos(a + halfAngle) * radius1;
        sy = y + p5.sin(a + halfAngle) * radius1;
        p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
}
