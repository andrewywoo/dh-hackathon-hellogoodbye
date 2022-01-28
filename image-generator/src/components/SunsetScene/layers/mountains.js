import tinycolor from 'tinycolor2';

import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
    FIRST_MOUNTAIN_LOWER_Y_RANGE,
    SECOND_MOUNTAIN_MAX_HEIGHT,
    SECOND_MOUNTAIN_LOWER_Y_RANGE,
} from '../constants';
import { makeArr } from '../utilities';

export function drawMountains(p5, mountainColors) {
    drawFirstMountainRange(p5, mountainColors[0]);
    drawSecondMountainRange(p5, mountainColors[1]);
}

function drawFirstMountainRange(p5, mountainColor) {
    drawMountainRange(
        p5,
        CANVAS_HALF_MAX_HEIGHT,
        FIRST_MOUNTAIN_LOWER_Y_RANGE,
        mountainColor,
    );
}

function drawSecondMountainRange(p5, mountainColor) {
    drawMountainRange(
        p5,
        SECOND_MOUNTAIN_MAX_HEIGHT,
        SECOND_MOUNTAIN_LOWER_Y_RANGE,
        mountainColor,
    );
}

function drawMountainRange(p5, maxHeight, minHeight, color) {
    const { r, g, b } = color;
    p5.fill(r, g, b);

    const outline = tinycolor(color).brighten(10).toRgb();
    p5.stroke(outline.r, outline.g, outline.b, 255);
    p5.strokeWeight(5);

    const xRanges = makeArr(
        0,
        CANVAS_MAX_WIDTH,
        Math.random() * (15 - 7) + 7,
    );
    const coords = xRanges.map((x) => {
        return { x: x, y: Math.random() * (maxHeight - minHeight) + minHeight };
    });

    p5.beginShape();
    p5.vertex(-10, CANVAS_MAX_HEIGHT);
    p5.curveVertex(-10, maxHeight);

    coords.forEach((coord) => {
        p5.curveVertex(coord.x, coord.y);
    });

    p5.curveVertex(CANVAS_MAX_WIDTH + 10, maxHeight);
    p5.vertex(CANVAS_MAX_WIDTH + 10, CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}
