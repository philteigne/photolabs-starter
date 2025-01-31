import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import closeSymbolDark from '../assets/closeSymbolDark.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ favPhotoList, photoData, selectedPhoto, dispatch, dark, modalDisplayState }) => {

  selectedPhoto = photoData.find(key => key.id === selectedPhoto.id);
  
  const similarPhotos = Object.values(selectedPhoto.similar_photos) || [];
  
  return (
    <div className={`photo-details-modal photo-details-modal-color${dark}`}>
    
      <button className={`photo-details-modal__close-button photo-details-modal__close-button-color${dark}`} onClick={() => dispatch({type: "CLOSE_PHOTO_MODAL"})}>
        <img src={dark ? closeSymbolDark : closeSymbol} alt="close symbol" />
      </button>

      <div>
        <div className="photo-details-modal__selected-photo">
          <PhotoFavButton id={selectedPhoto.id} dispatch={dispatch} favPhotoList={favPhotoList}/>
          <img
          src={selectedPhoto.urls.full}
          alt="Selected photograph"
          className="photo-details-modal__image"
          ></img> 
          <div className="photo-list__user-details">
            <img
            src={selectedPhoto.user.profile}
            alt="Photographer profile image"
            className="photo-list__user-profile"
            ></img>
            <div className={`photo-list__user-info${dark}`}>
              <p>{selectedPhoto.user.name}</p>
              <p className="photo-list__user-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
            </div>
          </div>
        </div>
        
        <h3 className={`photo-details-modal__header photo-details-modal__header-color${dark}`}>Similar Photos</h3>
        <div className="photo-details-modal__images">
          <PhotoList photoData={similarPhotos} favPhotoList={favPhotoList} dispatch={dispatch} dark={dark} modalDisplayState={modalDisplayState}/> 
        </div>
      </div>
        
    </div>
  )
};

export default PhotoDetailsModal;
