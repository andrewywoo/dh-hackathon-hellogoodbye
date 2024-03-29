import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import tinycolor from 'tinycolor2';

import { drawMountains } from './layers/mountains';
import { drawSun } from './layers/sun';
import { drawLand } from './layers/land';
import { drawHorizon } from './layers/horizon';
import { drawStars } from './layers/stars';
import { CANVAS_MAX_HEIGHT, CANVAS_MAX_WIDTH, HORIZON_HEIGHT } from './constants';
import { setGradient } from './utilities';

import './style.scss';

const SunsetScene = ({setmdata}) => {
    const sketch = (p5) => {

        p5.setup = () => {
            p5.createCanvas(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
            p5.noLoop();
        };

        p5.draw = () => {
            const metadata = {};
            // Grab random color as base color
            let color = new tinycolor.random();

            // Sets complimentary color as background
            metadata.backgroundColor = color.complement().toHexString();
            const { r, g, b } = color.complement().toRgb();
            p5.background(r, g, b);

            // Sets gradient on background
            const white = p5.color(255, 255, 255, 150);
            const black = p5.color(0, 25);
            setGradient(p5, 0, 0, CANVAS_MAX_WIDTH, HORIZON_HEIGHT, black, white, 'vertical');

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

            drawStars(p5, metadata);
            const sunAttr = drawSun(p5, sunColor, metadata);
            drawHorizon(p5, sunAttr);
            drawMountains(p5, mountainColors, metadata);
            drawLand(p5, landColors, metadata);

            setmdata(metadata);
        };
    };

    return <ReactP5Wrapper sketch={sketch} />;
};

export default SunsetScene;
export const MemoizedSunsetScene = React.memo(SunsetScene);
