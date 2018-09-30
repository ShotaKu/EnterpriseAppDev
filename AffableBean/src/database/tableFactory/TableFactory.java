package database.tableFactory;

import database.dataClass.Category;
import database.dataClass.Product;

public class TableFactory {
    //Fixme: Create function with input custom class when use
    //Example start
    public static String getCardHTMLTableHead(){
        String tableHTML = "<table border=1>";
        tableHTML += "<tr bgcolor=\"000080\"><td><font color=\"white\">メンバーID</font></td>"
                + "<td><font color=\"white\">name</font></td>"
                + "<td><font color=\"white\">category</font></td>"
                + "<td><font color=\"white\">price</font></td>"
                + "<td><font color=\"white\">description</font></td>"
                + "<td><font color=\"white\">Last update</font></td>";
        return tableHTML;
    }
    public static String createHTMLTableRow(Product p) {
        Category c = p.getCategory();

        return "<tr><td align=\"right\">" + p.getId() + "</td>"
                + "<td><a href=cardDetail.jsp?id=" + p.getId() + ">" + p.getName() + "</a></td>"
                + "<td>" + c.getName() + "</td>"
                + "<td>" + p.getPrice() + "</td>"
                + "<td>" + p.getDescription() + "</td>"
                + "<td>" + p.getLast_update() + "</td>"
                + "<td><Button onclick=\"confirmDelete(" + p.getId() + ");\">Delete</button></td>"
                + "<td><Button onclick=\"window.location='updateProduct.jsp?id=" + p.getId() + "';\">Update</button></td>";
    }
    public static String createHTMLOption(Category c,boolean isSelected){
        String selected = (isSelected) ? "selected" : "";
        return "<option value='" + c.getId() + "'" + selected + ">" + c.getName() + "</option>";
    }
    //Example end
}
