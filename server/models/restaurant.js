const mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function (name) {
                return name.length >= 3;
            },
            message: props => `Name must be longer than 2 characters!`
        },
        required: [true, 'Name is required!']
    },
    description: {
        type: String,
        validate: {
            validator: function (desc) {
                return desc.length >= 3;
            },
            message: props => `Description must be longer than 2 characters!`
        },
        required: [true, 'Description is required!']
    },
    rating: {
        type: Number,
        validate: {
            validator: function (num) {
                return (num >= 1 && num <= 5);
            },
            message: props => `Rating must be between 1 and 5!`
        },
        required: [true, 'Rating is required!']
    }
}, {
    timestamps: true
})
  
mongoose.model('Review', ReviewSchema);

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        validate: {
            validator: function (name) {
                return name.length >= 3;
            },
            message: props => `Name must be longer than 2 characters!`
        },
        required: [true, 'Name is required!']
    },
    cuisine: {
        type: String,
        validate: {
            validator: function (cuisine) {
                return cuisine.length >= 3;
            },
            message: props => `Cuisine must be longer than 2 characters!`
        },
        required: [true, 'Cuisine is required!']
    },
    reviews: [ReviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);