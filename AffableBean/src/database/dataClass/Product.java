package database.dataClass;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.Time;
import java.sql.Timestamp;

import static commonClasses.Double.parseDouble;
import static commonClasses.Integer.parseInt;

//TODO: Delete Me!!
public class Product {
    private int id;
    private String name;
    private double price;
    private String description;
    private Timestamp last_update;
    private Category category;

    public Product(int id, String name, double price, String description,Timestamp last_update, Category category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.last_update = last_update;
        this.category = category;
    }
    public Product(ResultSet rs){
        try {
            this.id = rs.getInt("id");
            this.name = rs.getString("name");
            this.description = rs.getString("description");
            price = rs.getDouble("price");
            this.last_update = rs.getTimestamp("last_update");
            this.category = new Category(rs.getInt("category_id"),rs.getString("category.name"));

        }catch (Exception e){
            e.getStackTrace();
        }
    }
    public Product(HttpServletRequest request){
        if(request != null){
            name = request.getParameter("name");
            price = parseDouble(request.getParameter("price"));
            description = request.getParameter("description");
            this.last_update = new Timestamp(System.currentTimeMillis());
            this.category = new Category(parseInt(request.getParameter("category_id")));
            String tempID = request.getParameter("id");
            if(tempID != null){
                this.id = parseInt(tempID);
            }
        }
    }

    public Product() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public Timestamp getLast_update() {
        return last_update;
    }

    public Category getCategory() {
        return category;
    }
}
