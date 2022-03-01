
function Rating(props) {
    
   return (
       <div key={props.key} className="rating" data-total-value={props.rating}>
            <div className="rating_item" data-item-value='5'>★</div>
            <div className="rating_item" data-item-value='4'>★</div>
            <div className="rating_item" data-item-value='3'>★</div>
            <div className="rating_item" data-item-value='2'>★</div>
            <div className="rating_item" data-item-value='1'>★</div>
       </div>
   )     
    
}

export default Rating