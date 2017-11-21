const fs = require('fs')
const matter = require('gray-matter')
const heml = require('heml')
const options = {
    validate: 'soft'
}
const SparkPost = require('sparkpost')
const spClient = new SparkPost()

const str = fs.readFileSync('./src/welcome.heml', 'utf8')
const parsed = matter(str)

console.log(parsed.data);

heml(parsed.content, options)
    .then(({ html, metadata, errors }) => {
        console.log(html, metadata, errors)
        // todo upsert template to SparkPost
    })