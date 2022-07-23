let = [
    {marka:'Hyundai', rəng: 'Boz', anacaqNövü: 'Benzin', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 13000},
    {marka:'Hyundai', rəng: 'Qara', anacaqNövü: 'Dizel', sürətlərQutusu: 'Mexanika', banNövü: 'Kupe', qiymət: 43000},
    {marka:'Toyota', rəng: 'Qırmızı', anacaqNövü: 'Benzin', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 24000},
    {marka:'Subaru', rəng: 'Qara', anacaqNövü: 'Elektrik', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 20000},
    {marka:'Kia', rəng: 'Ağ', anacaqNövü: 'Benzin', sürətlərQutusu: 'Mexanika', banNövü: 'Hetçbek', qiymət: 19000},
    {marka:'Hyundai', rəng: 'Qara', anacaqNövü: 'Dizel', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 33000},
    {marka:'BMW', rəng: 'Göy', anacaqNövü: 'Benzin', sürətlərQutusu: 'Mexanika', banNövü: 'Hetçbek', qiymət: 16000},
]
    // Write code here


    let mycriteria = ['Avtomat','Benzin','Sedan'];
    let count = 0;
    let countMain= 0;
    for(let i = 0; i<obj.length;i++){
        // debugger    
    for(let key in obj[i]){
        if(mycriteria.includes(obj[i][key]) || obj[i][key] < 30000){
            count++
            if(count >= 3 ){
                countMain++;
                break;
            }
        }
    }
    count = 0;
    
    }   
    console.log(count,countMain);
