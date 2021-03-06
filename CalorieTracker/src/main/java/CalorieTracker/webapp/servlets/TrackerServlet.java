package CalorieTracker.webapp.servlets;

import CalorieTracker.webapp.config.WebConfig;
import CalorieTracker.webapp.Database_IC.EmptyDB;
import org.thymeleaf.context.WebContext;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serial;
import java.sql.SQLException;

@WebServlet(name = "TrackerServlet", urlPatterns = "/tracker")
public class TrackerServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("[Tracker] Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }

    @Serial
    private static final long serialVersionUID = 1L;

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("POST request for /tracker is executed");

        // code for deleting records of database, also not implemented at the moment
        /* try {
            String delete_check = request.getParameter("delete");
            EmptyDB.EmptyDatabase(delete_check);
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        } */

        process(request, response);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("POST request for /tracker is executed");
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
                process("tracker", ctx, response.getWriter());
    }

}

