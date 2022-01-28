import tinycolor from 'tinycolor2';

import {
    SUN_DIAMETER,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
} from '../constants';

export function drawSun(p5, color, metadata) {
    const sunXPos = Math.random() * (CANVAS_MAX_WIDTH - 0) + 0;
    const sunYPos =
        Math.random() * (CANVAS_HALF_MAX_HEIGHT - CANVAS_HALF_MAX_HEIGHT / 2) +
        CANVAS_HALF_MAX_HEIGHT / 2;

    // set metadata
    metadata.sun = {
        color: tinycolor(color).toHexString(),
        position: { x: sunXPos, y: sunYPos },
    };

    const { r, g, b } = color;
    const sunColor = p5.color(r, g, b);

    p5.fill(sunColor);
    const outlineRgb = tinycolor(color).brighten(10).toRgb();
    p5.stroke(outlineRgb.r, outlineRgb.g, outlineRgb.b, 255);
    p5.strokeWeight(5);

    p5.circle(sunXPos, sunYPos, SUN_DIAMETER);

    return { sunXPos, sunYPos, color };
}
