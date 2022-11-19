package com.project.restaurantfinder.exception;

public class RestaurantNotFoundException extends RuntimeException {
    public RestaurantNotFoundException(Long id){
        super("Could not found the restaurant with id "+ id);
    }
}
