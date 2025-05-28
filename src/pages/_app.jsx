import '../styles/index.css';
import '../styles/globals.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import Head from "@/components/Meta/Head";


export default function App({Component, pageProps}) {
    const theme = createTheme({
        fontFamily: 'Poppins, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Outfit, sans-serif' },
    });
    return (
        <>
            <Head/>
            <MantineProvider theme={theme}>
                <Component {...pageProps} />;
            </MantineProvider>
        </>
    )
}
