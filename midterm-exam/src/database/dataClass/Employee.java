package database.dataClass;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.sql.ResultSet;

import static commonClasses.Integer.parseInt;

public class Employee {
    private int emp_no;
    private Date birth_date;
    private String first_name;
    private String last_name;
    private char gender;
    private Date hire_date;

    public Employee(int id, Date birth_date, String first_name, String last_name, char gender, Date hire_date){
        this.emp_no = id;
        this.birth_date = birth_date;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.hire_date = hire_date;
    }
    public Employee(){

    }

    public Employee(ResultSet rs){
        try {
            this.emp_no = rs.getInt("emp_no");
            this.birth_date = rs.getDate("birth_date");
            this.first_name = rs.getString("first_name");
            this.last_name = rs.getString("last_name");
            this.gender = rs.getString("gender").charAt(0);
            this.hire_date = rs.getDate("hire_date");

        }catch (Exception e){
            e.getStackTrace();
        }
    }
    public Employee(HttpServletRequest request){
        if(request != null){
            //TODO
            this.emp_no = parseInt(request.getParameter("emp_no"));
            this.birth_date = Date.valueOf(request.getParameter("birth_date"));
            this.first_name = request.getParameter("first_name");
            this.last_name = request.getParameter("last_name");
            this.gender = request.getParameter("gender").charAt(0);
            this.hire_date =Date.valueOf(request.getParameter("hire_date"));
//            name = request.getParameter("name");
//            price = parseDouble(request.getParameter("price"));
//            description = request.getParameter("description");
//            this.last_update = new Timestamp(System.currentTimeMillis());
//            this.category = new Category(parseInt(request.getParameter("category_id")));
//            String tempID = request.getParameter("id");
//            if(tempID != null){
//                this.id = parseInt(tempID);
//            }
        }
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public char getGender() {
        return gender;
    }

    public Date getHire_date() {
        return hire_date;
    }

    public int getEmp_no() {
        return emp_no;
    }
}
