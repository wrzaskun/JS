/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * http://api.jquery.com/replaceWith/
 */

function wczytywanieZdjec(){
       var object = 'http://188.226.134.118:8081/api/users/';
             //serwer artura
//            $.getJSON('data_server.json', function(data) {
                $.getJSON(object, function(data) {
                
                var output = "<ul>";
                for (var i in data) {
                    output += "<li>" + data[i].name + "</li>";
                    output += "<li>" + data[i].emo + "</li>";
                }
                output += "</ul>";
                document.getElementById('content4').innerHTML = output;
                document.getElementById('img_1').innerHTML = '<img id="img_1" src="icons/fear.png" alt="fear">';
            });
        
}