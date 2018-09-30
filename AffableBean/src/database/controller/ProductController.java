package database.controller;

import database.dataClass.Product;
import database.writeController.WriteProductController;

import javax.servlet.http.HttpServletRequest;

//TODO: Delete Me!!
public class ProductController extends Controller<Product> {

    //MEMO: This is example class of extended controller class T = Product
    @Override
    protected Product createT(HttpServletRequest request) {
        return new Product(request);
    }

    @Override
    protected boolean create(Product product) {
        WriteProductController wpController = new WriteProductController();
        return wpController.insert(product);
    }

    @Override
    protected Product read(int id) {
        return null;
    }

    @Override
    protected boolean update(int id, Product product) {
        WriteProductController wpController = new WriteProductController();
        return wpController.edit(id,product);
    }

    @Override
    protected boolean delete(int id) {
        WriteProductController wpController = new WriteProductController();
        return wpController.delete(id);
    }

    @Override
    protected String getParameter(Product product) {
        return null;
    }

    //Example end
}
