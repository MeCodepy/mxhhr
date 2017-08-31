package com.lutao.america.service;

import com.lutao.america.model.Contact;

public interface ContactService {
	int save(Contact record);
	boolean findByUsername(String username);
	int update(Contact record);
}
