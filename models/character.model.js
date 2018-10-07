const mongoose = require('mongoose');

const character = mongoose.Schema({
    name: String,
    race: String,
    class: String,
    strength: Number,
    dexterity:Number,
    constitution:Number,
    intelligence:Number,
    wisdom:Number,
    charisma:Number,

}, {
    timestamps: true
});

module.exports = mongoose.model('Character', character);

