import {BrowserRouter} from "react-router-dom";
import GlobalStyle, {Container, Layout} from "./styles/GlobalStyle";
import Header from "./components/Header";
import Routes from "./routes";
import {useEffect, useState} from "react";
import history from "./history";
import api from "./services/api";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUrl()

        async function getUrl() {
            let pathname = history.location.pathname;
            if (pathname !== '/') {
                const response = await api.get(`${pathname}`)
                const url = response.data.url
                if (!url.includes('http')) {
                    window.location.href = `http://${url}`
                } else {
                    window.location.href = url
                }
            } else {
                document.title = "URL Shortner";
            }

            setLoading(false)
        }
    }, [])

    return (
        <BrowserRouter>
            {
                loading ? null : (
                    history.location.pathname !== '/' ? null : (
                        <Layout>
                            <Header/>
                            <Container>
                                <Routes/>
                            </Container>
                        </Layout>
                    )
                )
            }
            <GlobalStyle/>
        </BrowserRouter>
    );
}

export default App;
