
function Btn(props) {
    return (
        <input onClick={props.onClick} className="btn" type='submit' value={props.title}></input>
    )
}

export default Btn