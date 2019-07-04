function verif(event) {
    //good=false;
    if (document.getElementById('name') == "") {
        console.log('you must provide ' + document.getElementById('name'));
        event.preventDefault();
        alert('you must provide  a name');
    }
    if (document.getElementById('email').validity.valueMissing) {
        event.preventDefault();
        console.log('you must provide ');
        alert('you must provide a password');
    }
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(document.getElementById('email') == true)) {
        event.preventDefault();
        alert('not a valid email');
    }
    if (document.getElementById('password').validity.valueMissing) {
        event.preventDefault();
        console.log('you must provide ');
        alert('you must provide a password');
    }
    if (document.getElementById('password').value.length < 8) {
        event.preventDefault();
        alert('provide at least 8 caracters');
    }
}
