export const makeArr = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

export const setGradient = (p5, x, y, w, h, c1, c2, axis) => {
    const Y_AXIS = 1;
    const X_AXIS = 2;

    p5.noFill();

    if (axis === Y_AXIS) {
      // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = p5.map(i, y, y + h, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(x, i, x + w, i);
        }
    } else if (axis === X_AXIS) {
      // Left to right gradient
        for (let i = x; i <= x + w; i++) {
            let inter = p5.map(i, x, x + w, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(i, y, i, y + h);
        }
    }
}
