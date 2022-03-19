
function Btn(props) {
    return (
        <button onClick={props.onClick} className="btn">{props.title}</button>
    )
}

export default Btn