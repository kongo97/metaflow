
function media(array_numeri) 
{
    var numeri = array_numeri
    var media = 0
    var somma = 0
    var contatore = 0

    while(contatore < numeri.length)
    {
        somma = somma + numeri[contatore]
        contatore = contatore + 1
    }

    media = somma / numeri.length

    return media
}
