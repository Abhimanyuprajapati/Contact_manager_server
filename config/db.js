const mongoose=require('mongoose')
// Here you can use the database name as your need

const url = 'mongodb://localhost:27017/myContact';

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports=connectDB;



// mongodb+srv://admin:Admin12345678@cluster0.mtrmt7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0