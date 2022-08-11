import '../styles/globals.css'
import {Component, FC} from "react";

interface MyAppProps {
    Component: any,
    pageProps: any
}

const MyApp: FC<MyAppProps> = ({Component, pageProps}): JSX.Element => {
    return <Component {...pageProps} />
}

export default MyApp
