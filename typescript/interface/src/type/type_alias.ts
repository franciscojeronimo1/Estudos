type Uuid = number | string | null;


function acessar(uuid: Uuid) {
  console.log(` conta referencia ai UUID: ${uuid}`)

}

acessar('3232')


type Moedas =" BRL" | "EUR" |  "USD";
function comprarItem(moeda:Moedas) {
  console.log("comprando com a moeda: ", moeda)
}

comprarItem("EUR")