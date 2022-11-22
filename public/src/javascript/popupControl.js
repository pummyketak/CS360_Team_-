function openPopup(x){
    let i = x ;
    let popup = document.getElementById("popup") ;
    popup.innerHTML =  `             <h3>${datajson[i].type}</h3><br>\n` +
    `             <img src="${datajson[i].img}">\n` +
    `             <p>วันเวลา: ${datajson[i].date}</p>\n` +
    `             <button type="button" onclick="closePopup()">ปิด</button>\n` +
    `            </div>\n`
    popup.classList.add("open-popup") ;
}

function closePopup(){
    let popup = document.getElementById("popup") ;
    popup.classList.remove("open-popup") ;
}