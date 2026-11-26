function repeat() {
    return "hellohellohello";
}

module.exports = repeat;

//Answer:
function repeat(str, count) {
    if (count < 0) {
        throw new Error("Count cannot be negative.");
    }

    return str.repeat(count);
}

module.exports = repeat;