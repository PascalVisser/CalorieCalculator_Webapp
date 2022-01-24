package CalorieTracker.webapp.DButils;

//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//


public class DbUser {
    String host;
    String userName;
    String databaseName;
    String databasePassword;

    public DbUser() {
    }

    public String toString() {
        return "User [host=" + this.host + ", userName=" + this.userName + ", databaseName=" + this.databaseName + "]";
    }

    public void setHost(String host) {
        this.host = host;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setDatabaseName(String databaseName) {
        this.databaseName = databaseName;
    }

    public void setDatabasePassword(String databasePassword) {
        this.databasePassword = databasePassword;
    }

    public String getHost() {
        return this.host;
    }

    public String getUserName() {
        return this.userName;
    }

    public String getDatabaseName() {
        return this.databaseName;
    }

    public String getDatabasePassword() {
        return this.databasePassword;
    }
}
