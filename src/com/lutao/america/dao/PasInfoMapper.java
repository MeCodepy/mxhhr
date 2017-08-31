package com.lutao.america.dao;

import com.lutao.america.model.PasInfo;

public interface PasInfoMapper {
    int deleteByPrimaryKey(Long pasgId);

    int insert(PasInfo record);

    int insertSelective(PasInfo record);

    PasInfo selectByPrimaryKey(Long pasgId);

    int updateByPrimaryKeySelective(PasInfo record);

    int updateByPrimaryKey(PasInfo record);

	long getMaxId();
}