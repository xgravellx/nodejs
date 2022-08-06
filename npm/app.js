const yargs = require('yargs');
const kisi = require('./kisi');

yargs.version('1.5.3');

yargs.command({
    command: 'ekle',
    describe: 'yeni kişi eklemeye yarar',
    builder: {
        isim: {
            describe: 'eklenecek kişi adı',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("isim:" + argv.isim + "tel no:" + argv.tel);
        kisi.kisiEkle(argv.isim, argv.tel);
    }
})

yargs.command({
    command: 'sil',
    describe: 'kisiyi siler',
    builder: {
        isim: {
            describe: 'silinecek kişi adı',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("silinecek kişi adı:" + argv.isim);
        kisi.kisiSil(argv.isim);
    }
})

yargs.command({
    command: 'goster',
    describe: 'kişiyi gösterir',
    handler(argv) {
        console.log("gösterilen kişi adı:" + argv.isim);
        kisi.kisiGoster(argv.isim);
    }
})

yargs.command({
    command: 'listele',
    describe: 'tüm rehberi listeler',
    builder: {
        isim: {
            describe: 'listelenecek kişi adı',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("tüm rehber listelenecek");
        kisi.kisiListele();
    }
})

yargs.parse();