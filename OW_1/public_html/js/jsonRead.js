function JsonRead() {
    var btn = document.getElementById('button');
    var data = document.getElementById('json_container');
    document.write("aaaa");
    btn.addEventListener('click', function()
    {
        function createObject() {
            return new XMLHttpRequest();
        }
        var req = createObject();
        req.open('GET', 'data.json', true);
//                req.open('GET', url, true);
//                req.open('GET', data, true);

        req.send(null);
        req.onreadystatechange = function() {
            if (req.readyState === 4)
                var jsonObj = eval("(" + req.responseText + ")");

            function Wyswietlenie(xxx) {
                var a = "";
                var cudzyslow = '"';
                for (var i = 0; i < xxx.users.length; i++) {
                    a += "<img src=" + cudzyslow + "icons/" + xxx.users[i].value + ".png" + cudzyslow + ">" +
                            "<div>" + xxx.users[i].name + "</div>" + "<br>";

//                   a += xxx.users[i].value + xxx.users[i].name;



                }
                return a;
            }
            data.innerHTML = Wyswietlenie(jsonObj);
            alert(Wyswietlenie(jsonObj));
//            for (var i = 0; i < jsonObj.users.length; i++) {

//                data.innerHTML = jsonObj.users[i].name;
//                obrazek.innerHTML = jsonObj.users[i].value;
            //alert(req.responseText);
            //alert(jsonObj.users);

            // dodać dynamicznie dodawany html
//                document.getElementById('test' + i).innerHTML = "TEST" + i;
//            }

//                    test.innerHTML = jsonObj.users[0].value;
//                    document.getElementById('test').innerHTML = "TEST";
        };

    });
}