package CalorieTracker.webapp.model;

import java.util.Objects;

public class User {
    private String UserName;
    private String password;

    public User() {
    }

    public User(String name, String password) {
        this.UserName = name;
        this.password = password;

    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return UserName;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(UserName, user.UserName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(UserName);
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + UserName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
