const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campionato = new Schema({
    id: { type: Number, required: true },
    nome: String,
    label: String,
    logo: String,
    serie: String
}, { collection: 'campionati' });

campionato.virtual("url").get(function () { return `/campionato/${this.id}`; });

module.exports = mongoose.model("Campionato", campionato);