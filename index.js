const fsPromises = require('fs').promises;
const path = require('path');
// const { fileURLToPath } = require('url');


const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'), data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));

        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'), path.join(__dirname,'files','promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'), 'utf8');
        console.log(newData);
    }
catch(err){
    console.log(err)
}
}
fileOps();




// fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet you.',(err)=>{

//         if(err) throw err;
//         console.log('Write complete');

//         fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYeah...',(err)=>{

//             if(err) throw err;
//             console.log('Append complete complete');



//             fs.rename(path.join(__dirname,'files','test.txt'), path.join(path.join(__dirname,'files','renamedReply.txt')),(err)=>{

//                 if(err) throw err;
//                 console.log('Rename complete')
//             })
//         })
//     })





//exit on uncaught errors

process.on('uncaughtException', err=>{
    console.error(`There was an uncaught arror: ${err}`);
    process.exit(1)
})