<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<%@ page import = "com.mysql.jdbc.*" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script>
    function confirmDelete(id) {
        if (confirm('Are you sure?')) {
            window.location = "product-controller?cmd=d&id="+id;
        }
    }
</script>
<head>
    <title>Products</title>
</head>
<body>
<h1>Products</h1>
<a href="product.jsp">ADD</a>

<sql:query dataSource="jdbc/affablebean" var="result">
    SELECT * FROM category, product
    WHERE category.id = product.category_id
</sql:query>


<table border="1">
    <c:forEach var="row" items="${result.rows}">
        <tr>
            <td><c:out value="${row.name}"/></td>
            <td><c:out value="${row.description}"/></td>
            <td><c:out value="${row.price}"/></td>
            <td>
                <button onclick="window.location='product-update.jsp?id=<c:out value="${row.id}"/>';">UPDATE</button>
                <button onclick="confirmDelete(<c:out value="${row.id}"/>);">DELETE</button>
            </td>
        </tr>
    </c:forEach>
</table>

</body>
</html>
