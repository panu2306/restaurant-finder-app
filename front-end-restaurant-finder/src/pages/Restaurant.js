import { Link } from "react-router-dom"

const Restaurant = ({restaurant}) => {
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
    return (
            <div className = "__area text-center mx-auto col-md-4 col-10 mt-5" style={{ width: '18rem' }}>
                <Link to={`/restaurant/${restaurant.rest_id}`} className = "__card">
                    <button className = "__favorit"><i className = "la la-heart-o"></i></button>
                    <img src = "https://github.com/panu2306/learn-cpp/blob/main/assets/1.jpg?raw=true" className="img-fluid __img"/>
                    <div className = "__card_detail text-left">
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.zipCode}</p>
                    <div className = "__type">
                        <span href = "#Italian">Indian</span>
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

    )
}
export default Restaurant