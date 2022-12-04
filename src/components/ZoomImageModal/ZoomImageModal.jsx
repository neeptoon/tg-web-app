import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import {useGesture} from '@use-gesture/react';
import {useState} from 'react';

import {useZoomImage} from '../../hooks/useZoomImage';

import classes from './ZoomImageModal.module.scss';

export const ZoomImageModal = () => {
    const [image, isModalOpen, setModalOpen, imageSize] = useZoomImage();
    const [crop, setCrop] = useState({x: 0, y: 0, scale: 1.5});
    const bind = useGesture({
        onDrag: ({offset: [dx, dy], target}) => {
            target.ondragstart = () => false;
            setCrop({...crop, x: dx, y: dy});
        },
    }, {
        eventOptions: {
            passive: false,
        }
    });

    if (!image) return null;


    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setCrop({scale: 1.5, x: 0, y: 0});
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box id="box" className={classes.box} sx={{
                    width: `${imageSize.width * 1.1 }px`,
                    height: `${imageSize.height * 1.1}px`
                }}>
                    <img
                        src={image}
                        className={classes.image}
                        {...bind()}
                        alt="изображение"
                        style={{
                            left: crop.x,
                            top: crop.y,
                            transform: 'scale(1.5)',
                            touchAction: 'none'
                        }}/>
                </Box>
            </Modal>
        </div>
    );
};
