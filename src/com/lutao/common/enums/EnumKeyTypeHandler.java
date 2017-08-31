package com.lutao.common.enums;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

public class EnumKeyTypeHandler extends BaseTypeHandler<IEnum>{
	private Log log = LogFactory.getLog(this.getClass().getName());

	private Class<IEnum> type;
    private final IEnum[] enums;
  
    /**
     * 设置配置文件设置的转换类以及枚举类内容，供其他方法更便捷高效的实现
     * @param type 配置文件中设置的转换类
     */
    public EnumKeyTypeHandler(Class<IEnum> type) {
        if (type == null)
            throw new IllegalArgumentException("Type argument cannot be null");
        this.type = type;
        this.enums = type.getEnumConstants();
        if (this.enums == null)
            throw new IllegalArgumentException(type.getSimpleName()
                    + " does not represent an enum type.");
    }
  
    @Override
    public IEnum getNullableResult(ResultSet rs, String columnName) throws SQLException {
        // 根据数据库存储类型决定获取类型，本例子中数据库中存放INT类型
        Object i = rs.getObject(columnName);
          
        if (rs.wasNull()) {
            return null;
        } else {
            // 根据数据库中的code值，定位IEnum子类
            return locateIEnum(i);
        }
    }
  
    @Override
    public IEnum getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        // 根据数据库存储类型决定获取类型，本例子中数据库中存放INT类型
        Object i = rs.getObject(columnIndex);
        if (rs.wasNull()) {
            return null;
        } else {
            // 根据数据库中的code值，定位IEnum子类
            return locateIEnum(i);
        }
    }
  
    public IEnum getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        // 根据数据库存储类型决定获取类型，本例子中数据库中存放INT类型
        Object i = cs.getObject(columnIndex);
        if (cs.wasNull()) {
            return null;
        } else {
            // 根据数据库中的code值，定位IEnum子类
            return locateIEnum(i);
        }
    }
  
    public void setNonNullParameter(PreparedStatement ps, int i, IEnum parameter, JdbcType jdbcType)
            throws SQLException {
        // baseTypeHandler已经帮我们做了parameter的null判断
        ps.setObject(i, parameter.getKey());
    }
      
    /**
     * 枚举类型转换，由于构造函数获取了枚举的子类enums，让遍历更加高效快捷
     * @param key 数据库中存储的自定义code属性
     * @return code对应的枚举类
     */
    private IEnum locateIEnum(Object key) {
    	if(null==key){
    		log.error(String.format("未知的枚举类型：%s,请核对%s", key, type.getSimpleName()));
    		return null;
    	}
        for(IEnum status : enums) {
            if(key.equals(status.getKey())) {
                return status;
            }
        }
        log.error(String.format("未知的枚举类型：%s,请核对%s", key, type.getSimpleName()));
        return null;
    }

}
