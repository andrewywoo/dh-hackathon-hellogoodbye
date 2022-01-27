import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const Example = () => {

    const sketch = (p5) => {
        const MAX_HEIGHT = 600;
        const MAX_WIDTH = 600;
        // const step = 30;
        let finalSize = 3;
        let startSteps;
        let offset = 2;
        let tileStep = (MAX_HEIGHT - offset * 2) / 6;
        let startSize = tileStep;
        let directions = [-1, 0, 1];
        // const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
        const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
        // const MONOCHROME = new Array(10).fill(0).map((_, i) => [i*24, i*25, i*26]);
        const BACKGROUND_COLOR = [0, 32, 63];

        p5.setup = () => {
            p5.createCanvas(MAX_HEIGHT, MAX_WIDTH);
            p5.background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);
            p5.stroke(0, 32, 63);
            p5.noLoop();
            p5.strokeWeight(4);
        }

        const drawRect = (x, y, width, height, xMovement, yMovement, steps) => {
            let random_index = Math.floor(Math.random() * TONES_2.length);
            const [r, g, b] = TONES_2[random_index];
            p5.fill(r, g, b);
            p5.rect(x, y, width, height);

            if(steps >= 0) {
                let newSize = (startSize) * (steps / startSteps) + finalSize;
                let newX = x + (width - newSize) / 2
                let newY = y + (height - newSize) / 2
                newX = newX - ((x - newX) / (steps + 2)) * xMovement
                newY = newY - ((y - newY) / (steps + 2)) * yMovement
                drawRect(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
            }
        }

        p5.draw = () => {
            for( let x = offset; x < MAX_WIDTH - offset; x += tileStep) {
                for( let y = offset; y < MAX_HEIGHT - offset; y += tileStep) {
                    startSteps = 2 + Math.ceil(Math.random() * 3)
                    let xDirection = directions[Math.floor(Math.random() * directions.length)]
                    let yDirection = directions[Math.floor(Math.random() * directions.length)]
                    drawRect(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
                }
            }
        }
    }

    return (
        <ReactP5Wrapper sketch={sketch} />
    )
};

export default Example;
