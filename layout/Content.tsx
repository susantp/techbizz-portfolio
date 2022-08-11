import React, {FC, ReactElement} from 'react';
interface ContentProps {
    children: any
}
const Content: FC<ContentProps> = ({children}): ReactElement => {
    return (
        <div className={`flex flex-col flex-grow`}>{children}</div>
    );
}

export default Content;