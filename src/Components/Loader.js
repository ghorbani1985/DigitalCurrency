import React from 'react';

//Gif
import LoaderGif from '../assets/images/gif/loading.gif';

const Loader = () => {
    return (
        <div>
      <img src={ LoaderGif } alt="loading" />
        </div>
    );
};

export default Loader;