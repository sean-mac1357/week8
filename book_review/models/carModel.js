'use strict';
const db = require('./conn');

class CarModel {
    constructor(id, title, parent_company, country, emblem) {
        this.id = id;
        this.title = title;
        this.parent_company = parent_company;
        this.country = country;
        this.emblem = emblem;
    };

    static async getAll() {
        try {
            const response = await db.any(`
                SELECT *
                FROM cars;
            `);
            return response;
        } catch (err) {
            return err.message;
        }
    };

    async getCarData() {
        try {
            const query = `
                SELECT *
                FROM cars
                WHERE id = ${this.id}
                `;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    };

};

module.exports = CarModel;