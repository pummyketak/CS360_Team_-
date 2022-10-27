const submitForm = () => {
    const eventInp = $(".event-box").val();
    const detailInp = $(".detail-box").val();
    const dateInp = $("input#event-date").val();
    const outdateInp = $("input#event-outdate").val();

    $.ajax({
        url: `./api/save}`,
        method: "GET",
        cache: false,
        beforeSend: () => {
            var dataJson = { "event": eventInp, "detail": detailInp, "date": dateInp, "outdate": outdateInp }
            var myJSON = JSON.stringify(dataJson);
            saveFile(myJSON);
        },
        success: () => {
            console.log(myJSON);
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

const saveFile = (myjson) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let msg = this.responseText;
        alert("ส่งคำร้องสำเร็จแล้วจ้า")
    };
    xhttp.open("POST", "/api/save/");
    xhttp.send(myjson);
};