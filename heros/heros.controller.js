var Heros = require('./heros.dao');

exports.createHero = function (req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };

    Heros.create(hero, function (err, hero) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: "New hero has been created.",
            hero: hero
        });
    });

};

exports.getHeros = function (req, res, next) {

    Heros.get({}, function (err, heros) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            heros: heros
        });
    });

};

exports.getHero = function (req, res, next) {

    Heros.getByName({ name: req.params.name }, function (err, heros) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            heros: heros
        });
    });

};

exports.updateHero = function (req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };

    Heros.update({ _id: req.params.id }, hero, function (err, hero) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: "The Hero has been updated.",
            hero: hero
        });
    });
};

exports.deleteHero = function (req, res, next) {
    Heros.deleteMany({ _id: req.params.id }, function(err, hero) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: "The hero has been deleted.",
            hero: hero
        });
    });
};

// END OF HEROS CONTROLLER