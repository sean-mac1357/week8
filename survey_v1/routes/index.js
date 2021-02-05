
'use strict';

const express = require('express'),
    router = express.Router(),
    surveyModel = require('../models/surveyModel');

router.get('/', async (req, res) => {
    const surveyData = await surveyModel.getAll(),
        statusData = await surveyModel.getRankings();

    console.log("survey Data: ", surveyData);
    console.log("status Data: ", statusData);
    res.render('template', {
        locals: {
            title: "Rankings of Languages",
            data: surveyData,
            statusData
        },
        partials: {
            body: "partials/home"
        }
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    for (let key in req.body) {
        await surveyModel.updateEntry(key, req.body[key]);
    }
    res.redirect('/');
});

module.exports = router;