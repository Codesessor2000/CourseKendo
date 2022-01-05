package com.springrest.springrest.services;

//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

// creating a class to implement the interface 'CourseService'
@Service
public class CourseServiceimpl implements CourseService {
	@Autowired
	private CourseDao courseDao;
	//creating the a list object of Course data type
//	List<Course> list;
	
	//creating a constructor to get a default list
	//connection with the database to be done
	public CourseServiceimpl() {
//		list=new ArrayList<>();
//		list.add(new Course(145,"Java Core Course","This Course contains core concepts of java"));
//		list.add(new Course(121,"Springboot Course","Creating restAPI using SpringBoot"));
	}

	//return the created/updated list
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}

	//return course with specific ID
	@Override
	public Course getCourse(long courseId) {
//		Course c=null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
//		return c;
		return courseDao.getById(courseId);
	}

	//add the new course object to the list
	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	//Update the course where the ID matches one of the courses in the list
	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//			   e.setTitle(course.getTitle());
//			   e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	//Delete a specific course from the list with given ID
	@Override
	public void deleteCourse(long parselong) {
//		list=this.list.stream().filter(e->e.getId()!=parselong).collect(Collectors.toList());
		Course entity =courseDao.getById(parselong);
		courseDao.delete(entity);
	}

}
