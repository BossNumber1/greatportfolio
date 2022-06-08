import Row from './Row';

function Main() {
    const allCards = [
        {
            content: ["1я карточка", "", ""]
        },
        {
            content: ["", "", ""]
        },
        {
            content: ["", "", ""]
        }
    ]

    return (
        <div className="main">
            {
                allCards.map((row, index) => {
                    return (
                        <Row key={index} content={row.content} />
                    )
                })
            }
        </div>
    );
}

export default Main;
