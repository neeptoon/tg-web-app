import {useState} from 'react';

export const useZoomImage = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const allImages = Array.from(document.querySelectorAll('img'));
    allImages
        .forEach(img => img.addEventListener('click', () => {
            setCurrentImage(img.getAttribute('src'));
            setModalOpen(true);
        }));

    return [currentImage, isModalOpen, setModalOpen];
};