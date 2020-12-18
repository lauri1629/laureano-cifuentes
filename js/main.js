"use strict";

let tableEl = document.getElementById("tabla");

let data = `{
    "team" : [
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "Empire Ants ",
            " rol " : "Lider ",
            " posicion " : "SUPP ",
            " main " : "Leona "
        },
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "powerbit ",
            " rol " : "Titular ",
            " posicion " : "JG ",
            " main " : "Trundle "
        },
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "darbed ",
            " rol " : "Titular ",
            " posicion " : "TOP ",
            " main " : "Malphite "
        },
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "El Joven ",
            " rol " : "Titular ",
            " posicion " : "ADC ",
            " main " : "Samira "
        },
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "HakuKiller ",
            " rol " : "Titular ",
            " posicion " : "MID ",
            " main " : "Lissandra "
        },
        {
            " servidor " : "LAS ",
            " teamName " : "Salaminions ",
            " nick " : "Hummve ",
            " rol " : "Suplente ",
            " posicion " : "SUPP ",
            " main " : "Morgana "
        }
    ]

}
`

let dataParseada = JSON.parse(data);
let clavesTeam = Object.keys(dataParseada.team[0]);

const btnEditar = document.createElement("btn-editar");
const btnAgregar = document.createElement("btn-agregar");
const btnEliminar = document.createElement("btn-eliminar");
const btnAceptar = document.createElement("btn-aceptar");
const btnCancelar = document.createElement("btn-cancelar");
const svEl = document.getElementById("sv");
const tNameEl = document.getElementById("team-name");
const nickEl = document.getElementById("nick");
const rolEl = document.getElementById("rol");
const posiEl = document.getElementById("posi");
const mainEl = document.getElementById("main");


//muestra el modal//
function showModal() {
    modalEl.classList.remove("d-none");
};

function hideModal() {
    modalEl.classList.add("d-none");
};


function cancel() {
    hideModal();
};

function aceptar() {
    hideModal();
};

function eliminarFila(index) {
    svEl.value = productos[index].servidor;
    tNameEl.value = productos[index].teamName;
    nickEl.value = productos[index].nick;
    rolEl.value =  productos[index].rol;
    posiEl.value = productos[index].posicion;
    mainEl.value = productos[index].main;
    svEl.disabled = true;
    tNameEl.disabled = true;
    nickEl.disabled = true;
    rolEl.disabled = true;
    posiEl.disabled = true;
    mainEl.disabled = true;
};





let createHeader = (claves) => {
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
    for (let i = 0; i < claves.length; i++) {
        let thEl = document.createElement("th");
        thEl.innerHTML = claves[i];
        trEl.appendChild(thEl);
    }
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
    const thModificar = document.createElement("th")
    thModificar.innerHTML = 'Modificar'
    trEl.appendChild(thModificar);
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
};
let createRow = (datos) => {
    let trEl = document.createElement("tr");
    for (const clave in datos) {
        let tdEl = document.createElement("td");
        tdEl.innerHTML = datos[clave];
        trEl.appendChild(tdEl);
    }
    let tdEdit = document.createElement("td")
    const btnEditar = document.createElement("button");
    const textEditar = document.createTextNode("Editar");
    btnEditar.appendChild(textEditar);
    tdEdit.appendChild(btnEditar);
    btnEditar.addEventListener("click", () => {
        showModal()
    });
    let tdElim = document.createElement("td")
    const btnEliminar = document.createElement("button");
    const textEliminar = document.createTextNode("Eliminar");
    btnEliminar.appendChild(textEliminar);
    tdElim.appendChild(btnEliminar);
    btnEliminar.addEventListener("click", () => {
        showModal();
        eliminarFila();
    });
    trEl.appendChild(tdEdit);
    trEl.appendChild(tdElim);
    return trEl;
};

let createBody = (elementos) => {
    let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
        tbodyEl.appendChild(createRow(elementos[i]));
    }
    tableEl.appendChild(tbodyEl);
};

window.addEventListener("load", () => {
    createBody(dataParseada.team);
    createHeader(clavesTeam);
});

////////////////////////////////////////

