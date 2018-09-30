package affablebean.controller;// Import required java libraries

import javax.naming.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

// Extend HttpServlet class
public class ProductServlet extends HttpServlet {

    public void init() throws ServletException {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Deletion
        String id = request.getParameter("id");
        String cmd = request.getParameter("cmd");

        // Insertion
        String name = request.getParameter("name");
        String price = request.getParameter("price");
        String description = request.getParameter("description");
        String category_id = request.getParameter("category_id");


        // Set response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();


        // Insertion
        out.println(name+"<br/>");
        out.println(price+"<br/>");
        out.println(description+"<br/>");
        out.println(category_id+"<br/>");

        Context envContext = null;
        try {
            envContext = new InitialContext();
            out.println(envContext+"<br>");
//            NamingEnumeration<NameClassPair> list = envContext.list("java:comp/env");
//            while (list.hasMore()) {
//                NameClassPair nc = (NameClassPair)list.next();
//                out.println(nc);
//            }
//            Context initContext  = (Context)envContext.lookup("java:/comp/env");
            Context initContext = envContext;
//            DataSource ds = (DataSource)initContext.lookup("jdbc/affableBean");
            DataSource ds = (DataSource)envContext.lookup("java:/comp/env/jdbc/affablebean");
            Connection con = ds.getConnection();


            String sql = "";
            if (cmd != null && cmd.equals("d")) {
                // Delete a product
                sql = "DELETE FROM product WHERE id = ?";
                PreparedStatement stmt = con.prepareStatement(sql);
                stmt.setInt(1, Integer.parseInt(id));
                stmt.execute();
            } else if (cmd != null && cmd.equals("u")) {
                // Update a product
                sql = "UPDATE product SET name = ?, price = ?, description = ?, category_id = ? WHERE id = ?";
                PreparedStatement stmt=con.prepareStatement(sql);
                stmt.setString(1,name);
                stmt.setDouble(2,Double.parseDouble(price));
                stmt.setString(3,description);
                stmt.setInt(4,Integer.parseInt(category_id));
                stmt.setInt(5,Integer.parseInt(id));
                stmt.execute();

            } else {
                // Insert a new product
                sql = "insert into product (name,price,description,category_id)  values (?,?,?,?)";
                PreparedStatement stmt=con.prepareStatement(sql);
                stmt.setString(1,name);
                stmt.setDouble(2,Double.parseDouble(price));
                stmt.setString(3,description);
                stmt.setInt(4,Integer.parseInt(category_id));
                stmt.execute();
            }
//            out.println("Row affect "+r+"<br>");
            response.sendRedirect("products.jsp");

        }  catch (SQLException | NamingException e) {
            e.printStackTrace();
            out.print(e);
        }
    }

    public void destroy() {
        // do nothing.
    }
}