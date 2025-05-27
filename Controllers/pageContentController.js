const pageModel = require("../Models/pageContentModel");
const pageContent = {};

// קבלת כל התוכן
pageContent.getAll = async (req, res) => {
  try {
    const data = await pageModel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// יצירה או עדכון לפי pageName
pageContent.add = async (req, res) => {
  try {
    const contentData = req.body; // רק ה־content (לא כולל pageName)
    const pageName = "home";

    const updatedDoc = await pageModel.findOneAndUpdate(
      { pageName },
      { pageName, content: contentData },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedDoc);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// מחיקה לפי ID
pageContent.delete = async (req, res) => {
  try {
    await pageModel.findByIdAndDelete(req.params.id);
    const data = await pageModel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// pageContent.update = async (req, res) => {
//   try {
//     const pageName = "home";  // או תקבל את זה בפרמטר אם תרצי
//     const updatedDoc = await pageModel.findOneAndUpdate(
//       { pageName },
//       { content: req.body },
//       { new: true }
//     );

//     if (!updatedDoc) {
//       return res.status(404).json({ message: "Not Found" });
//     }

//     res.status(200).json(updatedDoc);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("<h1>Server Error</h1>");
//   }
// };
pageContent.update = async (req, res) => {
  try {
    const { pageName, ...content } = req.body;
    const updatedDoc = await pageModel.findOneAndUpdate(
      { pageName },
      { $set: { content } },
      { new: true }
    );
    if (!updatedDoc) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(updatedDoc);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
module.exports = pageContent;
