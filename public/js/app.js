const inputNumero = document.getElementById("numero");
const btnGenerar = document.getElementById("btnGenerar");
const areaResultado = document.getElementById("areaResultado");
const errorMsg = document.getElementById("errorMsg");

btnGenerar.addEventListener("click", () => {
    console.log("Click detectado"); 

    const valor = inputNumero.value.trim();

    // Validar número
    if (valor === "" || isNaN(valor)) {
        errorMsg.classList.remove("d-none");
        areaResultado.innerHTML = "";
        return;
    }

    errorMsg.classList.add("d-none");

    const numero = Number(valor);
    let i = 1;
    let resultado = "";

    // do...while 
    do {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
        i++;
    } while (i <= 12);

    areaResultado.innerHTML = `<div class="alert alert-success">${resultado}</div>`;
});
