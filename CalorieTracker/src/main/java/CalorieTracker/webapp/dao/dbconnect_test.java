package CalorieTracker.webapp.dao;

import java.sql.*;

public class dbconnect_test {

    public static void main(String[] args) {
        ConnectionTest();
    }


    public static void ConnectionTest() {
        Connection conn = null;
        try {
            String url = "jdbc:mysql://@localhost:3306/userdb";
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url, "root", "welkom");

            System.out.println("Got it!");

        } catch (SQLException e) {
            throw new Error("Problem", e);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
                System.out.println(ex.getMessage());
            }
        }
    }
}