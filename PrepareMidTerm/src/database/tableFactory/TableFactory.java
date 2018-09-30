package database.tableFactory;

import database.dataClass.Brand;
import database.dataClass.Card;

import javax.jnlp.FileContents;

public class TableFactory {
    //Fixme: Create function with input custom class when use
    //Example start
    public TableFactory() {

    }

    public String createHTMLTableRow(Card card) {
        Brand brand = card.getBrand();

        return "<tr><td align=\"right\">" + card.getId() + "</td>"
                + "<td><a href=cardDetail.jsp?id=" + card.getId() + ">" + card.getName() + "</a></td>"
                + "<td>" + brand.getName() + "</td>"
                + "<td>" + card.isCashBack() + "</td>"
                + "<td>" + card.getRate() + "</td>"
                + "<td>" + card.getGenderJapanese() + "</td>"
                + "<td><Button onclick=\"confirmDelete(" + card.getId() + ");\">Delete</button></td>"
                + "<td><Button onclick=\"window.location='updateCard.jsp?id=" + card.getId() + "';\">Update</button></td>";
    }
    public String createHTMLTableCardHead(){
        String table = "<table border=1>";
        table += "<tr bgcolor=\"000080\"><td><font color=\"white\">メンバーID</font></td>"
                + "<td><font color=\"white\">名前</font></td>"
                + "<td><font color=\"white\">ブランド</font></td>"
                + "<td><font color=\"white\">キャッシュバック</font></td>"
                + "<td><font color=\"white\">おすすめ度</font></td>"
                + "<td><font color=\"white\">対象</font></td>";
        return table;
    }
    public String createHTMLOptions(Brand brand) {
        return createHTMLOptions(brand, false);
    }

    public String createHTMLOptions(Brand brand, Boolean isSelected) {
        String selected = (isSelected) ? "selected" : "";
        return "<option value='" + brand.getId() + "'" + selected + ">" + brand.getName() + "</option>";
    }
    //Example end
}
