const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8', (err,data)=>{
// fs.readFile('./files/starter.txt', 'utf8', (err,data)=>{
    if(err) throw err;
    // console.log(data.toString())
    console.log(data)
})

console.log('Hello...')

fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet you.',(err)=>{

        if(err) throw err;
        console.log('Write complete');

        fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYeah...',(err)=>{

            if(err) throw err;
            console.log('Append complete complete');



            fs.rename(path.join(__dirname,'files','test.txt'), path.join(path.join(__dirname,'files','renamedReply.txt')),(err)=>{

                if(err) throw err;
                console.log('Rename complete')
            })
        })
    })





//exit on uncaught errors

process.on('uncaughtException', err=>{
    console.error(`There was an uncaught arror: ${err}`);
    process.exit(1)
})