import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
   constructor(props){
      super(props);
   }
   renderDish(dish){
      if(dish != null){
         return(
             <Card>
                 <CardImg top src={dish.image} alt={dish.name} />
                 <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
         );
      }else{
         return(
            <div></div>
         );
      }
   }
   renderDishComments(dish){

      if(dish != null){

      const commentsss = dish.comments.map((comm) => {
                     var cdate = new Date(comm.date).toDateString();
                     return(
                        <div key = {comm.id}>
                           <h5>{comm.comment}</h5>
                           <h6>-- {comm.author}, {cdate}</h6>
                        </div>
                     )
                  });
         return(
            <div>
            <h3>Comments</h3>
            {commentsss}
            </div>
         )
      }else{
         return(
            <div></div>
         );
      }
   }

   render(){

      const menu = this.props.dishes.map((dish) => {
          return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
             <Card onClick = >
                    <CardImg width = "100%"  src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
             </Card>
            </div>
          );
      });

      return(
         <div className = "container">
            <div className = "row">
                  {menu}
            </div>
            <div className="row">
             <div  className="col-5 col-md-5 m-1">
               {this.renderDish(this.state.selectedDish)}
             </div>
             <div className = "col-7 col-md-5 m-1">
               { this.renderDishComments(this.state.selectedDish) }
             </div>
            </div>
         </div>
      );
   }
}

export default Menu;
