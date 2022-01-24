package CalorieTracker.webapp.dao;

import CalorieTracker.webapp.model.User;
import java.sql.*;

public class VerySimpleDbConnector {
    private final String url;
    private final String dbUser;
    private final String dbPassword;
    private Connection connection;


    public static void main(String[] args) {
        try {
            //connect
            VerySimpleDbConnector connector = new VerySimpleDbConnector("jdbc:mysql://@localhost:3306/userdb",
                    "root", "welkom");

            //insert a user
            connector.insertUser("Pascal", "visser");

            //fetch a user
            connector.getUser("Pascal", "Visser");

            //a catch-all for database interaction exceptions
        } catch (DatabaseException e) {
            e.printStackTrace();
        }
    }

    public VerySimpleDbConnector(String url, String dbUser, String dbPassword) throws DatabaseException {
        this.url = url;
        this.dbUser = dbUser;
        this.dbPassword = dbPassword;

        //make the connection
        connect();
    }

    private void connect() throws DatabaseException {
        try {
            //load driver class
            Class.forName("com.mysql.cj.jdbc.Driver");
            //create connection
            connection = DriverManager.getConnection(url, dbUser, dbPassword);
            //..which is risky
        } catch (Exception e) {
            e.printStackTrace();
            throw new DatabaseException("Something is wrong with the database, see cause Exception",
                    e.getCause());
        }
    }

    public User getUser(String userName, String userPass) throws DatabaseException  {
        try {
            //Prepare the SQL statement. The question marks are placeholders for repeated use with different data
            //!! Doing this within this method is extremely inefficient !!
            String fetchQuery = "SELECT * FROM userdetails WHERE Username = ? AND Password = ?";
            PreparedStatement ps = connection.prepareStatement(fetchQuery);

            //set data on the "?" placeholders of the prepared statement
            ps.setString(1, userName);
            ps.setString(2, userPass);

            //execute
            ResultSet rs = ps.executeQuery();

            //if there is data, process it
            while (rs.next()) {
                String userIdStr = rs.getString("user_id");
                User user = new User(userName, userPass);
                return user;
            }

            //close resources
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Something is wrong with the database, see cause Exception",
                    e.getCause());
        }
        return null;
    }

    public void insertUser(String userName, String userPass) throws DatabaseException  {
        try{
            //Prepare statement
            //!! Doing this within this method is extremely inefficient !!
            String insertQuery = "INSERT INTO userdetails (Username, Password) "
                    + " VALUES (?, ?)";
            PreparedStatement ps = connection.prepareStatement(insertQuery);

            //set data on the "?" placeholders of the prepared statement
            ps.setString(1, userName);
            ps.setString(2, userPass);

            //do the actual insert
            ps.executeUpdate();

            //close resources
            ps.close();
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new DatabaseException("Something is wrong with the database, see cause Exception",
                    ex.getCause());
        }
    }

    public void disconnect() throws DatabaseException {
        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

