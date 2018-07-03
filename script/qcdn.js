const file = './dist/sprite-extend-shapes.js'
const fs = require('fs'),
  path = require('path')

try {
  const qcdn = require('@q/qcdn')
  return qcdn.upload(file, {
    https: true,
    keepName: true,
  }).then((res) => {
    console.log('file uploaded, CDN URL: %s', res[file])
    let readmeFile = path.resolve(__dirname, '..', 'README.md')
    let content = fs.readFileSync(readmeFile, 'utf-8')
    content = content.replace(/script src="(.*)"/igm, `script src="${res[file]}"`)
    fs.writeFileSync(readmeFile, content)
  })
} catch (ex) {
  return Promise.reject(new Error('no cdn uploader specified!'))
}