package CalorieTracker.webapp.dao;

import CalorieTracker.webapp.model.User;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public final class MyAppDaoMySQL implements MyAppDao {
    private static final String GET_USER = "get_user";
    private static final String INSERT_USER = "insert_user";
    private final String url;
    private final String dbUser;
    private final String dbPassword;
    private Connection connection;
    private final Map<String, PreparedStatement> preparedStatements = new HashMap<>();

    /*singleton pattern*/
    private static MyAppDaoMySQL uniqueInstance;

    /**
     * singleton pattern
     * @param url
     * @param dbUser
     * @param dbPassword
     */
    private MyAppDaoMySQL(String url, String dbUser, String dbPassword) {
        this.url = url;
        this.dbUser = dbUser;
        this.dbPassword = dbPassword;
    }

    /**
     * singleton pattern
     */
    public static MyAppDaoMySQL getInstance(String url, String dbUser, String dbPassword) {
        //lazy
        if (uniqueInstance == null) {
            uniqueInstance = new MyAppDaoMySQL(url, dbUser, dbPassword);
        }
        return uniqueInstance;
    }


    @Override
    public void connect() throws DatabaseException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(url, dbUser, dbPassword);
            prepareStatements();
        } catch (Exception e) {
            e.printStackTrace();
            throw new DatabaseException("Something is wrong with the database, see cause Exception",
                    e.getCause());
        }
    }

    /**
     * prepares prepared statements for reuse
     * @throws SQLException
     */
    private void prepareStatements() throws SQLException {
        String fetchQuery = "SELECT * FROM userdetails WHERE Username = ? AND Password = ?";
        PreparedStatement ps = connection.prepareStatement(fetchQuery);
        this.preparedStatements.put(GET_USER, ps);

        String insertQuery = "INSERT INTO userdetails (Username, Password) "
                + " VALUES (?, ?)";
        ps = connection.prepareStatement(insertQuery);
        this.preparedStatements.put(INSERT_USER, ps);
    }

    @Override
    public User getUser(String userName, String userPass) throws DatabaseException  {
        try {
            PreparedStatement ps = this.preparedStatements.get(GET_USER);
            ps.setString(1, userName);
            ps.setString(2, userPass);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String userIdStr = rs.getString("user_id");
                User user = new User(userName, userPass);
                return user;
            }
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
            PreparedStatement ps = this.preparedStatements.get(INSERT_USER);
            ps.setString(1, userName);
            ps.setString(2, userPass);
            ps.executeUpdate();
            ps.close();
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new DatabaseException("Something is wrong with the database, see cause Exception",
                    ex.getCause());
        }
    }

    @Override
    public void disconnect() throws DatabaseException {
        try{
            for( String key : this.preparedStatements.keySet() ){
                this.preparedStatements.get(key).close();
            }
        }catch( Exception e ){
            e.printStackTrace();
        }
        finally{
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

