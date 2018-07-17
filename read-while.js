module.exports = readWhile = (stream, predicate) => {

    let str = '';

    while (!stream.eof() && predicate(stream.peek(), stream.peek(1))) {

        str += stream.next();

    }

    return str;

};