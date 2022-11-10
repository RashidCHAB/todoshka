import mongoose from "mongoose";
const newsSchema = mongoose.Schema ({
    title: String,
    subtitle: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    },
})

const News= mongoose.model('News', newsSchema)

export default News