import React, { useState } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

import { drawMountains } from './layers/mountains';
import { drawSun } from './layers/sun';
import { drawLand } from './layers/land';
import { drawHorizon } from './layers/horizon';
import { drawStars } from './layers/stars';
import { CANVAS_MAX_HEIGHT, CANVAS_MAX_WIDTH } from './constants';

const SunsetScene = () => {
    const [doSave, setDoSave] = useState(false);

    const sketch = (p5) => {
        let canvas;
        p5.setup = () => {
            canvas = p5.createCanvas(CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT);
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
