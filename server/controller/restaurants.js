const Restaurant = require('../models/restaurant');

module.exports = {
    home: function(req,res) {
        Restaurant.find({})
            .then(restaurants => res.json(restaurants))
            .catch(err => res.json(err))
    },
    view: function(req, res) {
        Restaurant.findOne({_id: req.params.id})
            .then(club => res.json(club))
            .catch(err => res.json(err))
    },
    create: function(req,res) {
        let restaurant = new Restaurant({
            name: req.body.name,
            cuisine: req.body.cuisine
        });

        restaurant.save()
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
    update: function(req,res) {
        Restaurant.findOneAndUpdate(
            {_id: req.params.id},
            { $set: { name: req.body.name, cuisine: req.body.cuisine } }, {runValidators: true})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err))
    },
    createReview: function(req,res) {
        // console.log(req.body);
        Restaurant.findOneAndUpdate({_id: req.params.id}, 
            { $push: {
                reviews: {
                    name: req.body.name,
                    description: req.body.description,
                    rating: req.body.rating
                }
            }
        }, {runValidators:true})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },
    delete: function(req,res) {
        Restaurant.deleteOne({_id: req.params.id})
            .then(Restaurant => res.json(Restaurant))
            .catch(err => res.json(err))
    }
}