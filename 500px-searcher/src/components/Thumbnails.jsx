import React from 'react';
import PropTypes from 'prop-types';

const Thumbnails = ( { photos }) => (
  <div>
    { photos.map(photo => (
      <div
        key={ photo.id }
        style={{
          float: 'left',
          marginRight: '10px',
          marginBottom: '10px'
        }}
      >
        <img src={ photo.image_url[0] } />
      </div>
      ))}
  </div>
);

Thumbnails.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Thumbnails;
