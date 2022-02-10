/**
 * Script for delete records of a database table
 * @author Pascal Visser
 * @version 1.0
 */

package CalorieTracker.webapp.Database_IC;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Objects;


public class EmptyDB {


    public static void EmptyDatabase (String check) throws SQLException, ClassNotFoundException {

        // Make connection
        Connection connect = Validate.DBConnect();

        // Try to delete contents of table or throw error
        if (Objects.equals(check, "True")) {
            Statement stmt = connect.createStatement();
                    stmt.execute("DELETE FROM test_input");
            System.out.println("done!");
        } else {
            System.out.println("Error, Something went wrong");
        }
    }
}
