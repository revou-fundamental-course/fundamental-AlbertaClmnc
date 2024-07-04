let name = prompt("Hello, what's your name?","");
document.getElementsByClassName("name").innerHTML = "name"

function validateForm() {
    let nama = document.querySelector('nama').value;
    let birthdate = document.querySelector('birth-date').value;
    

    console.log(nama);

if (nama != '' && birthdate != '') {
    document.querySelector('result').innerHTML = nama + ' ' + birthdate;   
} else {
    alert('please fill this form out');
}
}