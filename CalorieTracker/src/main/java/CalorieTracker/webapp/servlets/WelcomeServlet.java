package CalorieTracker.webapp.servlets;

import CalorieTracker.webapp.config.WebConfig;
import CalorieTracker.webapp.model.Validate;
import com.mysql.cj.protocol.x.XMessage;
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

@WebServlet(name = "WelcomeServlet", loadOnStartup = 1)
public class WelcomeServlet extends HttpServlet {

    @Override
    public void init() {
        System.out.println("Initializing Thymeleaf template engine");
        final ServletContext servletContext = this.getServletContext();
        WebConfig.createTemplateEngine(servletContext);
    }

    @Serial
    private static final long serialVersionUID = 1L;


    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        WebContext ctx = new WebContext(
                request,
                response,
                request.getServletContext(),
                request.getLocale());

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try {

            if(Validate.checkUser(username, password))
            {
                RequestDispatcher rd = request.getRequestDispatcher("food_input");
                rd.forward(request, response);
            }
            else
            {
                System.out.println("check1");
                ctx.setVariable("ErrorMessage", "Error, wrong username and/or password!");
                System.out.println("check2");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        process(request, response);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
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