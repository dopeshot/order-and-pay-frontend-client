import React, {Component} from 'react'

export class Dish extends React.Component<{name: string, description: string, price: string, id: number}>   {

    render(){
    return (
      <div >
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
                <img className="h-full w-full object-cover rounded-lg" src="https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg"></img>
            </div>
            <div className="col-span-3">
                <div className="text-lg font-semibold">{this.props.name}</div>
                <div className="text-xs text-gray-600">{this.props.description}</div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="text-lg font-semibold text-green-400">{this.props.price}€</div>
                    <div className="grid grid-cols-3 gap-1">
                        <button className=" bottom-1 text-black text-xl font-semibold bg-gray-100 rounded-lg">-</button>
                        <div className="text-center font-semibold ">0</div>
                        <button className=" text-white text-lg font-semibold bg-green-400 rounded-lg">+</button>
                    </div>
                </div>
            </div>
            </div>
       
      </div>
      
      
       
      
     
      
    )
    }
    
    
}