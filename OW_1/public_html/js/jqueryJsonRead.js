/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function jqueryJsonRead() {
    document.writeln("aaaaaaaaaaaa");
    $.getJSON("../data.json", function(json) {
        document.write(json);
    });

    $.getJSON("http://time.jsontest.com", function(data) {
        alert(data);
    });

}