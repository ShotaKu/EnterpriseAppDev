package database.readController;

import database.dataClass.Product;

import java.sql.ResultSet;

//TODO:Delete Me!!
public class ReadProductController extends ReadController<Product> {

    public ReadProductController(){
        super();
    }

    @Override
    protected Product createObject(ResultSet rs){
        //Send resultSet parameters to card constructor.
        return new Product(rs);
    }

    @Override
    protected Product[] createEmptyObjectList() {
        //Send empty T(Product) array
        return new Product[0];
    }

    @Override
    public Product[] getAll() {
        //MEMO: Fix sql here.
        return super.getAllT("select * from product, category  WHERE product.category_id = category.id");
    }

    @Override
    public Product get(int id) {
        //MEMO: Fix sql here.
        Product[] cards = super.getAllT("select * from product, category " +
                "WHERE product.category_id = category.id && product.id = " + id);
        Product result = null;
        if (0 < cards.length)
            result = cards[0];

        return result;
    }

    @Override
    public Product[] searchByName(String name) {
        if(0<name.length()){
            //MEMO: Fix sql here.
            return super.getAllT("select * from product, category " +
                    "WHERE product.category_id = category.id && product.name LIKE '%"+name+"%'");
        }else{
            return getAll();
        }
    }
}
