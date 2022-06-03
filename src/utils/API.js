import axios from 'axios';

function getEntries() {
    return axios.get("https://www.reddit.com/r/Funnypics.json");
};

const methods = {
    getEntries
}

export default methods;