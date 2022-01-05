package com.springrest.springrest.entities;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {
	//creating attributes
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String description;
	public Integer price;
	
	//Creating a ovveride constructor 
	public Course(long id, String title, String description,Integer price) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.price=price;
	}
	//default constructor
	public Course() {
		super();
	}
	
	//Getters and setters for the attributes
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price=price;
	}
	
	//Overriding the toString() method
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", price= " +price + "]";
	}
	
	
}
