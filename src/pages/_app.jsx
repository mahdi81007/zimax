import "@/styles/globals.css";
import {MantineProvider} from "@mantine/core";
import Head from "@/components/Meta/Head";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head/>
            <MantineProvider>
                <Component {...pageProps} />;
            </MantineProvider>
        </>
    )
}
