<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
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
<script type="text/javascript" src="${context}/america/js/thirdparty/jquery.min.js"></script>
<script type="text/javascript" src="${context}/america/js/thirdparty/jquery.form.js"></script>

<link rel="stylesheet" media="all" type="text/css" href="${context}/america/css/one.css" />
<link rel="stylesheet" media="all" type="text/css" href="${context}/america/css/common.css" />
<link rel="stylesheet" media="all" type="text/css" href="${context}/america/css/common.css" />
<script src="${context}/america/js/shareJs.js"></script>
<script src="${context}/america/js/araleJs/seajs/3.0.0/sea.js"></script>
<script src="${context}/america/js/araleJs/seajs-style/1.0.3/seajs-style.js"></script>
<script type="text/javascript">
var TOP_PATH='${pageContext.request.contextPath}';
seajs.config({
    base: '${pageContext.request.contextPath}/js/araleJs',
    alias: {
        '$':'gallery/jquery/1.8.0/jquery.js',
        'jquery':'gallery/jquery/1.8.0/jquery.js',
        'slide':'arale/switchable/1.0.2/slide.js',
        'tabs':'arale/switchable/1.0.2/tabs.js',
        'popup':'arale/popup/1.1.6/popup.js',
        'tip':'arale/tip/1.2.2/tip.js',
        'confirmbox':'arale/dialog/1.3.0/confirmbox.js',
        'dialog':'arale/dialog/1.3.0/dialog.js',
        'placeholder':'arale/placeholder/1.1.0/placeholder.js',
        'cookie':'arale/cookie/1.0.2/cookie.js',
        'widget':'arale/widget/1.1.1/widget.js',
        'accordion':'arale/switchable/1.0.2/accordion.js',
        'validator':'arale/validator/0.9.7/validator.js',
        'select':'arale/select/0.9.9/select.js',
        'raty':'utils/raty/2.5.2/jquery.raty.min.js',
        'sticky':'arale/sticky/1.3.1/sticky.js',
        'autocomplete':'arale/autocomplete/1.3.1/autocomplete.js',
        'templatable':'arale/templatable/0.9.2/templatable.js',
        'overlay':'arale/overlay/1.1.4/overlay.js',
        'calendar':'arale/calendar/1.0.0/calendar.js',
        'upload':'arale/upload/1.1.2/upload.js',
        'carousel':'arale/switchable/1.0.2/carousel',
        'position':'arale/position/1.0.1/position.js',
        'jsuri':'gallery/jsuri/1.2.2/jsuri.js',
        'placeholders':'gallery/placeholders/3.0.2/placeholders.js',
        'ztree':'gallery/ztree/3.5.3/ztree.js',
        'datatables':'gallery/datatables/1.10.7/media/js/jquery.dataTables.js',
        'detector':'arale/detector/1.4.0/detector.js'
    }
});
</script>
