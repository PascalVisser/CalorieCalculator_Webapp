package CalorieTracker.webapp.dao;

public class MyAppDaoFactory {
    private static MyAppDao daoInstance;

    /**
     * Code should be called at application startup
     */
    public static void initializeDataSource() throws DatabaseException {
        if (daoInstance != null) {
            throw new IllegalStateException("DAO can be initialized only once");
        }
        createConnection();
    }

    /**
     * serves the dao instance
     */
    public static MyAppDao getDataSource() {
        if (daoInstance == null) {
            throw new IllegalStateException("DAO is not initialized; call initializeDataSource() first");
        }
        return daoInstance;
    }

    private static void createConnection() throws DatabaseException {
        String dbUrl = "jdbc:mysql://@localhost:3306/userdb";
        String dbUser = "root";
        String dbPass = "welkom";
        daoInstance = MyAppDaoMySQL.getInstance(dbUrl, dbUser, dbPass);
        daoInstance.connect();
    }
}