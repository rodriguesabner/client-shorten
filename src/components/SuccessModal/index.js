import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Layout, RepeaterContainer} from "./style";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)'
    },
    paper: {
        border: 0,
        outline: 0,
        boxShadow: theme.shadows[5],
    },
}));
export default function ModalSuccess({open, handleClose}) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Layout className={classes.paper}>
                        <RepeaterContainer>
                            <ul>
                                <div className={"title first"}>
                                    Success
                                </div>

                                <span className={"description"}>
                                    The link was successfully copied
                                </span>

                                <div className={"bottom-items"}>
                                    <button onClick={() => {
                                        handleClose()
                                    }}>
                                        Close
                                    </button>
                                </div>
                            </ul>
                        </RepeaterContainer>
                    </Layout>
                </Fade>
            </Modal>
        </div>
    );
}
