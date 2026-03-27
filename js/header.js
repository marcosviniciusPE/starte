class DropDown {

    constructor() {

        this.elementoDeClick = document.querySelector("#dropLista");
        this.elementoDeClick2 = document.querySelector("#elementoClick2");
        this.navColagem = document.querySelector(".nav");

        this.criarDropdowns();
        this.caixaDeLinks();
    }

    criarDropdowns() {
        this.dropdown1 = document.createElement("div");
        this.dropdown1.classList.add("dropdown");
        this.dropdown1.style.display = "none";
        this.dropdown1.innerHTML = `
            <ul class="listaDrop">
                <li><a href="../gestaoComercio/gestaoComercio.html">GESTÃO E COMERCIO</a></li>
                <li><a href="../artes/artes.html">CULTURA</a></li>
                <li><a href="../aprendiagem/aprendiagem.html">APRENDIZAGEM</a></li>
                <li><a href="../saude/saude.html">SAUDE</a></li>
                <li><a href="../tecnologia/tecnologia.html">TECNOLOGIA</a></li>
            </ul>
        `;

        this.dropdown2 = document.createElement("div");
        this.dropdown2.classList.add("dropdown", "lista2");
        this.dropdown2.style.display = "none";
        this.dropdown2.innerHTML = `
            <ul class="listaDrop">
                <li style="margin-top: 8px;"><a href="../planosDeCurso/planosDeCurso.html">Planos de curso</a></li>
                <li style="margin: 0;"><a href="../../html/eventos/eventos.html">Eventos</a></li>
            </ul>
        `;

        this.navColagem.appendChild(this.dropdown1);
        this.navColagem.appendChild(this.dropdown2);
    }

    caixaDeLinks() {

        this.elementoDeClick.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            this.toggle(this.dropdown1);
        });

        this.elementoDeClick2.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            this.toggle(this.dropdown2);
        });

        document.addEventListener("click", () => {
            this.fecharTodos();
        });
    }

    toggle(dropdown) {
        this.fecharTodos();
        dropdown.style.display = "block";
    }

    fecharTodos() {
        this.dropdown1.style.display = "none";
        this.dropdown2.style.display = "none";
    }
}

new DropDown();