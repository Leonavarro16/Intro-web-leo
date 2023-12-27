const btnverified = document.getElementById('verificarLicencia');
btnverified.addEventListener('click', () => {
    const name1 = document.getElementById('name');
    const age1 = document.getElementById('age').value;
        if (age1 >=18){
        alert('su licencia ha sido aprobada' );
        
        }
        else alert ("Lo sentimos su licencia no ha sido aprobada por menor de edad.")
    }
    )