import React from 'react';
import renderer from 'react-test-renderer';
import * as ReactDomClient from 'react-dom/client'
import EntryList from '../EntryList';

//sample entry format
let entry = [
    {
        title: "Here Ya Go",
        thumb: "https://b.thumbs.redditmedia.com/i32pGUEIzNKdU6EVifHXopFsIW6jEkZ-aTXdyp4-KkY.jpg",
        image: "https://i.redd.it/ecy7638h8n391.jpg",
        link: "https://www.reddit.com/r/Funnypics/comments/v4u7s7/here_ya_go/",
        created: 12344
    },
    {
        title: "Test entry #2",
        thumb: "https://b.thumbs.redditmedia.com/i32pGUEIzNKdU6EVifHXopFsIW6jEkZ-aTXdyp4-KkY.jpg",
        image: "https://i.redd.it/ecy7638h8n391.jpg",
        link: "https://www.reddit.com/r/Funnypics/comments/v4u7s7/here_ya_go/",
        created: 155234
    }
]
const div = document.createElement("div");
const root = ReactDomClient.createRoot(div);

//afterEach(cleanup);

//make sure that the element gets created regarless of props
it("IconGroup element renders", () => {
    root.render(<EntryList />)
})


it("IconGroup matches test snapshot", () => {
    const tree = renderer.create(<EntryList entries={entry} />)
    expect(tree).toMatchSnapshot();
})