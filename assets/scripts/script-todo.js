const listaTareas = document.getElementById('lista-tareas');
const nuevaTarea = document.getElementById('nueva-tarea');
const agregarTarea = document.getElementById('agregar-tarea');

function agregarNuevaTarea() {
    const textoTarea = nuevaTarea.value;
    const prioridad = document.getElementById('prioridad').value;

    if (textoTarea === '') {
        return;
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('marcar-tarea');


    const li = document.createElement('li');
    li.classList.add('no-started', `prioridad-${prioridad}`);

    const spanPrioridad = document.createElement('span');
    spanPrioridad.classList.add('prioridad');
    spanPrioridad.textContent = `Prioridad: ${prioridad}`;

    const iconoTarea = document.createElement('span');
    iconoTarea.classList.add('icono-tarea', 'no-started');

    const texto = document.createTextNode(textoTarea);

    li.appendChild(checkbox);
    li.appendChild(iconoTarea);
    li.appendChild(texto);
    li.appendChild(spanPrioridad);

    const botonEditar = document.createElement('button');
    botonEditar.classList.add('boton-editar');
    botonEditar.textContent = 'Editar';

    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('boton-eliminar');
    botonEliminar.textContent = 'Eliminar';

    li.appendChild(botonEditar);
    li.appendChild(botonEliminar);

    listaTareas.appendChild(li); // Descomenta esta línea


    checkbox.addEventListener('change', (e) => {
        const li = e.target.parentNode;
        li.classList.toggle('done');
    });

    li.addEventListener('dblclick', cambiarEstadoTarea);

    nuevaTarea.value = '';
}


function cambiarEstadoTarea(e) {
    const li = e.target.parentNode;
    li.classList.toggle('done');
    const iconoTarea = li.querySelector('.icono-tarea');
    iconoTarea.classList.toggle('no-started');
    iconoTarea.classList.toggle('done');
}

agregarTarea.addEventListener('click', agregarNuevaTarea);

nuevaTarea.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        agregarNuevaTarea();
    }
});

const marcarTareas = document.querySelectorAll('.marcar-tarea');


marcarTareas.forEach((marcarTarea) => {
    marcarTarea.addEventListener('change', (e) => {
        const li = e.target.closest('li');
        li.classList.toggle('done');
        li.querySelector('.icono-tarea').classList.toggle('done');
    });
});


function eliminarTarea(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
}
  

const lista = document.querySelector('#lista-tareas');

listaTareas.addEventListener('click', (e) => {
    const elementoClickeado = e.target;

    if (elementoClickeado.classList.contains('boton-eliminar')) {
        eliminarTarea(e);
    } else if (elementoClickeado.classList.contains('boton-editar')) {
        editarTarea(e);
    }
});
