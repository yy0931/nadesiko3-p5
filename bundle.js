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

let outNako = ''
let outHTML = `\
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>`

for (const f of files) {
    const content = fs.readFileSync(f).toString()
    outNako += content + '\n'
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('///')) {
            const matches = /^●(（[^）]*）)?(.*?)(?:とは)?$/.exec(lines[i + 1])
            outHTML += `<li>${matches[1] || ''}<strong>${matches[2]}</strong><br>${lines[i].slice(3).trimLeft()}</li>\n`
        }
    }
}

outHTML += `</ul>
</body>
</html>`

fs.writeFileSync('index.nako3', outNako)
fs.writeFileSync('index.nako3.html', outHTML)
