'use strict';

const express = require('express'),
    router = express.Router(),
    carModel = require('../models/carModel');

router.get('/', async (req, res, next) => {
    const carsData = await carModel.getAll();

    res.render('template', {
        locals: {
            title: 'Selection of cars',
            carsData: carsData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/home'
        },
    });
});

module.exports = router;