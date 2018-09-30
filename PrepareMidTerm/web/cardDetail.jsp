<%@ page import="database.dataClass.Card" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%
    String name = request.getParameter("id");
    String table = "";
    if(name != null){
        Card c = new Card(request);
        TableFactory tFtactory = new TableFactory();
        table = tFtactory.createHTMLTableRow(c);
    }
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form name="showDetail" action="card-controller">
    <input type="hidden" name="id" value="<%=request.getParameter("id")%>">
    <input type="hidden" name="cmd" value="r">
</form>
<h2>Detail</h2>
<%=table%>
</body>
</html>
