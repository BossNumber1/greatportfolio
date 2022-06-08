import Card from './Card';

type PropTypes = {
    namesCards: Array<string>;
    descriptionsCards: Array<string>;
    linksToProjects: Array<string>;
}

function Row(props: PropTypes) {
    return (
        <div className="main__row">
            {
                props.namesCards.map((name, index) => {
                    return (
                        <Card 
                            key={index} 
                            name={name} 
                            description={props.descriptionsCards[index]} 
                            link={props.linksToProjects[index]}
                        />
                    )
                })
            }
        </div>
    );
}

export default Row;
