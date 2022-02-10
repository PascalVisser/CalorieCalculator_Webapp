/**
 * Script for Validate a user with a given username and password
 * @author Pascal Visser
 * @version 1.0
 */

package CalorieTracker.webapp.Database_IC;

import java.sql.*;

public class Validate {

    public static Connection DBConnect () throws ClassNotFoundException, SQLException {

        Connection conn = null;

        //loading drivers for mysql
        Class.forName("com.mysql.cj.jdbc.Driver");

        //creating connection with the database
        String url = "jdbc:mysql://@localhost:2222/calories";
        String DBUser = "calories";
        String DBPassword = "7w42c3hAqkDV";
        conn = DriverManager.getConnection(url, DBUser, DBPassword);

        System.out.println("Connected to the database!");

        //return connection as object
        return conn;
    }

    public static boolean CheckUser (String username, String password,
                                     Connection connect) throws SQLException {

        //set check variable
        boolean userValid = false;

        //check username and password match records of the database
        PreparedStatement ps = connect.prepareStatement
                ("select * from userdetails where Username=? and Password=?");

        ps.setString(1, username);
        ps.setString(2, password);
        ResultSet rs = ps.executeQuery();
        userValid = rs.next();

        System.out.println("Password input correct? = " + userValid);

        return userValid;
    }
}