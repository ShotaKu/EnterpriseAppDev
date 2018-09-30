package database.dataClass;

import java.sql.ResultSet;

//TODO: Delete Me!!
public class Category {
    private int id;
    private String name;

    public Category(int id){
        this.id = id;
        name = "";
    }
    public  Category(int id, String name){
        this.id = id;
        this.name = name;
    }

    public Category(ResultSet rs) {
        try {
            this.id = rs.getInt("id");
            this.name = rs.getString("name");
        }catch (Exception e){
            e.getStackTrace();
        }
    }

    public Category() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
