import React from 'react';

function Content({children}) {
    return (
        <div className={`flex flex-grow container mx-auto p-2`}>{children}</div>
    );
}

export default Content;