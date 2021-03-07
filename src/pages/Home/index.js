import React, {useRef, useState} from 'react';
import {Container, CustomImage, CustomLink, InputDiv, Layout, ShowResult} from "./style";
import Image1 from '../../assets/astronaut.png'
import api from "../../services/api";
import {Clipboard} from "react-feather";
import ModalSuccess from "../../components/SuccessModal";
import BackdropComponent from "../../components/BackdropComponent";

const HomePage = () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [url, setUrl] = useState('');
    const [customUrl, setCustomUrl] = useState('');
    const [showCustomDisplay, setShowCustomDisplay] = useState(false);
    const linkRef = useRef(null);
    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleOpenModalSucces = () => {
        setOpenSuccess(true);
    };

    const handleCloseModalSucces = () => {
        setOpenSuccess(false);
    };


    const handleClose = () => {
        setOpenBackdrop(false);
    };

    const handleToggle = () => {
        setOpenBackdrop(!openBackdrop);
    };

    function validURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    async function shortLink(e) {
        e.preventDefault()

        if (url === '') {
        } else if (!validURL(url)) {
        } else {
            handleToggle()

            const params = new FormData()
            params.append('fullurl', url)
            const response = await api.post('shortUrls', params)
            setCustomUrl(``)
            setShowCustomDisplay(false)

            setTimeout(() => {
                handleClose()
                setCustomUrl(`http://localhost:3000/${response.data.short}`)
                setShowCustomDisplay(true)
            }, 1000)
        }
    }

    function copyToClip(e) {
        e.preventDefault()

        window.navigator.clipboard.writeText(linkRef.current.getAttribute("href")).then(() => {
            handleOpenModalSucces()
        }, () => {

        })
    }

    return (
        <Layout>
            <ModalSuccess open={openSuccess} handleClose={handleCloseModalSucces}/>
            <BackdropComponent open={openBackdrop}/>

            <Container>
                <CustomImage draggable={false} src={Image1} alt={"Test"}/>

                <div className={"main"}>
                    <h1>
                        Shorten Any Links
                    </h1>

                    <p>
                        Build and protect your brand using powerful and recognizable short links. <b>It's free
                        forever.</b>
                    </p>

                    <form onSubmit={(e) => shortLink(e)}>
                        <InputDiv>
                            <input placeholder={"Type or Paste your link"} value={url}
                                   onChange={(e) => setUrl((e.target.value))}/>
                            <button type={"submit"}>
                                Shorten
                            </button>
                        </InputDiv>
                    </form>


                    {
                        !showCustomDisplay ? null : (
                            <ShowResult>
                                <h2>
                                    Copy and Paste
                                </h2>

                                <div>
                                    <CustomLink target={"_blank"} ref={linkRef} href={customUrl}>
                                        {customUrl}
                                    </CustomLink>

                                    <Clipboard onClick={(e) => copyToClip(e)}/>
                                </div>
                            </ShowResult>
                        )
                    }
                </div>

            </Container>
        </Layout>
    );
};

export default HomePage;
