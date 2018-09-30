<%@ page import="database.readController.ReadBrandController" %>
<%@ page import="database.dataClass.Brand" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    //Fixme: Change me when you use!
    String brandOptions = "";
    int i = 0;
    ReadBrandController gController = new ReadBrandController();
    Brand[] brands = gController.getAll();

    //Create brand options
    for (Brand brand: brands) {
        TableFactory tFactory = new TableFactory();
        brandOptions += tFactory.createHTMLOptions(brand);
    }
%>
<html>

<head>
    <title>add new card</title>
</head>
<body>

<h2>Create new card!</h2>
    <form action="card-controller">
        <input type="hidden" name="cmd" value="c">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Brand:</td>
                <td>
                    <select name="brand">
                        <%= brandOptions %>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Brand:</td>
                <td>
                    <input type="number" max="5" min="1" name="rate">
                </td>
            </tr>
            <tr>
                <td>Target gender:</td>
                <td>
                    <select name="gender">
                        <option value="m">男性</option>
                        <option value="f">女性</option>
                        <option value="b">両方</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Cash back:</td>
                <td>
                    <input type="checkbox" name="isCashBack">
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
