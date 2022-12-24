const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {   
    res.status(200).send({
        extenso: resultado()
    })


    function resultado(){
        const require = req.originalUrl;
        var vsplit = require.split("/");
        const valor = vsplit[1];
        const numero = parseInt(valor);

        if(Number.isInteger(numero)){
            const numeroString = String(absoluto(numero));
            if (numero == 0) {
                const resultado = 'zero';
                return resultado;
            }
            else {
                const result = conversao(numeroString);
                const resultado = result.replace(' e zero', '');
                if (numero >= 0) {
                    return resultado;
                }
                else {
                    return conversao(numeroString) + " negativo";
                }
            }
        }
        else{
            return 'Não é um valor inteiro'
        }

    }



    function absoluto(numero) {
        if (numero < 0) {
            return numero * -1;
        }
        else {
            return numero
        }
    }

    function conversao(numeroString) {
        if (numeroString.length == 1) {
            const uni = unidade(numeroString);
            return uni;
        }
        else if (numeroString.length == 2) {
            const dez = dezena(numeroString);
            return dez;
        }
    }
    
    function unidade(numeroString) {
        if (numeroString == 1) {
            const unidade = 'um';
            return unidade;
        }
        else if (numeroString == 2) {
            const unidade = 'dois';
            return unidade;
        }
        else if (numeroString == 3) {
            const unidade = 'três';
            return unidade;
        }
        else if (numeroString == 4) {
            const unidade = 'quatro';
            return unidade;
        }
        else if (numeroString == 5) {
            const unidade = 'cinco';
            return unidade;
        }
        else if (numeroString == 6) {
            const unidade = 'seis';
            return unidade;
        }
        else if (numeroString == 7) {
            const unidade = 'sete';
            return unidade;
        }
        else if (numeroString == 8) {
            const unidade = 'oito';
            return unidade;
        }
        else if (numeroString == 9) {
            const unidade = 'nove';
            return unidade;
        }
        else if (numeroString == 0) {
            const unidade = 'zero';
            return unidade;
        }            
    }
    
    function dezena(numeroString) {
        if (numeroString == 10) {
            const dezena = 'dez';
            return dezena; 
        }
        else if (numeroString > 10 && numeroString < 20) {
            if (numeroString == 11) {
                const dezena = 'onze';
                return dezena;
            }
            else if (numeroString == 12) {
                const dezena = 'doze';
                return dezena;
            }
            else if (numeroString == 13) {
                const dezena = 'treze';
                return dezena;
            }
            else if (numeroString == 14) {
                const dezena = 'quatorze';
                return dezena;
            }
            else if (numeroString == 15) {
                const dezena = 'quinze';
                return dezena;
            }
            else if (numeroString == 16) {
                const dezena = 'dezesseis';
                return dezena;
            }
            else if (numeroString == 17) {
                const dezena = 'dezessete';
                return dezena;
            }
            else if (numeroString == 18) {
                const dezena = 'dezoito';
                return dezena;
            }
            else if (numeroString == 19) {
                const dezena = 'dezenove';
                return dezena;
            }
        }
        else {
            if (numeroString[0] == 0) {
                const dezena = 'zero';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 2) {
                const dezena = 'vinte';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 3) {
                const dezena = 'trinta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 4) {
                const dezena = 'quarenta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 5) {
                const dezena = 'cinquenta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 6) {
                const dezena = 'sessenta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 7) {
                const dezena = 'setenta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 8) {
                const dezena = 'oitenta';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 9) {
                const dezena = 'noventa';
                const n_extenso = dezena + ' e ' + unidade(numeroString.substring(1));
                return n_extenso;
            }
        }
    }
});




module.exports = router