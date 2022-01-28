import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
    FIRST_MOUNTAIN_LOWER_Y_RANGE,
    SECOND_MOUNTAIN_MAX_HEIGHT,
    SECOND_MOUNTAIN_LOWER_Y_RANGE,
    MOUNTAIN_TONES,
} from '../constants';
import { makeArr } from '../utilities';

export function drawMountains(p5) {
    drawFirstMountainRange(p5);
    drawSecondMountainRange(p5);
}

function drawFirstMountainRange(p5) {
    drawMountainRange(
        p5,
        CANVAS_HALF_MAX_HEIGHT,
        FIRST_MOUNTAIN_LOWER_Y_RANGE,
        MOUNTAIN_TONES[1],
    );
}

function drawSecondMountainRange(p5) {
    drawMountainRange(
        p5,
        SECOND_MOUNTAIN_MAX_HEIGHT,
        SECOND_MOUNTAIN_LOWER_Y_RANGE,
        MOUNTAIN_TONES[0],
    );
}

function drawMountainRange(p5, maxHeight, minHeight, color) {
    const [r, g, b] = color;
    p5.fill(r, g, b);
    p5.noStroke();
    const xRanges = makeArr(0, CANVAS_MAX_WIDTH, Math.random() * (24 - 10) + 10);
    const coords = xRanges.map((x) => {
        return { x: x, y: Math.random() * (maxHeight - minHeight) + minHeight };
    });

    p5.beginShape();
    p5.vertex(0, CANVAS_MAX_HEIGHT);
    p5.curveVertex(0, maxHeight);

    coords.forEach((coord) => {
        p5.curveVertex(coord.x, coord.y);
    });

    p5.curveVertex(CANVAS_MAX_WIDTH, maxHeight);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}
