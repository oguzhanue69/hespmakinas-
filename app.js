//burada tüm butonları çağırdık btn ye atadık.
 const btn = document.getElementsByTagName("button")
 //burada ekranı çağırdık
 const ekran = document.getElementById("ekran")
 //buraya eşittir işsaretini çağırdık
 const calc = document.getElementById("calculate")
// buraya c butonunu çağırdık. clear a atadık
const clear = document.getElementById("clear")

// for döngüsü ile 0 dan başlayarak 16 ya arttırarak kadar  dön.
 for(let i=0; i< 16; i++){
    //eğer 12 ve 14. butonlara eşit değilse çalışsın yani c ve = i ekranı yazdırmak istemiyorum.
    if(i !=12 && i!=14){
        //i 0 dan 15 e kadar olabilir
        //burada butona tıklandığında yaz fonksiyonu çalışacak
        btn[i].addEventListener("click",yaz)
    }
 }
 //bu fonksiyon çalıştığında ekrana seçili buton değeri yazılır.
 function yaz (){
    ekran.value = ekran.value + this.value
 }
 // burada eşittir e tıklanınca hesapla fonksiyonu çalışacak.
 calc.addEventListener("click",hesapla)

 // bu fonksiyon çalışınca fonksiyon yazılan değeri hesaplamayı eval ile hesaplayacak.
 function hesapla (){
    ekran.value = eval(ekran.value)
 }
 //burada c ye tıklanınca clear fonksiyonu çalışacak
 clear.addEventListener("click",sil)

 // bu fonksiyon çalışınca ekrandaki değerler silinecek
    function sil (){
    ekran.value = ""
    


 }