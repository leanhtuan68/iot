
// Gan cac phan tu HTML vao bien
let btn1 = document.querySelector('#btn1'); // Nut bat dieu hoa
let btn2 = document.querySelector('#btn2'); // Nut tat dieu hoa
let btn3 = document.querySelector('#btn3'); // Nut bat den
let btn4 = document.querySelector('#btn4'); // Nut tat den
let btn5 = document.querySelector('#btn5'); // Nut bat quat
let btn6 = document.querySelector('#btn6'); // Nut tat quat

let den = document.querySelector('#den');         // Hinh anh cua den
let quat = document.querySelector('#quat');       // Hinh anh cua quat

// Functions xu ly su kien khi bam nut

// Su kien cho nut btn1 (Bat dieu hoa)
btn1.addEventListener('click', () => { 
    dieuhoa.src = 'img/air-conditioner_on.png'; // Thay doi hinh anh thanh dieu hoa bat
    firebase.database().ref().child('btn1').set(1);  // Ghi trang thai On len Firebase
    firebase.database().ref().child('btn2').set(0);  // Tat trang thai nut Off
    firebase.database().ref('Device').child('Dieuhoa').set(1);// Set trạng thái điều hòa lên 1
});

// Su kien cho nut btn2 (Tat dieu hoa)
btn2.addEventListener('click', () => { 
    dieuhoa.src = 'img/air-conditioner_off.png'; // Thay doi hinh anh thanh dieu hoa tat
    firebase.database().ref().child('btn2').set(1);  // Ghi trang thai Off len Firebase
    firebase.database().ref().child('btn1').set(0);  // Tat trang thai nut On
    firebase.database().ref('Device').child('Dieuhoa').set(0);// Set trạng thái điều hòa lên 0
});

// Su kien cho nut btn3 (Bat den)
btn3.addEventListener('click', () => { 
    den.src = 'img/light_on.png'; // Thay doi hinh anh thanh den bat
    firebase.database().ref().child('btn3').set(1);  // Ghi trang thai Bat len Firebase
    firebase.database().ref().child('btn4').set(0);  // Tat trang thai nut Off
    firebase.database().ref('Device').child('Den').set(1);   // Set trạng thái đèn lên 1
});

// Su kien cho nut btn4 (Tat den)
btn4.addEventListener('click', () => { 
    den.src = 'img/light_off.png'; // Thay doi hinh anh thanh den bat
    firebase.database().ref().child('btn4').set(1);  // Ghi trang thai Tat len Firebase
    firebase.database().ref().child('btn3').set(0);  // Tat trang thai nut On
    firebase.database().ref('Device').child('Den').set(0); //// Set trạng thái đèn lên 0
});

// Su kien cho nut btn5 (Bat quat)
btn5.addEventListener('click', () => { 
    quat.src = 'img/fan_on.png'; // Thay doi hinh anh thanh quat bat
    firebase.database().ref().child('btn5').set(1);  // Ghi trang thai Bat len Firebase
    firebase.database().ref().child('btn6').set(0);  // Tat trang thai nut Off
    firebase.database().ref('Device').child('Quat').set(1); // Set trạng thái quạt lên 1
});

// Su kien cho nut btn6 (Tat quat)
btn6.addEventListener('click', () => { 
    quat.src = 'img/fan_off.png'; // Thay doi hinh anh thanh quat tat
    firebase.database().ref().child('btn6').set(1);  // Ghi trang thai Tat len Firebase
    firebase.database().ref().child('btn5').set(0);  // Tat trang thai nut On
    firebase.database().ref('Device').child('Quat').set(0);  // Set trạng thái quạt lên 1
});

