const { Writable } = require('stream')


const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    }
})


// 用户输入流 通过管道连接到 写入流
process.stdin.pipe(outStream)
