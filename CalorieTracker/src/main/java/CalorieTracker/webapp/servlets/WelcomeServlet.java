package CalorieTracker.webapp.servlets;

import CalorieTracker.webapp.config.WebConfig;
import CalorieTracker.webapp.Database_IC.Validate;
import org.thymeleaf.context.WebContext;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serial;
import java.sql.Connection;
import java.sql.SQLException;

@WebServlet(name = "WelcomeServlet", urlPatterns = "/home", loadOnStartup = 1)
public class WelcomeServlet extends HttpServlet {

    @Override
    public void init() {
        System.out.println("[home] Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }

    @Serial
    private static final long serialVersionUID = 1L;


    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        System.out.println("POST request for /home is executed");

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try {
            Connection conn = Validate.DBConnect();
            if (Validate.CheckUser(username, password, conn)) {
                WebConfig.configureResponse(response);
                WebContext ctx = new WebContext(
                        request,
                        response,
                        request.getServletContext(),
                        request.getLocale());
                WebConfig.createTemplateEngine(getServletContext()).
                        process("food_input", ctx, response.getWriter());
            } else {
                out.print("Error, wrong username and/or password!");
            process(request, response);
        }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("GET request for /home is executed");
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
                process("home", ctx, response.getWriter());
    }
}