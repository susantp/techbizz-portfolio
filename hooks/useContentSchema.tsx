import React, {useState} from 'react';

export default function UseContentSchema() {
    const [logo, setLogo] = useState({title: 'Tech Bizz', imagePath: '/logo.png'});
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
    const [workProcessComponent, setWorkProcessComponent] = useState({
        heading: 'our work process',
        processes: [
            {slug: 'analysis', title: 'Analysis', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'designing', title: 'Designing', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'development', title: 'Development', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'testing', title: 'Testing', icon: 'https://via.placeholder.com/150.png'},
            {slug: 'launch', title: 'Launch', icon: 'https://via.placeholder.com/150.png'}
        ]
    });
    const [whyChooseUs, setWhyChooseUs] = useState({
        heading: 'why choose us',
        content: 'Tech Bizz offers professional Website design and development, Mobile Application, SEO and Marketing of your product.\n' +
            '\n' +
            'We strive to offer the best solution for your business and impartial advice at an honest price. We are constantly investigating new latest technologies and recommend them when they make sense.\n' +
            '\n' +
            'We provide solutions and guarantee our work. You can be rest assured that you won’t have any unpleasant surprises. We are always ready to help.'
    });
    const [whatWeDo, setWhatWeDo] = useState({
        heading: "what we do",
        items: [
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'Web Development',
                slug: 'web-development',
                description: 'Tech Bizz delivers end to end business solutions that leverage the deep industry and functional expertise.'
            },
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'Android Development',
                slug: 'android-development',
                description: 'We build android application solutions improving your business effectiveness and efficiency.'
            },
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'Web Designing',
                slug: 'web-designing',
                description: 'Tech Bizz is a web & software development company that provides effective solutions in web designing.'
            },
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'E-commerce Solution',
                slug: 'e-commerce-solution',
                description: 'Tech Bizz provides innovative multi channel e-commerce solutions for retailers of both mid cap and large cap.'
            },
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'Responsive Web Design',
                slug: 'responsive-web-design',
                description: 'Tech Bizz Software provides comprehensive services for mobile responsive website development for all main platforms.'
            },
            {
                icon: 'https://via.placeholder.com/150.png',
                title: 'SEO',
                slug: 'seo',
                description: 'At Tech Bizz, a team of search engine optimization specialists work with you for long term positioning to get impactful results.'
            },
        ]
    });
    const [clients, setClients] = useState([{}, {}, {}, {}, {}, {}, {}, {},]);


    return {navigationItems, logo, workProcessComponent, whyChooseUs, whatWeDo, clients};
}


