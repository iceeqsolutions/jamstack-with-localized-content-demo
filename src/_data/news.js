require('dotenv').config();
const axios = require("axios");

module.exports = async function getData() {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=${process.env.API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}