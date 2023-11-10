// let a = +prompt("nhap vao gia tri cua a");
// let b = +prompt( "nhap vao gia tri cua b");
// let c = +(a + b);
// let result;
// if(c > 4){
//     result = document.write("Below")
// }
// else{
//     result = document.write("Over")
// }

// let a = prompt("Nhap vao gia tri a");
// let b = prompt( "Nhap vao gia tri b");
// result = (a + b < 4) ? 'Below'  : 'Over';
// document.write(result);

// let message;
// let login = prompt("Nhập vào đây")
//
// if (login == 'Employee') {
//     message = 'Hello';
//     document.write(message)
// } else if (login == 'Director') {
//     message = 'Greetings';
//     document.write(message)
// } else if (login == '') {
//     message = 'Mời ra ngoài';
//     document.write(message)
// } else {
//     message = '';
//     document.write('Mời ra ngoài')
// }

let login = prompt("Nhap vao day");
let message = (login == "Employee") ?
    "Hello" :
    (login == "Director") ?
    "Greetings" :
        (login == "")   ?
        "No login" :
        "";
alert(message);



