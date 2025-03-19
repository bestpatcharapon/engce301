# ENGCE301 Software Design and Development  TermProject Team03                                              

 

## **Overview** 
![enter image description here](https://img5.pic.in.th/file/secure-sv1/1.1c15feb4ff69d19d0.png)

**R1.1**

![enter image description here](https://img5.pic.in.th/file/secure-sv1/1.1a19763cd324c1296.png)

**R1.2 , **R2.2****

![enter image description here](https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-03-20-021625.png)

**R1.3, **R2.2****

![enter image description here](https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-03-20-021635.png)


**R1.4**

![enter image description here](https://img2.pic.in.th/pic/Screenshot-2025-03-20-021606.png)


# **สิ่งที่ต้องส่งมอบ**
*1. เอกสารออกแบบ*

## **1.1 DFD**

![enter image description here](https://img5.pic.in.th/file/secure-sv1/DFD7f82976e8d16ce2a.png)
## **ER Diagram**

![enter image description here](https://img2.pic.in.th/pic/ER-diagram.png)
## **1.2 Activity Flow Diagram การทำงาน**

![enter image description here](https://img5.pic.in.th/file/secure-sv1/Activity-Flow-Diagram.png)

## **1.3 Test Case และผลการทดสอบ**

**Test Case (Agent Notification)**


| Test Section | Test Description | Test Step | Test Result |
|----------|----------|----------| ----------| 
| R 1.1| Agent สามารถ Login โดยใช้ Password ได้ โดยถ้า Password ผิดจะไม่สามารถ login ได้|1.กรอก Username/password2.กดปุ่ม Login | รหัสถูกจะเข้าสู่ระบบได้ รหัสผิดจะเข้าสู่ระบบไม่ได้ |
|R 1.2|สามารถเก็บประวัติการ login และ logout ได้ ในรูปแบบของวันเวลาที่ Login/Logout|ทดสอบการ Login-Logout เเละดูผลการทดสอบผ่านเว็บ|เเสดงผลประวัติการ login/logout , วันเเละเวลาที่เข้า-ออก ของ Agent บนเว็บ|
|R 1.3|สามารถเก็บประวัติการเปลี่ยนสถานะเวลาเริ่มต้นและสิ้นสุดแต่ละสถานะได้|ทดสอบโดยการส่ง Request เพื่ออัพเดทสถานะของ Agent|เเสดงผลการเปลี่ยนสถานะของ Agent บนเว็บ|
|R 1.4|สามารถเก็บประวัติการพูดคุยของแต่ละ Agent ได้|ทดสอบการส่งข้อความจาก Agent หนึ่งไปยังอีก Agent หนึ่ง และบันทึกข้อความนั้นผ่าน API|มีการเเสดงประวัติการส่งข้อความของ Agent , รายชื่อผู้ส่ง-รับ บนเว็บ|

**Test Case (Agent Wallboard)**


| Test Section | Test Description | Test Step | Test Result |
|----------|----------|----------| ----------|
|R 2.1|สามารถแสดง Banner ที่ wallboard รวมทุก Agent ได้|ตรวจสอบ route /wallboard |มี Banner เเสดงสถานะการทำงานของ Agent|
|R 2.2|สามารถแสดงประวัติการ login logout และการเปลี่ยนสถานะของแต่ละ Agent ได้|ทดสอบการ Login - Logout ของ Agent ผ่าน agent-notification|มีการเเสดงประวัติการเข้า-ออก ของ Agent |
|R 2.3|สามารถเเสดงประวัติการพูดคุยของเเต่ละ Agent ได้|ทดสอบส่ง message จาก Agent สู่ Agent หนึ่ง ผ่าน agent-notification|มีการเเสดงประวัติการส่งข้อความของ Agent , รายชื่อผู้ส่ง-รับ |


## **API Specification**
**Link  API Specification documentation : [This Link](./docs/api/README.md). **


## **Team Project**

- นายพัชรพล โยริยะ 65543206025-0 ( Team Leader )

- นางสาวบัณฑิตา สุธรรม 65543206020-1 ( Tester ) 

- นางสาวพิมพา นารี 65543206074-8 ( System Analyst SA )

- นายเอกธนา อภิญญาวิวัฒน์ 65543206089-6 ( Developer )
