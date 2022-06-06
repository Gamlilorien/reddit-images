import React, { useState } from 'react';
import './IconGroup.css';
import imageIcon from '../icons/image-solid.svg';
import linkIcon from '../icons/reddit-square-brands.svg';
import favIcon from '../icons/bookmark-regular.svg';
import favSelectedIcon from '../icons/bookmark-solid.svg';



const IconGroup = (props) => {
    const [isFav, updateFav] = useState(props.entry.isFavorite);
    const entry = props.entry;

    const toggleFavorite = () => {
      //let isFav = entry.isFavorite;
      if(isFav === true) {
        updateFav(false)
      } else {
        updateFav(true)
      }
      updateFavorite(entry.title)
    }

    const updateFavorite = (title) => {
      for(const obj of props.array) {
      if(obj.title === title) {
          let current = obj.isFavorite;
          if(current === true) {
              obj.isFavorite = false;
          } else {
              obj.isFavorite = true;
          } 
        }
      }
    //console.log(props.array)
    }

    return (
        <div className="row">
        <div className="col">
          {
            isFav ? (
              <img src={favSelectedIcon} alt="favorited" className="blue-icon" onClick={toggleFavorite} />
            ) : (
              <img src={favIcon} alt="click to favorite" className="blue-icon" onClick={toggleFavorite} />
            )
          }
          <span> | </span>
          <a href={entry.link} target="_blank" rel="noreferrer">
            <img src={linkIcon} alt={entry.title} className="blue-icon"  />
          </a>
          <span> | </span>
          <a href={entry.image} target="_blank" rel="noreferrer">
            <img src={imageIcon} alt="open full size" className="blue-icon"  />
          </a>
        </div>
      </div>
    )
}

export default IconGroup;