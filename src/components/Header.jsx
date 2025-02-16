import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchProduct } from '../Redux/slices/productSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const {wishlist}=useSelector((state)=>state.wishlistReducer) //to set total items in wishlist
  const {cart}=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  return (
    <Navbar className="bg-body-tertiary" style={{backgroundColor:'gray'}}>
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
        <i className="fa-solid fa-cart-shopping"></i>{ ' '} Redux cart
        </Link>
     
      </Navbar.Brand>
      <div className='border border-2 shadow border-dark w-10' style={{borderRadius:'10px'}}>
   <input type="search" className='form-control ' placeholder="search for product" onChange={(e)=>dispatch(searchProduct(e.target.value))} style={{color:'black',backgroundColor:'#87CEEB'}}  />
      </div>
      <div>
        <Link className="btn btn-outline-warning me-3" to={'/wish'}><i class="fa-solid fa-heart text-danger"></i>Wishlist{' '}
        <span className="badge bg-dark text-light">{wishlist?.length}</span>
        </Link>
        <Link className="btn btn-outline-success" to={'/cart'}>
        <i className="fa-solid fa-cart-shopping"></i>Cart {" "}  <span className="badge text-light bg-dark">{cart?.length}</span></Link>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header