package CalorieTracker.webapp.model;

import java.sql.*;

public class Validate {

    public static boolean checkUser(String username, String password) throws ClassNotFoundException {

        boolean userValid = false;
        Connection conn = null;
        try {
            //loading drivers for mysql
            Class.forName("com.mysql.cj.jdbc.Driver");

            //creating connection with the database
            String url = "jdbc:mysql://@localhost:3306/userdb";
            String DBUser = "root";
            String DBPassword = "welkom";
            conn = DriverManager.getConnection(url, DBUser, DBPassword);

            System.out.println("Connected to the database!");

            PreparedStatement ps = conn.prepareStatement("select * from userdetails where Username=? and Password=?");
            ps.setString(1, username);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();
            userValid = rs.next();

            System.out.println(userValid);

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
            return userValid;
        }
    }
