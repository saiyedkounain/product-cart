import React, { useEffect, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import iphone from"./download.jpg"
import ipad from"./download2.jpg"
import laptop from"./download3.jpg"


const Products = () => {
    const productList = [
      {name:"Apple" , price:249 , img:iphone},
      {name:"Microsoft" , price:99, img:laptop},
      {name:"iPad" , price:125, img:ipad},
     
      
    ]
    const [cartList, setCartList] = useState([{name:"Apple" , price:249, img:iphone}])
    const [totalPrice, setTotalPrice] = useState(getPrice())

    function getPrice(){
      let i =0 ;
      cartList.forEach((item) => {
        i = i + item.price
        
      })
      return i
    }

    useEffect(()=> {
      setTotalPrice(getPrice())
    }, [cartList])

    function addItem(index){
        let tempCartItem = productList.filter((item,i) => i === index )
        setCartList( cartList.concat(tempCartItem))
    }


    function deleteItem(index){
        let newList = cartList.filter((item,i) => i !== index)
        setCartList(newList)
    }
  return (
    <div className='container conatiner-fluid border mt-5'>
      <h1 className='text-center'>Products</h1>
      <ol className='list-group m-3'>
        {
            productList.map((item,index)=> {
                return (
                    <li key={index}
                    className="list-group-item d-flex"
                    >
                    <p>{item.name} &nbsp; ${item.price}</p>
                     
                    
                    <img src={item.img}/>
                    
                    <button onClick={()=> {
                        addItem(index)
                    }}
                    className="btn btn-success"
                    >+</button>
                    </li>
                )
            })
        }      
      </ol>
        <h4>Your Cart</h4>
      <ul className='list-group m-2'>
        {
            cartList.map((item,index) => {
                console.log(item)
                return (
                    <li key={index}
                    className="list-group-item d-flex "
                    > 
                    <p>{item.name} &nbsp; ${item.price} </p>
                    <img src={item.img}/>
                    <button
                    className='btn btn-danger'
                    onClick={()=> deleteItem(index)}
                    >-</button>
                    </li>
                )
            })
        }
      </ul>

      <p> Total Price: <b>${totalPrice}</b></p>

      <button className='btn btn-warning' onClick={()=> {
        alert("Total Price is $" + totalPrice + " for " + cartList.length + " items")
      }}><b>Proceed</b> </button>

      <button className='btn btn-success'>ff</button>
    </div>
  )
}

export default Products
