<%@ page import="database.dataClass.Card" %>
<%@ page import="database.readController.ReadCardController" %>

<%@ page import="database.tableFactory.TableFactory" %>
<%
// Table header!
    //Fixme: Fix table head instead of data fields.
    String tableHTML = "<table border=1>";
    tableHTML += "<tr bgcolor=\"000080\"><td><font color=\"white\">メンバーID</font></td>"
            + "<td><font color=\"white\">名前</font></td>"
            + "<td><font color=\"white\">ブランド</font></td>"
            + "<td><font color=\"white\">キャッシュバック</font></td>"
            + "<td><font color=\"white\">おすすめ度</font></td>"
            + "<td><font color=\"white\">対象</font></td>";
    int i = 0;

    // Get all cards.
    ReadCardController gController = new ReadCardController();
    Card[] cards = gController.getAll();

    //Create table
    for (Card card : cards) {
        TableFactory tFactory = new TableFactory();
        tableHTML += tFactory.createHTMLTableRow(card);
    }

    tableHTML += "</table>";
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script>
    function confirmDelete(id) {
        if (confirm("Are you sure to delete" + id + "?")) {
            // Fixme: change controller name here!
            window.location = "card-controller?cmd=d&id=" + id;
        }
    }
</script>
<head>
    <title>$Title$</title>
</head>
<body>
<h1>Credit cards</h1>
<a href="createCard.jsp">Add</a> <a href="searchCard.jsp">Search</a>
<%= tableHTML %>
</body>
</html>
