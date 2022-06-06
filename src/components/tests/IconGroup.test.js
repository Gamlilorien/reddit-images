import React from 'react';
import renderer from 'react-test-renderer';
import * as ReactDomClient from 'react-dom/client'
import IconGroup from '../IconGroup';

//sample entry format
let entry = {
    title: "Here Ya Go",
    thumb: "https://b.thumbs.redditmedia.com/i32pGUEIzNKdU6EVifHXopFsIW6jEkZ-aTXdyp4-KkY.jpg",
    image: "https://i.redd.it/ecy7638h8n391.jpg",
    link: "https://www.reddit.com/r/Funnypics/comments/v4u7s7/here_ya_go/"
}
const div = document.createElement("div");
const root = ReactDomClient.createRoot(div);

//afterEach(cleanup);

//make sure that the element gets created regarless of props
it("IconGroup element renders", () => {
    root.render(<IconGroup />)
})


it("IconGroup matches test snapshot", () => {
    const tree = renderer.create(<IconGroup entry={entry} array={entry} />)
    expect(tree).toMatchSnapshot();
})