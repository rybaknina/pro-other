function pow(x, y) {
    if (isNaN(x) || isNaN(y)) return NaN;
    if (y === 0) return 1;
    let res = x;
    for (let i = 1; i < y; i++) {
        res *= x;
    }
    return res;
}

module.exports = {pow};