import Row from './Row';

const dataCards = [
        {
            namesCards: ["Бот", "", ""],
            descriptionsCards: ["Находит сочетание цветов", "", ""]
        },
        {
            namesCards: ["", "", ""], 
            descriptionsCards: ["", "", ""]
        },
        {
            namesCards: ["", "", ""], 
            descriptionsCards: ["", "", ""]
        }
    ]

function Main() {
    return (
        <div className="main">
            {
                dataCards.map((dataRow, index) => {
                    return (
                        <Row key={index} namesCards={dataRow.namesCards} descriptionsCards={dataRow.descriptionsCards} />
                    )
                })
            }
        </div>
    );
}

export default Main;
