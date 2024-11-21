const template=document.createElement('template');
template.innerHTML=
        `<nav class="navegacion">
        <ul class="menu_navegacion">
            <li><a href="/Scripts/declaracion.html">Privacidad</a></li>
            <li><a href="/Scripts/declaracion.html">Privacidad</a></li>
            <li><a href="/Scripts/declaracion.html">Privacidad</a></li>
        </ul>
    </nav>
    <style>
        .navegacion{
    width: 70%;
    margin: 10px auto;
}
.menu_navegacion{
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.navegacion .menu_navegacion li{
    float: left;
}
.navegacion .menu_navegacion li:hover{
    background-color: var(--primari);
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