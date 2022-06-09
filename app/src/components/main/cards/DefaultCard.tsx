type PropTypes = {
    name?: string;
    turnOver: () => void;
}

function DefaultCard(props: PropTypes) {
    return (
        <div className="main__column" onClick={props.turnOver} >
            <div>{props.name}</div>
        </div>
    );
}

export default DefaultCard;
