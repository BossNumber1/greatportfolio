type PropTypes = {
    name?: string;
}

function Card(props: PropTypes) {
    return (
        <>
            {
                props.name ? 
                    <div className="main__column">
                        {props.name}
                    </div> 
                : 
                    <div className="main__emptyColumn">
                        
                    </div>
            }
        </>
    );
}

export default Card;
