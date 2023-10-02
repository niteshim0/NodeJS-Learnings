# MongoDB

MongoDB is a popular **No-SQL (Not Only SQL)** document-based database management system. It is designed to store, retrieve, and manage data in a flexible and scalable way. MongoDB is known for its ability to handle large volumes of unstructured or semi-structured data and is particularly well-suited for applications that require dynamic, rapidly evolving schemas.

## Key Features

- **No-SQL Document Based Database:** MongoDB is a document-oriented database, which means it stores data in a flexible, semi-structured format known as BSON (Binary JSON). BSON allows for the storage of complex data structures, including nested arrays and documents, making it suitable for a wide range of data types.

- **Strong Support for Aggregation Pipes:** MongoDB provides a powerful aggregation framework that allows you to perform complex data transformations and analytics operations. This feature is particularly useful for performing aggregations, filtering, and data manipulation within the database itself.

- **Works on BSON Format:** BSON (Binary JSON) is the binary-encoded serialization format used by MongoDB to store and exchange data. BSON is efficient in terms of storage and transmission, and it is designed to be fast to parse and encode, making it well-suited for database operations.

- **Best for Node Applications:** MongoDB is a popular choice for developers working with Node.js, a JavaScript runtime environment. There are official MongoDB drivers and libraries available for Node.js, making it easy to integrate MongoDB into Node.js applications. This combination is often favored for building scalable and real-time web applications.

## Use Cases

MongoDB's flexibility, scalability, and support for modern development paradigms, such as microservices and cloud computing, have made it a popular choice for a wide range of applications, including:

- Web and mobile apps
- Content management systems
- E-commerce platforms
- Data analytics and reporting systems
- IoT (Internet of Things) applications

Please note that MongoDB's features and capabilities may have evolved since my last knowledge update in September 2021, so I recommend checking the official MongoDB documentation for the latest information and updates.

# Installation of MongoDB on Windows

You can install MongoDB on a Windows operating system by following these steps:

## 1) Install MongoDB using MSI Installer

### 1. Download the MSI Installer
- Visit the official MongoDB website [here](https://www.mongodb.com/try/download/community).
- Download the MongoDB Community Edition MSI installer for Windows.

### 2. Run the Installer
- Double-click the downloaded MSI installer file to initiate the installation process.

### 3. Select Setup Type
- Choose the "Complete" setup type, which installs both the MongoDB server and MongoDB Compass, a graphical user interface for MongoDB.

### 4. Choose Install Location
- Specify the installation directory for MongoDB. The default directory is usually `C:\Program Files\MongoDB\Server\<version>`.

### 5. Configure MongoDB as a Service
- Select the option to configure MongoDB as a Windows service, enabling it to start automatically when your computer boots up.

### 6. Complete the Installation
- Follow the on-screen instructions to complete the installation. MongoDB will be installed on your system.

### 7. Verify Installation
- Open a command prompt and run the following command to verify that MongoDB is installed and running: mongod --version

- You should see the MongoDB version displayed in the output.

## 2) Install Mongosh (MongoDB Shell)

Mongosh is the official MongoDB shell for interacting with MongoDB from the command line. To install Mongosh, follow these steps:

### 1. Download Mongosh
- Visit the official MongoDB website [here](https://www.mongodb.com/try/download/shell).
- Download the MongoDB Shell (Mongosh) for Windows.

### 2. Run the Installer
- Double-click the downloaded Mongosh installer file to start the installation process.

### 3. Complete the Installation
- Follow the on-screen instructions to complete the installation. Mongosh will be installed on your system.

### 4. Verify Installation
- Open a command prompt and run the following command to verify that Mongosh is installed: mongosh --version

### For getting started one can visit this article, it's great.
[Getting Started with MongoDB and Mongoose](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)


