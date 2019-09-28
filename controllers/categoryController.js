const Category = require("../models/Category");

exports.listAllCategorys = (req, res) => {
  Category.find({}, (err, Category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Category);
  });
};

exports.createNewCategory = (req, res) => {
  let payload= req.body;
  var newCategoryTemp={
     "categoryName":payload.categoryName  
  }
 

 var newCategory = new Category(newCategoryTemp); 

  newCategory.save((err, Category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(Category);
  });
};

exports.readCategory = (req, res) => {
  Category.find({ categoryId: req.params.categoryId }, (err, Category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Category);
  });
};

exports.updateCategory = (req, res) => {
  Category.findOneAndUpdate(
    { categoryId: req.params.categoryId },
    req.body,
    { new: true },
    (err, Category) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(Category);
    }
  );
};

exports.deleteCategory = (req, res) => {
  Category.remove({ categoryId: req.params.categoryId }, (err, Category) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Category successfully deleted" });
  });
};
