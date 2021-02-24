const fs = require('fs')

const files = [
    './src/index.nako3',
    './src/color/creating.nako3',
    './src/color/reading.nako3',
    './src/color/setting.nako3',
    './src/events/mouse.nako3',
    './src/shape/2d_primitives.nako3',
    './src/shape/attributes.nako3',
    './src/typography/attributes.nako3',
    './src/typography/loading_displaying.nako3',
    './src/environment.nako3',
    './src/structure.nako3',
]

let result = ''
for (const f of files) {
    result += fs.readFileSync(f).toString() + '\n'
}

fs.writeFileSync('index.nako3', result)
