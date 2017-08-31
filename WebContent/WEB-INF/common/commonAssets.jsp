<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
	pageContext.setAttribute("context", path);
%>
<base href='<%=basePath%>'>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="shortcut icon" href="./america/images/favicon.ico" type="image/x-icon">
<link rel="icon" href="./america/images/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="./america/images/favicon.ico" type="image/x-icon" />
<link rel="bookmark" href="./america/images/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" media="all" type="text/css" href="${context}/america/css/one.css" />
<link rel="stylesheet" media="all" type="text/css" href="${context}/america/css/common.css" />
<script type="text/javascript" src="${context}/america/js/thirdparty/jquery.min.js"></script>

<script type="text/javascript">
	/*
	setInterval(function baiduLXBRemove(){
		var lxb = document.getElementById("LXB_CONTAINER");
		if (Boolean(lxb)) {
			document.body.removeChild(lxb);
		}
	}, 500);
	*/
</script>