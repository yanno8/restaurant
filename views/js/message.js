socket.on('char-message', function (message) {  
    // console.log(message);
    $('.info').append(`<p>${message.title}
        <strong>${message.firstName}
        ${message.lastName}</strong>
        ${message.text1}
        ${message.table}
        ${message.text2}
        ${message.date}
        ${message.text3}
        ${message.time}</p>
        `);
    });