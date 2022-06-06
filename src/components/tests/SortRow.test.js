import React from 'react';
import renderer from 'react-test-renderer';
import * as ReactDomClient from 'react-dom/client';
import SortRow from '../SortRow';

const div = document.createElement("div");
const root = ReactDomClient.createRoot(div);

//make sure that the element gets created regarless of props
it("SortRow element renders", () => {
    root.render(<SortRow />)
})

//Compare with known good snapshot given same 'post' input
it("SortRow matches test snapshot", () => {
    const tree = renderer.create(<SortRow sort="post" />)
    expect(tree).toMatchSnapshot();
})