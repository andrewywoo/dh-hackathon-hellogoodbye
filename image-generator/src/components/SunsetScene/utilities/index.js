export const makeArr = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

export const setGradient = (p5, x, y, w, h, c1, c2, axis) => {
    const HORIZONTAL = 'horizontal';
    const VERTICAL = 'vertical';

    p5.noFill();

    if (axis === VERTICAL) {
      // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = p5.map(i, y, y + h, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(x, i, x + w, i);
        }
    } else if (axis === HORIZONTAL) {
      // Left to right gradient
        for (let i = x; i <= x + w; i++) {
            let inter = p5.map(i, x, x + w, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(i, y, i, y + h);
        }
    }
}

/**
 * 
 * isInPercentage(10) => 
 * if randomNum is 23
 * returns false
 * if randomNum is 9
 * returns true
 * 
 * @param {num} percentToHit percentage you want to be in
 * @returns {boolean}
 */
export const isInPercentage = (percentToHit) => {
    const randomNum = Math.round(Math.random() * 99) + 1;
    return randomNum <= percentToHit; 
}