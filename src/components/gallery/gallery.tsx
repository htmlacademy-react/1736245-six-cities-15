import React from 'react';
import { MAX_GALLERY_SIZE } from '../../services/constants';

type TGalleryProps = {
  images: string[];
}

const Gallery = React.memo(({ images }: TGalleryProps): JSX.Element => {
  const imagesList: JSX.Element[] = [];
  if (images) {
    const imagesCount = images.length > MAX_GALLERY_SIZE ? MAX_GALLERY_SIZE : images.length;
    for (let i = 0; i < imagesCount; i++) {
      imagesList.push(
        <div className="offer__image-wrapper " key={images[i]}>
          <img className="offer__image" src={images[i]} key={images[i]} alt="Photo studio" />
        </div>
      );
    }
  }
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesList.length > 0 ? imagesList : <p>no photos</p>}
      </div>
    </div>
  );
});
Gallery.displayName = 'Gallery';
export default Gallery;
