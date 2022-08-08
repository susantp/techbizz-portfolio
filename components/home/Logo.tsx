import React from 'react';
import Image from "next/image";

function Logo({title, imagePath}): JSX.Element {
    return (
        <Image src={imagePath} alt={title} width={100} height={100}></Image>
    );
}

export default Logo;