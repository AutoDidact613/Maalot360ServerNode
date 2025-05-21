const contactModel = require("../Models/contactModel");
const contact = {};

contact.getAll = async (req, res) => {
  try {
    const data = await contactModel.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("<h1>Server Error</h1>");
  }
};

contact.getById = async (req, res) => {
  try {
    const data = await contactModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("<h1>Server Error</h1>");
  }
};

contact.add = async (req, res) => {
  try {
    await contactModel.create(req.body);
    const data = await contactModel.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("<h1>Server Error</h1>");
  }
};

contact.delete = async (req, res) => {
  try {
    await contactModel.findByIdAndDelete(req.params.id);
    const data = await contactModel.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("<h1>Server Error</h1>");
  }
};


contact.update = async (req, res) => {
  try {
    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // מחזיר את המסמך החדש
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(updatedContact); // מחזיר את המסמך המעודכן
  } catch (err) {
    console.error(err);
    res.status(500).send("<h1>Server Error</h1>");
  }
};

module.exports = contact;
