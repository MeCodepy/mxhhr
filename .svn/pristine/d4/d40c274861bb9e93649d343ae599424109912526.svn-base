package com.lutao.america.query;

public class PageQueryParam {
   public int currentPage;//当前页
   public int totalPageCount;//总页数
   public int row;//每页显示数量
   public int index;//起始位置
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getTotalPageCount() {
		return totalPageCount;
	}
	public void setTotalPageCount(int count,int row) {
		this.totalPageCount =count%row!=0?count/row+1:count/row;
	}
	public int getRow() {
		return row;
	}
	public void setRow(int row) {
		this.row = row;
	}
	public int getIndex() {
		return index;
	}
	public void setIndex(int index) {
		this.index = index;
	}
   
}
