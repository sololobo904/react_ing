import React, { Component } from 'react'

class DishDetail extends Component{
   constructor(props){
      super(props);
   }

   render(){
      if(this.props.dish != null){
         const comment = this.props.dish.comments.map((comm) => {
            return(
               <div>
                  <h4>{comm.comment}</h4>
                  <h5>--{comm.author}, {comm.date}</h5>
               </div>
            );
         });
         return(
            <div  className="col-6 col-md-5 m-1">
                  <h3>Comments</h3>
                  {comment}
            </div>
         );
      }
   else{
      return(
         <div>
         </div>
      );
   }
}
}
export default DishDetail;
