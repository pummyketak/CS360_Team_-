function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let i = getParameterByName("id");

function loadInfo() {

    $.ajax({
        url: `./api/getJson`,
        method: "GET",
        cache: false,
        beforeSend: () => {
            $.get("/api/getJson", function (responseText) {
                datajson = responseText;
                console.log(datajson[i])
                document.getElementById("event-name").value = datajson[i].event;
                document.getElementById("event-detail").value = datajson[i].detail;
                document.getElementById("event-date").value = datajson[i].date;
                document.getElementById("event-outdate").value = datajson[i].outdate;
            });
        },
        success: () => {
            console.log(datajson);
        },
        error: () => {
            console.log(error);
        }
    })

}