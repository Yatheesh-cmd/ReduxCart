import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk, rightShift, leftShift, searchProduct } from '../Redux/slices/productSlice';
import { addToWishList } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Landing() {
    const dispatch = useDispatch();
    const { products, pending, error, currentPage, productsPerPage } = useSelector((state) => state.productReducer);
    const { wishlist } = useSelector((state) => state.wishlistReducer);
    

    useEffect(() => {
        dispatch(fetchProductThunk());
    }, [dispatch]);


    const totalPages = Math.ceil(products.length / productsPerPage);
    const lastProductIndex = productsPerPage * currentPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    const leftChange = () => {
        if (currentPage > 1) {
            dispatch(leftShift());
        }
    };

    const rightChange = () => {
        if (currentPage < totalPages) {
            dispatch(rightShift());
        }
    };

    const handleAddToWish = (prod) => {
        const existingProduct = wishlist.find(item => item.id === prod.id);
        if (existingProduct) {
            alert("Product already added");
        } else {
            dispatch(addToWishList(prod));
            alert("Product added to wishlist");
        }
    };

    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5 text-center text-white">
                    <h1 className='text-light'>Welcome to Our Store</h1>
                    {/* <input
                        type="text"
                        placeholder="Search Products..."
                        className="form-control mt-3"
                        value={searchTerm}
                        onChange={handleSearch}
                    /> */}
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {pending ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h1 className="text-center text-danger">{error}</h1>
                        ) : (
                            products.slice(firstProductIndex, lastProductIndex).map(item => (
                                <div className="col mb-5" key={item.id}>
                                    <div className="card h-100">
                                        <Link to={`/product/${item.id}`}>
                                            <img className="card-img-top" src={item.thumbnail} alt={item.title} />
                                        </Link>

                                        <div className="card-body p-4 text-center">
                                            <h5 className="fw-bolder">{item.title.slice(0, 13)}...</h5>
                                            ${item.price}
                                        </div>

                                        <div className="card-footer d-flex justify-content-between p-4 pt-0 border-top-0 bg-transparent">
                                            <button className="btn" onClick={() =>{ dispatch(addToCart(item))}}>
                                                <i className="fa-solid fa-cart-plus text-success fa-xl"></i>
                                            </button>
                                            <button className="btn" onClick={() => handleAddToWish(item)}>
                                                <i className="fa-solid fa-heart-circle-plus text-danger fa-xl"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

           
            <div className='text-center'>
                <button onClick={leftChange}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <span className="border border-2  mx-2">{currentPage}/{totalPages}</span>
                <button onClick={rightChange} >
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </>
    );
}

export default Landing;
