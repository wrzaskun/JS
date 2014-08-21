window.onload = function() {
    var status = document.getElementById("status");
    var canvas = document.getElementById("canvas");
    var buttonColor = document.getElementById("color");
    var buttonDepth = document.getElementById("depth");
    var kinectUpButton = document.getElementById("KinectUp");
    var kinectDownButton = document.getElementById("KinectDown");
    var reconnectButton = document.getElementById("Reconnect");
    var emotionSpan = document.getElementById("emotionSpan");
    var context = canvas.getContext("2d");

    var camera = new Image();

    camera.onload = function() {
        context.drawImage(camera, 0, 0);
    };

    if (!window.WebSocket) {
        status.innerHTML = "Your browser does not support web sockets!";
        return;
    }

    connect();

    function connect() {
        status.innerHTML = "Connecting to server...";

        // Initialize a new web socket.
        var socket = new WebSocket("ws://localhost:8181/KinectHtml5");

        // Connection established.
        socket.onopen = function() {
            status.innerHTML = "Connection successful.";
        };

        // Connection closed.
        socket.onclose = function() {
            status.innerHTML = "Connection closed.";
        };

        // Receive data FROM the server!
        socket.onmessage = function(event) {
            // if (typeof event.data === "string") {
            // // SKELETON DATA

            // // Get the data in JSON format.
            // var jsonObject = JSON.parse(event.data);

            // // Display the skeleton joints.
            // for (var i = 0; i < jsonObject.skeletons.length; i++) {
            // for (var j = 0; j < jsonObject.skeletons[i].joints.length; j++) {
            // var joint = jsonObject.skeletons[i].joints[j];

            // // Draw!!!
            // context.fillStyle = "#FF0000";
            // context.beginPath();
            // context.arc(joint.x, joint.y, 10, 0, Math.PI * 2, true);
            // context.closePath();
            // context.fill();
            // }
            // }
            // }
            if (typeof event.data === "string") {
                //alert(event.data);
                emotionSpan.innerHTML = event.data;
            }
            else if (event.data instanceof Blob) {
                // RGB FRAME DATA
                // 1. Get the raw data.
                var blob = event.data;

                // 2. Create a new URL for the blob object.
                window.URL = window.URL || window.webkitURL;

                var source = window.URL.createObjectURL(blob);

                // 3. Update the image source.
                camera.src = source;

                // 4. Release the allocated memory.
                window.URL.revokeObjectURL(source);
            }
        };
        reconnectButton.onclick = function() {

            socket.close();
            connect();
        }

        buttonColor.onclick = function() {
            socket.send("Color");
        }

        buttonDepth.onclick = function() {
            socket.send("Depth");
        }

        kinectUpButton.onclick = function() {
            socket.send("KinectUp");
        }

        kinectDownButton.onclick = function() {
            socket.send("KinectDown");
        }
    }


};