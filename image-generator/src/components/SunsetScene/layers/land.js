import tinycolor from 'tinycolor2';
import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
} from '../constants';
import { makeArr } from '../utilities';

const generateLands = (p5, maxHeight, minHeight, colors, metadata) => {
    const xRanges = makeArr(
        0,
        CANVAS_MAX_WIDTH,
        Math.random() * (12 - 10) + 10,
    );
    const coords = xRanges.map((x) => {
        return {
            x: x,
            y: Math.random() * (maxHeight - minHeight) + minHeight,
        };
    });

    let offset = 0;
    let alpha = 50;

    colors.forEach((color) => {
        const {r, g, b} = color;
        p5.fill(r, g, b);
        p5.strokeWeight(3);
        p5.stroke(255, 255, 255, alpha);
        alpha = (alpha / 2);

        p5.beginShape();
        p5.vertex(-10, CANVAS_MAX_HEIGHT);
        p5.vertex(-10, maxHeight);

        coords.forEach((coord) => {
            p5.vertex(coord.x, coord.y + offset);
        });

        p5.vertex(CANVAS_MAX_WIDTH + 10, maxHeight / 2);
        p5.vertex(CANVAS_MAX_WIDTH + 10, CANVAS_MAX_HEIGHT);
        p5.endShape(p5.CLOSE);
        offset += 10;
    });

    metadata.lands = {baseColor: tinycolor(colors[0]).toHexString(), uniqueVertexCount: xRanges.length};
};

export const drawLand = (p5, landColors, metadata) => {
    generateLands(
        p5,
        CANVAS_MAX_HEIGHT - 75,
        CANVAS_HALF_MAX_HEIGHT + 175,
        landColors,
        metadata
    );
};
