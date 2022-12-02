import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {getClientWidth} from '../../helpers';
const clientWidth = getClientWidth();

const MODAL_WIDTH = clientWidth * 0.8;
const MODAL_HEIGHT = MODAL_WIDTH * 1.2;

const style = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    padding: 0,
    outline: 'none',
    border: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: MODAL_WIDTH,
    height: MODAL_HEIGHT,
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'hidden',
};

export const ZoomImageModal = ({image, open, setModalOpen}) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id="box" sx={style}>
                    <img src={image} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', transformOrigin: 'center'}}/>

                </Box>
            </Modal>
        </div>
    );
};
