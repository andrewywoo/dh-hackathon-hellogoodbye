import {
    MAX_HEIGHT,
    MAX_WIDTH,
    HALF_MAX_HEIGHT,
    FIRST_MOUNTAIN_LOWER_Y_RANGE,
    SECOND_MOUNTAIN_MAX_HEIGHT,
    SECOND_MOUNTAIN_LOWER_Y_RANGE,
    MOUNTAIN_TONES,
} from '../constants';

export function drawMountains(p5) {
    drawFirstMountainRange(p5);
    drawSecondMountainRange(p5);
}

function drawFirstMountainRange(p5) {
    drawMountainRange(
        p5,
        HALF_MAX_HEIGHT,
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
    const xRanges = makeArr(0, MAX_WIDTH, Math.random() * (24 - 10) + 10);
    const coords = xRanges.map((x) => {
        return { x: x, y: Math.random() * (maxHeight - minHeight) + minHeight };
    });

    p5.beginShape();
    p5.vertex(0, MAX_HEIGHT);
    p5.curveVertex(0, maxHeight);

    coords.forEach((coord) => {
        p5.curveVertex(coord.x, coord.y);
    });

    p5.curveVertex(MAX_WIDTH, maxHeight);
    p5.vertex(MAX_WIDTH, MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}

function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + step * i);
    }
    return arr;
}
