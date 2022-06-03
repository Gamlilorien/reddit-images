import React from 'react';
import './Thumbnail.css';

const Thumbnail = (props) => {
    const entry = props.entry;
    return (
        <a href={entry.image} alt="open full size image in a new tab" target="_blank" rel="noreferrer"><img src={entry.thumb} className="thumbnail" alt={entry.title} target="_blank" rel="noreferrer" /></a>
    )
};

export default Thumbnail;