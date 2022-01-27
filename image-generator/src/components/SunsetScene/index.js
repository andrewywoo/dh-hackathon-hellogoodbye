import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

import { drawMountains } from './layers/mountains';
import { MAX_HEIGHT, MAX_WIDTH } from './constants';

const SunsetScene = () => {
    const sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(MAX_WIDTH, MAX_HEIGHT);
            p5.background(0);
            p5.noLoop();
        };

        p5.draw = () => {
            drawMountains(p5);
        };
    };

    return <ReactP5Wrapper sketch={sketch} />;
};

export default SunsetScene;
