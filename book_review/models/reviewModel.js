'use strict';
const db = require('./conn');

class ReviewModel {
    constructor(id, car_id, review_comment, score) {
        this.id = id;
        this.car_id = car_id;
        this.review_comment = review_comment;
        this.score = score;
    };

    async getReviews() {
        try {
            const query = `
                SELECT * 
                FROM reviews
                WHERE car_id = ${this.car_id};
                `;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        }
    };

    async addReview () {
        try{
            const query = `
                INSERT INTO reviews (score, comment, car_id, user_id)
                Values (${this.score}, '${this.review_comment}', ${this.car_id}, ${this.user_id})`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        }
    };
};

module.exports = ReviewModel;