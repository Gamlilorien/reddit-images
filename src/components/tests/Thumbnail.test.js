import React from 'react';
import renderer from 'react-test-renderer';
import * as ReactDomClient from 'react-dom/client'
//import ReactDom from 'react-dom';
import Thumbnail from '../Thumbnail';

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
//Apparently ReactDom.render() is no longer supported so changing to createRoot method instead. See: https://github.com/reactwg/react-18/discussions/5
it("Thumbnail element renders", () => {
    root.render(<Thumbnail entry="" />)
})

//Now check if our src and alt attributes get the expected values (ie props)
//We can do this by using a snapshot. That way if the logic of the component changes it will throw an error.
it("Thumbnail wmatches test snapshot", () => {
    const tree = renderer.create(<Thumbnail entry={entry} />)
    expect(tree).toMatchSnapshot();
})