package database.readController;

import database.dataClass.Category;

import java.sql.ResultSet;

//TODO: Delete Me!!
public class ReadCategoryController extends ReadController<Category> {
    @Override
    protected Category createObject(ResultSet rs) {
        return new Category(rs);
    }

    @Override
    protected Category[] createEmptyObjectList() {
        return new Category[0];
    }

    @Override
    public Category[] getAll() {
        return super.getAllT("select * from category");
    }

    @Override
    public Category get(int id) {
        //Memo: do not make this if not necessary
        return new Category(-1);
    }

    @Override
    public Category[] searchByName(String name) {
        //Memo: no need to impairment this if not necessary
        return new Category[0];
    }
}
