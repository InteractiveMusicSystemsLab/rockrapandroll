const fs = require('fs')
const path = require('path')

const genresDir = path.join(__dirname, '..', 'public', 'genres')
const outputPath = path.join(__dirname, '..', 'public', 'data.json')

const master = {}

for (const genre of fs.readdirSync(genresDir)) {
  const mappingPath = path.join(genresDir, genre, 'mapping.json')
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'))
  master[genre] = mapping
}

fs.writeFileSync(outputPath, JSON.stringify(master, null, 2))
console.log(`Wrote ${outputPath}`)
