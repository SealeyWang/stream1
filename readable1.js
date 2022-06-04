const {Readable} = require('stream')


const inStream = new Readable()

inStream.push('abcdefghijklmn')
inStream.push('opqrstuvwxyz')

inStream.push(null)

// inStream.pipe(process.stdout)

inStream.on('data', (chunk) => {

    process.stdout.write(chunk)
    console.log('写数据了')
})
