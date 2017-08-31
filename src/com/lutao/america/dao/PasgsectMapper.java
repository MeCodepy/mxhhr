package com.lutao.america.dao;

import com.lutao.america.model.Pasgsect;

public interface PasgsectMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Pasgsect record);

    int insertSelective(Pasgsect record);

    Pasgsect selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Pasgsect record);

    int updateByPrimaryKey(Pasgsect record);
    
    long getMaxId();
}