import {useState} from 'react';

export const useZoomImage = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const allImages = Array.from(document.querySelectorAll('img'));

    allImages
        .forEach(img => img.addEventListener('click', () => {
            setCurrentImage(img.getAttribute('src'));
            setModalOpen(true);
            const box = document.querySelector('#box');

            if (box) {
                const zoomImg = box.querySelector('img');
                box.addEventListener('mousemove', (evt) => {
                    const x = evt.clientX - evt.target.offsetLeft;
                    const y = evt.clientY - evt.target.offsetTop;

                    zoomImg.style.transformOrigin = `${x}px ${y}px`;
                });

                box.addEventListener('mouseleave', () => {
                    zoomImg.style.transformOrigin = 'center';
                });
            }
        }));
    

    return [currentImage, isModalOpen, setModalOpen];
};