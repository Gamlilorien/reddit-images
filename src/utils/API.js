import axios from 'axios';

const getEntries = () => {
    return axios.get("https://www.reddit.com/r/Funnypics.json");
};

const parseJSON = (res) => {
    let raw = res.data.data.children;
    return raw.map(entry =>
         (   {
                title: entry.data.title,
                image: entry.data.url,
                thumb: entry.data.thumbnail,
                created: entry.data.created_utc,
                isFavorite: false,
                link: "https://www.reddit.com" +entry.data.permalink
            })
    )
}

const methods = {
    getEntries,
    parseJSON
}

export default methods;