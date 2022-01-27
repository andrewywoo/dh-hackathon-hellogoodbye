import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
    LAND_TONES,
} from '../constants';

const makeArr = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

const generateLands = (p5, maxHeight, minHeight, colors) => {
    const xRanges = makeArr(0, CANVAS_MAX_WIDTH, Math.random() * (12 - 10) + 10);
    const coords = xRanges.map((x) => {
        return {
            x: x,
            y: Math.random() * (maxHeight - minHeight) + minHeight,
        };
    });

    let offset = 0;

    colors.forEach((color) => {
        const [r,g,b] = color;
        p5.fill(r, g, b);

        p5.beginShape();
        p5.vertex(0, CANVAS_MAX_HEIGHT);
        p5.vertex(0, maxHeight);

        coords.forEach((coord) => {
            p5.vertex(coord.x, coord.y + offset);
        })

        p5.vertex(CANVAS_MAX_WIDTH, maxHeight / 2)
        p5.vertex(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
        p5.endShape(p5.CLOSE);
        offset+=20;
    });
}

export const drawLand = (p5) => {
    generateLands(p5, CANVAS_MAX_HEIGHT - 100, CANVAS_HALF_MAX_HEIGHT + 100, LAND_TONES);
}