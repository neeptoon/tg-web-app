import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Zoom from 'react-img-zoom';

import {getClientWidth} from '../../helpers';
const clientWidth = getClientWidth();

const MODAL_WIDTH = clientWidth * 0.8;
const MODAL_HEIGHT = MODAL_WIDTH * 1.2;

const style = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: MODAL_WIDTH,
    bgcolor: 'background.paper',
    boxShadow: 24,
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
                <Box sx={style}>
                    <Zoom
                        img={image}
                        zoomScale={2.5}
                        width={MODAL_WIDTH}
                        height={MODAL_HEIGHT}
                        transitionTime={0.3}
                    />
                </Box>
            </Modal>
        </div>
    );
};
