import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
import { getRestaurants } from '../api/axios';
import SearchBar from '../SearchBar';
import ListPage from './ListPage';

export default function Home() {
    const [restaurants, setRestaurants] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getRestaurants().then(json => {
          setRestaurants(json)
          setSearchResults(json)
        })
      }, [])

    /*const loadRestaurants=async()=>{
        const result = await api.get("http://localhost:8080/restaurants");
        setRestaurants(result.data);
    }*/

    /*const deleteRestaurant=async(rest_id) => {
        await api.delete(`http://localhost:8080/restaurant/${rest_id}`)
        getRestaurants()
    }*/

    return (
        <>
            <SearchBar restaurants={restaurants} setSearchResults={setSearchResults} />
            <ListPage searchResults={searchResults} />
        </>
    )

  /*return (
    <div className='container'>
        
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Average Price</th>
                        <th scope="col">Cuisine Type</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Working Hours</th>
                        <th scope="col">Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants.map((restaurant, index) => (
                            <tr>
                                <th scope="row" key={index.toString()} value={index}>{(index+1).toString()}</th>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.address}</td>
                                    <td>{restaurant.contact}</td>
                                    <td>{restaurant.avgPrice}</td>
                                    <td>{restaurant.cuisineType}</td>
                                    <td>{restaurant.ratings}</td>
                                    <td>{restaurant.workHours}</td>
                                    <td>{restaurant.zipCode}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/restaurant/${restaurant.rest_id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editrestaurant/${restaurant.rest_id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteRestaurant(restaurant.rest_id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )*/
}
