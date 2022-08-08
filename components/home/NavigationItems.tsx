import React from 'react';

function NavigationItems({items}): JSX.Element {
    return (
        <div className={`flex justify-evenly space-x-10`}>
            {items.map((item) => <div key={item.slug}>{item.title}</div>)}
        </div>
    );
}

export default NavigationItems;