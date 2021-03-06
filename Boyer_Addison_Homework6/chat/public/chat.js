window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + ('Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
            // Set the text back to nothing.
            field.value = "";
            
        } else {
            console.log("There is a problem:", data);
        }
    });

    sendButton.onclick = function() {
        document.title="Message sent";
        console.log(name);
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text });
			
        }
    };
}