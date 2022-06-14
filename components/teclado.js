Vue.component('teclado', {
    template:   //html
    `
    <div class="tecladoContainer">
                <div class="numberContainer">      
                    <button @click="clear()" class="btn btnClear"> Clear </button>  
                    <button @click="valorOperacion('(')" class="btn btnHover"> ( </button>
                    <button @click="valorOperacion(')')" class="btn btnHover"> ) </button>
                    <button @click="valorOperacion('1')" class="btn btnHover"> 1 </button>
                    <button @click="valorOperacion('2')" class="btn btnHover"> 2 </button>
                    <button @click="valorOperacion('3')" class="btn btnHover"> 3 </button>
                    <button @click="valorOperacion('4')" class="btn btnHover"> 4 </button>
                    <button @click="valorOperacion('5')" class="btn btnHover"> 5 </button>
                    <button @click="valorOperacion('6')" class="btn btnHover"> 6 </button>
                    <button @click="valorOperacion('7')" class="btn btnHover"> 7 </button>
                    <button @click="valorOperacion('8')" class="btn btnHover"> 8 </button>
                    <button @click="valorOperacion('9')" class="btn btnHover"> 9 </button>
                    <button @click="valorOperacion('0')" class="btn btnHover btnCero"> 0 </button>
                    <button @click="valorOperacion('.')" class="btn btnHover"> . </button>    
                </div>
                <aside>
                    <button @click="valorOperacion('+')" class="btn btnOp"> + </button>
                    <button @click="valorOperacion('-')" class="btn btnOp"> - </button>
                    <button @click="valorOperacion('*')" class="btn btnOp"> x </button>
                    <button @click="valorOperacion('/')" class="btn btnOp"> / </button>
                    <button @click="mostrarResultado()" class="btn btnIgual"> = </button>
                </aside>
            </div>
    `,
    props: ['valor-operacion', 'mostrar-resultado', 'clear', 'operacion', 'resultado'],
})