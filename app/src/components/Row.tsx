import React from 'react';
import Card from './Card';

function Row() {
    return (
        <div className="main__row">
            <Card name="1я карточка" />
            <Card name="2я карточка" />
            <Card name="3я карточка" />
        </div>
    );
}

export default Row;
