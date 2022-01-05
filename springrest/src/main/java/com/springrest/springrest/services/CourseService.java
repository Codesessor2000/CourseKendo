package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Course;

//loose coupling
//these functions would be overriden by CourseServiseimpl.java class 
public interface CourseService {
	public List<Course> getCourses();
	public Course getCourse(long courseId);
	public Course addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleteCourse(long parselong);
}
