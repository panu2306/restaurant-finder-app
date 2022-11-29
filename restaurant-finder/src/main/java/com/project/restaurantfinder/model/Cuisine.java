package com.project.restaurantfinder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cuisine {
    @Id
    @GeneratedValue
    private Long cuisine_id;

    private String cuisine_type;
    public Long getCuisine_id() {
        return cuisine_id;
    }

    public void setCuisine_id(Long cuisine_id) {
        this.cuisine_id = cuisine_id;
    }

    public String getCuisine_type() {
        return cuisine_type;
    }

    public void setCuisine_type(String cuisine_type) {
        this.cuisine_type = cuisine_type;
    }
}
