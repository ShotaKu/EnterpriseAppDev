<%@ page import="javafx.scene.control.Tab" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.readController.ReadProductController" %>
<%@ page import="database.dataClass.Product" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/27
  Time: 午後 4:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    //Fixme: Change value of name and controller name here when you use
    String contains = request.getParameter("contains");
    String table = TableFactory.getCardHTMLTableHead();
    if(contains != null){
        ReadProductController rcController = new ReadProductController();
        Product[] products = rcController.searchByName(contains);
        for (Product product:products){
            TableFactory tFactory = new TableFactory();
            table += tFactory.createHTMLTableRow(product);
        }
    }else {
        out.print("<h3>Empty input</h3>");
        contains = "";
    }
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%--Fixme: Change Controller name here!!--%>
<form action="searchProduct.jsp">
    <table>
        <tr>
            <td><label for="contains">Input :</label> </td>
            <td><input type="text" name="contains" id="contains" value="<%=contains%>"></td>
        </tr>
    </table>
    <input type="submit">
</form>
<%=table%>
</body>
</html>
