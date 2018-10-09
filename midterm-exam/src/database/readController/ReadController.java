package database.readController;

import database.Database;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public abstract class ReadController<T>{
    private Database db = null;
    protected ReadController(){ db = new Database(); }

    //Memo: no need to fix this function
    protected T[] getAllT(String sql){
        List<T> objList = new ArrayList<T>();
        try {
            //Get all result that can found from query of input sql
            db.open();
            ResultSet rs = db.getResultSet(sql);
            while (rs.next()) {
                //Then add objects to lists
                objList.add(createObject(rs));
            }
            db.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
        return objList.toArray(createEmptyObjectList());
    }
    //Write all value mapping in createObject function
    protected abstract T createObject(ResultSet rs);
    //using when return a empty T array if result is not found.
    protected abstract T[] createEmptyObjectList();

    public abstract T[] getAll();
    public abstract T get(int id);
    public abstract T[] searchByName(String name);
}
