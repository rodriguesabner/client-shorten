import React, {useState} from 'react';
import {Container, Layout} from "./style";
import {Menu, X} from "react-feather";
import ModalMenu from "../MenuModal";
import ModalStatistics from "../StatisticsModal";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openStats, setOpenStats] = useState(false);

    const handleOpenModalMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseModalMenu = () => {
        setOpenMenu(false);
    };

    const handleOpenModalStats = () => {
        setOpenStats(true);
    };

    const handleCloseModalStats = () => {
        setOpenStats(false);
    };

    return (
        <Layout>
            <ModalMenu open={openMenu} handleClose={handleCloseModalMenu} openStats={handleOpenModalStats}/>
            <ModalStatistics open={openStats} handleClose={handleCloseModalStats}/>

            <Container>
                <div>
                    <a className={"logo"} href={"/"}>
                        🔗 <b>Link</b>Shortner
                    </a>
                </div>

                <div>
                    <a target={"_blank"}
                       href={'https://www.paypal.com/donate?business=R75XW28TWYFAJ&currency_code=BRL'}
                       rel="noreferrer"
                       className={"btn btn1"}
                    >
                        Buy me a cup coffee 👊
                    </a>

                    {
                        openMenu ? (
                            <X/>
                        ) : (
                            <Menu onClick={handleOpenModalMenu}/>
                        )
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default Header;
