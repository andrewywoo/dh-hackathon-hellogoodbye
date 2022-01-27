import {SUN_DIAMETER, MAX_WIDTH, HALF_MAX_HEIGHT} from '../constants';

export function drawSun(p5){
    const sunXPos = Math.random() * (MAX_WIDTH - 0) + 0;
    const sunYPos = Math.random() * (HALF_MAX_HEIGHT - 0) + 0;

    const [r,g,b] = [251,72,196];
    p5.fill(r,g,b);

    p5.circle(sunXPos, sunYPos, SUN_DIAMETER);
}