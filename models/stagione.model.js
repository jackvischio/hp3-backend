const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stagione = new Schema({
    id: { type: Number, required: true },
    anno: { type: String, required: true }
}, { collection: 'stagioni' });

stagione.virtual("url").get(function () { return `/stagione/${this.anno}`; });

module.exports = mongoose.model("Stagione", stagione);