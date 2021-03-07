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
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 0,
        outline: 0,
        boxShadow: theme.shadows[5],
    },
}));

export default function ModalMenu({open, handleClose, openStats}) {
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
                                <button className={"btn first"} onClick={() => {
                                    handleClose()
                                    openStats()
                                }}>
                                    Statistics Link
                                </button>

                                <a className={"btn blue"}
                                   target={"_blank"}
                                   href={'https://www.paypal.com/donate?business=R75XW28TWYFAJ&currency_code=BRL'}
                                   rel="noreferrer"
                                >
                                    Donate Me
                                </a>

                                <button className={"btn red last"} onClick={handleClose}>
                                    Cancel
                                </button>
                            </ul>
                        </RepeaterContainer>
                    </Layout>
                </Fade>
            </Modal>
        </div>
    );
}
