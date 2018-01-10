
const criaController = jogo => {

    const exibeLacunas = () => {

        lacunas.empty();
        
        jogo.getLacunas().forEach(lacuna => {
            
            $("<li>")
                .addClass("lacuna")
                .text(lacuna)
                .appendTo(lacunas);
        });
    };

    // muda o texto do placeHolder do campo de entrada    
    const mudaPlaceHolder = texto => 

        entrada.attr("placeholder", texto);

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 

    const guardaPalavraSecreta = () => {

        try {
            jogo.setPalavraSecreta(entrada.val().trim());
            entrada.val("");
            mudaPlaceHolder('Chute Aqui!');
            exibeLacunas();
        } catch(err) {
            alert(err.message);
        }
    };

    const leChute = () => {

        try {
            jogo.processaChute(entrada.val().trim().substr(0,1));
            entrada.val("");
            exibeLacunas();

            if( jogo.ganhouOuPerdeu() ) {

                setTimeout( () => {
                    if( jogo.ganhou() ) {
                        alert("Você ganhou, parabéns!");
                        reinicia();
                    }

                    else if( jogo.perdeu() ) {
                        alert("Você perdeu :(");
                        reinicia();
                    }
                }, 200);
            }  
        } catch(err) {
            alert(err.message);
        }
    };

    const reinicia = () => {

        lacunas.empty();
        mudaPlaceHolder("Palavra secreta");
        jogo.reinicia();
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    const inicia = () => {

        entrada.keypress( event => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    };

    let entrada = $(".entrada");
    let lacunas = $(".lacunas");

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return {
        inicia
    };
};