<%--
  Created by IntelliJ IDEA.
  User: Chayapol
  Date: 27/8/2561
  Time: 13:15
  To change this template use File | Settings | File Templates.
--%>


<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Products</title>
</head>
<body>
<h1>Sample Search Page</h1>
<form action="index.jsp">
  <input type="text" name="q"><br>
  First Name: <input type="text" name="fname"><br>
  Last Name: <input type="text" name="lname"><br>
  <input type="submit" value="Go!">
</form>
<p>
  Query: <c:out value="${param.q}"/><br/>
  Query: <%= request.getParameter("q") %><br/>
  Name: <c:out value="${param.fname}"/> <c:out value="${param.lname}"/><br/>
</p>

</body>
</html>
