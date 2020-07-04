# Egemsoft-Fullstack-Javascript-Developer-Task-Backend
Bu projede Node.js ve React kullanılarak anlık olarak stok takibi ve yönetimi yapılabilecek bir sistem tasarlanacaktır. Bu sistemde ön yüz olarak tüm ürünlerin listesinin olacağı bir önyüz tasarlanacaktır.. Proje Kısım 1 ve Kısım 2’den oluşmaktadır. Kısım 2 kısım 1’e bağlıdır. 
 
Kısım 1: Ürün yönetimi: ● Ürünlerin eklenmesi  ve silinmesi için bir webservice yazılacaktır. ● Bu backend RestAPI kullanacaktır. ● Ürün ekleme için örnek api ​ POST​ methodu kullanılarak IP:PORT/api/productManagement​ servisine gönderilecek bilgiler  {"productName":"Ürün İsmi", "productImage":"Ürün image linki"}  şeklinde olacaktır. ● Ürün idsi backend tarafından verilecek ve her gelen üründe artacaktır. 
 
 
Ürün görüntüleme sayfası: ● Sayfa ilk açtığında tüm ürünlerin listesi ​ GET ​ methodu kullanılarak IP:PORT/api/products ​ servisinden​ ​ çekilecek ve ekranda gösterilecektir. ● Ürün yönetimi servisinden yapılan ​ ekleme​ ve ​ silme​ işlemleri anlık olarak bu sayfada da görüntülenecektir. ● Bu sayfa backend ile ​ socket​ bağlantısı üzerinden haberleşecektir. Bu işlem için sayfa yenilenmeyecektir. 
 
 
İki sayfada da görüntülenecek ürünler cep telefonları olacaktır ve özellikleri şunlardır: ● Ürün Idsi ● Ürün adı ● Ürün görseli 
 
 
 
Kısım 2: 
 
Kısım 1’deki geliştirmelere ek olarak: 
 
Ürün yönetimi: ● Ürün yönetimi servisine benzer şekilde kategori yönetimi servisi eklenecektir. Bu servisteki alanlar categoryId ve categoryName olacaktır.  
● Ürün yönetimi servisine kategori ekleme ve çıkarma methodu eklenecektir. Bu kategoriler aşağıda belirtilmiştir. ● Tüm kategorilerin alınacağı servis için kullanılacak url ve method şu şekilde olacaktır: GET​  ​ IP:PORT/api/categories ● Tüm kategori işlemlerinin servisi için kullanılacak url ve method şu şekilde olacaktır: POST​  ​ IP:PORT/api/categoryManagement ● Ürün yönetimi servisine ürünlerin stok miktarı ve fiyatında değişikliklerin yapılabileceği methodlar eklenecektir. 
 
 
 
 
Ürün görüntüleme sayfası: ● Kullanıcı sayfayı ilk açtığında takip etmeyi isteyeceği kategorileri seçecektir. Bu kategori seçimleri multi-checkbox tarzında olacaktır. Bu kategoriler kategori yönetimi servisinden alınacaktır. ● Kullanıcının takip ettiği kategorilerdeki ürünlerin listesi kullanıcıya gösterilecektir. ● Ürün yönetimi sayfasında yapılan fiyat, stok, ekleme, silme gibi işlemler anlık olarak bu sayfada da görüntülenecektir. 
 
 
 
 
Görüntülenecek ürünler için özellikler şunlardır: ● Ürün Idsi ● Ürün adı ● Ürün görseli ● Ürün fiyatı ● Ürün stok miktarı ● Ürün kategori ismi 
 
Ürün kategorileri şu şekildedir: ● Cep Telefonu ● Bilgisayar ● Kitap ● Giyim 
 
 
Kullanılması beklenilen teknolojiler: ● Ürün yönetim sayfası için: ○ Express 
 
● Ürün görüntüleme sayfası için: ○ Socket.io ○ React ○ Axios  

 
 
Bunlara ek olarak: ● MongDB ● SemanticUI veya MaterialUI ● Görsel anlamda yapılacak geliştirmeler ● ES6 ● Webpack ● Babel kullanılması tercih sebebidir. 
 
 
 
Not: Bu verilenler haricinde sistemde yaptığınız ekstra geliştirmeler ve yaratıcılığınız değerlendirmede göz önüne alınacaktır.  
 
