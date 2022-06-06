import React from 'react';
import './Thumbnail.css';

const Thumbnail = (props) => {
    const entry = props.entry;
    return (
        <a href={entry.image} target="_blank" rel="noreferrer"><img src={entry.thumb} className="thumbnail" alt={entry.title} /></a>
    )
};

export default Thumbnail;