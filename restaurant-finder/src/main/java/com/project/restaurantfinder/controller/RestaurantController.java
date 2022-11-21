package com.project.restaurantfinder.controller;

import com.project.restaurantfinder.exception.RestaurantNotFoundException;
import com.project.restaurantfinder.model.Restaurant;
import com.project.restaurantfinder.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
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

    @GetMapping("/restaurant/{rest_id}")
    Restaurant getRestaurantById(@PathVariable Long rest_id){
        return restaurantRepository.findById(rest_id)
                .orElseThrow(() -> new RestaurantNotFoundException(rest_id));
    }

    @PutMapping("/restaurant/{rest_id}")
    Restaurant updateRestaurant(@RequestBody Restaurant newRestaurant, @PathVariable Long rest_id){
        return restaurantRepository.findById(rest_id)
                .map(restaurant -> {
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
                }).orElseThrow(() -> new RestaurantNotFoundException(rest_id));
    }

    @DeleteMapping("/restaurant/{rest_id}")
    String deleteRestaurant(@PathVariable Long rest_id) {
        if(!restaurantRepository.existsById(rest_id)){
            throw new RestaurantNotFoundException(rest_id);
        }
        restaurantRepository.deleteById(rest_id);
        return "Restaurant with id "+rest_id+" has been deleted";
    }
}
