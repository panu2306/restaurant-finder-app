import React from 'react'
import Card from 'react-bootstrap/Card'
import "./style.css"

const Restaurant = ({restaurant}) => {
    console.log(restaurant);
    return (
        <div className="row mt-2 d-flex justify-content-around align-items-center col-md-4">
            <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
                <Card.Img variant="top" className='cd' src={restaurant.linkToImage} />

                <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className='mt-2'>{restaurant.name}</h4>
                        <span>{restaurant.ratings}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex  justify-content-between">
                        <h5>{restaurant.address}</h5>
                        <span>{restaurant.avgPrice}</span>
                    </div>


                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                        <img src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp" className="limg" alt="" />
                        <a href={restaurant.websiteLink} class="stretched-link">Visit restaurant</a>
                        <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" className="laimg" alt="" />
                    </div>
                </div>

            </Card>
        </div>
    )
    /*return (
                <div className="card mx-auto col-md-4 col-10 mt-5" style={{ width: '18rem' }}>
                    <img src="https://github.com/panu2306/learn-cpp/blob/main/assets/1.jpg?raw=true" className="card-img-top mx-auto img-thumbnail" alt="..." width="auto" height="auto"></img>
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.name}</h5>
                        <p className="card-text">{restaurant.zipCode}</p>
                        <Link className='btn btn-outline-primary mx-2' to={`/restaurant/${restaurant.rest_id}`}>Go</Link>
                    </div>
                </div>
    )*/
    /*return (
            <div className = "__area text-center mx-auto col-md-4 col-10 mt-5" style={{ width: '18rem' }}>
                <Link to={`/restaurant/${restaurant.rest_id}`} className = "__card">
                    <button className = "__favorit"><i className = "la la-heart-o"></i></button>
                    <img src = "https://github.com/panu2306/learn-cpp/blob/main/assets/1.jpg?raw=true" className="img-fluid __img"/>
                    <div className = "__card_detail text-left">
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.zipCode}</p>
                    <div className = "__type">
                        <span href = "#Italian">restauran</span>
                        <span href = "#Vegetarian">Vegetarian</span>
                        <span href = "#Pizza">Pav-Bhaji</span>
                        <span href = "#off">100%</span>
                    </div>
                    <div className = "__detail">
                        <i class="fa fa-star-o" aria-hidden="true"></i> <span>5.0</span> <i className = "la la-clock-o"></i> <span>30 m</span>
                    </div>
                    </div>
                </Link>
            </div>

    )*/
}
export default Restaurant