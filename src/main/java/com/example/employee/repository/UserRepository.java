package com.example.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee.model.User;

public interface UserRepository extends JpaRepository<User, String> {

	public User findByEmail(String email);
}
