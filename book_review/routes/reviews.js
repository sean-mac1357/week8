const express = require('express'),
    router = express.Router(),
    reviewModel = require('../models/reviewModel');

router.post('/add', async (req, res) => {
    const{ car_id, review_comment, score } = req.body;
    console.log("ADDING A REVIEW", req.body);
    const Review = new reviewModel(null, car_id, review_comment, score);
    const response = await Review.addReview();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', (req, res) => {
    console.log('Deleting a review');
});

module.exports = router;