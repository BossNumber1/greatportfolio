import Card from './Card';

function Row() {
    return (
        <div className="main__row">
            <Card name="1я карточка" />
            <Card />
            <Card />
        </div>
    );
}

export default Row;
