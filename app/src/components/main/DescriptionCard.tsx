type PropTypes = {
    description?: string;
    turnOver: () => void;
}

function DescriptionCard(props: PropTypes) {
    return (
        <div className="main__descriptionColumn" onClick={props.turnOver} >
            <div>
                {props.description}
                <br />
                <a href="https://vk.com/">Перейти</a>
            </div>
        </div>
    );
}

export default DescriptionCard;
