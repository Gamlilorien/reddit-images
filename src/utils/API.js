import axios from 'axios';

function getEntries() {
    return axios.get("https://www.reddit.com/r/Funnypics.json");
};

function parseJSON(res) {
    let raw = res.data.data.children;
    let myArray = [];
    raw.map(entry =>
        myArray.push(
            {
                title: entry.data.title,
                image: entry.data.url,
                thumb: entry.data.thumbnail,
                link: "https://www.reddit.com" +entry.data.permalink
            }
        )
    )
    //console.log(myArray)
    return myArray;
}

const methods = {
    getEntries,
    parseJSON
}

export default methods;