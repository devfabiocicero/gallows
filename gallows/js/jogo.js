
const criaJogo = sprite => { //param equals object sprite

    let etapa = 1;
    let lacunas = [];
    let palavraSecreta = "";
    let resultadoJogo = false; 

    const criaLacunas = () =>
        
        lacunas = Array(palavraSecreta.length).fill("");

    const proximaEtapa = () =>

        etapa = 2;

    const setPalavraSecreta = palavra => {

        if(!palavra.trim()) throw Error("Palavra inválida");

        else if(palavra.length < 3) { throw Error("Palavra curta demais"); }
        
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();  
    };

    const getLacunas = () => 

        lacunas;

    const getEtapa = () =>

        etapa;

    const processaChute = chute => {

        if(!chute.trim()) throw Error("Chute inválido");

        const exp = new RegExp(chute, 'gi');

        let resultado, acertou = false;

        while(resultado = exp.exec(palavraSecreta)) {

            lacunas[resultado.index] = chute;
            acertou = true;
        }

        if(!acertou) sprite.nextFrame();
    };

    const ganhou = () =>  

        lacunas.length
        
            ? !lacunas.some(lacuna => 
            
                lacuna == ''
            ) : false;

    const perdeu = () =>

        sprite.isFinished();


    const ganhouOuPerdeu = () =>

       ganhou() || perdeu();

    const reinicia = () => {

        sprite.reset();
        lacunas = [];
        palavraSecreta = "";
        etapa = 1;
    }

    return {

        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    };
};