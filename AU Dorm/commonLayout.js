function showHeader(){
    var html = "<div id='templatemo_top_panel'>";
    html += "<div id='templatemo_header_section'>";
    // <!--ここタイトル-->
    html += "<div id='templatemo_header'>AU DORM</div>";
    html += "</div>";//<!-- end of header section -->

    html += "<div id='templatemo_menu_login_section'>";
    html += "<div id='templatemo_menu_section'>";
    html += "<div id='templatemo_menu_panel'>"
    // <!-- ここメニュー -->
    html += "<ul>";
    html += "<li><a href='index.html' class='current'>Home</a></li>";
    html += "<li><a href='dorms.html'>Dorm List</a></li>";
    html += "<li><a href='#'>Students</a></li>";
    html += " <li><a href='owners.html'>Owners</a></li>";
    html += " <li><a href='#'>About</a></li>";
    html += " <li><a href='#'>Contact</a></li>";
    html += " </ul> ";
    html += "</div>";//<!-- end of menu -->
    html += "</div>";
    // <!--ここログインセッション-->
    html += "<div id='templatemo_login_section'>";
    html += "<form id='login_controller' method='get' action='#'></form>";
    html += "</div>";
    html += "</div>";//<!-- end of menu login section -->
    html += "</div>";//<!-- end of top panel -->
    document.write(html);
}
/* <div id="templatemo_top_panel">
	<div id="templatemo_header_section">
        <!--ここタイトル-->
		<div id="templatemo_header">
        	AU DORM
        </div>
    </div> <!-- end of header section -->
    
    <div id="templatemo_menu_login_section">
    	<div id="templatemo_menu_section">
        	<div id="templatemo_menu_panel">
                <!-- ここメニュー -->
                <ul>
                    <li><a href="index.html" class="current">Home</a></li>
                    <li><a href="dorms.html">Dorm List</a></li>
                    <li><a href="#">Students</a></li>
                    <li><a href="owners.html">Owners</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>                   
                </ul> 
            </div> <!-- end of menu -->
        </div>
        <!--ここログインセッション-->
        <div id="templatemo_login_section">
        	<form id="login_controller" method="get" action="#">
                <!-- <script>checkLoginStatus();</script> -->
            </form>
        </div>
    </div> <!-- end of menu login section -->
</div> <!-- end of top panel --> */