const fs = require('fs');

var compilatore = {
    "compila_firma": function (layer, blocco) {
        return "\n" + ("    ").repeat(layer) + "function " + blocco.data.nome.toString() + "(" + blocco.data.parametri.join(", ") + ") \n" + ("    ").repeat(layer) + "{\n"
    },
    "compila_dichiarazione": function (layer, blocco) {
        return ("    ").repeat(layer) + "var " + blocco.data.nome + " = " + blocco.data.valore.toString().replace("<<<", '"').replace(">>>", '"') + "\n"
    },
    "compila_assegnazione": function (layer, blocco) {
        return ("    ").repeat(layer) + blocco.data.nome + " = " + blocco.data.valore.toString().replace("<<<", '"').replace(">>>", '"') + "\n"
    },
    "compila_se": function (layer, blocco) {
        var codice = "\n" + ("    ").repeat(layer) + "if(" + blocco.data.termine_1.toString().replace("<<<", '"').replace(">>>", '"') + " " + blocco.data.operatore + " " + blocco.data.termine_2.toString().replace("<<<", '"').replace(">>>", '"') + ")\n" + ("    ").repeat(layer) + "{\n"
        layer++
        codice = codificaBlocchi(blocco.data.blocchi, layer, codice)
        layer--
        codice += ("    ").repeat(layer) + "}\n"

        return codice
    },
    "compila_ciclo": function (layer, blocco) {
        var codice = "\n" + ("    ").repeat(layer) + "while(" + blocco.data.termine_1 + " " + blocco.data.operatore + " " + blocco.data.termine_2 + ")\n" + ("    ").repeat(layer) + "{\n"
        layer++
        codice = this.codifica_chart(blocco.data.blocchi, layer, codice)
        layer--
        codice += ("    ").repeat(layer) + "}\n\n"

        return codice
    },
    "compila_risultato": function (layer, blocco) {
        var codice = "\n" + ("    ").repeat(layer) + "return " + blocco.data.return.toString() + "\n"
        layer--
        codice += ("    ").repeat(layer) + "}\n"

        return codice
    },
    "codifica_chart": function (blocchi, layer = 0, codice = "") {
        // inizializzo blocco
        var blocco = null

        // inizializzo nome funzione
        var nome_funzione = ""
        
        for(var i=0; i < blocchi.length; i++)
        {
            // aggiorno blocco corrente
            blocco = blocchi[i];
    
            switch(blocco.tipo_blocco)
            {
                case "firma": 
                    codice += this.compila_firma(layer, blocco)
                    layer++

                    nome_funzione = blocco.data.nome
                    break;
    
                case "dichiarazione": 
                    codice += this.compila_dichiarazione(layer, blocco)
                    break;

                case "assegnazione": 
                    codice += this.compila_assegnazione(layer, blocco)
                    break;
    
                case "se":
                    codice += this.compila_se(layer, blocco)
    
                    break;
    
                case "ciclo": 
                    codice += this.compila_ciclo(layer, blocco)
                    
                    break;
    
                case "risultato": 
                    codice += this.compila_risultato(layer, blocco)
                    layer--
                    break;
            }
        }

        if(nome_funzione != "")
        {
            this.salva_file(nome_funzione, codice)
        }
    
        return codice
    },
    "salva_file": function (nome_file, contenuto) {
        try {
            fs.writeFileSync("./compilati/" + nome_file + ".js", contenuto);
            console.log('File salvato con successo');
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = compilatore;