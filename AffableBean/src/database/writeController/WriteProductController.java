package database.writeController;

import database.dataClass.Product;

import java.sql.PreparedStatement;
import java.sql.SQLException;

//TODO:Delete Me!!
public class WriteProductController extends WriteController<Product> {
    @Override
    public PreparedStatement preparedStatementInsert(Product product) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("INSERT INTO product (name, price, description, last_update,category_id) VALUES(?, ?, ?, ?, ?)");
            pStatement.setString(1, product.getName());
            pStatement.setString(2, product.getPrice()+"");
            pStatement.setString(3, product.getDescription());
            pStatement.setString(4, product.getLast_update()+ "");
            pStatement.setString(5, product.getCategory().getId() + "");
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

    @Override
    public PreparedStatement preparedStatementEdit(int id, Product product) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("UPDATE product SET name = ?, price = ?, description = ?, last_update = ?, category_id = ? WHERE id = ?");
            pStatement.setString(1, product.getName());
            pStatement.setString(2, product.getPrice()+"");
            pStatement.setString(3, product.getDescription());
            pStatement.setString(4, product.getLast_update()+ "");
            pStatement.setString(5, product.getCategory().getId() + "");
            pStatement.setString(6,product.getId()+"");
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

    @Override
    public PreparedStatement preparedStatementDelete(int id) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("DELETE FROM product WHERE id = "+id);
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }
}
