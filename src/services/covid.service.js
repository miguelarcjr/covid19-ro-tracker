const axios = require('axios');
module.exports = {
    async getLasted() {
        return await axios.get("https://brasil.io/api/dataset/covid19/caso/data?format=json&is_last=True&state=RO");
    },

    async getAll() {
        return await axios.get("https://brasil.io/api/dataset/covid19/caso/data?format=json&is_last=True&state=RO");
    }
}