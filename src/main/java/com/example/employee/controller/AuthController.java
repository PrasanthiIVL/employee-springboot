package com.example.employee.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.Auth;
import com.example.employee.model.User;
import com.example.employee.repository.UserRepository;

import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/api")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ResponseEntity<User> addUser(@RequestBody User user){
		return new ResponseEntity<User>(userRepository.save(user), HttpStatus.OK);		
	}
	
	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	public ResponseEntity<Auth> authenticateUser(@RequestBody User user){
		User user2 = userRepository.findByEmail(user.getEmail());
		String token = "";
		if(user2.getPassword() == user.getPassword()) {
			token = Jwts.builder().setSubject(user.getEmail())
										.setIssuedAt(new Date())
										.signWith(SignatureAlgorithm.HS256, "secret")
										.compact();
		}
		Auth auth = new Auth();
		auth.setToken(token);
		auth.setUserid(user.getId());
		return new ResponseEntity<Auth>(auth, HttpStatus.OK);		
	}
}
