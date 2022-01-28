import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
    HORIZON_TONES,
    WAVE_TONES,
} from '../constants';

const offset = -10;

const generateHorizon = (p5, colors) => {
    const [r, g, b] = colors[0];
    p5.fill(r, g, b, 200);
    p5.noStroke();

    p5.beginShape();
    p5.vertex(0, CANVAS_MAX_HEIGHT);
    p5.vertex(0, CANVAS_HALF_MAX_HEIGHT - offset);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_HALF_MAX_HEIGHT - offset);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}

const generateWaves = (p5, colors) => {
    const [r, g, b] = colors[0];
    p5.stroke(r, g, b, 20);
    p5.strokeWeight(2);
    const [r2, g2, b2] = colors[1];
    p5.fill(r2, g2, b2, 15);

    const wavesUpperBounds = CANVAS_HALF_MAX_HEIGHT - offset;
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

export const drawHorizon = (p5) => {
    generateHorizon(p5, HORIZON_TONES);
    generateWaves(p5, WAVE_TONES);
}
