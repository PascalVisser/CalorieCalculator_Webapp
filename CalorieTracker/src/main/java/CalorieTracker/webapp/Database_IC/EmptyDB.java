package CalorieTracker.webapp.Database_IC;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Objects;


public class EmptyDB {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        EmptyDatabase("True");
    }

    public static void EmptyDatabase (String check) throws SQLException, ClassNotFoundException {

        Connection connect = Validate.DBConnect();

        if (Objects.equals(check, "True")) {

            Statement stmt = connect.createStatement();
                    stmt.execute("DELETE FROM test_input");
            System.out.println("done!");
        } else {
            System.out.println("nope");
        }
    }
}
