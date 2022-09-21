# CS360_Team_Collaboration
A project useed for team collaboration in CS360

## 1. Login system
1. เข้าสู่ระบบ google account ด้วย gmail
2. เข้าสู google sheet เพื่อสร้าง sheet ในการเก็บ Username / Password

![google_sheet](https://user-images.githubusercontent.com/89339473/191465600-eb1c2b29-9dde-42c2-81e7-8d2c75ab1398.png)

3. ตั้งชื่อsheetที่สร้างเเละสร้างHead ของ Username เเละ Head ของ Password พร้อมกำหนดคค่าของ Username เเละ Password

![Account_sheet](https://user-images.githubusercontent.com/89339473/191472669-ad432fa5-fe69-46b0-8df4-56f2f201823f.png)

4. กดส่วนขยาย เพื่อใช้งาน app script ในการสร้างระบบ login

![goto_appscript](https://user-images.githubusercontent.com/89339473/191475333-ee398a6b-662b-4f83-977d-f3ba4a4daabd.png)

5. สร้างไฟล์ที่ที่มีสกุล .gs เพื่อเป็นการทำงานของระบบ login
(รายละเอียดไฟล์ Account.gs :
[Account.txt](https://github.com/pummyketak/CS360_team_group/files/9615531/Account.txt))

5.1 copy url ของ sheet ที่สร้างไว้เก็บ username/password ในข้อที่(3) 
เเล้วนำ url ที่ได้ใส่ในบรรทัด var url ='..วางurl...'; 

5.2 กำหนดค่า webAppSheet ให้ตรงกับชื่อ sheet ที่เก็บusername/password ในข้อที่(3)
ดังรูป

![appscript_url_to_sheet](https://user-images.githubusercontent.com/89339473/191482062-62a5768a-4750-4966-8da4-457b88f07dad.png)


6. สร้างไฟล์ index.html เพื่อเป็นUIของระบบ login
รายละเอียดไฟล์ index.html : 

โดยกำหนดบรรทัด window.open ให้เป็นลิงค์urlไปยัง webchat ดังรูป

///



7. การ deploy ตัวlogin ให้กดที่ "การทำให้ใช้งานได้" ปุ่มสีฟ้าด้านบนขวา 

จากนั้นเลือกประเภทระบบเป็น"webapp" เเล้วตั้งค่าผู้มีสิทธ์เข้าถึงเป็น"ทุกคน" เเล้วกด ทำให้ใช้งานได้

จะได้ url ที่พร้อมใช้งานระบบ login

![deploy_login](https://user-images.githubusercontent.com/89339473/191503102-228b2eee-4677-46a0-9ccc-ae6e9baa248e.png)


![url_login](https://user-images.githubusercontent.com/89339473/191503817-fad10816-e0a4-4a55-82ae-3a2ef66c29ed.png)
