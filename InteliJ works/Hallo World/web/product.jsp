<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<%@ page import = "com.mysql.jdbc.*" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<sql:query dataSource="jdbc/affablebean" var="result">
    SELECT * FROM category
</sql:query>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product</title>
</head>
<body>
<h1>Product</h1>
<form action="product-controller">
    <table>
        <tr>
            <td>Name</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>Price</td>
            <td><input type="number" name="price"></td>
        </tr>
        <tr>
            <td>Description</td>
            <td><input type="text" name="description"></td>
        </tr>
        <tr>
            <td>Category</td>
            <td>
                <select name="category_id">
                    <c:forEach var="row" items="${result.rows}">
                        <option value='<c:out value="${row.id}"/>'>
                        <c:out value="${row.name}"/>
                        </option>
                    </c:forEach>
                </select>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Create">
            </td>
        </tr>
    </table>
</form>

</body>
</html>