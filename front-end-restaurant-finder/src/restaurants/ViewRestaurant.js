import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
  

export default function ViewRestaurant() {
    let navigate = useNavigate;

    const rest_id = useParams().id;

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
    }, [])

    const loadRestaurant = async () => {
        const result = await axios.get(`http://localhost:8080/restaurant/${rest_id}`);
        setRestaurants(result.data);
    }

    return (
        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{restaurant.name}</MDBCardTitle>
                <MDBCardText>{restaurant.ratings}</MDBCardText>
                <MDBCardText>{restaurant.websiteLink}</MDBCardText>
                <MDBCardText>{restaurant.cuisineType}</MDBCardText>
                <MDBCardText>{restaurant.avgPrice}</MDBCardText>
                <MDBCardText>{restaurant.address}</MDBCardText>
                <MDBCardText>{restaurant.zipCode}</MDBCardText>
                <MDBCardText>{restaurant.contact}</MDBCardText>
                <MDBCardText>{restaurant.workHours}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
      );
}