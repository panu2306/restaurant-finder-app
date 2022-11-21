import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api/axios';

export default function AddRestaurant() {
    let navigate = useNavigate();
    const [restaurant, setRestaurant] = useState({
        name:"",
        address:"",
        avgPrice:"",
        contact:"",
        cuisineType:"",
        linkToImage:"",
        ratings:"",
        websiteLink:"",
        workHours:"",
        zipCode:""
    })

    const {name, address, avgPrice, contact, cuisineType, linkToImage, ratings, websiteLink, workHours, zipCode} = restaurant;

    const onInputChange = (e) => {
        setRestaurant({...restaurant, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await api.post("http://localhost:8080/restaurant", restaurant)
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Restaurant</h2>
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
                            <input type={"text"} className="form-control" placeholder='ratings' name='ratings' value={ratings} onChange={(e) => onInputChange(e)}/>
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
                        <Link type='submit' className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}
