const advice = document.getElementById('advice');
const iconDado = document.getElementById('icon__dado');
const idAsesoramiento = document.getElementById('id__asesoramiento')



function getAdvice() {
    fetch('https://api.adviceslip.com/advice')

    .then(response => response.json())
    .then(data => {
        const advicee = data.slip.advice;
        const ide = data.slip.id;
        advice.textContent = `"${advicee}"`;
        idAsesoramiento.textContent = `ADVICE #${ide}`;
        console.log(data);
        console.log(ide);
    })
    .catch(error =>{
        console.error('Error al obtener el consejo:', error);
    });
    
}

iconDado.addEventListener('click',getAdvice())