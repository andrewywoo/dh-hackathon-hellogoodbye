// import { makeArr } from '../utilities';

import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    HORIZON_HEIGHT,
    SUN_DIAMETER,
    HORIZON_TONES,
    WAVE_TONES,
} from '../constants';

const generateHorizon = (p5, colors) => {
    const [r, g, b] = colors[0];
    p5.fill(r, g, b, 255);
    p5.noStroke();

    p5.beginShape();
    p5.vertex(0, CANVAS_MAX_HEIGHT);
    p5.vertex(0, HORIZON_HEIGHT);
    p5.vertex(CANVAS_MAX_WIDTH, HORIZON_HEIGHT);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}

const generateWaves = (p5, colors) => {
    const [r, g, b] = colors[0];
    p5.stroke(r, g, b, 20);
    p5.strokeWeight(2);
    const [r2, g2, b2] = colors[1];
    p5.fill(r2, g2, b2, 15);

    const wavesUpperBounds = HORIZON_HEIGHT;
    const VARIANCE_FACTOR = 0;
    const STEP = () => { return Math.floor(Math.random() * (36 - 20) + 20) };

    const lines = [];
    for(let i = wavesUpperBounds; i < CANVAS_MAX_HEIGHT - STEP(); i += STEP()){
        let line = [];
        for(let j = STEP(); j <= CANVAS_MAX_WIDTH - STEP(); j += STEP()){
            let distanceToCenter = Math.abs(j - CANVAS_MAX_WIDTH / 2);
            let variance = Math.max(CANVAS_MAX_WIDTH / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
            let random = Math.random() * variance / 50 * -1;
            let point = {x: j, y: i + random};
            line.push(point);
        }
        lines.push(line);
    }

    for(let i = 1; i < lines.length; i++){
        p5.beginShape();
        for(let j = 0; j < lines[i].length; j+=2){
            p5.curveVertex(lines[i][j].x, lines[i][j].y);
            p5.curveVertex(lines[i][j+1]?.x, lines[i][j+1]?.y)
        }
        p5.endShape();
    }
}

const generateReflection = (p5, sunXPos, sunYPos, sunColor) => {
    const reflectionWidth = SUN_DIAMETER;

    const sunLeftMiddleCoords = {
        x: sunXPos - (reflectionWidth / 2),
        y: sunYPos,
    };

    const sunRightMiddleCoords = {
        x: sunXPos + (reflectionWidth / 2),
        y: sunYPos,
    };

    // const yRanges = makeArr(
    //     HORIZON_HEIGHT,
    //     CANVAS_MAX_HEIGHT,
    //     Math.random() * (12 - 10) + 10,
    // );
    // console.log('yRanges: ', yRanges);
    // const coords = yRanges.map((y) => {
    //     return {
    //         x: Math.random() * (CANVAS_MAX_HEIGHT - HORIZON_HEIGHT) + HORIZON_HEIGHT,
    //         y: y
    //     };
    // });

    const color = p5.color(sunColor.r, sunColor.g, sunColor.b, 100);
    p5.fill(color);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(sunLeftMiddleCoords.x, HORIZON_HEIGHT);
    p5.vertex(sunRightMiddleCoords.x, HORIZON_HEIGHT);
    p5.vertex(sunRightMiddleCoords.x + (sunRightMiddleCoords.x / 2), CANVAS_MAX_HEIGHT);
    p5.vertex(sunLeftMiddleCoords.x - (sunLeftMiddleCoords.x / 2), CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}

export const drawHorizon = (p5, sunAttr) => {
    generateHorizon(p5, HORIZON_TONES);
    generateWaves(p5, WAVE_TONES);
    generateReflection(p5, sunAttr.sunXPos, sunAttr.sunYPos, sunAttr.color);
}
