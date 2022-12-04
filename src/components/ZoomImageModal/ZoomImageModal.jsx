import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import {useGesture} from '@use-gesture/react';
import {useState} from 'react';


import classes from './ZoomImageModal.module.scss';

export const ZoomImageModal = ({image, open, setModalOpen, imageSize}) => {
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
    return (
        <div>
            <Modal
                open={open}
                onClose={() => {
                    setModalOpen(false);
                    setCrop({...crop, x: 0, y: 0});
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
                            transform: `scale(${crop.scale})`,
                            touchAction: 'none'
                        }}/>
                </Box>
            </Modal>
        </div>
    );
};
