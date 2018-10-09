<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="database.readController.ReadEmployeeController" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.dataClass.Employee" %>
<%@ page import="static commonClasses.Integer.parseInt" %>
<%@ page import="java.util.Date" %>
<%
    String id = request.getParameter("id");
    String fname = "";
    String lname = "";
    Date bDate = new Date();
    Date hDate = new Date();
    char gen = 'M';
    Employee employee = new Employee();
    if(id != null){
        ReadEmployeeController rcController = new ReadEmployeeController();
        employee = rcController.get(parseInt(id));
        int i = 0;
        if(employee != null){
            fname = employee.getFirst_name();
            lname = employee.getLast_name();
            bDate = employee.getBirth_date();
            hDate = employee.getHire_date();
            gen = employee.getGender();
        }
    }
    String mSelected = gen=='M'?"selected='SELECTED'":"";
    String fSelected = gen=='F'?"selected='SELECTED'":"";
%>
<html>
<head>
    <title>Update employee</title>
</head>
<body>

<h2>Update employee <%=fname%>!</h2>
<form action="employee-controller">
    <input type="hidden" name="cmd" value="u">
    <input type="hidden" name="emp_no" value="<%=id%>">
    <table>
        <tr>
            <td>ID:</td>
            <td><%=id%></td>
        </tr>
        <tr>
            <td>First Name:</td>
            <td><input type="text" name="first_name" value="<%=fname%>"></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><input type="text" name="last_name" value="<%=lname%>"></td>
        </tr>
        <tr>
            <td>Birth date:</td>
            <td>
                <input type="date" name="birth_date" value="<%=bDate%>">
            </td>
        </tr>
        <tr>
            <td>Hire date:</td>
            <td>
                <input type="date" name="hire_date" value="<%=hDate%>">
            </td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <select name="gender">
                    <option value="M" <%=mSelected%>>Male</option>
                    <option value="F" <%=fSelected%>>Female</option>
                </select>
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
