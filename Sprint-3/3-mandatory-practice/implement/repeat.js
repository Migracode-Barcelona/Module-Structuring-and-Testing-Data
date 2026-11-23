function repeat(str, count) {
    if (count < 0) {
        throw new Error("Invalid count"); 
    }
    return str.repeat(count);
}

module.exports = repeat;