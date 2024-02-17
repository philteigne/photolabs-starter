import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {

  const {id, updateFavPhotoList} = props

  const {favPhotoList, updateToFavPhotoIds} = updateFavPhotoList

  const favPhotoState = favPhotoList.includes(id) ? true : false;

  return (
    <div className="photo-list__fav-icon" onClick={() => updateToFavPhotoIds(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className="photo-list__fav-icon-svg" selected={favPhotoState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;