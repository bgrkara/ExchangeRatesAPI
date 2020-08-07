const selectTRY = document.querySelector("#TRY");
const selectUSD = document.querySelector("#USD");
const selectEUR = document.querySelector("#EUR");
const selectGBP = document.querySelector("#GBP");
const selectCHF = document.querySelector("#CHF");
const selectCNY = document.querySelector("#CNY");
const selectJPY = document.querySelector("#JPY");
const selectBRL = document.querySelector("#BRL");
const selectRUB = document.querySelector("#RUB");
const selectSEK = document.querySelector("#SEK");
const selectCAD = document.querySelector("#CAD");
const selectISK = document.querySelector("#ISK");
const selectHRK = document.querySelector("#HRK");
const selectNZD = document.querySelector("#NZD");
const selectINR = document.querySelector("#INR");
const selectPLN = document.querySelector("#PLN");

const ui = new UI(selectTRY,selectUSD,selectEUR,selectGBP,selectCHF,selectCNY,selectJPY,selectBRL,selectRUB,selectSEK,selectCAD,selectISK,selectHRK,selectNZD,selectINR,selectPLN);

const currency = new Currency("TRY", "USD", "EUR" , "GBP" , "CHF", "CNY" , "JPY", "BRL" , "RUB", "SEK" , "CAD", "ISK" , "HRK", "NZD" , "INR", "PLN");

eventListeners();
function eventListeners(){
    selectTRY.addEventListener("input", TRYCurrency);
    selectUSD.addEventListener("input", USDCurrency);
    selectEUR.addEventListener("input", EURCurrency);
    selectGBP.addEventListener("input", GBPCurrency);
    selectCHF.addEventListener("input", CHFCurrency);
    selectCNY.addEventListener("input", CNYCurrency);
    selectJPY.addEventListener("input", JPYCurrency);
    selectBRL.addEventListener("input", BRLCurrency);
    selectRUB.addEventListener("input", RUBCurrency);
    selectSEK.addEventListener("input", SEKCurrency);
    selectCAD.addEventListener("input", CADCurrency);
    selectISK.addEventListener("input", ISKCurrency);
    selectHRK.addEventListener("input", HRKCurrency);
    selectNZD.addEventListener("input", NZDCurrency);
    selectINR.addEventListener("input", INRCurrency);
    selectPLN.addEventListener("input", PLNCurrency);

}

function TRYCurrency(){
    currency.TRYexchange()
    console.log("TRY Event Oluştu");

}
function USDCurrency(){
    currency.USDexchange();
    console.log("USD Event Oluştu");
}
function EURCurrency(){
    currency.EURexchange();
    console.log("EUR Event Oluştu");
}
function GBPCurrency(){
    currency.GBPexchange();
    console.log("GBP Event Oluştu");
}

function CHFCurrency(){
    currency.CHFexchange();
    console.log("CHF Event Oluştu");
}
function CNYCurrency(){
    currency.CNYexchange();
    console.log("CNY Event Oluştu");
}
function JPYCurrency(){
    currency.JPYexchange();
    console.log("JPY Event Oluştu");
}
function BRLCurrency(){
    currency.BRLexchange();
    console.log("BRL Event Oluştu");
}
function RUBCurrency(){
    currency.RUBexchange();
    console.log("RUB Event Oluştu");
}
function SEKCurrency(){
    currency.SEKexchange();
    console.log("SEK Event Oluştu");
}
function CADCurrency(){
    currency.CADexchange();
    console.log("CAD Event Oluştu");
}
function ISKCurrency(){
    currency.ISKexchange();
    console.log("ISK Event Oluştu");
}
function HRKCurrency(){
    currency.HRKexchange();
    console.log("HRK Event Oluştu");
}
function NZDCurrency(){
    currency.NZDexchange();
    console.log("NZD Event Oluştu");
}
function INRCurrency(){
    currency.INRexchange();
    console.log("INR Event Oluştu");
}
function PLNCurrency(){
    currency.PLNexchange();
    console.log("PLN Event Oluştu");
}
