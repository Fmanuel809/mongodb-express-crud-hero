var mongoose = require('mongoose');
var herosSchema = require('./heros.model');

herosSchema.statics = {
    create: function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        console.log(query);
        this.find(query, cb)
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, udateData, cb) {
        this.findOneAndUpdate(query, {$set: udateData}, {new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }
};

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;