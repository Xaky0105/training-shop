
function Btn(props) {
    return (
        <button 
            onClick={props.onClick} 
            className="btn"
            type="submit"
            disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}

export default Btn