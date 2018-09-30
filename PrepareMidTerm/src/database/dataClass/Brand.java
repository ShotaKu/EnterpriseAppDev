package database.dataClass;

import java.sql.ResultSet;

public class Brand {
    private int id = 0;
    private String name = "";
    public Brand(int id, String name){
        this.id = id;
        this.name = name;
    }

    public Brand(int id){
        this.id = id;
    }

    public Brand(ResultSet rs) {
        try{
            this.id = rs.getInt("id");
            this.name = rs.getString("name");
        }catch (Exception e){

        }
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}
