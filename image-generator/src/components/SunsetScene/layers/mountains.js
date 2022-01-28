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

export function drawMountains(p5, mountainColors, metadata) {
    drawFirstMountainRange(p5, mountainColors[0], metadata);
    drawSecondMountainRange(p5, mountainColors[1], metadata);
}

function drawFirstMountainRange(p5, mountainColor, metadata) {
    let metadataToGrab = {};
    drawMountainRange(
        p5,
        CANVAS_HALF_MAX_HEIGHT,
        FIRST_MOUNTAIN_LOWER_Y_RANGE,
        mountainColor,
        15,
        metadataToGrab
    );

    metadata.firstMountainRange = { ...metadataToGrab };
}

function drawSecondMountainRange(p5, mountainColor, metadata) {
    let metadataToGrab = {};

    drawMountainRange(
        p5,
        SECOND_MOUNTAIN_MAX_HEIGHT,
        SECOND_MOUNTAIN_LOWER_Y_RANGE,
        mountainColor,
        10,
        metadataToGrab
    );

    metadata.secondMountainRange = { ...metadataToGrab };
}

function drawMountainRange(p5, maxHeight, minHeight, color, maxPeaks, metadata) {
    const { r, g, b } = color;
    p5.fill(r, g, b);

    const outline = tinycolor(color).brighten(10).toRgb();
    p5.stroke(outline.r, outline.g, outline.b, 255);
    p5.strokeWeight(5);

    for(let i = 1; i <= 2; i+=1) {
        const xRanges = makeArr(
            0,
            CANVAS_MAX_WIDTH,
            Math.random() * (maxPeaks - Math.ceil(maxPeaks / 2)) + Math.ceil(maxPeaks / 2),
        );

        metadata[`range${i}`] = {color: tinycolor(color).toHexString(), uniqueVertexCount: xRanges.length};

        const coords = xRanges.map((x) => {
            return { x: x, y: (Math.random() * (maxHeight - minHeight) + minHeight) };
        });

        const offset = i * 10;

        p5.beginShape();
        p5.vertex(-10, CANVAS_MAX_HEIGHT + offset);
        p5.curveVertex(-10, maxHeight);

        coords.forEach((coord) => {
            p5.curveVertex(coord.x, coord.y);
        });

        p5.curveVertex(CANVAS_MAX_WIDTH + 10, maxHeight);
        p5.vertex(CANVAS_MAX_WIDTH + 10, CANVAS_MAX_HEIGHT + offset);
        p5.endShape(p5.CLOSE);
    }
}
