<html>
<head>

</head>
<body>
<h1>Bean Data</h1>
<jsp:useBean id="p" class="affablebean.Product">
    <jsp:setProperty name="p" property="name" value="iPhone Xs"/>
    <jsp:setProperty name="p" property="price" value="1200"/>
</jsp:useBean>

<%@ page import = "affablebean.Product"%>
<%
    Product p2 = new Product();
    p2.setName("Galaxy Note 9");
    p2.setPrice(1100);
%>
<jsp:getProperty name="p" property="name"/>:
<jsp:getProperty name="p" property="price"/><br/>

<%= p.getName() %>:<%= p.getPrice() %><br/>
<%= p2.getName() %>:<%= p2.getPrice() %><br/>
<%--
This does not work as p2 is an object in this page, not a bean.
<jsp:getProperty name="p2" property="name"/>:
<jsp:getProperty name="p2" property="price"/><br/>
--%>

</body>
</html>