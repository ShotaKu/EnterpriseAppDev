package database.readController;

import database.dataClass.Product;

import java.sql.ResultSet;

public class exampleController extends ReadController<Product> {

    @Override
    protected Product createObject(ResultSet rs) {
        return null;
    }

    @Override
    protected Product[] createEmptyObjectList() {
        return new Product[0];
    }

    @Override
    public Product[] getAll() {
        return new Product[0];
    }

    @Override
    public Product get(int id) {
        return null;
    }

    @Override
    public Product[] searchByName(String name) {
        return new Product[0];
    }
}
