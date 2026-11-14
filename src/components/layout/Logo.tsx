import React from 'react';
import Image from "next/image";
import type { layout } from "@/content/layout";

type LogoProps = typeof layout.navbar.logo;

function Logo({title, imagePath}: LogoProps): React.JSX.Element {
    return (
        <Image src={imagePath} alt={title} width={80} height={80}></Image>
    );
}

export default Logo;
