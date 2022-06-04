const { Duplex } = require('stream')


const inoutStream = new Duplex({
    // 写内容 打印
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    },

    // 读内容 给A~Z 字符
    read(size) {
        const char  = String.fromCharCode(this.currentCharCode ++);
        this.push(char)
        console.log(`push ${char}`)
        if(this.currentCharCode > 90 ) {// Z
            this.push(null)
        }
    }

})

inoutStream.currentCharCode= 65 // A

process.stdin.pipe(inoutStream).pipe(process.stdout)
