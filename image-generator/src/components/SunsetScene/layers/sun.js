import tinycolor from 'tinycolor2';

import {
    SUN_DIAMETER,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
} from '../constants';

export function drawSun(p5, color, metadata) {
    const sunXPos = Math.random() * (CANVAS_MAX_WIDTH - 0) + 0;
    const sunYPos = Math.random() * (CANVAS_HALF_MAX_HEIGHT - CANVAS_HALF_MAX_HEIGHT/2) + CANVAS_HALF_MAX_HEIGHT/2;

    const { r, g, b } = color;
    const sunColor = p5.color(r, g, b);

    metadata.sun = {color: tinycolor.random(color).toHexString()};

    p5.fill(sunColor);
    const outlineRgb = tinycolor(color).brighten(10).toRgb();
    p5.stroke(outlineRgb.r, outlineRgb.g, outlineRgb.b, 255);
    p5.strokeWeight(5);

    metadata.sun = {...metadata.sun, position: {x: sunXPos, y: sunYPos}};
    
    p5.circle(sunXPos, sunYPos, SUN_DIAMETER);
}
