import './Between.css';

export const Between = (props) => {
    return (
        <div className="Between">
            {props.children}
        </div>
    )
}

export const BetweenSpread = (props) => {
    return (
        <div className="Between spread">
            {props.children}
        </div>
    )
}

export default Between;