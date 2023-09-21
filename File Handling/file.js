const fs = require('fs');
//Every file operations can be done synchronously as well as asynchronously
//Writing to a file 
const content = "Writing on a file";
try{
  fs.writeFileSync("./text.txt",content);
  console.log('File has been written');
}catch(err){
  console.log(err);
}
//Reading from a file
try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
//Appending to a file // It can be helpful for maintaining server logs
const dataToAppend = 'This data will be appended to the file.\n';
fs.appendFile('text.txt', dataToAppend, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been appended to the file.');
});
//Deleting a file
// fs.unlink('text.txt',(err)=>{
//   if(err){
//     console.log(err);
//     return ;
//   }
//  console.log('File has been deleted');
// });