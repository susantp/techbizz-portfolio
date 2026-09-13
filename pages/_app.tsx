import '../styles/globals.css'
import React, {FC} from "react";

interface MyAppProps {
    Component: any,
    pageProps: any
}

const MyApp: FC<MyAppProps> = ({Component, pageProps}): React.JSX.Element => {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
