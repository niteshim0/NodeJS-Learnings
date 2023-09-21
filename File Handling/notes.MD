# File Handling
<li>File handling in Node.js is a common task that allows you to read from and write to files on your local file system.</li>
<li>Node.js provides built-in modules for file handling, primarily the fs (file system) module.</li>

## Various File Handling Operations
### Reading a File
  
  ```js
  fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
  ```
### Writing a File
 
 ```js
 const content = 'Hello, Node.js!';

try {
  fs.writeFileSync('output.txt', content);
  console.log('File has been written.');
} catch (err) {
  console.error(err);
 ```

 ### Appending to a File
  ```js
  const dataToAppend = 'This data will be appended to the file.\n';

// Append data to the file
fs.appendFile('file.txt', dataToAppend, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been appended to the file.');
});
  ```
### Deleting a File
 ```js
 fs.unlink('file.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been deleted.');
});
 ```

**Note:** 

- Always handle errors appropriately when performing file operations in Node.js. File operations can fail due to various reasons such as the file not existing, permissions issues, or other unexpected issues. Proper error handling ensures that your application can respond gracefully to errors and provide helpful feedback to users.

- It's good practice to use asynchronous operations, especially for I/O operations like file handling, in Node.js. Asynchronous operations allow your application to continue processing other tasks while waiting for file operations to complete, preventing the blocking of the event loop. This helps maintain the responsiveness and scalability of your Node.js application, particularly in scenarios where multiple users or clients are interacting with your system simultaneously.
