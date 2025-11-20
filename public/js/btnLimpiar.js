document.getElementById("btnLimpiar").addEventListener("click", function () {

    // Limpia el input
    document.getElementById("numero").value = "";

    // Oculta mensaje de error
    document.getElementById("errorMsg").classList.add("d-none");

    // Limpia el área de resultado
    document.getElementById("areaResultado").innerHTML = "";
});
