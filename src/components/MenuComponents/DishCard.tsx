
import React, {Component} from 'react'
import { Context } from '../../overmind'
import { Dish } from '../../overmind/menu/state'

export class DishCard extends React.Component<{dish: Dish, state: any, actions: any}>   {

    constructor(props: any){
        super(props)
        this.state = { counter: 0}
        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

   update(){
    this.forceUpdate()
   }
   add(){
    this.props.actions.addDishToOrder(this.props.dish.id)
    this.update()
   }
   subtract(){
    
    this.props.actions.removeDishFromOrder(this.props.dish.id)
    this.update()
    
   }
   


    render(){
    return (
      <div >
          
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
                <img className="h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
            </div>
            <div className="col-span-3">
                <div className="text-lg font-semibold">{this.props.dish.name}</div>
                <div className="text-xs text-gray-600">{this.props.dish.name}</div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="text-lg font-semibold text-green-400">{this.props.dish.price.toString()}€</div>
                    <div className="grid grid-cols-3 gap-1">
                        <button onClick={ () => this.subtract()} className="text-black text-xl font-semibold bg-gray-100 rounded-lg">-</button>
                        <div className="text-center font-semibold ">{this.props.actions.getDishCountById(this.props.dish.id)}</div>
                        <button onClick={ () => this.add()} className=" text-white text-lg font-semibold bg-green-400 rounded-lg">+</button>
                    </div>
                </div>
            </div>
            </div>
       
      </div>
      
      
       
      
     
      
    )
    }
    
    
}