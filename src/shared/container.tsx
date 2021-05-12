import React from 'react';
import './container.css';

function Container(props: any) {
    const { children } = props
    
    return (
        <div className="Container">
            {children}
        </div>
    );
}

export default Container;