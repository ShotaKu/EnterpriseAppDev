<%@ page import="database.dataClass.Employee" %>
<%@ page import="database.readController.ReadEmployeeController" %>

<%@ page import="database.tableFactory.TableFactory" %>
<%
    // Table header!
    String tableHTML = TableFactory.getCardHTMLTableHead();
    int i = 0;

    // Get all cards.
    ReadEmployeeController gController = new ReadEmployeeController();
    Employee[] employees = gController.getAll();

    //Create table
    for (Employee employee : employees) {
        tableHTML += TableFactory.createHTMLTableRow(employee);
    }
    tableHTML += "</table>";
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script>
    function confirmDelete(id) {
        if (confirm("Are you sure to delete" + id + "?")) {
            window.location = "employee-controller?cmd=d&emp_no=" + id;
        }
    }
</script>
<head>
    <title>Employees</title>
</head>
<body>
<h1>Employees</h1>
<a href="addEmployee.jsp">Add</a>
<%= tableHTML %>
</body>
</html>
