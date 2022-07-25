const os = require('os');
const fs = require('fs');


let pcInfo = function () {
    let freeRAM     = byteToGB(os.freemem);
    let totalRAM    = byteToGB(os.totalmem());
    let usedRAM     = (totalRAM - freeRAM).toFixed(2); 

    let cpuNumber   = os.cpus().length;


    fs.writeFile('pc-info.txt', pcInfoShow(), (err) => {
        if(err) console.log(`Dosyaya yazarken hata oluştu`);
    })
    
    
    function byteToGB(totalBYTE) {
        return (totalBYTE / 1024 / 1024 / 1024).toFixed(2);
    }
    
    function pcInfoShow() {
        return (`Toplam RAM: ${totalRAM}, Kullanılan RAM: ${usedRAM}, Free RAM: ${freeRAM}, CPU: ${cpuNumber}`);
    }
}

exports.pcInfo = pcInfo;