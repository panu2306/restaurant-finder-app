package com.project.restaurantfinder.repository;

import com.project.restaurantfinder.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
