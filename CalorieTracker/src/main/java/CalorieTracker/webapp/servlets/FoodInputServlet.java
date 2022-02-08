package CalorieTracker.webapp.servlets;

import CalorieTracker.webapp.config.WebConfig;

import javax.servlet.ServletContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serial;
import java.sql.*;

import CalorieTracker.webapp.Database_IC.Validate;
import org.thymeleaf.context.WebContext;


@WebServlet(name = "FoodInputServlet", urlPatterns = "/food_input")
public class FoodInputServlet extends HttpServlet {

    @Override
    public void init() {
        System.out.println("[Food_input] Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }

    @Serial
    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{

        System.out.println("GET request for /food_input is executed");
        process(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        System.out.println("POST request for /food_input is executed");

        /*try {
                // Connect to the database
                Connection con = Validate.DBConnect();

                // Create a SQL query to insert data into demo table
                PreparedStatement st = con
                        .prepareStatement("insert into test_input (item, quantity) values(?, ?)");

                // For the first parameter,
                // get the data using request object
                // sets the data to st pointer
                st.setString(1, request.getParameter("food"));
                st.setString(2, request.getParameter("quantity"));

                // Execute the insert command using executeUpdate()
                // to make changes in database
                st.executeUpdate();

                // Close all the connections
                st.close();
                con.close();

                // Get a writer pointer
                // to display the successful result
                PrintWriter out = response.getWriter();
                out.println("<html><body><b>Successfully Inserted"
                        + "</b></body></html>");
            }
            catch (Exception e) {
                e.printStackTrace();
            } */

        process(request, response);
    }

    public void process(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //this step is optional; standard settings also suffice
        WebConfig.configureResponse(response);
        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());
        WebConfig.createTemplateEngine(getServletContext()).
                process("food_input", ctx, response.getWriter());
    }

}

