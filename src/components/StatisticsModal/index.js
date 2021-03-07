import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Container, CustomInput, Layout, LoadingContainer, ResultContainer} from "./style";
import {X} from "react-feather";
import api from "../../services/api";
import {CircularProgress} from "@material-ui/core";

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

export default function ModalStatistics({open, handleClose}) {
    const classes = useStyles();
    const [numClicks, setNumClick] = useState(0);
    const [fullUrl, setFullUrl] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);

    async function getClicks() {
        if (url !== '') {
            setFinished(false)
            setLoading(true)
            const response = await api.get(`link/${url.replace('https://shortn.vercel.app/', '').replace('shortn.vercel.app/', '')}`);
            setNumClick(response.data.numClicks)
            setFullUrl(response.data.url)
            setLoading(false)
            setFinished(true)
        }
    }

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
                        <Container>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <h2>
                                    Link Stats
                                </h2>

                                <X onClick={handleClose}/>
                            </div>

                            <CustomInput>
                                <div>
                                    <p>
                                        Your Link
                                    </p>

                                    <div style={{display: "flex"}}>
                                        <input
                                            placeholder={"Shortnes Link"}
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        />
                                        <button onClick={() => getClicks()}>
                                            Check
                                        </button>
                                    </div>
                                </div>
                            </CustomInput>

                            {
                                loading ? (
                                    <LoadingContainer>
                                        <CircularProgress color={'primary'}/>
                                    </LoadingContainer>
                                ) : (
                                    finished ? (
                                        <ResultContainer>
                                            <div>
                                                <p>
                                                    Full URL
                                                </p>

                                                <a
                                                    href={fullUrl}
                                                    target={"_blank"}
                                                    rel="noreferrer"
                                                >
                                                    {fullUrl}
                                                </a>
                                            </div>

                                            <div>
                                                <p>
                                                    Clicks
                                                </p>

                                                <p>
                                                    {numClicks}
                                                </p>
                                            </div>
                                        </ResultContainer>
                                    ) : null
                                )
                            }
                        </Container>
                    </Layout>
                </Fade>
            </Modal>
        </div>
    );
}
