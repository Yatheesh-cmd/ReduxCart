import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromWishList } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Wishlist() {
    const { wishlist } = useSelector((state) => state.wishlistReducer);
    const dispatch=useDispatch()
    const addtocart=(item)=>{
        dispatch(addToCart(item))
        dispatch(removeFromWishList(item.id))

    }

    return (
        <>
            <h1 className="m-5 mt-5">Wishlist</h1>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        {wishlist.length > 0 ? (
                            wishlist.map((item) => (
                                <div className="col-md-4 col-sm-6 mb-4">
                                <div className="card p-2" style={{ width: "300px", height: "auto" }}>
                                    <img
                                        className="card-img-top"
                                        src={item.thumbnail}
                                        alt="Product"
                                        style={{ width: "100%", height: "190px" }}
                                    />
                                    <div className="card-body p-3">
                                        <h5 className="fw-bolder text-center" style={{ fontSize: "16px" }}> {item.title} </h5>
                                        <p className="text-center mb-1" style={{ fontSize: "14px" }}> ${item.price} </p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn" onClick={()=>addtocart(item)}>
                                                <i className="fa-solid fa-cart-plus text-success fa-lg" ></i>
                                            </button>
                                            <button className="btn"onClick={()=>{dispatch(removeFromWishList(item.id))}}>
                                                <i className="fa-solid fa-heart-circle-xmark text-danger fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            ))
                        ) : (
                            <h2>No items added</h2>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Wishlist;
