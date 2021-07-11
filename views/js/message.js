socket.on('book', function (message) {  
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

socket.on('order', function (message) {  
    // console.log(message);
    $('.info').append(`<p>${message.title}
        <strong>${message.firstName}
        ${message.lastName}</strong>
        ${message.text1}
        ${message.food}
        ${message.text2}
        ${message.place}
        ${message.city}
        ${message.text3}
        ${message.date}
        ${message.text4}
        ${message.time}</p>
        `);
    });    