package database.controller;

import database.dataClass.Employee;
import database.writeController.WriteEmployeeController;

import javax.servlet.http.HttpServletRequest;

public class EmployeeController extends Controller<Employee> {
    @Override
    protected Employee createT(HttpServletRequest request) {
        return new Employee(request);
    }

    @Override
    protected boolean create(Employee employee) {
        WriteEmployeeController weCon = new WriteEmployeeController();
        return weCon.insert(employee);
    }

    @Override
    protected Employee read(int id) {
        //No need
        return null;
    }

    @Override
    protected boolean update(int id, Employee employee) {
        WriteEmployeeController weCon = new WriteEmployeeController();
        return weCon.edit(id,employee);
    }

    @Override
    protected boolean delete(int id) {
        WriteEmployeeController weCon = new WriteEmployeeController();
        return weCon.delete(id);
    }

    @Override
    protected String getParameter(Employee employee) {
        return null;
    }
}
