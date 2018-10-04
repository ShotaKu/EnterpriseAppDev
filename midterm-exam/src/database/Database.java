package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Database {
    private String driver;
    private String url;
    private String user;
    private String password;
    private Connection connection;
    private Statement statement;
    private ResultSet resultset;

    protected Database(String driver, String url, String user, String password) {
        this.driver = driver;
        this.url = url;
        this.user = user;
        this.password = password;
    }

    //Fixme: Edit parameters only when using!!!!!!!
    public Database() {
        driver = "com.mysql.jdbc.Driver";
        url = "jdbc:mysql://localhost:3306/employees";
        user = "root";
        password = "root";
    }

    public synchronized void open() throws Exception {
        Class.forName(driver);
        connection = DriverManager.getConnection(url, user, password);
        statement = connection.createStatement();
    }

    public ResultSet getResultSet(String sql) throws Exception {
        if ( statement.execute(sql) ) {
            return statement.getResultSet();
        }
        return null;
    }

    public void execute(String sql) throws Exception {
        statement.execute(sql);
    }

    public synchronized void close() throws Exception {
        if ( this.resultset != null ) this.resultset.close();
        if ( statement != null ) statement.close();
        if ( connection != null ) connection.close();
    }

    public Connection getConnection() {
        return connection;
    }
}
