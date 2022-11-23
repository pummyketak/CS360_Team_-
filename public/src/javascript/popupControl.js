function openPopup(x){
    let i = x ;
    let popup = document.getElementById("popup") ;
    popup.innerHTML =  `    <h3>${datajson[i].type}</h3><br>\n` +
    `             <img src="${datajson[i].img}">\n` +
    `             <h4>${datajson[i].event}</h4><br>\n` +
    `            <p>รายละเอียด: ${datajson[i].detail}</p><br>\n` +
    `            <p>วันเวลาที่เริ่ม: ${datajson[i].date}</p>\n` +
    `            <p>วันเวลาที่จบ: ${datajson[i].outdate}</p>\n` +
    `             <button type="button" onclick="closePopup()" id="c${i}">ปิด</button>\n` +
    `            </div>\n`
    popup.classList.add("open-popup") ;
}

function closePopup(){
    let popup = document.getElementById("popup") ;
    popup.classList.remove("open-popup") ;
}