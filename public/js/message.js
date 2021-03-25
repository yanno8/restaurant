socket.on('char-message', function (message) {  
    // console.log(message);
    $('.info').append(`<p><strong>${message.fullName}</strong>
        ${message.text}
        ${message.place}</p>
        `);
    });