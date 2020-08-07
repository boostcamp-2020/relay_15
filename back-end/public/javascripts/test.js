function sendInfo (id, pw) {
    $.ajax({
        url: "/login",
        success: function(data) {
            if (id === data[0].id && pw === data[0].password) {
                console.log('s')
            } else {
                console.log('f')
            }
        },
    })
}