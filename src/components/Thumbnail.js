import React from 'react';
import './Thumbnail.css';
import nsfw from '../images/nsfw.png';

const Thumbnail = (props) => {
    const entry = props.entry;
    let thumb = entry.thumb;
    //Reddit will pass a 'nsfw' link object if flagged as innapropriate
    if(thumb.length < 5) {
        thumb = nsfw
    }
    return (
        <a href={entry.image} target="_blank" rel="noreferrer"><img src={thumb} className="thumbnail" alt={entry.title} /></a>
    )
};

export default Thumbnail;