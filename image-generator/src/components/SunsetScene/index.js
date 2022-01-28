import React, { useState } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import tinycolor from 'tinycolor2';

import { drawMountains } from './layers/mountains';
import { drawSun } from './layers/sun';
import { drawLand } from './layers/land';
import { drawHorizon } from './layers/horizon';
import { drawStars } from './layers/stars';
import { CANVAS_MAX_HEIGHT, CANVAS_MAX_WIDTH } from './constants';
import { setGradient } from './utilities';

const SunsetScene = () => {
    const [doSave, setDoSave] = useState(false);

    const sketch = (p5) => {
        let canvas;
        p5.setup = () => {
            canvas = p5.createCanvas(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
            p5.noLoop();
        };

        p5.draw = () => {
            // Grab random color as base color
            let color = new tinycolor.random();

            // Sets complimentary color as background
            const { r, g, b } = color.complement().toRgb();
            p5.background(r, g, b);

            // Sets gradient on background
            const white = p5.color(255, 255, 255, 150);
            const black = p5.color(0, 25);
            setGradient(p5, 0, 0, CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT * 0.6, black, white, 'vertical');

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

        p5.updateWithProps = (props) => {
            if (props.doSave) {
                p5.save(canvas);
            }
        }
    };

    return (
        <>
            <button onClick={() => setDoSave(!doSave)}>Save Image</button>
            <ReactP5Wrapper sketch={sketch} doSave={doSave} />
        </>
    );
};

export default SunsetScene;
