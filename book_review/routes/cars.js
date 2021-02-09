const express = require('express'),
    router = express.Router(),
    carModel = require('../models/carModel');
    reviewModel = require('../models/reviewModel');

router.get('/', async (req, res, next) => {
    const carsData = await carModel.getAll();

    res.render('template', {
        locals: {
            title: 'List of Car Companies To Review',
            carsData: carsData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'home',
        },
    });
});

router.get('/:car_id?', async (req, res, next) => {
    const carId = req.params.car_id,
        Car = new carModel(carId),
        carsData = await Car.getCarData();
    const Reviews = new reviewModel(null, carId),
        reviewData = await Reviews.getReviews();

    res.render('template', {
        locals: {
            title: carsData.title,
            carsData,
            reviewData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/car-review'
        },
    });
});

module.exports = router;