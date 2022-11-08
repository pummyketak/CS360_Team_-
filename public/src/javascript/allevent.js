
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
                datajson = responseText;
                datalength = responseText.length;
                let table1 = document.getElementById("divtable1");
                let table2 = document.getElementById("divtable2");

                for (let i = datalength - 1; i >= 0; i--) {
                    let addtable = document.createElement('div');
                    addtable.id = `add${i}`;
                    if(datajson[i].type == "news"){
                        addtable.innerHTML = `<div class="eventbox1">\n` +
                        `            <p>News : ${datajson[i].event}</p>\n` +
                        `            <p>รายละเอียด News: ${datajson[i].detail}</p>\n` +
                        `            <p>วันที่เริ่มจัด News: ${datajson[i].date}</p>\n` +
                        `            <p>วันที่สิ้นสุด News: ${datajson[i].outdate}</p>\n` +
                        `            <a href="./info?id=${i}">ดูรายละเอียด</a></li>\n`
                        table1.appendChild(addtable);
                    }else if(datajson[i].type == "events"){
                        addtable.innerHTML = `<div class="eventbox1">\n` +
                        `            <p>Event : ${datajson[i].event}</p>\n` +
                        `            <p>รายละเอียด Event: ${datajson[i].detail}</p>\n` +
                        `            <p>วันที่เริ่มจัด Event: ${datajson[i].date}</p>\n` +
                        `            <p>วันที่สิ้นสุด Event: ${datajson[i].outdate}</p>\n` +
                        `            <a href="./info?id=${i}">ดูรายละเอียด</a></li>\n` 
                        table2.appendChild(addtable);
                    }
                    
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
