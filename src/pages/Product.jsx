import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'



function Product() {
    const {id}=useParams()
    const [pro,setPro]=useState({})
    const dispatch=useDispatch()
   
    const {wishlist}=useSelector((state)=>state.wishlistReducer)
    

    useEffect(()=>{
        getProduct()
    },[])

    const getProduct=()=>{
        const products=JSON.parse(sessionStorage.getItem('products'))
        const res=products.find(p=>p.id==id)
        console.log(res)
        setPro(res)
    }
    const handleAddtoWish=(prod)=>{
            const existingProduct=wishlist.find(item=>item.id==prod.id)
            if(existingProduct){
                alert("product already added")
            }
            else{
                dispatch(addToWishList(prod))
                alert("product add to wishlist")
            }
    }
   
  return (
  <>
    <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={pro?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">ID :{pro?.id}</div>
                        <h1 className="display-5 fw-bolder">{pro?.title}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">$45.00</span> */}
                            <span>${pro?.price}</span>
                        </div>
                        <p className="lead">{pro?.description}</p>
                        <div className="d-flex justify-content-between">
                           <button className="btn" onClick={()=>{dispatch(addToCart(pro))}}>
                           <i class="fa-solid fa-cart-plus text-success "></i>
                           </button>
                           <button className="btn" onClick={()=>{handleAddtoWish(pro)}}>
                           <i class="fa-solid fa-heart-circle-plus text-danger "></i>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
  )
}

export default Product