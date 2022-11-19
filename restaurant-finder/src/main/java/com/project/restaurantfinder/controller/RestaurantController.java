package com.project.restaurantfinder.controller;

import com.project.restaurantfinder.exception.RestaurantNotFoundException;
import com.project.restaurantfinder.exception.UserNotFoundException;
import com.project.restaurantfinder.model.Restaurant;
import com.project.restaurantfinder.model.User;
import com.project.restaurantfinder.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @PostMapping("/restaurant")
    Restaurant newRestaurant(@RequestBody Restaurant newRestaurant){
        return restaurantRepository.save(newRestaurant);
    }

    @GetMapping("/restaurants")
    List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    @GetMapping("/restaurant/{id}")
    Restaurant getRestaurantById(@PathVariable Long id){
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new RestaurantNotFoundException(id));
    }

    @PutMapping("/restaurant/{id}")
    Restaurant updateRestaurant(@RequestBody Restaurant newRestaurant, @PathVariable Long id){
        return restaurantRepository.findById(id)
                .map(restaurant -> {
                    restaurant.setRest_id(newRestaurant.getRest_id());
                    restaurant.setName(newRestaurant.getName());
                    restaurant.setAddress(newRestaurant.getAddress());
                    restaurant.setContact(newRestaurant.getContact());
                    restaurant.setAvgPrice(newRestaurant.getAvgPrice());
                    restaurant.setCuisineType(newRestaurant.getCuisineType());
                    restaurant.setRatings(newRestaurant.getRatings());
                    restaurant.setLinkToImage(newRestaurant.getLinkToImage());
                    restaurant.setWorkHours(newRestaurant.getWorkHours());
                    restaurant.setZipCode(newRestaurant.getZipCode());
                    restaurant.setWebsiteLink(newRestaurant.getWebsiteLink());
                    return restaurantRepository.save(restaurant);
                }).orElseThrow(() -> new RestaurantNotFoundException(id));
    }

    @DeleteMapping("/restaurant/{id}")
    String deleteRestaurant(@PathVariable Long id) {
        if(!restaurantRepository.existsById(id)){
            throw new RestaurantNotFoundException(id);
        }
        restaurantRepository.deleteById(id);
        return "Restaurant with id "+id+" has been deleted";
    }
}
