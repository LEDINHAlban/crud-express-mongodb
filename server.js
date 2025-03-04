// Import des modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

// Initialisation de l'application
const app = express();

// 👉 Assure-toi que express.json() est bien appliqué avant les routes !
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Permet aussi de gérer x-www-form-urlencoded
app.use(cors());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

// Route par défaut
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API CRUD Node.js avec Express et MongoDB");
});

// Routes
app.use("/items", itemRoutes);

// Démarrer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`)
);
