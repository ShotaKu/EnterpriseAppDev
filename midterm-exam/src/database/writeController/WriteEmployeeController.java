package database.writeController;

import database.dataClass.Employee;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class WriteEmployeeController extends WriteController<Employee> {
    @Override
    public PreparedStatement preparedStatementInsert(Employee employee) {
        //TODO
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender,hire_date) VALUES(?, ?, ?, ?, ?, ?)");
            pStatement.setInt(1,employee.getEmp_no());
            pStatement.setDate(2, employee.getBirth_date());
            pStatement.setString(3, employee.getFirst_name()+"");
            pStatement.setString(4, employee.getLast_name());
            pStatement.setString(5, employee.getGender()+ "");
            pStatement.setDate(6, employee.getHire_date());
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

    @Override
    public PreparedStatement preparedStatementEdit(int id, Employee product) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("UPDATE product SET birth_date = ?, first_name = ?, last_name = ?, gender = ?, hire_date = ? WHERE id = ?");
            pStatement.setString(1, product.getBirth_date()+"");
            pStatement.setString(2, product.getFirst_name()+"");
            pStatement.setString(3, product.getLast_name());
            pStatement.setString(4, product.getGender()+ "");
            pStatement.setString(5, product.getHire_date() + "");
            pStatement.setString(6,product.getEmp_no()+"");
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

    @Override
    public PreparedStatement preparedStatementDelete(int id) {
        //TODO
        return null;
    }
}
