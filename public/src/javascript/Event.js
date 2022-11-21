const submitForm = () => {
    const typeInp = $(".selectbox").val();
    const eventInp = $(".event-box").val();
    const detailInp = $(".detail-box").val();
    const dateInp = $("input#event-date").val();
    const outdateInp = $("input#event-outdate").val();
    const imgInp = $("input#myfile").val().replace(/C:\\fakepath\\/i, '');
    var dataJson = { "type": typeInp, "event": eventInp, "detail": detailInp, "date": dateInp, "outdate": outdateInp, "img": "./public/src/images/events/" + imgInp }

    $.ajax({
        url: `./api/save`,
        method: "POST",
        cache: false,
        beforeSend: () => {
            var myJSON = JSON.stringify(dataJson);
            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/api/save", true);
            xhttp.send(myJSON);
        },
        success: () => {
            console.log('Send Success')
        },
        error: () => {

        },
        complete: () => {
            window.location.href = "/AdminPage"
        },
    });
    var form = $('#event-form')[0];
    var formData = new FormData(form);
    console.log(formData)
    $.ajax({
        url: `./api/upload`,
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        success: function (r) {
            console.log("result", r)
        },
        error: function (e) {
            console.log("some error", e);
        }
    });
};

$("#event-form").submit((e) => {
    e.preventDefault();
    submitForm();
});
