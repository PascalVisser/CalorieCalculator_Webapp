package CalorieTracker.webapp.DButils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class DbCredentials {
    public DbCredentials() {
    }

    public static String getMySQLdbPassword() throws PasswordRetrievalException, FileNotFoundException, IOException {
        DbUser u;
        try {
            u = getMySQLuser();
        } catch (NoSuchFieldException var2) {
            throw new PasswordRetrievalException(var2.getMessage());
        }

        return u.databasePassword;
    }

    public static DbUser getMySQLuser() throws FileNotFoundException, IOException, NoSuchFieldException {
        String passPropsFileName = System.getProperty("user.home") + File.separator + ".my.cnf";
        Properties properties = new Properties();
        properties.load(new FileInputStream(passPropsFileName));
        DbUser u = new DbUser();
        if (!properties.containsKey("user")) {
            throw new NoSuchFieldException("field \"user\" is not found in the configuration");
        } else {
            u.userName = properties.getProperty("user");
            if (!properties.containsKey("password")) {
                throw new NoSuchFieldException("field \"password\" is not found in the configuration");
            } else {
                u.databasePassword = properties.getProperty("password");
                if (!properties.containsKey("host")) {
                    throw new NoSuchFieldException("field \"host\" is not found in the configuration");
                } else {
                    u.host = properties.getProperty("host");
                    if (!properties.containsKey("database")) {
                        throw new NoSuchFieldException("field \"database\" is not found in the configuration");
                    } else {
                        u.databaseName = properties.getProperty("database");
                        return u;
                    }
                }
            }
        }
    }
}