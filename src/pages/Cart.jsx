import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './for.css'
import { useSelector,useDispatch} from 'react-redux'
import { removeFromCart,increaseQty,decreaseQty,checkout } from '../Redux/slices/cartSlice'

function Cart() {
    const {cart}= useSelector((state)=>state.cartReducer)
    const dispatch=useDispatch()

   
  return (
   <>
   <div className="container-fluid p-2">
    <h2 className="mb-4">Cart Summary</h2>
    <Row>
        <Col lg={8}>
        {
            cart.length>0?
        
        <table className="table-bordered shadow "style={{ border: "3px solid black" }} >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>UnitPrice</th>
                    <th>Quantity</th>
                    <th>total price</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart?.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="" height={'390px'} width={'320px'} /></td>
                    <td>{item.price} </td>
                    <td>
                        <button className="btn" onClick={()=>{dispatch(increaseQty(item.id))}}>+</button>
                        <span className="border border-1 border-dark rounded p-3">{item.quantity}</span>
                        <button className="btn"  onClick={()=>{dispatch(decreaseQty(item.id))}}>-</button>
                    </td>
                    <td>
                        {item.price * item.quantity}
                    </td>
                    <td>
                        <button className="btn"  onClick={()=>{dispatch(removeFromCart(item.id))}}><i className="fa-solid fa-trash fa-xl text-danger"></i></button>
                    </td>

                </tr>))}
              
            </tbody>
        </table>
          :
          <h2>no items added to cart</h2>
      }
        </Col>
        <Col lg={4}>
         <div className="border shadow rounded border-3 p-4  ">
            <h3>Total products:<span style={{color:'black'}}>{Math.ceil(cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0))}</span></h3>
            <h1>Total Amount:<span style={{color:'yellow'}}>{cart?.length}</span></h1>
         </div>
         
         <div className="d-grid">
         <button className="btn btn-success my-4 w-100 " onClick={()=>{dispatch(checkout())}}>Check Out</button>
         </div>
        </Col>
       
    </Row>
   </div>
   
   </>
  )
}

export default Cart