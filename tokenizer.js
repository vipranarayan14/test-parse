const Streamer = require('./streamer');
const readWhile = require('./read-while');
const readHeading = require('./readers/heading')
const readParagraph = require('./readers/paragraph')

const isHeading = char => {

    return char === '#';

};

const isWhiteSpace = char => {

    return ' \t\n'.indexOf(char) >= 0;

};

const readNext = (stream, tokens) => {

    const char = stream.peek();

    readWhile(stream, currchar => isWhiteSpace(currchar));

    console.log(char, stream, tokens);
    

    if (isHeading(char)) {

        const heading = readHeading(stream);

        if(heading) {

            tokens.push(heading);

        }

        else return;

    }

    tokens.push(readParagraph(stream));

};

module.exports = tokenizer = str => {

    const tokens = [];

    const stream = new Streamer(str);

    while (!stream.eof()) {

        readNext(stream, tokens);

    }


    return tokens;

};