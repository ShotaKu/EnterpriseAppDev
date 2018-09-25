<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<%@ page import = "com.mysql.jdbc.*" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Products</title>
</head>
<body>
<h1>Products</h1>

<sql:query dataSource="jdbc/affablebean" var="result">
    SELECT * FROM category, product
    WHERE category.id = product.category_id
</sql:query>


<table border="1">
    <!-- column headers -->
    <table border="1">
        <c:forEach var="row" items="${result.rows}">
            <tr>
                <td><c:out value="${row.name}"/></td>
                <td><c:out value="${row.description}"/></td>
                <td><c:out value="${row.price}"/></td>
                <td><a href="<c:out value="${row.id}"/>">Delete</a></td>
            </tr>
        </c:forEach>
    </table>
</table>

</body>
</html>
