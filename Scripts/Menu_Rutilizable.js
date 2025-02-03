const template=document.createElement('template');
template.innerHTML=
        `<nav class="navegacion">
        
        <ul class="menu_navegacion">
            <span>Menu</span>
            <ul>
                <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/">Inicio</a></li>
                <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/Pantallas/ServicioTecnico.html">Servicio Tecnico</a></li>
                <li><a href="https://gaspydev.github.io/PuntoyComaDeveloper/Pantallas/declaracion.html">Privacidad</a></li>
            </ul>
        </ul>
    </nav>
    <style>
.navegacion{
    width: 70%;
    margin: 10px auto;
}
.menu_navegacion{
    background-color: var(--orillas);
    display: block;
}
.menu_navegacion span{
    padding: 10px;
    display: none;
}
.menu_navegacion ul{
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
    @media (max-width: 700px) {
        .navegacion{
            width: 90%;
        }
        .menu_navegacion span{
            display: block;
        }
        .menu_navegacion{
        background-color: var(--orillas);
            display: block;
            padding: 0;
        }
        .menu_navegacion ul{
            position: absolute;
        }
        .menu_navegacion ul li{
            display: none;
        width: 100%;
        position: relative;
        }
        .menu_navegacion:hover ul li{
            display: block;
        }
        .menu_navegacion:hover ul li a{
            text-align: left;
        }
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