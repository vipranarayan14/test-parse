module.exports = class Streamer {

    constructor(str) {

        this.str = str;
        this.pos = 0;
        this.line = 1;
        this.col = 0;

    }

    next() {

        let char = this.str.charAt(this.pos);

        (char === '\n') ? (
            this.line += 1,
            this.col = 0
        ) : (
            this.col += 1
        );

        this.pos += 1;

        return char;

    }

    peek(distance) {

        return this.str.charAt(distance ? this.pos + distance : this.pos);

    }

    fastForward(distance) {

        let str = '',
            i = 0;

        while (!this.eof() && i < distance) {

            str += this.peek(i);
            i += 1;

        }

        return str;

    }

    eof() {

        return this.peek() === '';

    }

    error(msg) {

        throw new Error(`${msg} (${this.line}:${this.col})`);

    }


}