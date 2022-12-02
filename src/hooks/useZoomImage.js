import {useState} from 'react';

export const useZoomImage = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const allImages = Array.from(document.querySelectorAll('img'));
    allImages
        .forEach(img => img.addEventListener('click', () => setCurrentImage(img.getAttribute('src'))));
    return [currentImage];
};