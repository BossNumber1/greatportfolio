import React from 'react';

type PropTypes = {
    name: string;
}

function Card(props: PropTypes) {
    return (
        <div className="main__column">
            {props.name}
        </div>
    );
}

export default Card;
