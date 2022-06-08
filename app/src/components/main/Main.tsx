import Row from './Row';

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

function Main() {
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
