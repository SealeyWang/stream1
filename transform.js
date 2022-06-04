const { Transform } = require('stream')


const upperCaseTr = new Transform({
    // 小写转大写
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
    }
})

process.stdin.pipe(upperCaseTr).pipe(process.stdout)
