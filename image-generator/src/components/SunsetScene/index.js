import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import tinycolor from 'tinycolor2';

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
            // Grab random color as base color
            let color = new tinycolor.random();
            // Grabs split complementary colors
            let colors = color.splitcomplement();

            const sunColor = colors[0].toRgb();

            const mountainColors = [
                colors[1].toRgb(),
                colors[1].darken(20).toRgb(),
            ];

            const landColors = [
                colors[2].toRgb(),
                colors[2].darken(10).toRgb(),
                colors[2].darken(10).toRgb(),
                colors[2].darken(10).toRgb(),
                colors[2].darken(10).toRgb(),
                colors[2].darken(10).toRgb(),
            ];

            drawStars(p5);
            drawSun(p5, sunColor);
            drawHorizon(p5);
            drawMountains(p5, mountainColors);
            drawLand(p5, landColors);
        };
    };

    return <ReactP5Wrapper sketch={sketch} />;
};

export default SunsetScene;
