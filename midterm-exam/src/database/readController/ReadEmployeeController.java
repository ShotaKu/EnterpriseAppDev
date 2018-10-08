package database.readController;

import database.dataClass.Employee;

import java.sql.ResultSet;

public class ReadEmployeeController extends ReadController<Employee> {
    @Override
    protected Employee createObject(ResultSet rs) {
        return new Employee(rs);
    }

    @Override
    protected Employee[] createEmptyObjectList() {
        return new Employee[0];
    }

    @Override
    public Employee[] getAll() {
        return super.getAllT("select * from employees");
    }

    @Override
    public Employee get(int id) {
        Employee[] cards = super.getAllT("select * from employees" +
                " WHERE emp_no = " + id);
        Employee result = null;
        if (0 < cards.length)
            result = cards[0];

        return result;
    }

    @Override
    public Employee[] searchByName(String name) {
        //NO NEED!!
        return new Employee[0];
    }
}
