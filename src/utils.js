function pow(x, y) {
    if (isNaN(x) || isNaN(y)) return NaN;
    if (y === 0) return 1;
    let k = y > 0 ? y : -y;
    let res = x;
    for (let i = 1; i < k; i++) {
        res *= x;
    }
    return y > 0 ? res : +(1 / res);
}

module.exports = {pow};