function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let i = getParameterByName("id");
var getjsons;

function loadInfo() {
    $.ajax({
        url: `./api/getJson`,
        method: "GET",
        cache: false,
        beforeSend: () => {
            $.get("/api/getJson", function (responseText) {
                getjsons = responseText;
                datajson = getjsons;
                document.getElementById("event-name").value = datajson[i].event;
                document.getElementById("event-detail").value = datajson[i].detail;
                document.getElementById("event-date").value = datajson[i].date;
                document.getElementById("event-outdate").value = datajson[i].outdate;
            });
        },
        success: () => {
        
        },
        error: () => {
            console.log(error);
        }
    })

}

const submitForm = () => {
    const eventInp = $(".event-box").val();
    const detailInp = $(".detail-box").val();
    const dateInp = $("input#event-date").val();
    const outdateInp = $("input#event-outdate").val();
    var dataJson = { "event": eventInp, "detail": detailInp, "date": dateInp, "outdate": outdateInp }

    $.ajax({
        url: `./api/update`,
        method: "POST",
        cache: false,
        beforeSend: () => {
            $.get("/api/getJson", function (responseText) {
                getjsons = responseText;
                datajson = getjsons;
                datajson[i] = dataJson;
                var myJSON = JSON.stringify(datajson[i]);
                var param = `${myJSON}+${i}`;
                const xhttp = new XMLHttpRequest();
                xhttp.open("POST", "/api/update", true);
                xhttp.send(param);
            });
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
