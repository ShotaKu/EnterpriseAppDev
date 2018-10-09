<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.readController.ReadEmployeeController" %>
<%@ page import="database.dataClass.Employee" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/27
  Time: 午後 3:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>New employee</title>
</head>
<body>

<h2>Create new employee!</h2>
<form action="employee-controller">
    <input type="hidden" name="cmd" value="c">
    <table>
        <tr>
            <td>ID:</td>
            <td><input type="number" name="emp_no"></td>
        </tr>
        <tr>
            <td>First Name:</td>
            <td><input type="text" name="first_name"></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><input type="text" name="last_name"></td>
        </tr>
        <tr>
            <td>Birth date:</td>
            <td>
                <input type="date" name="birth_date">
            </td>
        </tr>
        <tr>
            <td>Hire date:</td>
            <td>
                <input type="date" name="hire_date">
            </td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <select name="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
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
