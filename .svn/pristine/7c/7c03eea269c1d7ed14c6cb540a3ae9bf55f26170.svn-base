package com.lutao.america.dao;

import com.lutao.america.model.Contact;

public interface ContactMapper {
    int deleteByPrimaryKey(Integer custId);

    int insert(Contact record);

    int insertSelective(Contact record);

    Contact selectByPrimaryKey(Integer custId);

    int updateByPrimaryKeySelective(Contact record);

    int updateByPrimaryKey(Contact record);
    
    Contact findByUsername(String username);
}