class UI{

    constructor(selectTRY,selectUSD,selectEUR,selectGBP,selectCHF,selectCNY,selectJPY,selectBRL,selectRUB,selectSEK,selectCAD,selectISK,selectHRK,selectNZD,selectINR,selectPLN){

        this.selectTRY = selectTRY;
        this.selectUSD = selectUSD;
        this.selectEUR = selectEUR;
        this.selectGBP = selectGBP;
        this.selectCHF = selectCHF;
        this.selectCNY = selectCNY;
        this.selectJPY = selectJPY;
        this.selectBRL = selectBRL;
        this.selectRUB = selectRUB;
        this.selectSEK = selectSEK;
        this.selectCAD = selectCAD;
        this.selectISK = selectISK;
        this.selectHRK = selectHRK;
        this.selectNZD = selectNZD;
        this.selectINR = selectINR;
        this.selectPLN = selectPLN;

    }

    TRYDisplay(TRYTotal){document.getElementById("TRY").value = TRYTotal;}
    USDDisplay(USDTotal){document.getElementById("USD").value = USDTotal;}
    EURDisplay(EURTotal){document.getElementById("EUR").value = EURTotal;}
    GBPDisplay(GBPTotal){document.getElementById("GBP").value = GBPTotal;}
    CHFDisplay(CHFTotal){document.getElementById("CHF").value = CHFTotal;}
    CNYDisplay(CNYTotal){document.getElementById("CNY").value = CNYTotal;}
    JPYDisplay(JPYTotal){document.getElementById("JPY").value = JPYTotal;}
    BRLDisplay(BRLTotal){document.getElementById("BRL").value = BRLTotal;}
    RUBDisplay(RUBTotal){document.getElementById("RUB").value = RUBTotal;}
    SEKDisplay(SEKTotal){document.getElementById("SEK").value = SEKTotal;}
    CADDisplay(CADTotal){document.getElementById("CAD").value = CADTotal;}
    ISKDisplay(ISKTotal){document.getElementById("ISK").value = ISKTotal;}
    HRKDisplay(HRKTotal){document.getElementById("HRK").value = HRKTotal;}
    NZDDisplay(NZDTotal){document.getElementById("NZD").value = NZDTotal;}
    INRDisplay(INRTotal){document.getElementById("INR").value = INRTotal;}
    PLNDisplay(PLNTotal){document.getElementById("PLN").value = PLNTotal;}

}