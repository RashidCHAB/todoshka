import Category from "../Models/Category.model.js";

export default {
    addCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        }).then((cat) => {
            res.json(cat);
          })
    },
    getCategory: (req, res) => {
        Category.find().then((cat) => {
            res.json(cat)
        })
    },
    deleteCategory: function(req, res) {
        Category.findByIdAndDelete(req.params.id).then(() => {
            res.json("Категория успешно удалена.")
        })
    }
}