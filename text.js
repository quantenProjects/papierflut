textStorage = {
    "_comment" : "used for storing text. remind the space at the end of a 'begin' and at the begin of an 'end' as padding for the numbers",
    "beginText":{
        "begin":"Heute schon wieder ",
        "end" : " Zettel."
    },
    "_comment2":"for disabling max, use -1. float controls the decimal places. factor is the multiplicator for kg/kWh/liters",
    "wood":
        [
            {
                "max": -1,
                "min": 0,
                "float": 2,
                "factor": 1,
                "begin": "Zur Herstellung wurden ",
                "end": " kg Holz benötigt."
            },
            {
                "max": -1,
                "min": 0,
                "float": 0,
                "factor": 6000,
                "begin": "Mit dem Holz hätten ",
                "end": " Zahnstocher für ein sauberes Lächeln gemacht werden können."
            },
            {
                "max": -1,
                "min": 10,
                "float": 0,
                "factor": 0.34,
                "begin": "Mit dem Holz könnte man ",
                "end": " \"Frosta\" Ikea Hocker bauen."
            }
        ],
    "energy":
        [
            {
                "max": -1,
                "min": 0,
                "float": 2,
                "factor": 1,
                "begin": "Zur Herstellung wurden ",
                "end": " kWh Energie benötigt."
            },
            {
                "max": -1,
                "min": 5,
                "float": 2,
                "factor": 3,
                "begin": "Mit der benötigten Energie könnte man ",
                "end": " Liter Bier brauen."
            },
            {
                "max": -1,
                "min": 0,
                "float": 0,
                "factor": 142,
                "begin": "Mit der benötigten Energie hätten ",
                "end": " Handys aufgeladen werden können."
            }
        ],
    "water":
        [
            {
                "max": -1,
                "min": 0,
                "float": 2,
                "factor": 1,
                "begin": "Zur Herstellung wurden ",
                "end": " Liter Wasser verbraucht."
            },
            {
                "max": -1,
                "min": 0,
                "float": 0,
                "factor": 5,
                "begin": "Mit dem Wasser hätte man ",
                "end": " Becher füllen können."
            },
            {
                "max": -1,
                "min": 8,
                "float": 0,
                "factor": 0.5,
                "begin": "Mit dem Wasser könnte ein Mensch ",
                "end": " Tage auskommen."
            }
        ],




};
