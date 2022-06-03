const pagos = [];
const users = [];
const listado = document.getElementById("group");
const cuadroResultado = document.getElementById("total");
const user = document.getElementById("name");
const pago = document.getElementById("pago");

function dividir(){
    agregarGastos();
    mostrarUltimo();
    mostrarPagoPorPersona();
}

function agregarGastos(){
    users.push(user.value);
    pagos.push(pago.value);
}

function mostrarUltimo(){
    const li = document.createElement("li");
    const text = document.createTextNode(`${user.value}: $${pago.value}`);
    li.classList.add("list-group");
    li.appendChild(text);
    listado.appendChild(li);
}

function sumarValores(pagos){
    let suma = 0;
    for (let pago of pagos) {
        suma += Number(pago);
    }
    return suma
}

function mostrarPagoPorPersona() {
    const total = sumarValores(pagos);
    const aporteIndividual = total / pagos.length
    cuadroResultado.innerText = `Total: ${total}
                                 A cada uno le toca aportar: ${aporteIndividual}`;
}