class Currency {
    constructor(TRYCurreny,USDCurreny,EURCurrency,GBPCurrency,CHFCurrency,CNYCurrency,JPYCurrency,BRLCurrency,RUBCurrency,SEKCurrency,CADCurrency,ISKCurrency,HRKCurrency,NZDCurrency,INRCurrency,PLNCurrency){

        this.TRYCurreny = TRYCurreny;
        this.USDCurreny = USDCurreny;
        this.EURCurrency = EURCurrency;
        this.GBPCurrency = GBPCurrency;
        this.CHFCurrency = CHFCurrency;
        this.CNYCurrency = CNYCurrency;
        this.JPYCurrency = JPYCurrency;
        this.BRLCurrency = BRLCurrency;
        this.RUBCurrency = RUBCurrency;
        this.SEKCurrency = SEKCurrency;
        this.CADCurrency = CADCurrency;
        this.ISKCurrency = ISKCurrency;
        this.HRKCurrency = HRKCurrency;
        this.NZDCurrency = NZDCurrency;
        this.INRCurrency = INRCurrency;
        this.PLNCurrency = PLNCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";

    }
    

    TRYexchange(){

        const ui = new UI(selectTRY,selectUSD,selectEUR,selectGBP,selectCHF,selectCNY,selectJPY,selectBRL,selectRUB,selectSEK,selectCAD,selectISK,selectHRK,selectNZD,selectINR,selectPLN);
            fetch(this.url + this.TRYCurreny)
            .then(response => response.json())
            .then(data => {
                const USDparty = data.rates[this.USDCurreny];
                const EURparty = data.rates[this.EURCurrency];
                const GBPparty = data.rates[this.GBPCurrency];
                const CHFparty = data.rates[this.CHFCurrency];
                const CNYparty = data.rates[this.CNYCurrency];
                const JPYparty = data.rates[this.JPYCurrency];
                const BRLparty = data.rates[this.BRLCurrency];
                const RUBparty = data.rates[this.RUBCurrency];
                const SEKparty = data.rates[this.SEKCurrency];
                const CADparty = data.rates[this.CADCurrency];
                const ISKparty = data.rates[this.ISKCurrency];
                const HRKparty = data.rates[this.HRKCurrency];
                const NZDparty = data.rates[this.NZDCurrency];
                const INRparty = data.rates[this.INRCurrency];
                const PLNparty = data.rates[this.PLNCurrency];
    
                const TRYNumber = Number(selectTRY.value);
    
                let USDTotal = (USDparty * TRYNumber).toFixed(2);
                let EURTotal = (EURparty * TRYNumber).toFixed(2);
                let GBPTotal = (GBPparty * TRYNumber).toFixed(2);
                let CHFTotal = (CHFparty * TRYNumber).toFixed(2);
                let CNYTotal = (CNYparty * TRYNumber).toFixed(2);
                let JPYTotal = (JPYparty * TRYNumber).toFixed(2);
                let BRLTotal = (BRLparty * TRYNumber).toFixed(2);
                let RUBTotal = (RUBparty * TRYNumber).toFixed(2);
                let SEKTotal = (SEKparty * TRYNumber).toFixed(2);
                let CADTotal = (CADparty * TRYNumber).toFixed(2);
                let ISKTotal = (ISKparty * TRYNumber).toFixed(2);
                let HRKTotal = (HRKparty * TRYNumber).toFixed(2);
                let NZDTotal = (NZDparty * TRYNumber).toFixed(2);
                let INRTotal = (INRparty * TRYNumber).toFixed(2);
                let PLNTotal = (PLNparty * TRYNumber).toFixed(2);


                ui.USDDisplay(USDTotal);
                ui.EURDisplay(EURTotal);
                ui.GBPDisplay(GBPTotal);
                ui.CHFDisplay(CHFTotal);
                ui.CNYDisplay(CNYTotal);
                ui.JPYDisplay(JPYTotal);
                ui.BRLDisplay(BRLTotal);
                ui.RUBDisplay(RUBTotal);
                ui.SEKDisplay(SEKTotal);
                ui.CADDisplay(CADTotal);
                ui.ISKDisplay(ISKTotal);
                ui.HRKDisplay(HRKTotal);
                ui.NZDDisplay(NZDTotal);
                ui.INRDisplay(INRTotal);
                ui.PLNDisplay(PLNTotal);
    
            })
            .catch(err => console.log(err));

            

    }

    USDexchange(){
        fetch(this.url + this.USDCurreny)
        .then(response => response.json())
        .then(data => {

            const TRYparty = data.rates[this.TRYCurreny];
            const EURparty = data.rates[this.EURCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const USDNumber = Number(selectUSD.value);

            let TRYTotal = (TRYparty * USDNumber).toFixed(2);
            let EURTotal = (EURparty * USDNumber).toFixed(2);
            let GBPTotal = (GBPparty * USDNumber).toFixed(2);
            let CHFTotal = (CHFparty * USDNumber).toFixed(2);
            let CNYTotal = (CNYparty * USDNumber).toFixed(2);
            let JPYTotal = (JPYparty * USDNumber).toFixed(2);
            let BRLTotal = (BRLparty * USDNumber).toFixed(2);
            let RUBTotal = (RUBparty * USDNumber).toFixed(2);
            let SEKTotal = (SEKparty * USDNumber).toFixed(2);
            let CADTotal = (CADparty * USDNumber).toFixed(2);
            let ISKTotal = (ISKparty * USDNumber).toFixed(2);
            let HRKTotal = (HRKparty * USDNumber).toFixed(2);
            let NZDTotal = (NZDparty * USDNumber).toFixed(2);
            let INRTotal = (INRparty * USDNumber).toFixed(2);
            let PLNTotal = (PLNparty * USDNumber).toFixed(2);

                ui.TRYDisplay(TRYTotal);
                ui.EURDisplay(EURTotal);
                ui.GBPDisplay(GBPTotal);
                ui.CHFDisplay(CHFTotal);
                ui.CNYDisplay(CNYTotal);
                ui.JPYDisplay(JPYTotal);
                ui.BRLDisplay(BRLTotal);
                ui.RUBDisplay(RUBTotal);
                ui.SEKDisplay(SEKTotal);
                ui.CADDisplay(CADTotal);
                ui.ISKDisplay(ISKTotal);
                ui.HRKDisplay(HRKTotal);
                ui.NZDDisplay(NZDTotal);
                ui.INRDisplay(INRTotal);
                ui.PLNDisplay(PLNTotal);

        })
        .catch(err => console.log(err));
    }

    EURexchange(){
        fetch(this.url + this.EURCurrency)
        .then(response => response.json())
        .then(data => {

            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const EURNumber = Number(selectEUR.value);

            let TRYTotal = (TRYparty * EURNumber).toFixed(2);
            let USDTotal = (USDparty * EURNumber).toFixed(2);
            let GBPTotal = (GBPparty * EURNumber).toFixed(2);
            let CHFTotal = (CHFparty * EURNumber).toFixed(2);
            let CNYTotal = (CNYparty * EURNumber).toFixed(2);
            let JPYTotal = (JPYparty * EURNumber).toFixed(2);
            let BRLTotal = (BRLparty * EURNumber).toFixed(2);
            let RUBTotal = (RUBparty * EURNumber).toFixed(2);
            let SEKTotal = (SEKparty * EURNumber).toFixed(2);
            let CADTotal = (CADparty * EURNumber).toFixed(2);
            let ISKTotal = (ISKparty * EURNumber).toFixed(2);
            let HRKTotal = (HRKparty * EURNumber).toFixed(2);
            let NZDTotal = (NZDparty * EURNumber).toFixed(2);
            let INRTotal = (INRparty * EURNumber).toFixed(2);
            let PLNTotal = (PLNparty * EURNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
            
        })
        .catch(err => console.log(err));
    }

    GBPexchange(){
        fetch(this.url + this.GBPCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const GBPNumber = Number(selectGBP.value);

            let TRYTotal = (TRYparty * GBPNumber).toFixed(2);
            let USDTotal = (USDparty * GBPNumber).toFixed(2);
            let EURTotal = (EURparty * GBPNumber).toFixed(2);
            let CHFTotal = (CHFparty * GBPNumber).toFixed(2);
            let CNYTotal = (CNYparty * GBPNumber).toFixed(2);
            let JPYTotal = (JPYparty * GBPNumber).toFixed(2);
            let BRLTotal = (BRLparty * GBPNumber).toFixed(2);
            let RUBTotal = (RUBparty * GBPNumber).toFixed(2);
            let SEKTotal = (SEKparty * GBPNumber).toFixed(2);
            let CADTotal = (CADparty * GBPNumber).toFixed(2);
            let ISKTotal = (ISKparty * GBPNumber).toFixed(2);
            let HRKTotal = (HRKparty * GBPNumber).toFixed(2);
            let NZDTotal = (NZDparty * GBPNumber).toFixed(2);
            let INRTotal = (INRparty * GBPNumber).toFixed(2);
            let PLNTotal = (PLNparty * GBPNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    CHFexchange(){
        fetch(this.url + this.CHFCurrency)
        .then(response => response.json())
        .then(data => {

            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const CHFNumber = Number(selectCHF.value);

            let TRYTotal = (TRYparty * CHFNumber).toFixed(2);
            let USDTotal = (USDparty * CHFNumber).toFixed(2);
            let EURTotal = (EURparty * CHFNumber).toFixed(2);
            let GBPTotal = (GBPparty * CHFNumber).toFixed(2);
            let CNYTotal = (CNYparty * CHFNumber).toFixed(2);
            let JPYTotal = (JPYparty * CHFNumber).toFixed(2);
            let BRLTotal = (BRLparty * CHFNumber).toFixed(2);
            let RUBTotal = (RUBparty * CHFNumber).toFixed(2);
            let SEKTotal = (SEKparty * CHFNumber).toFixed(2);
            let CADTotal = (CADparty * CHFNumber).toFixed(2);
            let ISKTotal = (ISKparty * CHFNumber).toFixed(2);
            let HRKTotal = (HRKparty * CHFNumber).toFixed(2);
            let NZDTotal = (NZDparty * CHFNumber).toFixed(2);
            let INRTotal = (INRparty * CHFNumber).toFixed(2);
            let PLNTotal = (PLNparty * CHFNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);

        })
        .catch(err => console.log(err));
    }
    CNYexchange(){
        fetch(this.url + this.CNYCurrency)
        .then(response => response.json())
        .then(data => {

            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const CNYNumber = Number(selectCNY.value);

            let TRYTotal = (TRYparty * CNYNumber).toFixed(2);
            let USDTotal = (USDparty * CNYNumber).toFixed(2);
            let EURTotal = (EURparty * CNYNumber).toFixed(2);
            let GBPTotal = (GBPparty * CNYNumber).toFixed(2);
            let CHFTotal = (CHFparty * CNYNumber).toFixed(2);
            let JPYTotal = (JPYparty * CNYNumber).toFixed(2);
            let BRLTotal = (BRLparty * CNYNumber).toFixed(2);
            let RUBTotal = (RUBparty * CNYNumber).toFixed(2);
            let SEKTotal = (SEKparty * CNYNumber).toFixed(2);
            let CADTotal = (CADparty * CNYNumber).toFixed(2);
            let ISKTotal = (ISKparty * CNYNumber).toFixed(2);
            let HRKTotal = (HRKparty * CNYNumber).toFixed(2);
            let NZDTotal = (NZDparty * CNYNumber).toFixed(2);
            let INRTotal = (INRparty * CNYNumber).toFixed(2);
            let PLNTotal = (PLNparty * CNYNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    JPYexchange(){
        fetch(this.url + this.JPYCurrency)
        .then(response => response.json())
        .then(data => {


            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const JPYNumber = Number(selectJPY.value);

            let TRYTotal = (TRYparty * JPYNumber).toFixed(2);
            let USDTotal = (USDparty * JPYNumber).toFixed(2);
            let EURTotal = (EURparty * JPYNumber).toFixed(2);
            let GBPTotal = (GBPparty * JPYNumber).toFixed(2);
            let CHFTotal = (CHFparty * JPYNumber).toFixed(2);
            let CNYTotal = (CNYparty * JPYNumber).toFixed(2);
            let BRLTotal = (BRLparty * JPYNumber).toFixed(2);
            let RUBTotal = (RUBparty * JPYNumber).toFixed(2);
            let SEKTotal = (SEKparty * JPYNumber).toFixed(2);
            let CADTotal = (CADparty * JPYNumber).toFixed(2);
            let ISKTotal = (ISKparty * JPYNumber).toFixed(2);
            let HRKTotal = (HRKparty * JPYNumber).toFixed(2);
            let NZDTotal = (NZDparty * JPYNumber).toFixed(2);
            let INRTotal = (INRparty * JPYNumber).toFixed(2);
            let PLNTotal = (PLNparty * JPYNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);

        })
        .catch(err => console.log(err));
    }
    BRLexchange(){
        fetch(this.url + this.BRLCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const BRLNumber = Number(selectBRL.value);

            let TRYTotal = (TRYparty * BRLNumber).toFixed(2);
            let USDTotal = (USDparty * BRLNumber).toFixed(2);
            let EURTotal = (EURparty * BRLNumber).toFixed(2);
            let GBPTotal = (GBPparty * BRLNumber).toFixed(2);
            let CHFTotal = (CHFparty * BRLNumber).toFixed(2);
            let CNYTotal = (CNYparty * BRLNumber).toFixed(2);
            let JPYTotal = (JPYparty * BRLNumber).toFixed(2);
            let RUBTotal = (RUBparty * BRLNumber).toFixed(2);
            let SEKTotal = (SEKparty * BRLNumber).toFixed(2);
            let CADTotal = (CADparty * BRLNumber).toFixed(2);
            let ISKTotal = (ISKparty * BRLNumber).toFixed(2);
            let HRKTotal = (HRKparty * BRLNumber).toFixed(2);
            let NZDTotal = (NZDparty * BRLNumber).toFixed(2);
            let INRTotal = (INRparty * BRLNumber).toFixed(2);
            let PLNTotal = (PLNparty * BRLNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    RUBexchange(){
        fetch(this.url + this.RUBCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const RUBNumber = Number(selectRUB.value);

            let TRYTotal = (TRYparty * RUBNumber).toFixed(2);
            let USDTotal = (USDparty * RUBNumber).toFixed(2);
            let EURTotal = (EURparty * RUBNumber).toFixed(2);
            let GBPTotal = (GBPparty * RUBNumber).toFixed(2);
            let CHFTotal = (CHFparty * RUBNumber).toFixed(2);
            let CNYTotal = (CNYparty * RUBNumber).toFixed(2);
            let JPYTotal = (JPYparty * RUBNumber).toFixed(2);
            let BRLTotal = (BRLparty * RUBNumber).toFixed(2);
            let SEKTotal = (SEKparty * RUBNumber).toFixed(2);
            let CADTotal = (CADparty * RUBNumber).toFixed(2);
            let ISKTotal = (ISKparty * RUBNumber).toFixed(2);
            let HRKTotal = (HRKparty * RUBNumber).toFixed(2);
            let NZDTotal = (NZDparty * RUBNumber).toFixed(2);
            let INRTotal = (INRparty * RUBNumber).toFixed(2);
            let PLNTotal = (PLNparty * RUBNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    SEKexchange(){
        fetch(this.url + this.SEKCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const SEKNumber = Number(selectSEK.value);

            let TRYTotal = (TRYparty * SEKNumber).toFixed(2);
            let USDTotal = (USDparty * SEKNumber).toFixed(2);
            let EURTotal = (EURparty * SEKNumber).toFixed(2);
            let GBPTotal = (GBPparty * SEKNumber).toFixed(2);
            let CHFTotal = (CHFparty * SEKNumber).toFixed(2);
            let CNYTotal = (CNYparty * SEKNumber).toFixed(2);
            let JPYTotal = (JPYparty * SEKNumber).toFixed(2);
            let BRLTotal = (BRLparty * SEKNumber).toFixed(2);
            let RUBTotal = (RUBparty * SEKNumber).toFixed(2);
            let CADTotal = (CADparty * SEKNumber).toFixed(2);
            let ISKTotal = (ISKparty * SEKNumber).toFixed(2);
            let HRKTotal = (HRKparty * SEKNumber).toFixed(2);
            let NZDTotal = (NZDparty * SEKNumber).toFixed(2);
            let INRTotal = (INRparty * SEKNumber).toFixed(2);
            let PLNTotal = (PLNparty * SEKNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    CADexchange(){
        fetch(this.url + this.CADCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const CADNumber = Number(selectCAD.value);

            let TRYTotal = (TRYparty * CADNumber).toFixed(2);
            let USDTotal = (USDparty * CADNumber).toFixed(2);
            let EURTotal = (EURparty * CADNumber).toFixed(2);
            let GBPTotal = (GBPparty * CADNumber).toFixed(2);
            let CHFTotal = (CHFparty * CADNumber).toFixed(2);
            let CNYTotal = (CNYparty * CADNumber).toFixed(2);
            let JPYTotal = (JPYparty * CADNumber).toFixed(2);
            let BRLTotal = (BRLparty * CADNumber).toFixed(2);
            let RUBTotal = (RUBparty * CADNumber).toFixed(2);
            let SEKTotal = (SEKparty * CADNumber).toFixed(2);
            let ISKTotal = (ISKparty * CADNumber).toFixed(2);
            let HRKTotal = (HRKparty * CADNumber).toFixed(2);
            let NZDTotal = (NZDparty * CADNumber).toFixed(2);
            let INRTotal = (INRparty * CADNumber).toFixed(2);
            let PLNTotal = (PLNparty * CADNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    ISKexchange(){
        fetch(this.url + this.ISKCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const ISKNumber = Number(selectISK.value);

            let TRYTotal = (TRYparty * ISKNumber).toFixed(2);
            let USDTotal = (USDparty * ISKNumber).toFixed(2);
            let EURTotal = (EURparty * ISKNumber).toFixed(2);
            let GBPTotal = (GBPparty * ISKNumber).toFixed(2);
            let CHFTotal = (CHFparty * ISKNumber).toFixed(2);
            let CNYTotal = (CNYparty * ISKNumber).toFixed(2);
            let JPYTotal = (JPYparty * ISKNumber).toFixed(2);
            let BRLTotal = (BRLparty * ISKNumber).toFixed(2);
            let RUBTotal = (RUBparty * ISKNumber).toFixed(2);
            let SEKTotal = (SEKparty * ISKNumber).toFixed(2);
            let CADTotal = (CADparty * ISKNumber).toFixed(2);
            let HRKTotal = (HRKparty * ISKNumber).toFixed(2);
            let NZDTotal = (NZDparty * ISKNumber).toFixed(2);
            let INRTotal = (INRparty * ISKNumber).toFixed(2);
            let PLNTotal = (PLNparty * ISKNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    HRKexchange(){
        fetch(this.url + this.HRKCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const HRKNumber = Number(selectHRK.value);

            let TRYTotal = (TRYparty * HRKNumber).toFixed(2);
            let USDTotal = (USDparty * HRKNumber).toFixed(2);
            let EURTotal = (EURparty * HRKNumber).toFixed(2);
            let GBPTotal = (GBPparty * HRKNumber).toFixed(2);
            let CHFTotal = (CHFparty * HRKNumber).toFixed(2);
            let CNYTotal = (CNYparty * HRKNumber).toFixed(2);
            let JPYTotal = (JPYparty * HRKNumber).toFixed(2);
            let BRLTotal = (BRLparty * HRKNumber).toFixed(2);
            let RUBTotal = (RUBparty * HRKNumber).toFixed(2);
            let SEKTotal = (SEKparty * HRKNumber).toFixed(2);
            let CADTotal = (CADparty * HRKNumber).toFixed(2);
            let ISKTotal = (ISKparty * HRKNumber).toFixed(2);
            let NZDTotal = (NZDparty * HRKNumber).toFixed(2);
            let INRTotal = (INRparty * HRKNumber).toFixed(2);
            let PLNTotal = (PLNparty * HRKNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    NZDexchange(){
        fetch(this.url + this.NZDCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const INRparty = data.rates[this.INRCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const NZDNumber = Number(selectNZD.value);

            let TRYTotal = (TRYparty * NZDNumber).toFixed(2);
            let USDTotal = (USDparty * NZDNumber).toFixed(2);
            let EURTotal = (EURparty * NZDNumber).toFixed(2);
            let GBPTotal = (GBPparty * NZDNumber).toFixed(2);
            let CHFTotal = (CHFparty * NZDNumber).toFixed(2);
            let CNYTotal = (CNYparty * NZDNumber).toFixed(2);
            let JPYTotal = (JPYparty * NZDNumber).toFixed(2);
            let BRLTotal = (BRLparty * NZDNumber).toFixed(2);
            let RUBTotal = (RUBparty * NZDNumber).toFixed(2);
            let SEKTotal = (SEKparty * NZDNumber).toFixed(2);
            let CADTotal = (CADparty * NZDNumber).toFixed(2);
            let ISKTotal = (ISKparty * NZDNumber).toFixed(2);
            let HRKTotal = (HRKparty * NZDNumber).toFixed(2);
            let INRTotal = (INRparty * NZDNumber).toFixed(2);
            let PLNTotal = (PLNparty * NZDNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.INRDisplay(INRTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    INRexchange(){
        fetch(this.url + this.INRCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const PLNparty = data.rates[this.PLNCurrency];

            const INRNumber = Number(selectINR.value);

            let TRYTotal = (TRYparty * INRNumber).toFixed(2);
            let USDTotal = (USDparty * INRNumber).toFixed(2);
            let EURTotal = (EURparty * INRNumber).toFixed(2);
            let GBPTotal = (GBPparty * INRNumber).toFixed(2);
            let CHFTotal = (CHFparty * INRNumber).toFixed(2);
            let CNYTotal = (CNYparty * INRNumber).toFixed(2);
            let JPYTotal = (JPYparty * INRNumber).toFixed(2);
            let BRLTotal = (BRLparty * INRNumber).toFixed(2);
            let RUBTotal = (RUBparty * INRNumber).toFixed(2);
            let SEKTotal = (SEKparty * INRNumber).toFixed(2);
            let CADTotal = (CADparty * INRNumber).toFixed(2);
            let ISKTotal = (ISKparty * INRNumber).toFixed(2);
            let HRKTotal = (HRKparty * INRNumber).toFixed(2);
            let NZDTotal = (NZDparty * INRNumber).toFixed(2);
            let PLNTotal = (PLNparty * INRNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.PLNDisplay(PLNTotal);
        })
        .catch(err => console.log(err));
    }
    PLNexchange(){
        fetch(this.url + this.PLNCurrency)
        .then(response => response.json())
        .then(data => {
            const TRYparty = data.rates[this.TRYCurreny];
            const USDparty = data.rates[this.USDCurrency];
            const EURparty = data.rates[this.EURPCurrency];
            const GBPparty = data.rates[this.GBPCurrency];
            const CHFparty = data.rates[this.CHFCurrency];
            const CNYparty = data.rates[this.CNYCurrency];
            const JPYparty = data.rates[this.JPYCurrency];
            const BRLparty = data.rates[this.BRLCurrency];
            const RUBparty = data.rates[this.RUBCurrency];
            const SEKparty = data.rates[this.SEKCurrency];
            const CADparty = data.rates[this.CADCurrency];
            const ISKparty = data.rates[this.ISKCurrency];
            const HRKparty = data.rates[this.HRKCurrency];
            const NZDparty = data.rates[this.NZDCurrency];
            const INRparty = data.rates[this.INRCurrency];

            const PLNNumber = Number(selectPLN.value);

            let TRYTotal = (TRYparty * PLNNumber).toFixed(2);
            let USDTotal = (USDparty * PLNNumber).toFixed(2);
            let EURTotal = (EURparty * PLNNumber).toFixed(2);
            let GBPTotal = (GBPparty * PLNNumber).toFixed(2);
            let CHFTotal = (CHFparty * PLNNumber).toFixed(2);
            let CNYTotal = (CNYparty * PLNNumber).toFixed(2);
            let JPYTotal = (JPYparty * PLNNumber).toFixed(2);
            let BRLTotal = (BRLparty * PLNNumber).toFixed(2);
            let RUBTotal = (RUBparty * PLNNumber).toFixed(2);
            let SEKTotal = (SEKparty * PLNNumber).toFixed(2);
            let CADTotal = (CADparty * PLNNumber).toFixed(2);
            let ISKTotal = (ISKparty * PLNNumber).toFixed(2);
            let HRKTotal = (HRKparty * PLNNumber).toFixed(2);
            let NZDTotal = (NZDparty * PLNNumber).toFixed(2);
            let INRTotal = (INRparty * PLNNumber).toFixed(2);

            ui.TRYDisplay(TRYTotal);
            ui.USDDisplay(USDTotal);
            ui.EURDisplay(EURTotal);
            ui.GBPDisplay(GBPTotal);
            ui.CHFDisplay(CHFTotal);
            ui.CNYDisplay(CNYTotal);
            ui.JPYDisplay(JPYTotal);
            ui.BRLDisplay(BRLTotal);
            ui.RUBDisplay(RUBTotal);
            ui.SEKDisplay(SEKTotal);
            ui.CADDisplay(CADTotal);
            ui.ISKDisplay(ISKTotal);
            ui.HRKDisplay(HRKTotal);
            ui.NZDDisplay(NZDTotal);
            ui.INRDisplay(INRTotal);

        })
        .catch(err => console.log(err));
    }

}