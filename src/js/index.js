const campoDigitar = document.querySelectorAll('.input');
const alertaObrigatorio = document.querySelectorAll('.campo-obrigatorio')
const botaoEnviar = document.getElementById('botao');

botaoEnviar.addEventListener('click', () => {

    campoDigitar.forEach((checarCampo, mostrarAlerta) => {
        if (checarCampo.value !== '') {
            checarCampo.classList.remove('vazio');
            checarCampo.classList.add('preenchido');
            alertaObrigatorio[mostrarAlerta].classList.remove('mostrar-alerta');
        } else {
            checarCampo.classList.remove('preenchido');
            checarCampo.classList.add('vazio');
            alertaObrigatorio[mostrarAlerta].classList.add('mostrar-alerta');
        }
    })
})