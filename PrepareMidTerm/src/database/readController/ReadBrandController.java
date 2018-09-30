package database.readController;

import database.dataClass.Brand;

import java.sql.ResultSet;

public class ReadBrandController extends ReadController<Brand> {
    @Override
    protected Brand createObject(ResultSet rs) {
        return new Brand(rs);
    }

    @Override
    protected Brand[] createEmptyObjectList() {
        return new Brand[0];
    }

    @Override
    public Brand[] getAll() {
        return super.getAllT("select * from brand");
    }

    @Override
    public Brand get(int id) {
        return null;
    }

    @Override
    public Brand[] searchByName(String name) {
        return new Brand[0];
    }
}
