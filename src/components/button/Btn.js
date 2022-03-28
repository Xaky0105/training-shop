
function Btn(props) {
    return (
        <button 
            onClick={props.onClick} 
            className="btn"
            type="submit"
            disabled={props.disabled}
            data-test-id={props.data}
        >
            {props.title}
        </button>
    )
}

export default Btn