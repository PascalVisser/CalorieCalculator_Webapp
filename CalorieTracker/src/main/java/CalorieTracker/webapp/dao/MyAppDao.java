package CalorieTracker.webapp.dao;

import CalorieTracker.webapp.model.User;

public interface MyAppDao {

    /**
     * connection logic should be put here
     *
     * @throws DatabaseException
     */
    void connect() throws DatabaseException;

    /**
     * shutdown logic should be put here
     *
     * @throws DatabaseException
     */
    void disconnect() throws DatabaseException;

    /**
     * fetches a user by username and password.
     *
     * @param userName
     * @param userPass
     * @throws DatabaseException
     */
    User getUser(String userName, String userPass) throws DatabaseException;

    /**
     * inserts a new User.
     *
     * @param userName
     * @param userPass
     * @throws DatabaseException
     */
}