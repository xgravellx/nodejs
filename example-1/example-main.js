/*
pc-info isimli bir modül oluşturun.
Bu modülün amacı nodejs uygulamasının çalıştığı makinayla ilgili verileri göstermektir.
os hazır modüünü kullanarak bu işlemi gerçekleştirebilirsiniz.
Bu modülü kullanarak bilgisayarın toplam kaç gb RAM, kullanılan ve Free RAM miktarı ile kaç CPU olduğunu yazan bir fonksiyon oluşturun.
Son sonucu pc-info.txt dosyasına yazdıran bir program yazınız.
Bu program başka dosyalardan da çağrılabilmelidir.
*/

const pcInfo = require('./pc-info');

pcInfo.pcInfo();