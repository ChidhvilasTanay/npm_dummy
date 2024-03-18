const { readFile, writeFile } = require("fs");
console.log('start')
readFile('./content/first.txt','utf-8', (err, result)=>{
if(err){
    console.log(err)
    return 
}
const first = result
readFile('./content/second.txt','utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    const second = result
    writeFile('./content/subfolder/async_test.txt',
`here is the async-result: ${first}, ${second}`,
{flag: 'a'}, (err, result)=>{
    if(err){
        console.log(err)
    }
    console.log('done with the task')
}
)
  }
)
})
console.log('next')

