package database.readController;

import database.Database;
import database.dataClass.Card;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class GetController {

    private Database db = null;
    public GetController(){
        db = new Database();
    }
    public Card[] getAllCards(){
        List<Card> cards = new ArrayList<Card>();
        try {
            db.open();
            ResultSet rs = db.getResultSet("select * from card");
            while(rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int brandid = rs.getInt("brand");
                int rec = rs.getInt("reccomend_rate");
                char gender = rs.getString("target_gender").charAt(0);
                Card card = new Card();
            }
            db.close();
        }catch (Exception e){

        }


        return cards.toArray(new Card[0]);
    }
}
