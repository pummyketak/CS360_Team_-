const submitForm = () => {
    const typeInp = $(".selectbox").val();
    const eventInp = $(".event-box").val();
    const detailInp = $(".detail-box").val();
    const dateInp = $("input#event-date").val();
    const outdateInp = $("input#event-outdate").val();
    var dataJson = { "type": typeInp, "event": eventInp, "detail": detailInp, "date": dateInp, "outdate": outdateInp }

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
            alert("ส่งคำร้องสำเร็จแล้วจ้า")
        },
        error: () => {

        },
        complete: () => {
            window.location.href = "/AdminPage"
        },
    });
};

$("#event-form").submit((e) => {
    e.preventDefault();
    submitForm();
});
