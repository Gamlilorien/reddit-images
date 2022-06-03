import React from 'react';
import './IconGroup.css';
import imageIcon from '../icons/image-solid.svg';
import linkIcon from '../icons/reddit-square-brands.svg';
import favIcon from '../icons/bookmark-regular.svg';
//import favSelectedIcon from './icons/bookmark-solid.svg';

const IconGroup = (props) => {
    //console.log(props)
    const entry = props.entry;

    return (
        <div className="row">
        <div className="col">
          <img src={favIcon} alt="favorite" className="blue-icon" />
          <span> | </span>
          <a href={entry.link} alt={entry.title} target="_blank" rel="noreferrer">
            <img src={linkIcon} alt="view post" className="blue-icon"  />
          </a>
          <span> | </span>
          <a href={entry.image} alt="open full size image in a new tab" target="_blank" rel="noreferrer">
            <img src={imageIcon} alt="open full size" className="blue-icon"  />
          </a>
        </div>
      </div>
    )
}

export default IconGroup;