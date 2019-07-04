let password=document.getElementsByName('password');
let email=document.getElementsByName('email');

/*if(i.name==='password')
{
    if (i.validity.valueMissing)
    {alert('you must provide '+i.id) 
    return  false
    }
    if(i.textContent.length<8)
    {alert('wrong password')
    return  false}
}
        if (i.validity.valueMissing)
        {
    alert('you must provide '+i.id)
    return false
}
 }
return true*/


/*function submit(event){
    var s=verif()
    if (s===false)
     event.preventDefault()

}*/


var btn=document.querySelector('[name="submit"]');
console.log(document.querySelector('[name="submit"]'))
btn.addEventListener('click',verif)
console.log(btn)
console.log(document.getElementById('name'))

function verif(event) {
    //good=false;
        if(document.getElementById('name').value=="")  
           {
               
            console.log('you must provide '+document.getElementById('name'))
            event.preventDefault()
            alert('you must provide  a name')
            return 0
            
        }
        if(document.getElementById('email').value=="")
        {
            event.preventDefault()
            console.log('you must provide ')
            alert('you must provide an email')
            return 0
        }
    
        var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(document.getElementById('email').value)==false)
        {event.preventDefault()
    alert('not a valid email')
    return 0
        }
        if (document.getElementById('password').value=="")
        {
            event.preventDefault()
            console.log('you must provide ')
            alert('you must provide a password')
            return 0
        }
    
        if(document.getElementById('password').value.length<8)
        {event.preventDefault()
            alert('provide at least 8 caracters')
            return 0
        }
    
    }

/*btn.addEventListener('click',submit());*/