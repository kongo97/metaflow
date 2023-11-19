var esempi = [
    // [START] - Blocco iniziale, firma di una funzione
    {
        "tipo_blocco": "firma",                     // tipologia di blocco
        "data": {                                   // dati del blocco
            "nome": "media",                                // nome della funzione
            "parametri": ["array_numeri"]                   // elenco dei nomi dei parametri in ingresso
        }
    },
    // [ASSEGNAZIONE] - Blocco assegnazione, assegno un valore a una variabile
    // ( esempio: var x = 5 )
    {
        "tipo_blocco": "assegnazione",              // tipologia di blocco
        "data": {                                   // dati del blocco
            "mutabilita": "var",                            // mutabilità della variabile (var, let, const, null)
            "tipo": "int",                                  // tipo della della variabile (int, string, array, .., null)
            "nome": "x",                                    // nome della variabile
            "valore": 5                                     // valore della variabile (5, 'ciao', una_variabile, ..)
        }
    },
    // [CICLO] - Blocco ciclo, espondo la condizione del ciclo
    // ( esempio: while(contatore < 10) )
    {
        "tipo_blocco": "ciclo",                     // tipologia di blocco 
        "data": {                                   // dati del blocco
            "termine_1": "contatore",                       // primo termine di paragone della condizione del ciclo (TERMINE_1 < termine_2)
            "operatore": "<",                               // operatore di paragone
            "termine_2": 10,                                // secondo termine di paragone della condizione del ciclo (termine_1 < TERMINE_2)
            "blocchi": [                                    // blocchi contenuti all'interno del ciclo
                // [ASSEGNAZIONE] - Blocco assegnazione, assegno un valore a una variabile
                // ( esempio: var y = 'ciao' )
                {
                    "tipo_blocco": "assegnazione",              // tipologia di blocco
                    "data": {                                   // dati del blocco
                        "mutabilita": "var",                            // mutabilità della variabile (var, let, const, null)
                        "tipo": "string",                               // tipo della della variabile (int, string, array, .., null)
                        "nome": "y",                                    // nome della variabile
                        "valore": 'ciao'                                // valore della variabile (5, 'ciao', una_variabile, ..)
                    }
                },
                // [ASSEGNAZIONE] - Blocco assegnazione, assegno un valore a una variabile
                // ( esempio: var numeri = [1,2,3,4,5,6,7,8,9] )
                {
                    "tipo_blocco": "assegnazione",              // tipologia di blocco
                    "data": {                                   // dati del blocco
                        "mutabilita": "var",                            // mutabilità della variabile (var, let, const, null)
                        "tipo": "array",                                // tipo della della variabile (int, string, array, .., null)
                        "nome": "numeri",                               // nome della variabile
                        "valore": [1,2,3,4,5,6,7,8,9]                   // valore della variabile (5, 'ciao', una_variabile, ..)
                    }
                },
            ]
        }
    },
    // [IF] - Blocco "se", espondo la condizione della if
    // ( esempio: if(giorno == "lunedi") )
    {
        "tipo_blocco": "se",                        // tipologia di blocco 
        "data": {                                   // dati del blocco
            "termine_1": "giorno",                          // primo termine di paragone della condizione del ciclo (TERMINE_1 < termine_2)
            "operatore": "==",                              // operatore di paragone
            "termine_2": "<<<lunedi>>>",                    // secondo termine di paragone della condizione del ciclo (termine_1 < TERMINE_2)
            "blocchi": [                                    // blocchi contenuti all'interno del ciclo
                // [ASSEGNAZIONE] - Blocco assegnazione, assegno un valore a una variabile
                // ( esempio: var y = 'ciao' )
                {
                    "tipo_blocco": "assegnazione",              // tipologia di blocco
                    "data": {                                   // dati del blocco
                        "mutabilita": "var",                            // mutabilità della variabile (var, let, const, null)
                        "tipo": "string",                               // tipo della della variabile (int, string, array, .., null)
                        "nome": "y",                                    // nome della variabile
                        "valore": "<<<ciao>>>"                          // le stringhe vanno inserite dentro triplici apici (<<< testo qui dentro >>>)
                    }
                },
                // [ASSEGNAZIONE] - Blocco assegnazione, assegno un valore a una variabile
                // ( esempio: var numeri = [1,2,3,4,5,6,7,8,9] )
                {
                    "tipo_blocco": "assegnazione",              // tipologia di blocco
                    "data": {                                   // dati del blocco
                        "mutabilita": "var",                            // mutabilità della variabile (var, let, const, null)
                        "tipo": "array",                                // tipo della della variabile (int, string, array, .., null)
                        "nome": "numeri",                               // nome della variabile
                        "valore": [1,2,3,4,5,6,7,8,9]                   // valore della variabile (5, 'ciao', una_variabile, ..)
                    }
                },
            ]
        }
    },
    // [END] - Blocco risultato, restituisco il risultato di una funzione
    // ( esempio: return true )
    {
        "tipo_blocco": "risultato",                 // tipologia di blocco
        "data": {                                   // dati del blocco
            "return": true,                                 // return della funzione (return media)
        }
    }
]

// esempio di flowchart per il calcolo della media riscritto in json-mode
var blocchi = [
    // esempio blocco firma funzione
    {
        "tipo_blocco": "firma",                     // tipologia di blocco
        "data": {                                   // dati del blocco
            "nome": "media",                                // nome della funzione
            "parametri": ["array_numeri"]                   // elenco dei nomi dei parametri in ingresso
        }
    },
    {
        "tipo_blocco": "dichiarazione",              // tipologia di blocco
        "data": {                                   // dati del blocco
            "mutabilita": null,                             // mutabilità della variabile (var, let, const, null)
            "tipo": null,                                   // tipo della della variabile (int, string, array, .., null)
            "nome": "numeri",                               // nome della variabile
            "valore": "array_numeri"                        // valore della variabile (5, "ciao", una_variabile)
        }
    },
    {
        "tipo_blocco": "dichiarazione",
        "data": {
            "mutabilita": null,
            "tipo": null,
            "nome": "media",
            "valore": 0
        }
    },
    {
        "tipo_blocco": "dichiarazione",
        "data": {
            "mutabilita": null,
            "tipo": null,
            "nome": "somma",
            "valore": 0
        }
    },
    {
        "tipo_blocco": "dichiarazione",
        "data": {
            "mutabilita": null,
            "tipo": null,
            "nome": "contatore",
            "valore": 0
        }
    },
    {
        "tipo_blocco": "ciclo",                     // tipologia di blocco 
        "data": {                                   // dati del blocco
            "termine_1": "contatore",                       // primo termine di paragone della condizione del ciclo (TERMINE_1 < termine_2)
            "operatore": "<",                               // operatore di paragone
            "termine_2": "numeri.length",                   // secondo termine di paragone della condizione del ciclo (termine_1 < TERMINE_2)
            "blocchi": [                                    // blocchi contenuti all'interno del ciclo
                {
                    "tipo_blocco": "assegnazione",
                     "data": {
                        "mutabilita": null,
                        "tipo": null,
                        "nome": "somma",
                        "valore": "somma + numeri[contatore]"
                    }
                },
                {
                    "tipo_blocco": "assegnazione",
                    "data": {
                        "mutabilita": null,
                        "tipo": null,
                        "nome": "contatore",
                        "valore": "contatore + 1"
                    }
                },
            ]
        }
    },
    {
        "tipo_blocco": "assegnazione",
        "data": {
            "mutabilita": null,
            "tipo": null,
            "nome": "media",
            "valore": "somma / numeri.length"
        }
    },
    {
        "tipo_blocco": "risultato",                 // tipologia di blocco
        "data": {                                   // dati del blocco
            "return": "media",                              // return della funzione (return media)
        }
    }
]

module.exports = blocchi;