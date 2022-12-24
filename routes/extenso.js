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
                const result1 = conversao(numeroString);
                const result2 = result1.replace(' e zero', '');
                const result3 = result2.replace(' e zero', '');
                const resultado = result3.replace(' e zero', '');

                if (numero >= 0) {
                    return resultado;
                }
                else {
                    if (numeroString.length > 5) {
                        return resultado;
                    }
                    else {
                        return 'menos ' + resultado;
                    }
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
        else if (numeroString.length == 3) {
            const cen = centena(numeroString);
            return cen;
        }
        else if (numeroString.length == 4) {
            const mil = milhar(numeroString);
            return mil;
        }
        else if (numeroString.length == 5) {
            const d_mil = d_milhar(numeroString);
            return d_mil;
        }
        else {
            return 'valor não suportado';
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

    function centena(numeroString) {
        if (numeroString == 100) {
            const centena = 'cem';
            return centena; 
        }
        else {
            if (numeroString[0] == 0) {
                const centena = 'zero';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 1) {
                const centena = 'cento';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 2) {
                const centena = 'duzentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 3) {
                const centena = 'trezentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 4) {
                const centena = 'quatrocentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 5) {
                const centena = 'quinhentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 6) {
                const centena = 'seiscentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 7) {
                const centena = 'setecentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 8) {
                const centena = 'oitocentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 9) {
                const centena = 'novecentos';
                const n_extenso = centena + ' e ' + dezena(numeroString.substring(1));
                return n_extenso;
            }
            
        }
    }

    function milhar(numeroString) {
        if (numeroString[0] == 0) {
            const milhar = 'zero';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 1) {
            const milhar = 'um mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 2) {
            const milhar = 'dois mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 3) {
            const milhar = 'três mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 4) {
            const milhar = 'quatro mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 5) {
            const milhar = 'cinco mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 6) {
            const milhar = 'seis mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 7) {
            const milhar = 'sete mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 8) {
            const milhar = 'oito mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        else if (numeroString[0] == 9) {
            const milhar = 'nove mil';
            const n_extenso = milhar + ' e ' + centena(numeroString.substring(1));
            return n_extenso;
        }
        
    }

    function d_milhar(numeroString) {
        if (numeroString.substring(0,2) == 10) {
            const d_milhar = 'dez';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 20) {
            const d_milhar = 'vinte';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 30) {
            const d_milhar = 'trinta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 40) {
            const d_milhar = 'quarenta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 50) {
            const d_milhar = 'cinquenta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 60) {
            const d_milhar = 'sessenta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 70) {
            const d_milhar = 'setenta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 80) {
            const d_milhar = 'oitenta';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) == 90) {
            const d_milhar = 'noventa';
            const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
            return n_extenso; 
        }
        else if (numeroString.substring(0,2) > 10 && numeroString.substring(0,2) < 20) {
            if (numeroString.substring(0,2) == 11) {
                const d_milhar = 'onze';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 12) {
                const d_milhar = 'doze';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 13) {
                const d_milhar = 'treze';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 14) {
                const d_milhar = 'quatorze';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 15) {
                const d_milhar = 'quinze';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 16) {
                const d_milhar = 'dezesseis';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 17) {
                const d_milhar = 'dezessete';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 18) {
                const d_milhar = 'dezoito';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
            else if (numeroString.substring(0,2) == 19) {
                const d_milhar = 'dezenove';
                const n_extenso = d_milhar + ' mil e ' + centena(numeroString.substring(2));
                return n_extenso;
            }
        }
        else {
            if (numeroString[0] == 0) {
                const d_milhar = 'zero';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 2) {
                const d_milhar = 'vinte';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 3) {
                const d_milhar = 'trinta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 4) {
                const d_milhar = 'quarenta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 5) {
                const d_milhar = 'cinquenta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 6) {
                const d_milhar = 'sessenta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 7) {
                const d_milhar = 'setenta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 8) {
                const d_milhar = 'oitenta';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
            else if (numeroString[0] == 9) {
                const d_milhar = 'noventa';
                const n_extenso = d_milhar + ' e ' + milhar(numeroString.substring(1));
                return n_extenso;
            }
        }
    }
});




module.exports = router