Vue.component('visor', {
    template: //html
    `
    <div class="displayDiv">
        <p class="display">{{operacion}}</p>
        <h1 class="display">{{resultado}}</h1>
    </div>
    `,
    props: ['valor-operacion', 'mostrar-resultado', 'clear', 'operacion', 'resultado'],
})
