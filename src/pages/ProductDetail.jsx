import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetail() {
    const products = useSelector(state => state.product.products);
    let { id } = useParams();
    const navigate = useNavigate();

    let product = {};

    if (id) {
        product = products.find(p => p.id === id)

        if (!product) {
            //navigate to home pge
            navigate('/');
        }
    }

    useEffect(() => {

    }, [id])
    return (
        <>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div
                            className="banner_content d-md-flex justify-content-between align-items-center"
                        >
                            <div className="mb-3 mb-md-0">
                                <h2>Product Details</h2>
                                <p>Very us move be blessed multiply night</p>
                            </div>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="single-product.html">Product Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <div className="s_product_img">
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to="0"
                                            className="active"
                                        >
                                            

                                            <img src={product.image} 
                                             style={{
                                                height: "100px"
                                            }} />

                                        </li>

                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            {/* <img
                                                className="d-block w-100"
                                                src={product.image}
                                                alt={product.name}
                                            /> */}
                                            <img src={product.image}
                                            //  alt={product.image} 
                                             style={{
                                                height: "500px"
                                            }} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{product.name}</h3>
                                <h2>${product.final_price}</h2>
                                <ul className="list">
                                    <li>
                                        <a className="active" href="#">
                                            <span>Category</span> : Household</a
                                        >
                                    </li>
                                    <li>
                                        <a href="#"> <span>Availibility</span> : In Stock</a>
                                    </li>
                                </ul>
                                <p dangerouslySetInnerHTML={{ __html: product.short_description }}></p>

                                <div className="product_count">
                                    <label for="qty">Quantity:</label>
                                    <input
                                        type="text"
                                        name="qty"
                                        id="sst"
                                        maxlength="12"
                                        value="1"
                                        title="Quantity:"
                                        className="input-text qty"
                                    />
                                    <button
                                        onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                        className="increase items-count"
                                        type="button"
                                    >
                                        <i className="lnr lnr-chevron-up"></i>
                                    </button>
                                    <button
                                        onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                        className="reduced items-count"
                                        type="button"
                                    >
                                        <i className="lnr lnr-chevron-down"></i>
                                    </button>
                                </div>
                                <div className="card_area">
                                    <a className="main_btn" href="#">Add to Cart</a>
                                    <a className="icon_btn" href="#">
                                        <i className="lnr lnr lnr-diamond"></i>
                                    </a>
                                    <a className="icon_btn" href="#">
                                        <i className="lnr lnr lnr-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product_description_area">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >Description</a
                            >
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        >
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
