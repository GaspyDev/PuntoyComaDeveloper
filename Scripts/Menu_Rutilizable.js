const template=document.createElement('template');
template.innerHTML=
        `<nav class="navegacion">
        <ul class="menu_navegacion">
            <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/">Inicio</a></li>
            <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/Pantallas/ServicioTecnico.html">Servicio Tecnico</a></li>
            <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/Pantallas/declaracion.html">Privacidad</a></li>
        </ul>
    </nav>
    <style>
        .navegacion{
    width: 60%;
    margin: 10px auto;
}
.menu_navegacion{
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--orillas);
}
.navegacion .menu_navegacion li{
    float: left;
}
.navegacion .menu_navegacion li:hover{
    background-color: #ffbe81;
}
li a{
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}
</style>`;
class MenuPrincipal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('menu-component', MenuPrincipal);