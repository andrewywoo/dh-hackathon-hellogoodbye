import {SUN_DIAMETER, CANVAS_MAX_WIDTH,
    CANVAS_HALF_MAX_HEIGHT} from '../constants';

export function drawSun(p5){
    const sunXPos = Math.random() * (CANVAS_MAX_WIDTH - 0) + 0;
    const sunYPos = Math.random() * (CANVAS_HALF_MAX_HEIGHT - 0) + 0;

    const [r,g,b] = [251,72,196];
    p5.fill(r,g,b);

    p5.circle(sunXPos, sunYPos, SUN_DIAMETER);
}
