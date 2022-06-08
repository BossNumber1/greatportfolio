type PropTypes = {
    description?: string;
    turnOver: () => void;
    link?: string;
}

function DescriptionCard(props: PropTypes) {
    return (
        <div className="main__descriptionColumn" onClick={props.turnOver} >
            <div>
                {props.description}
                <br />
                <a href={props.link}>Перейти</a>
            </div>
        </div>
    );
}

export default DescriptionCard;
