module.exports = readParagraph = stream => {

    console.log(stream);

    const paragraph = readWhile(stream, (currChar, nextChar) => nextChar !== '\n');

    if (paragraph) {

        return paragraph;

    }

    return;

}