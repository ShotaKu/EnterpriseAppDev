package database.dataClass;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;

import static commonClasses.Integer.parseInt;

//Fixme: Create new data class when using
public class Card {
    private int id = 0;
    private String name = "";
    private Brand brand = null;
    private boolean isCashBack = false;
    private int rate = 0;
    private char gender = 0;

    public Card(){

    }
    public Card(int id,String name,Brand brand, int rec, char gender){
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.rate = rec;
        this.gender = gender;
    }
    public Card(String name,int brandId, boolean cashBack, int rec, char gender){
        //Insertion form
        this.name = name;
        this.brand = new Brand(brandId);
        this.rate = rec;
        this.gender = gender;
    }

    //Fixme: Create new data class when using
    public Card(ResultSet rs){
        try{
            this.id = rs.getInt("card.id");
            this.name = rs.getString("name");
            this.brand = new Brand(rs.getInt("brand.id"),rs.getString("brand.name"));
            this.isCashBack = rs.getBoolean("cash_back");
            this.rate = rs.getInt("reccomend_rate");
            this.gender = rs.getString("target_gender").charAt(0);
        }catch (Exception e){

        }
    }

    public String getParametersString() {
        return "?id="+id
                +"&name="+name
                +"&brand="+brand.getId()
                +"&isCashBack="+isCashBack
                +"&rate="+rate
                +"&gender="+gender;
    }
    //↑↑↑↑ Parameter to class ↓↓↓↓ class to parameter.
    public Card(HttpServletRequest request) {
        if(request != null){
            name = request.getParameter("name");
            brand = new Brand(parseInt(request.getParameter("brand")));
            rate = parseInt(request.getParameter("rate"));
            isCashBack = (request.getParameter("isCashBack") == "on") ? true : false;
            gender = request.getParameter("gender").charAt(0);
            String tempID = request.getParameter("id");
            if(tempID != null){
                id = parseInt(tempID);
            }
        }
    }
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Brand getBrand() {
        return brand;
    }
    public int getRate() {
        return rate;
    }
    public char getGender() {
        return gender;
    }
    public String getGenderJapanese(){
        String gen = "両方";
        if(gender == 'f'){
            gen = "女性";
        }else if(gender == 'm'){
            gen = "男性";
        }
        return gen;
    }
    public boolean isCashBack() { return isCashBack; }
}
