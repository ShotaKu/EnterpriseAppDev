<%@ page import="java.util.Enumeration" %>
<%@ page import="database.readController.ReadCardController" %>
<%@ page import="database.dataClass.Card" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="java.io.PrintWriter" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/27
  Time: 午前 11:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Search Cards</title>
</head>
<body>
<h2>Search cards</h2>
<form action="searchCard.jsp">
    <input type="text" name="contains">
    <input type="submit">
    <%
        String contains = request.getParameter("contains");
        String table = "<table border=1>";
        table += "<tr bgcolor=\"000080\"><td><font color=\"white\">メンバーID</font></td>"
                + "<td><font color=\"white\">名前</font></td>"
                + "<td><font color=\"white\">ブランド</font></td>"
                + "<td><font color=\"white\">キャッシュバック</font></td>"
                + "<td><font color=\"white\">おすすめ度</font></td>"
                + "<td><font color=\"white\">対象</font></td>";
        if(contains != null){
            ReadCardController rcController = new ReadCardController();
            Card[] cards = rcController.searchByName(contains);
            for (Card card:cards){
                TableFactory tFactory = new TableFactory();
                //PrintWriter pWriter = new PrintWriter();
                table += tFactory.createHTMLTableRow(card);
            }
        }else {
            out.print("<h3>Empty input</h3>");
        }
    %>
</form>
<%=table%>
</body>
</html>
