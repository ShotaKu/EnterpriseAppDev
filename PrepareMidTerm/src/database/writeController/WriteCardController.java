package database.writeController;

import database.dataClass.Card;

import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.SQLException;
//Memo: This is example of extended WriteController which use Card class.
public class WriteCardController extends WriteController <Card> {

    public WriteCardController() {
        super();
    }

    @Override
    public PreparedStatement preparedStatementInsert(Card card) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("INSERT INTO card (name, brand, cash_back, reccomend_rate, target_gender) VALUES(?, ?, ?, ?, ?)");
            pStatement.setString(1, card.getName());
            pStatement.setString(2, card.getBrand().getId() + "");
            pStatement.setString(3, card.isCashBack() ? "1" : "0");
            pStatement.setString(4, card.getRate() + "");
            pStatement.setString(5, card.getGender() + "");
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

    @Override
    public PreparedStatement preparedStatementEdit(int id,Card card) {
        PreparedStatement pStatement = null;
        try {
            //MEMO: Main fixing process is here.
            pStatement = super.getConnection()
                    .prepareStatement("UPDATE card SET name = ?, brand = ?, cash_back = ?, reccomend_rate = ?, target_gender = ? WHERE id = ?");
            pStatement.setString(1, card.getName());
            pStatement.setString(2, card.getBrand().getId() + "");
            pStatement.setString(3, card.isCashBack() ? "1" : "0");
            pStatement.setString(4, card.getRate() + "");
            pStatement.setString(5, card.getGender() + "");
            pStatement.setString(6,id+"");
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
                    .prepareStatement("DELETE FROM card WHERE id = "+id);
        } catch (SQLException e) {
            e.printStackTrace();
            pStatement = null;
        }
        return pStatement;
    }

}
