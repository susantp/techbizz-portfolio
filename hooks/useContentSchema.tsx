import React, {useState} from 'react';

export default function UseContentSchema() {
    const [navigationItems, setNavigationItems] = useState([
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
    ]);
    const [logo, setLogo] = useState({title: 'Tech Bizz', imagePath: '/logo.png'});
    const [workProcessComponent, setWorkProcessComponent] = useState({
        title: 'Our Work Process',
        processes: [
            {slug: 'analysis', title: 'Analysis', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'designing', title: 'Designing', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'development', title: 'Development', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'testing', title: 'Testing', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'launch', title: 'Launch', icon: 'https://via.placeholder.com/150.png'}
        ]
    });

    return {navigationItems, logo, workProcessComponent};
}


