const {Readable} = require('stream')


const inStream = new Readable({
    // read 会被  process.stdout 调用的
    read(size) {
        const char  = String.fromCharCode(this.currentCharCode ++);
        this.push(char)
        console.log(`push ${char}`)
        if(this.currentCharCode > 90 ) {// Z
            this.push(null)
        }
    }
})

inStream.currentCharCode= 65 // A
inStream.pipe(process.stdout)
