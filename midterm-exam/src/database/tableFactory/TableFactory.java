package database.tableFactory;

import database.dataClass.Employee;

public class TableFactory {
    //Example start
    public static String getCardHTMLTableHead(){
        String tableHTML = "<table border=1>";
        tableHTML += "<tr bgcolor=\"000080\"><td><font color=\"white\">Emp-no</font></td>"
                + "<td><font color=\"white\">Birth day</font></td>"
                + "<td><font color=\"white\">Name</font></td>"
                + "<td><font color=\"white\">Gender</font></td>"
                + "<td><font color=\"white\">Hire date</font></td>";
        return tableHTML;
    }
    public static String createHTMLTableRow(Employee employee) {

        return "<tr><td align=\"right\">" + employee.getEmp_no() + "</td>"
                + "<td>" + employee.getBirth_date().toString() + "</td>"
                + "<td><a href=cardDetail.jsp?id=" + employee.getEmp_no() + ">" + employee.getFirst_name() +" "+ employee.getLast_name() + "</a></td>"
                + "<td>" + employee.getGender() + "</td>"
                + "<td>" + employee.getHire_date() + "</td>"
                + "<td><Button onclick=\"confirmDelete(" + employee.getEmp_no() + ");\">Delete</button></td>"
                + "<td><Button onclick=\"window.location='updateEmployee.jsp?id=" + employee.getEmp_no() + "';\">Update</button></td>";
    }
//    public static String createHTMLOption(Category c,boolean isSelected){
//        String selected = (isSelected) ? "selected" : "";
//        return "<option value='" + c.getId() + "'" + selected + ">" + c.getName() + "</option>";
//    }
    //Example end
}
