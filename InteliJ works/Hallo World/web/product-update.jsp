<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<%@ page import = "com.mysql.jdbc.*" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<sql:query dataSource="jdbc/affablebean" var="result">
    SELECT * FROM category
</sql:query>

<sql:query dataSource="jdbc/affablebean" var="products">
    SELECT * FROM product WHERE id = ?
    <sql:param value="${param.id}" />
</sql:query>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product</title>
</head>
<body>
<h1>Product <c:out value="${param.id}"/></h1>
<c:forEach var="p" items="${products.rows}">
<form action="product-controller">
    <input type="hidden" name="cmd" value="u"/>
    <input type="hidden" name="id" value='<c:out value="${p.id}"/>'/>
    <table>
        <tr>
            <td>Name</td>
            <td><input type="text" name="name" value='<c:out value="${p.name}"/>'></td>
        </tr>
        <tr>
            <td>Price</td>
            <td><input type="number" name="price" value='<c:out value="${p.price}"/>'></td>
        </tr>
        <tr>
            <td>Description</td>
            <td><input type="text" name="description" value='<c:out value="${p.description}"/>'></td>
        </tr>
        <tr>
            <td>Category</td>
            <td>


                <select name="category_id">
                    <c:forEach var="row" items="${result.rows}">
                        <option value='<c:out value="${row.id}"/>'
                        <c:if test = "${row.id} == ${p.category_id}">
                            SELECTED
                        </c:if>
                        >
                        <c:out value="${row.name}"/>
                            <c:out value="${row.id}"/>
                            <c:out value="${p.category_id}"/>
                            <c:if test = "${row.id} == ${p.category_id}">
                                SELECTED
                            </c:if>
                        </option>
                    </c:forEach>
                </select>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Update">
            </td>
        </tr>
    </table>
</form>
</c:forEach>

</body>
</html>