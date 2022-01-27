import {
    CANVAS_MAX_HEIGHT,
    CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT,
    HORIZON_TONES,
} from '../constants';

const generateHorizon = (p5, colors) => {
    const [r, g, b] = colors[0];
    p5.fill(r, g, b, 200);

    const offset = 25;

    p5.beginShape();
    p5.vertex(0, CANVAS_MAX_HEIGHT);
    p5.vertex(0, CANVAS_HALF_MAX_HEIGHT - offset);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_HALF_MAX_HEIGHT - offset);
    p5.vertex(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
    p5.endShape(p5.CLOSE);
}

export const drawHorizon = (p5) => {
    generateHorizon(p5, HORIZON_TONES);
}
