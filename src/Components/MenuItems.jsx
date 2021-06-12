import React from 'react';


const MenuItems = (props) => {
    return (
        <>
         <div className="menu-items container-fluid mt-5">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">
                                {props.items.map((elem) => {
                                    const { id, name, image, description, price } = elem;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5 " key={id}>
                                            <div className="row Item-inside">
                                                <div className="col-12 col-md-6 col-lg-4 img-div">
                                                    <img src={image} alt="menuPic" className="img-fluid" />
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
                                                        <div className="menu-price-book">
                                                            <div className="price-book-divide d-flex justify-content-between ">
                                                                <h2>{price}</h2>
                                                                <a href="#">
                                                                    <button className="btn btn-primary">Order Now</button>
                                                                </a>
                                                            </div>
                                                            <p>*Prices may vary on selected date</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>   
        </>
    )
}

export default MenuItems