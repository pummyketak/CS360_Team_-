
var datajson;
let datalength;
function loadDoc() {
    console.log("Loaded")

    $.ajax({
        url: `./api/getJson`,
        method: "GET",
        cache: false,
        beforeSend: () => {
            $.get("/api/getJson", function (responseText) {
                console.log(responseText);
                datajson = responseText;
                datalength = responseText.length;
                let table = document.getElementById("table");

                for (let i = datalength - 1; i >= 0; i--) {
                    let addtable = document.createElement('addtable');
                    addtable.id = `add${i}`;
                    addtable.innerHTML = `<table class="tablelist"  style="margin-top: 10%;">\n` +
                        `            <tr><th><p>Event : ${datajson[i].event}</p></th>\n` +
                        `            <th><p>รายละเอียด Event: ${datajson[i].detail}</p></th>\n` +
                        `            <th><p>วันที่เริ่มจัด Event: ${datajson[i].date}</p></th>\n` +
                        `            <th><p>วันที่สิ้นสุด Event: ${datajson[i].outdate}</p></th>\n` +
                        `            <tr><th><a href="./info?id=${i}">ดูรายละเอียด</a></li></th>\n` +
                        table.appendChild(addtable);
                }
            });
        },
        success: () => {
        },
        error: () => {
            console.log(error);
        }
    })

}
