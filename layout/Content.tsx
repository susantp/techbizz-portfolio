import React, {FC, ReactElement} from 'react';
interface ContentProps {
    children: any
}
const Content: FC<ContentProps> = ({children}): ReactElement => {
    return (
        <div className={`flex flex-col flex-grow container mx-auto gap-y-3 w-full `}>{children}</div>
    );
}

export default Content;