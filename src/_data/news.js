require('dotenv').config();
const countries = require('./countries.json');
const axios = require("axios");

async function getData(country) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&pageSize=5&apiKey=${process.env.API_KEY}`);
        return {
            "country": country,
            "articles": response.data.articles
        };
    } catch (error) {
        console.log(error);
    }
}


module.exports = async function() {
    let newsPromises = countries.map(getData);
    return Promise.all(newsPromises).then(newsObjects => { // return the promise to 11ty
        //console.log('newsObjects: ', newsObjects);
        return [].concat.apply([],newsObjects); // this returns data from the array to 11ty
    });
};
