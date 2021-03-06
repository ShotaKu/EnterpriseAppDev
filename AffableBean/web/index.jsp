<%@ page import="database.dataClass.Product" %>
<%@ page import="database.readController.ReadProductController" %>

<%@ page import="database.tableFactory.TableFactory" %>
<%
    // Table header!
    //Fixme: Fix table head instead of data fields.
    String tableHTML = TableFactory.getCardHTMLTableHead();
    int i = 0;

    // Get all cards.
    //Fixme: Change value of name and controller name here when you use
    ReadProductController gController = new ReadProductController();
    Product[] products = gController.getAll();

    //Create table
    for (Product product : products) {
        //Fixme: Create function for create table in TableFactory class
        tableHTML += TableFactory.createHTMLTableRow(product);
    }
    tableHTML += "</table>";
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script>
    function confirmDelete(id) {
        if (confirm("Are you sure to delete" + id + "?")) {
            // Fixme: change controller name here!
            window.location = "product-controller?cmd=d&id=" + id;
        }
    }
</script>
<head>
    <title>$Title$</title>
</head>
<body>
<h1>Products</h1>
<%--Fixme: change Add URL name here!--%> <%--Fixme: change Search URL name here!--%>
<a href="addProduct.jsp">Add</a> <a href="searchProduct.jsp">Search</a>
<%= tableHTML %>
</body>
</html>
