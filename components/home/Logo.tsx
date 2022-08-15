import React from 'react';
import Image from "next/image";

function Logo({title, imagePath}): JSX.Element {
    return (
        <Image src={imagePath} alt={title} width={80} height={80}></Image>
    );
}

export default Logo;