// IMPORTS
const mongoose = require('mongoose');

// DATABASE URL
const database_url = process.env.MONGODB_URI || "mongodb://localhost:27017/garagelib";

// CONNECTION BDD MONGODB
const db = async => {
    try {
        mongoose.connect(database_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }, () =>
        console.log(`Connection réussie à l'url de la base de donnée : ${database_url}`));
    } catch (error) {
        console.log(`Erreur de connection à la base de donnée ${database_url}`, error);
        process.exit(1);
    }
}

module.exports = db;