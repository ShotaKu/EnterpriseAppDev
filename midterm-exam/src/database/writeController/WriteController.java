package database.writeController;

import database.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;

public abstract class WriteController<T>{
    private Database db = null;

    protected WriteController(){
        db = new Database();
    }

    //Memo: No need to fix when using
    protected boolean executeChange(PreparedStatement pStatement){
        boolean result = false;
        try {
            //execute it and close connection.
            pStatement.executeUpdate();
            pStatement.close();
            db.close();
            result = true;
        } catch (Exception e) {
            //e.setStackTrace();
            result = false;
        }

        //Return true if execute hasn't exception, return false if exception occurred.
        return result;
    }
    //Memo: No need to fix when using
    public Connection getConnection(){
        return db.getConnection();
    }

    //MEMO: No need to fix
    public boolean insert(T t){
        try {
            db.open();
        } catch (Exception e) {
            e.printStackTrace();
        }
        boolean result = executeChange(preparedStatementInsert(t));
        return result;
    }
    //MEMO: No need to fix

    public boolean edit(int id, T t){
        try {
            db.open();
        } catch (Exception e) {
            e.printStackTrace();
        }
        boolean result = executeChange(preparedStatementEdit(id,t));

        return result;
    }

    public boolean delete(int id){
        try {
            db.open();
        } catch (Exception e) {
            e.printStackTrace();
        }
        boolean result = executeChange(preparedStatementDelete(id));
        return result;
    }

    //MEMO: Write new preparedStatementInsert function at extended class when using.
    public abstract PreparedStatement preparedStatementInsert(T t);

    //MEMO: Write new edit function at extended class when using.
    public abstract PreparedStatement preparedStatementEdit(int id, T t);

    //MEMO: Write new delete function at extended class when using.
    public abstract PreparedStatement preparedStatementDelete(int id);
}
