
function Rating() {
    
   return (
       <div className="rating">
           <div className="rating_items">
               <input className="rating_item" id="rating-5" name="rating" type='radio' value='5'/>
               <label className="rating_label" htmlFor="rating-5"></label>
               <input className="rating_item" id="rating-4" name="rating" type='radio' value='4'/>
               <label className="rating_label" htmlFor="rating-4"></label>
               <input className="rating_item" id="rating-3" name="rating" type='radio' value='3'/>
               <label className="rating_label" htmlFor="rating-3"></label>
               <input className="rating_item" id="rating-2" name="rating" type='radio' value='2'/>
               <label className="rating_label" htmlFor="rating-2"></label>
               <input className="rating_item" id="rating-1" name="rating" type='radio' value='1'/>
               <label className="rating_label" htmlFor="rating-1"></label>
           </div>
       </div>
   )     
    
}

export default Rating