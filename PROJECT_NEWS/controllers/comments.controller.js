import Comment from "../Models/Comment.model.js";

export default {
    addCom: (req, res) => {
        Comment.create({
            comAuthor: req.body.comAuthor,
            comText: req.body.comText,
            newsId: req.params.newsId
        }).then((Comment) => {
            res.json(Comment);
        })
    },
    getCom: (req, res) => {
        Comment.find({ newsId: req.params.newsId }).then((Comment) => {
            res.json(Comment)
        })
    },
    deleteCom: function (req, res) {
        Comment.findByIdAndDelete(req.params.comId).then(() => {
            res.json("Комментарий успешно удалён.")
        })
    }
}

//{
//     "comAuthor": "lorem123123",
//     "comText":"impsum dolor123123",
//     "newsId": "636ca9eadef2860e486c5ff6"
// }