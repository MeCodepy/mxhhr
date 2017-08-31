package com.lutao.america.service;

import java.util.List;
import java.util.Map;

import com.lutao.america.model.User;


public interface UserService {
	Object login(Map<String,Object> map);
	Object admin_login(Map<String,Object> map);
	void save(User user);
	boolean update(User user);
	boolean delete(Long id);
	User findById(Long id);
	List<User> findAll();
}
