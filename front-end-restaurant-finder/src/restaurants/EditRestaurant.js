import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditRestaurants() {
    let navigate = useNavigate();

    const rest_id = parseInt(useParams().id);
    //console.log('************ :::::: '+rest_id);

    const [restaurant, setRestaurants] = useState({
        name:"",
        address:"",
        contact:"",
        avgPrice:"",
        cuisineType:"",
        ratings:"",
        linkToImage:"",
        workHours:"",
        zipCode:"",
        websiteLink:""
    })

    const {name, address, contact, avgPrice, cuisineType, ratings, linkToImage, workHours, zipCode, websiteLink} = restaurant;

    const onInputChange = (e) => {
        setRestaurants({ ...restaurant, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadRestaurant();
    }, [rest_id])

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        await axios.put('http://localhost:8080/restaurant/'+rest_id, restaurant)
        navigate("/");
    }
    
    const loadRestaurant = async () => {
        const result = await axios.get(`http://localhost:8080/restaurant/${rest_id}`);
        setRestaurants(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Restaurant</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Name</label>
                            <input type={"text"} className="form-control" placeholder='restaurant name' name='name' value={name} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Address' className='form-label'>Address</label>
                            <input type={"text"} className="form-control" placeholder='restaurant address' name='address' value={address} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Contact' className='form-label'>Contact</label>
                            <input type={"text"} className="form-control" placeholder='restaurant contact' name='contact' value={contact} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Average Price' className='form-label'>Average Price</label>
                            <input type={"text"} className="form-control" placeholder='average price per person' name='avgPrice' value={avgPrice} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Cuisine Type' className='form-label'>Cuisine Type</label>
                            <input type={"text"} className="form-control" placeholder='cuisine type' name='cuisineType' value={cuisineType} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Link to Image' className='form-label'>Link to Image</label>
                            <input type={"text"} className="form-control" placeholder='link to image' name='linkToImage' value={linkToImage} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Ratings' className='form-label'>Ratings</label>
                            <input type={"text"} className="form-control" placeholder='your ratings' name='ratings' value={ratings} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Website Link' className='form-label'>Website Link</label>
                            <input type={"text"} className="form-control" placeholder='website link' name='websiteLink' value={websiteLink} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Work Hours' className='form-label'>Work Hours</label>
                            <input type={"text"} className="form-control" placeholder='work hours' name='workHours' value={workHours} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Zip Code' className='form-label'>Zip Code</label>
                            <input type={"text"} className="form-control" placeholder='zip code' name='zipCode' value={zipCode} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='cancel' className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}
