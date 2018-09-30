<%@ page import="database.dataClass.Product" %>
<%@ page import="database.readController.ReadCategoryController" %>
<%@ page import="static commonClasses.Integer.parseInt" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.dataClass.Category" %>
<%@ page import="database.readController.ReadProductController" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/27
  Time: 午後 3:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String id = request.getParameter("id");

    //Fixme: Change value of name and controller name here when you use
    Product product = new Product();
    String brandOptions = "<option>Load error<option>";
    if(id != null){
        ReadProductController rcController = new ReadProductController();
        product = rcController.get(parseInt(id));
        int i = 0;
        ReadCategoryController gController = new ReadCategoryController();
        Category[] categories = gController.getAll();

        brandOptions = "";
        //Create brand options
        for (Category brand: categories) {
            TableFactory tFactory = new TableFactory();
            Boolean isSelected = (brand.getId() == product.getCategory().getId());
            brandOptions += tFactory.createHTMLOption(brand,isSelected);
        }
    }
%>
<html>
<head>
    <title>Title</title>
</head>
<body>


<h2>Update card!</h2>
<%--Fixme: Change Controller name here!!--%>
<form action="product-controller">
    <input type="hidden" name="cmd" value="u">
    <%--Fixme: Change value name here!!--%>
    <input type="hidden" name="id" value="<%=product.getId()%>">
    <%--Fixme: Change form here!!--%>
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" name="name" value="<%=product.getName()%>"></td>
        </tr>
        <tr>
            <td>Category:</td>
            <td>
                <select name="category_id">
                    <%= brandOptions %>
                </select>
            </td>
        </tr>
        <tr>
            <td>Price:</td>
            <td>
                <input type="text" name="price" value="<%=product.getPrice()%>">
            </td>
        </tr>
        <tr>
            <td>Target gender:</td>
            <td>
                <input type="text" name="description" value="<%=product.getDescription()%>">
            </td>
        </tr>
        <tr>
            <td>
                <button type="submit">Create</button>
            </td>
        </tr>
    </table>
</form>
</body>
</html>
