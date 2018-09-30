package database.readController;

import database.Database;
import database.dataClass.Brand;
import database.dataClass.Card;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

//Memo: This is example of extended ReadController class. T = Card;
public class ReadCardController extends ReadController <Card> {

    public ReadCardController() {
        super();
    }

    @Override
    protected Card createObject(ResultSet rs) {
        //Send resultSet parameters to card constructor.
        return new Card(rs);
    }

    @Override
    protected Card[] createEmptyObjectList() {
        //Send empty T(Card) array
        return new Card[0];
    }

    @Override
    public Card[] getAll() {
        //MEMO: Fix sql here.
       return super.getAllT("select * from card, brand " +
               "WHERE card.brand = brand.id");
    }

    @Override
    public Card get(int id) {
        //MEMO: Main fixing process is here.
        Card[] cards = super.getAllT("select * from card, brand " +
                    "WHERE card.brand = brand.id && card.id = " + id);
        Card result = null;
        if (0 < cards.length)
            result = cards[0];

        return result;
    }

    @Override
    public Card[] searchByName(String name) {
        if(0<name.length()){
            return super.getAllT("select * from card, brand " +
                    "WHERE card.brand = brand.id && card.name LIKE '%"+name+"%'");
        }else{
            return getAll();
        }
    }
}
