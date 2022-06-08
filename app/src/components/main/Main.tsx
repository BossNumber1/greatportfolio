import Row from './Row';

const dataCards = [
        {
            namesCards: ["Бот", "", ""],
            descriptionsCards: ["Находит сочетание цветов", "", ""],
            linksToProjects: ["https://vk.com/", "", ""]
        },
        {
            namesCards: ["", "", ""], 
            descriptionsCards: ["", "", ""],
            linksToProjects: ["", "", ""]
        },
        {
            namesCards: ["", "", ""], 
            descriptionsCards: ["", "", ""],
            linksToProjects: ["", "", ""]
        }
    ]

function Main() {
    return (
        <div className="main">
            {
                dataCards.map((dataRow, index) => {
                    return (
                        <Row 
                            key={index} 
                            namesCards={dataRow.namesCards} 
                            descriptionsCards={dataRow.descriptionsCards} 
                            linksToProjects={dataRow.linksToProjects} 
                        />
                    )
                })
            }
        </div>
    );
}

export default Main;
