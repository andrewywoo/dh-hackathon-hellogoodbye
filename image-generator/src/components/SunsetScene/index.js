import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

import { drawMountains } from './layers/mountains';
import { drawSun } from './layers/sun';
import { drawLand } from './layers/land';
import { drawHorizon } from './layers/horizon';
import { drawStars } from './layers/stars';
import { CANVAS_MAX_HEIGHT, CANVAS_MAX_WIDTH } from './constants';

const SunsetScene = () => {
    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
            p5.background(0);
            p5.noLoop();
        };

        p5.draw = () => {
            drawStars(p5);
            drawSun(p5);
            drawHorizon(p5);
            drawMountains(p5);
            drawLand(p5);
        };
    };

    return <ReactP5Wrapper sketch={sketch} />;
};

export default SunsetScene;
