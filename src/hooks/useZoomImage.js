import {useCallback, useState} from 'react';

export const useZoomImage = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({width: 0, height: 0});

    const allImages = Array.from(document.querySelectorAll('img'));

    const clickHandler = useCallback((evt) => {
        const image = evt.target;
        const computedStyle = getComputedStyle(image);
        setCurrentImage(image.getAttribute('src'));
        setModalOpen(true);
        setImageSize({width: parseInt(computedStyle.width), height: parseInt(computedStyle.height)});
    }, []);


    allImages.forEach(img => img.addEventListener('click', clickHandler));
    

    return [currentImage, isModalOpen, setModalOpen, imageSize];
};