package com.example.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>{

	Employee findBy_id(int id);

}
