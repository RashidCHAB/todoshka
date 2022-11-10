import News from "../Models/News.model.js"
import Category from "../Models/Category.model.js";

export default {
    getNews: function(req, res) {
        News.find().populate('category').then((news) => {
            res.json(news);
          });
    },
    getNewsById: function(req, res) {
        News.findById(req.params.id).then((news) => {
            res.json(news)
        })
    },
    getNewsByCategory: function(req, res) {
        News.find({category: req.params.categoryID})
        .populate('category')
        .then((news) => {
            res.json(news)
        })
    },

    addNews: function(req, res) {
        News.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            category: req.body.category,
            }).then((a) => {
            res.json(a);
          });
    },
    deleteNews: function(req, res) {
        News.findByIdAndDelete(req.params.id).then(() => {
            res.json("Новость успешно удалена.")
        })
    },
    updateNews: function(req, res) {
        News.findByIdAndUpdate(req.params.id, {title: req.body.title,
        subtitle: req.body.subtitle}, {new: true}).then((news) => {
            res.json(news)
        })
    },
    
}