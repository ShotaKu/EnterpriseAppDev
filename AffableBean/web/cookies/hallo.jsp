<%
    String fname = "";
    String lname = "";
    String name = "";
    Cookie cookie = null;
    Cookie[] cookies = null;

    // Get an array of Cookies associated with the this domain
    cookies = request.getCookies();

    if( cookies != null ) {

        for (int i = 0; i < cookies.length; i++) {
            cookie = cookies[i];
            String cname = cookie.getName();
            if(cname.equals("first_name")){
                fname = cookie.getValue();
            }else if(cname.equals("last_name")){
                lname = cookie.getValue();
            }
        }
        name = fname + " " + lname;
    }
%>
<html>
<body>
<h2>Welcome <%=name%></h2>
<form action = "main.jsp" method = "GET">
    First Name: <input type = "text" name = "first_name" value="<%= fname %>">
    <br />
    Last Name: <input type = "text" name = "last_name"  value="<%= lname %>"/>
    <input type = "submit" value = "Submit" />
</form>

</body>
</html>
