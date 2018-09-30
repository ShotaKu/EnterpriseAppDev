<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="database.readController.ReadBrandController" %>
<%@ page import="database.dataClass.Brand" %>
<%@ page import="database.tableFactory.TableFactory" %>
<%@ page import="database.readController.ReadCardController" %>
<%@ page import="database.dataClass.Card" %>
<%@ page import="static commonClasses.Integer.parseInt" %>
<%
    //Fixme: Change me when you use!
    String id = request.getParameter("id");

    Card card = new Card();
    String brandOptions = "<option>Load error<option>";
    if(id != null){
        ReadCardController rcController = new ReadCardController();
        card = rcController.get(parseInt(id));
        int i = 0;
        ReadBrandController gController = new ReadBrandController();
        Brand[] brands = gController.getAll();

        brandOptions = "";
        //Create brand options
        for (Brand brand: brands) {
            TableFactory tFactory = new TableFactory();
            Boolean isSelected = (brand.getId() == card.getBrand().getId());
            brandOptions += tFactory.createHTMLOptions(brand,isSelected);
        }
    }
%>
<html>

<head>
    <title>update card</title>
</head>
<body>

<h2>Update card!</h2>
<form action="card-controller">
    <input type="hidden" name="cmd" value="u">
    <input type="hidden" name="id" value="<%= id %>">
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" name="name"value="<%=card.getName()%>"></td>
        </tr>
        <tr>
            <td>Brand:</td>
            <td>
                <select name="brand">
                    <%= brandOptions %>
                </select>
            </td>
        </tr>
        <tr>
            <td>Brand:</td>
            <td>
                <input type="number" max="5" min="1" name="rate" value="<%=card.getRate()%>">
            </td>
        </tr>
        <tr>
            <td>Target gender:</td>
            <td>
                <select name="gender">
                    <option value="m" <%=(card.getGender() == 'm')?"selected":""%>>男性</option>
                    <option value="f" <%=(card.getGender() == 'f')?"selected":""%>>女性</option>
                    <option value="b" <%=(card.getGender() == 'b')?"selected":""%>>両方</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Cash back:</td>
            <td>
                <input type="checkbox" name="isCashBack" <%=card.isCashBack()==true?"checked=\"on\"":""%>>
            </td>
        </tr>
        <tr>
            <td>
                <button type="submit">Update</button>
            </td>
        </tr>
    </table>
</form>
</body>
</html>
