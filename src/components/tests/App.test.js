import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import App from '../../App';

const div = document.createElement("div");
const root = ReactDomClient.createRoot(div);

//make sure that the element gets created regarless of props
it("Header element renders", () => {
    root.render(<App />)
})