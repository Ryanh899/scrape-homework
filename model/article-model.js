//article model
const mongoose = require("./database");
const schema = {
    title: { type: mongoose.SchemaTypes.String, unique: [true, 'this article has already been added'], required: true },
    link: { type: mongoose.SchemaTypes.String, required: true },
    summary: { type: mongoose.SchemaTypes.String, required: true }, 
    comments: { type: mongoose.SchemaTypes.String }
};
const collectionName = "articles"; // Name of the collection of documents
const articleSchema = mongoose.Schema(schema);
const articles = mongoose.model(collectionName, articleSchema);
module.exports = articles; 