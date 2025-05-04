const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "4LJM5Y9qgKRtdLoT";
const DATABASE_NAME = 'exp-api';
const CONNECTION_URI = `mongodb+srv://database.sskxbrh.mongodb.net/?retryWrites=true&w=majority&appName=database`;



async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'Pret_05',
        pass: PASSWORD,
    });
}

main().then(()=>{
    console.log("mongodb connected");
}).catch(console.log);

