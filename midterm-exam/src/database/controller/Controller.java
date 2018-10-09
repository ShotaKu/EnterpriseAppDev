package database.controller;

import database.writeController.WriteController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static commonClasses.Integer.parseInt;


//No need to fix here.
public abstract class Controller<T> extends HttpServlet {
    private enum command {c, r, u, d};
    public void init() throws ServletException {
    }
    //Memo: no need to fix here
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        command cmd = checkCmd(request.getParameter("cmd"));

        int id = parseInt(request.getParameter("emp_no"));
        T t = null;

        PrintWriter out = response.getWriter();

        boolean result = false;
        if(cmd != null){
            switch (cmd){
                case c:
                    //create command.
                    t = createT(request);
                    result = create(t);
                    break;
                case r:
                    //not work and never used but for beautiful coding
                    //Why doesn't work? -> no way to return values...!
                    result = false;
                    break;
                case u:
                    //update command
                    t = createT(request);
                    result = update(id, t);
                    break;
                case d:
                    //delete command.
                    result = delete(id);
                    break;
            }
        }else {
            //if null command or input other command
            out.print("Invalid command!");
        }
        if(result){
            response.sendRedirect("index.jsp");
        }else{
            out.print("Result: Error!");
        }
    }
    //Create new T class based on request and return it.
    protected abstract T createT(HttpServletRequest request);
    //Create new record in database function.
    protected abstract boolean create(T t);
    //TODO: No need to implement read just return null is fine.
    protected abstract T read(int id);
    //Update values in database which has id parameter.
    protected abstract boolean update(int id,T t);
    //Delete record which has id parameter.
    protected abstract boolean delete(int id);
    //TODO:No need to implement getParameter(T t) just return null is fine.
    protected abstract String getParameter(T t);

    //Memo:No need to fix here.
    private command checkCmd(String cmd){
        command result = null;
        if(cmd != null) {
            if (command.c == command.valueOf(cmd)) result = command.c;
            else if (command.r == command.valueOf(cmd)) result = command.r;
            else if (command.u == command.valueOf(cmd)) result = command.u;
            else if (command.d == command.valueOf(cmd)) result = command.d;
        }
        return  result;
    }
    //Memo:No need to fix here.
    private void getBackLastPage(HttpServletRequest request
                                , HttpServletResponse response
                                , String parameter) throws IOException {
        response.sendRedirect(request.getHeader("referer")+parameter);
    }
}
