<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.readController.ReadCategoryController" %>
<%@ page import="database.dataClass.Category" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/27
  Time: 午後 3:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    //Fixme: Change me when you use!
    String brandOptions = "";
    int i = 0;
    ReadCategoryController controller = new ReadCategoryController();
    Category[] categories = controller.getAll();

    //Create brand options
    for (Category category: categories) {
        brandOptions += TableFactory.createHTMLOption(category,false);
    }
%>
<html>
<head>
    <title>New product</title>
</head>
<body>

<h2>Create new card!</h2>
<form action="product-controller">
    <input type="hidden" name="cmd" value="c">
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" name="name"></td>
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
                <input type="number" name="price">
            </td>
        </tr>
        <tr>
            <td>Target gender:</td>
            <td>
                <input type="text" name="description">
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
