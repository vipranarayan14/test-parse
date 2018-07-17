/*
== captureSyntaxDeclaration ==
[
    {
        marker: 'link'
        syntax: '![%%](%%)',
    },
    {
        marker: 'image',
        syntax: '[%%](%%){%%}'
    },
    {
        marker: 'section'
        syntax: '![%%]'
    }
]
== markerParser ==
{
    link: {

        start: '![',
        'mid#0': ')[',
        end: ')'

    } 
}
*/

const sampleStr = 'Hey! Rama, ![Sita](wiki://sita) has come.'
const sampleStr2 = `# Hello.

###Hello

## Hello
para
###### Hello`;

const tokenizer = require('./tokenizer');

console.log(tokenizer(sampleStr2));