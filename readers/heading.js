const readWhile = require('./../read-while');

const isValidHeading = stream => stream.fastForward(7).split('# ').length > 1;

const getHeadingLevel = stream => readWhile(stream, currchar => currchar === '#').length;

module.exports = readHeading = stream => {

    if (!isValidHeading(stream)) {

        return;

    }

    const headingLevel = getHeadingLevel(stream) || 1;

    const heading = readWhile(
        stream,
        (currchar, nextChar) => nextChar !== '\n'
    );

    stream.next();

    return {
        type: 'heading',
        value: heading,
        level: headingLevel
    };

};