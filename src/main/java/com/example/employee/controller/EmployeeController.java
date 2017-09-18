package com.example.employee.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@RequestMapping(value = "/employee", method = RequestMethod.GET)
	public ResponseEntity<List<Employee>> getAllEmployees(){
		return new ResponseEntity<List<Employee>>(employeeRepository.findAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id){
		return new ResponseEntity<Employee>(employeeRepository.findBy_id(id), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeRepository.save(employee), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/employee/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Employee> modifyEmployee(@RequestBody Employee employee, @PathVariable("id") int id){
		return new ResponseEntity<Employee>(employeeRepository.save(employee), HttpStatus.OK);
	}

}
