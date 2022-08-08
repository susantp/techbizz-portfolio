import React from 'react';

type navigationItem = {
    title: string;
    slug: string
}
export default function UseContentSchema(): Array<any> {
    const navigationItems: Array<object> = [
        {
            title: 'About',
            slug: 'about'
        },
        {
            title: 'Services',
            slug: 'services'
        },
        {
            title: 'Contact',
            slug: 'contact'
        }
    ]
    const logo = {title: 'Tech Bizz', imagePath: '/logo.png'}

    return [navigationItems, logo];
}


