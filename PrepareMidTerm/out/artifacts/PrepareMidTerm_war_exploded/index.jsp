<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2018/09/24
  Time: 午後 6:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="database.Database" %>
<%@ page import="java.sql.ResultSet" %>
<%
  // 内容: データベースにアクセスする

// MyDBAccess のインスタンスを生成する
  Database db = new Database();

// データベースへのアクセス
  db.open();

// メンバーを取得
  ResultSet rs = db.getResultSet("select * from card");

// メンバー一覧表示用のテーブル
  String tableHTML = "<table border=1>";
  tableHTML += "<tr bgcolor=\"000080\"><td><font color=\"white\">メンバーID</font></td>"
          + "<td><font color=\"white\">名前</font></td>";

// 取得された各結果に対しての処理
  while(rs.next()) {

    int id = rs.getInt("id"); // メンバーIDを取得
    String name = rs.getString("name"); // メンバー名を取得

    // 文字コードを EUC_JP からUnicode へ変換
    //name = new String(name.getBytes("8859_1"), "EUC_JP");

    // テーブル用HTMLを作成
    tableHTML += "<tr><td align=\"right\">" + id + "</td>"
            + "<td>" + name + "</td>";
  }

  tableHTML += "</table>";

// データベースへのコネクションを閉じる
  db.close();

%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <%= tableHTML %>
  </body>
</html>
