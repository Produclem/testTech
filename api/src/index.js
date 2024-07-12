const app = require("./app");
const dotenv = require('dotenv');
const dbConnect = require("./config/dbconfig");

const port = process.env.PORT || 3000;

dotenv.config()

app.get("/", (req, res) => {
    res.send("Hello World");
});
dbConnect().then(() => {
    app.listen(Number(port), '0.0.0.0', () => {
        console.log(`▪️Serveur en cours d'exécution sur localhost : ${port}`);
        console.log(`▪️Base de données connectée avec succès ✅`);
    })
}).catch((error) => {
    console.error('Impossible de démarrer le serveur:', error);
});
