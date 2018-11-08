// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate')

const { projectId } = require('./config/google')

// Instantiates a client
const translate = new Translate({
    projectId: projectId,
})

// The text to translate
const text = 'I am allergic to pork.'
// The target language
const target = 'ko'

// Translates some text into Korean
translate
    .translate(text, target)
    .then(results => {
        const translation = results[0]

        console.log(`Text: ${text}`)
        console.log(`Translation: ${translation}`)
    })
    .catch(err => {
        console.error('ERROR:', err)
    })