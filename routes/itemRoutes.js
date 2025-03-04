const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send("Item non trouvé");
    res.json(item);
  } catch (err) {
    res.status(400).send("ID invalide");
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("Données reçues :", req.body); // Debug pour voir les données reçues

    if (!req.body.name || !req.body.description) {
      return res
        .status(400)
        .json({ message: "Le champ name et description sont requis" });
    }

    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'item", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) return res.status(404).send("Item non trouvé");
    res.json(updatedItem);
  } catch (err) {
    res.status(400).send("ID invalide");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).send("Item non trouvé");
    res.json({ message: "Item supprimé avec succès" });
  } catch (err) {
    res.status(400).send("ID invalide");
  }
});

module.exports = router;
