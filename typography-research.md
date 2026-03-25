# 🔤 Tipografi ve Fontlar — Bilgisayar Grafiğinde Kapsamlı Araştırma

> Bu belge, "Bilgisayar Grafiği" dersi için tipografi ve fontlar konusunda detaylı Türkçe eğitim içeriği sağlamak amacıyla hazırlanmıştır. Her bölüm, belirli tarihler, sayılar ve gerçek örneklerle desteklenmiştir.

---

## 1. Bilgisayarda Font / Tipografi Tarihi 📜

### 1.1 Bitmap (Piksel) Fontlardan Vektör Fontlara Geçiş

Bilgisayarlarda tipografi, donanım sınırlamalarından doğmuştur. İlk bilgisayarlarda metin, sabit boyutlu piksel ızgaralarında temsil edilirdi.

**Zaman Çizelgesi:**

| Yıl | Olay | Detay |
|-----|------|-------|
| **1968** | Xerox PARC'ın temelleri | Douglas Engelbart, "The Mother of All Demos"da ilk kez ekranda metin düzenlemeyi gösterdi. |
| **1970** | Xerox PARC kuruldu | Palo Alto Research Center, grafiksel kullanıcı arayüzlerinin doğduğu yer. İlk bitmap fontlar burada geliştirildi. |
| **1973** | Xerox Alto | İlk kişisel bilgisayar prototipi. Bitmap fontlar kullanıyordu — her karakter, piksel piksel elle çizilmişti. 72 DPI ekran çözünürlüğü. |
| **1975** | Bravo metin editörü | Charles Simonyi (sonradan Microsoft Word'ü yaratacak) Xerox PARC'ta "What You See Is What You Get" (WYSIWYG — Gördüğün Şeyi Alırsın) editörünü yazdı. |
| **1978** | Donald Knuth — METAFONT | Stanford'lu matematik profesörü Donald Knuth, parametrik font sistemi METAFONT'u tanıttı. Fontlar matematiksel formüllerle tanımlanıyordu (stroke-based). TeX dizgi sistemiyle birlikte kullanıldı. Akademik dünyada devrim yaratsa da, ticari yazılım dünyasında geniş kabul görmedi. |
| **1983** | Apple Lisa | İlk ticari GUI bilgisayar. Bitmap fontlar: 12 punto = 12 piksel yüksekliğinde karakter. Font boyutu değiştirildiğinde yeni bir bitmap seti gerekiyordu. |
| **1984** | Apple Macintosh | 128KB RAM, 512×342 piksel ekran, 72 DPI. Susan Kare tasarımı bitmap fontlar: **Chicago** (sistem fontu), **Geneva**, **Monaco**, **New York**. Her font sadece belirli boyutlerde (9, 10, 12, 14, 18, 24 punto) iyi görünüyordu. |
| **1984** | Adobe PostScript | John Warnock ve Charles Geschke tarafından kurulan Adobe Systems, PostScript sayfa tanımlama dilini geliştirdi. **Type 1** fontlar: kübik Bézier eğrileriyle tanımlanan vektörel font formatı. Herhangi bir boyuta ölçeklenebilir! Ancak Adobe, Type 1 formatını başlangıçta gizli (proprietary) tuttu ve lisans ücreti istedi — bu, "**Font Savaşları**"nı (Font Wars) başlattı. |
| **1985** | Apple LaserWriter | PostScript destekli ilk lazer yazıcı. 300 DPI. Masaüstü yayıncılığın (desktop publishing) başlangıcı. Font savaşları: Apple + Microsoft vs Adobe. |
| **1985** | Aldus PageMaker | İlk masaüstü yayıncılık yazılımı. LaserWriter + PageMaker + PostScript = DTP devrimi. |
| **1989** | Adobe Type Manager (ATM) | Adobe, ekranda Type 1 fontları anti-alias ile pürüzsüz gösterebilen yazılım çıkardı. Ücretsiz değildi ama DTP dünyasında standart haline geldi. |
| **1991** | Apple TrueType | Apple, Adobe'nin pahalı Type 1 lisanslarına tepki olarak TrueType'ı geliştirdi. Geliştirme sırasında kod adları "Bass" ve "Royal" idi. **Mac System 7** ile Mayıs 1991'de piyasaya çıktı. Kuadratik (ikinci derece) Bézier eğrileri kullanıyordu — PostScript'in kübik eğrilerine göre daha basit ve hızlı işleniyordu. Apple, TrueType'ı **ücretsiz** olarak Microsoft'a lisansladı. |
| **1992** | Windows 3.1 + TrueType | Microsoft, TrueType'ı Windows 3.1'e entegre etti. **Monotype Imaging** ile ortaklaşa yüksek kaliteli fontlar tasarlandı: **Times New Roman** (Times Roman uyumlusu), **Arial** (Helvetica uyumlusu), **Courier New** (Courier uyumlusu). Font hinting teknolojisi ile düşük çözünürlüklerde okunabilirlik sağlandı. |
| **1991** | Adobe Type 1 formatı açıldı | TrueType duyurusunun ardından Adobe CEO'su John Warnock, Apple ve Microsoft'u "yılan yağı satmakla" suçlayan ateşli bir konuşma yaptıktan sonra, Type 1 format spesifikasyonunu herkese açtı. Bu, font tasarımında bir patlama yarattı. |
| **1994** | TrueType Open / TrueType GX | Microsoft: "TrueType Open" → akıllı font teknolojisi (1994). Apple: "TrueType GX" → font eksen (axes) desteği ve ligature gibi özellikler (QuickDraw GX'in parçası). GX, bugünkü değişken fontların atası sayılır. |
| **1996** | OpenType duyurusu | Microsoft ve Adobe güçlerini birleştirdi. TrueType Open + Adobe Type 1 teknolojileri = **OpenType**. Hem TrueType (kuadratik Bézier) hem CFF/PostScript (kübik Bézier) glyph outline'ları desteklendi. 65.536 glyph kapasitesi. Unicode desteği. Çapraz platform (Windows, Mac, Linux). |
| **1997** | CSS2 `@font-face` | W3C, web sayfalarında özel font kullanımı için `@font-face` kuralını tanıttı. Ancak tarayıcı desteği yıllarca yetersiz kaldı. |
| **2001** | Yüzlerce OpenType fontu piyasada | Adobe, tüm font kütüphanesini OpenType'a dönüştürmeye başladı. |
| **2002** | Adobe font kütüphanesi tam OpenType | Adobe, ~2.300 fontluk kütüphanesini OpenType formatına dönüştürdü. |
| **2005** | ~10.000 OpenType fontu | Adobe kütüphanesi toplam fontların yaklaşık üçte birini oluşturuyordu. Her büyük font üreticisi OpenType'a geçmiş durumdaydı. |
| **2007** | OpenType → ISO standardı | ISO/IEC 14496-22 "Open Font Format" (OFF) olarak uluslararası standart haline geldi. |
| **2009** | WOFF (Web Open Font Format) | Web fontları için sıkıştırılmış konteyner formatı. Font verisi + metadata. Tarayıcılar hızla desteklemeye başladı. |
| **2010** | Google Fonts lansmanı | Google, açık kaynak fontları ücretsiz hosting ile sunmaya başladı. Web tipografisinde devrim. |
| **2016** | OpenType 1.8 — Değişken Fontlar (Variable Fonts) | 14 Eylül 2016: Varşova'daki ATypI konferansında Microsoft, Adobe, Apple ve Google birlikte duyurdu. Tek bir font dosyası, sürekli bir ağırlık/genişlik/eğiklik aralığını destekleyebilir. Apple'ın TrueType GX ve Adobe'nin Multiple Master teknolojilerinin modern reenkarnasyonu. |
| **2018** | WOFF2 yaygın destek | Brotli sıkıştırma ile %30+ daha küçük dosya boyutu. Tüm modern tarayıcılarda destekleniyor. |

**[Görsel önerisi: Tipografi teknolojisi zaman çizelgesi — bitmap fontlardan variable fonts'a. Alt metin: "1968'den günümüze bilgisayar tipografisi tarihi zaman çizelgesi: bitmap fontlar, PostScript Type 1, TrueType, OpenType ve Variable Fonts dönüm noktaları"]**

### 1.2 Xerox PARC ve Font Tarihindeki Rolü

Xerox PARC (Palo Alto Research Center, 1970'te kuruldu), bilgisayar tipografisinin doğduğu yerdir:

- **Alto bilgisayarı (1973)**: İlk bitmap fontlu kişisel bilgisayar prototipi. 72 DPI ekran, nokta vuruşlu yazıcı.
- **Bravo editörü (1975)**: İlk WYSIWYG metin editörü. Charles Simonyi tarafından yazıldı.
- **Gypsy editörü**: Copy-paste komutlarının icat edildiği yer.
- **Star workstation (1981)**: WYSIWYG masaüstü yayıncılığın ticari prototipi. Font seçimi, stil, boyut değiştirme. Apple Lisa (1983) ve Macintosh (1984) doğrudan bu çalışmalardan ilham almıştır.

### 1.3 Apple Lisa ve Macintosh'un Rolü

Steve Jobs'un 1979'daki meşhur Xerox PARC ziyareti, Apple'da grafik arayüz devrimini başlattı:

- **Lisa (1983)**: İlk ticari GUI bilgisayar. Bitmap fontlar, farklı punto boyutları.
- **Macintosh (1984)**: Susan Kare'nin ikonik bitmap fontları: **Chicago** (kalın, sistem fontu), **Geneva** (sans-serif), **New York** (serif), **Monaco** (monospace). Her font, elle piksel piksel tasarlanmıştı.
- **LaserWriter (1985)**: PostScript destekli ilk lazer yazıcı. 300 DPI çıktı. Font savaşlarının fitilini ateşledi.

**[Görsel önerisi: Susan Kare bitmap font örnekleri — Chicago, Geneva, Monaco. Alt metin: "1984 orijinal Macintosh bitmap fontları: Chicago (sistem fontu), Geneva (sans-serif), Monaco (monospace) — Susan Kare tasarımı, piksel piksel elle çizilmiş"]**

### 1.4 Adobe PostScript Devrimi

- **1983**: Adobe Systems, John Warnock ve Charles Geschke tarafından kuruldu.
- **PostScript (1984)**: Sayfa tanımlama dili (Page Description Language). Metni ve grafikleri matematiksel olarak tanımlar.
- **Type 1 fontlar**: Kübik Bézier eğrileriyle tanımlanan font formatı. Herhangi bir boyuta ölçeklenebilir. Adobe başlangıçta formatı kapalı tuttu — lisans ücreti: başlangıçta font başına yüzlerce dolar.
- **1991**: TrueType tehdidi karşısında Type 1 spesifikasyonu herkese açıldı.
- **Type 3 fontlar**: PostScript dilinin tamamını kullanabilir ama hinting desteği yoktu → düşük çözünürlükte kötü görünüm.

---

## 2. Bitmap Fontlar vs Vektör Fontlar 🖼️

### 2.1 Bitmap (Raster / Piksel) Fontlar

**Tanım:** Her glyph (karakter şekli), piksel piksel bir ızgara (matris) olarak saklanır.

**Çalışma prensibi:**
1. Her karakter, bir piksel dizisi (bitmap) olarak bellekte tutulur
2. Metin çizimi = karakter bitmap'lerinin art arda ekrana kopyalanması
3. Her font boyutu ve stili (kalın, italik) için ayrı bir bitmap seti gerekir
4. Örnek: 3 boyut × 4 stil = 12 ayrı bitmap seti

**Yaygın bitmap boyutları (erken dönem):**
- 8, 9, 10, 12, 14, 18, 24, 36, 48, 72, 96 punto (96 DPI varsayılan)

**Avantajlar:**
- ✅ Render (çizim) son derece hızlı ve basit — doğrudan piksel kopyalama
- ✅ Oluşturması daha kolay
- ✅ Aynı ekran spesifikasyonunda her zaman aynı çıktı — deterministik
- ✅ Çok düşük çözünürlüklü veya küçük boyutlu ekranlarda elle optimize edilmiş görünüm
- ✅ Retro / pixel art oyunlar için mükemmel

**Dezavantajlar:**
- ❌ Ölçeklendiğinde kalite kaybı — büyütme bulanıklık, küçültme detay kaybı
- ❌ Her boyut için ayrı bitmap = yüksek bellek kullanımı
- ❌ Dönme, eğme gibi geometrik dönüşümler kötü sonuç verir
- ❌ Yazıcıda ekrandan farklı görünür (WYSIWYG bozulur)

**Hâlâ kullanıldığı yerler:**
- Linux konsol, Windows Recovery Console
- Gömülü sistemler (embedded systems)
- Nokta vuruşlu yazıcılar (dot matrix printers)
- Pixel art oyunlar
- Retro emülatörler

**Bitmap font formatları:**
- FON (Windows bitmapped font)
- BDF (Glyph Bitmap Distribution Format)
- PCF (Portable Compiled Format)
- PSF (PC Screen Font — Linux konsol)
- Amiga Font, ColorFont

**[Görsel önerisi: Bitmap font yakınlaştırma karşılaştırması. Alt metin: "Bitmap fontun %100, %200 ve %400 yakınlaştırmalı görünümü — büyüdükçe piksel kareleri belirginleşir, kenarlar testere dişi şeklinde görünür"]**

### 2.2 Vektör (Outline) Fontlar

**Tanım:** Her glyph, Bézier eğrileri ve düz çizgi segmentleriyle matematiksel olarak tanımlanır.

**Nasıl çalışır:**
1. Font dosyasında her karakter, kontrol noktaları ve eğri denklemleriyle saklanır
2. İstenilen boyuta matematiksel olarak ölçeklenir
3. Rasterizasyon: Vektörel tanım → piksel ızgarasına dönüştürülür (her boyut için yeniden hesaplanır)
4. Hinting: Düşük çözünürlüklerde okunabilirliği artırmak için piksel ızgarasına hizalama ipuçları

**İki Ana Bézier Eğri Türü:**

| Özellik | TrueType (Kuadratik) | PostScript/CFF (Kübik) |
|---------|---------------------|----------------------|
| Bézier derecesi | 2. derece (quadratic) | 3. derece (cubic) |
| Kontrol noktaları | 2 uç nokta + 1 kontrol noktası | 2 uç nokta + 2 kontrol noktası |
| Esneklik | Daha az — çoğu şekil daha fazla nokta gerektirir | Daha fazla — daha az nokta ile karmaşık eğriler |
| İşlem hızı | Daha hızlı hesaplanır | Biraz daha yavaş |
| Kullanan formatlar | TrueType, OpenType (.ttf) | PostScript Type 1, OpenType CFF (.otf) |
| Dönüşüm | TrueType → Type 1: genellikle kayıpsız mümkün | Type 1 → TrueType: kayıpsız dönüşüm **mümkün değil** |

**Avantajlar:**
- ✅ Sonsuz ölçeklenebilir — 8pt'den 800pt'ye kalite kaybı yok
- ✅ Tek dosya tüm boyutlar için yeterli
- ✅ Geometrik dönüşümlerle uyumlu (döndürme, eğme, ölçekleme)
- ✅ Yazıcı ve ekran çıktısı tutarlı (WYSIWYG)
- ✅ Yazdırmada çok yüksek kalite (yazıcı DPI'sından bağımsız)

**Dezavantajlar:**
- ❌ Rasterizasyon hesaplama gücü gerektirir
- ❌ Düşük çözünürlüklerde hinting olmadan kötü görünebilir
- ❌ Çok küçük boyutlarda (8px altı) bitmap fontlar daha net olabilir

**[Görsel önerisi: Vektör font yakınlaştırma karşılaştırması. Alt metin: "Vektör fontun %100, %200 ve %400 yakınlaştırmalı görünümü — kenarlar her boyutta pürüzsüz kalır, Bézier eğrileri matematiksel olarak yeniden hesaplanır"]**

### 2.3 Karşılaştırma Özeti

| Özellik | Bitmap Font | Vektör Font |
|---------|-------------|-------------|
| Veri yapısı | Piksel dizisi (matris) | Bézier eğrileri + komutlar |
| Ölçekleme | ❌ Pikselleşme | ✅ Kayıpsız, sonsuz |
| Bellekte boyut | Boyut başına ayrı set | Tek dosya, tüm boyutlar |
| İşlem hızı | ⚡ Çok hızlı | 🔄 Rasterizasyon gerekli |
| Düşük çözünürlük | ✅ Elle optimize edilebilir | ⚠️ Hinting gerekir |
| Kullanım alanı | Retro, gömülü sistemler | Modern OS, web, baskı |

---

## 3. Font Rendering (Font İşleme / Çizim) 🖥️

### 3.1 Rasterizasyon: Vektörden Piksele

**Font rasterizasyonu**, vektörel font outline'ını (TrueType, OpenType) ekrandaki piksel ızgarasına dönüştürme işlemidir.

**Temel süreç:**
1. **Glyph seçimi**: Karakter kodu → font tablosundan glyph outline alınır
2. **Ölçekleme**: İstenen punto boyutuna göre matematiksel ölçekleme (em birimi → piksel)
3. **Hinting uygulaması**: Piksel ızgarasına hizalama ipuçları işlenir
4. **Rasterizasyon**: Eğriler → piksel haritasına dönüştürülür (scanline fill)
5. **Anti-aliasing**: Kenar piksellere gri tonları uygulanır (isteğe bağlı)

### 3.2 Hinting (Font İpuçları)

**Hinting**, font outline'ının düşük çözünürlüklü piksel ızgarasına en iyi şekilde hizalanması için font dosyasına gömülen talimatlardır.

**Sorun:** 12pt metin, 96 DPI ekranda sadece ~16 piksel yüksekliğinde. Serbest ölçeklenmiş eğriler, piksel sınırlarına denk gelmeyebilir → bulanık veya düzensiz çizgiler.

**Çözüm: Hinting**
- Dikey ve yatay çizgileri (stem) piksel sınırlarına hizalar
- Eşit kalınlıktaki çizgilerin eşit piksel genişliğinde görünmesini sağlar
- Küçük boyutlarda okunabilirliği dramatik şekilde artırır

**TrueType hinting:**
- Kendi **sanal makinesi** (virtual machine) var — font içindeki programları çalıştırır
- Tam bir programlama dili: IF ifadeleri, döngüler, değişkenler, fonksiyonlar
- **Delta instructions**: Tek piksel boyutunda, tek bir kontrol noktasını hareket ettirme
- İyi bir TrueType font'u hint'lemek **önemli miktarda iş** gerektirir
- Microsoft'un Times New Roman, Arial, Courier New fontları kapsamlı hinting içerir

**PostScript/CFF hinting:**
- Daha basit bir hinting sistemi (stem hints, alignment zones)
- Otomatik hinting araçları daha iyi çalışır

**Apple vs Microsoft yaklaşımı:**
- **macOS**: Hintlerin çoğunu **yok sayar** — outline'a sadık kalır → ekranda baskıya çok benzer, küçük boyutlarda biraz bulanık
- **Windows**: Hintlere **güvenir** — piksel ızgarasına sıkı hizalama → keskin ama outline'dan sapma

### 3.3 Anti-Aliasing (Kenar Yumuşatma)

**Sorun:** Bir eğri, bir pikselin %50'sini kaplıyorsa → piksel açık mı kapalı mı olacak? İkili (bi-level) renderlama = testere dişi kenarlar.

**Çözüm: Anti-aliasing**
- Her kenar pikseli için, karakterin o pikseli ne kadar kapladığı hesaplanır
- Kaplama oranına göre ara tonluk (gri) değer atanır
- Örnek: siyah metin, beyaz zemin üzerinde, %50 kaplama → #BCBCBC (gri)

**Anti-aliasing türleri:**

| Tür | Açıklama | Avantaj | Dezavantaj |
|-----|----------|---------|------------|
| **Yok (Bi-level)** | Piksel ya açık ya kapalı | Hızlı, keskin | Testere dişi kenarlar |
| **Grayscale AA** | Gri tonlar ile kenar yumuşatma | Pürüzsüz | Biraz bulanık olabilir |
| **Subpixel rendering** | LCD alt piksellerini kullanır (RGB) | 3× yatay çözünürlük artışı | Renk saçılması (color fringing) |

**Windows tarihçesi:**
- Windows 3.1: Sadece bi-level (siyah-beyaz) rasterizer
- Windows 95+: Temel anti-aliasing
- Windows XP (2001): **ClearType** — subpixel rendering (varsayılan kapalı)
- Windows Vista (2007): ClearType varsayılan açık
- Windows 7 (2009): **DirectWrite** — donanım hızlandırmalı metin işleme, geliştirilmiş ClearType
- Windows 10+: Metro/UWP uygulamalarında renkli ClearType yerine grayscale AA

### 3.4 Subpixel Rendering ve ClearType

**Temel fikir:** LCD ekranlarda her piksel 3 alt pikselden (subpixel) oluşur: **Kırmızı**, **Yeşil**, **Mavi** (RGB). Bu alt pikselleri ayrı ayrı kontrol ederek yatay çözünürlüğü teorik olarak 3 katına çıkarabilirsiniz.

**ClearType (Microsoft):**
- Kasım 1998 COMDEX'te duyuruldu
- Ocak 2000'de Microsoft Reader'da ilk kez kullanıldı
- Bert Keely ve Greg Hitchcock tarafından icat edildi
- Sinyal işleme uzmanı John Platt (Microsoft Research) algoritmayı optimize etti
- **Gereksinim**: Sabit piksel konumlu düz panel ekranlar (LCD). CRT'lerde düzgün çalışmaz
- Alt piksellerin RGB sıralamasını ve yatay/dikey dizilişini bilmesi gerekir
- **ClearType Font Collection** (Vista ile): Calibri, Cambria, Candara, Consolas, Constantia, Corbel, Meiryo — ClearType için optimize edilmiş fontlar. **Calibri**, Office 2007'den bu yana Microsoft'un varsayılan fontu oldu.

**ClearType tartışmaları:**
- Bazı kullanıcılar renk saçılmasından rahatsız olur (özellikle renk hassasiyeti yüksek olanlar)
- 96 DPI ekranlarda bulanık görünebilir; 144+ DPI'da sorun azalır
- 2001 Clemson/Penn araştırması: ClearType ile okuma tercihi, okunabilirlik ve azalan göz yorgunluğu
- 2004 araştırması: Kelime tanıma doğruluğunda %17 iyileşme, okuma hızında %5, kavramada %2 artış
- 2007 araştırması: Netlik değil ama tercih edilme oranı daha yüksek

**Modern yaklaşım (DirectWrite):**
- Renkli ClearType yerine **grayscale anti-aliasing** tercih ediliyor
- Neden? Animasyon performansı (ClearType, arka plan piksel renklerinin bilinmesini gerektirir → animasyonlarda yavaş) ve tablet/dikey ekran uyumluluğu
- HiDPI (yüksek çözünürlüklü) ekranların yaygınlaşmasıyla subpixel rendering ihtiyacı azaldı

**Diğer platformlar:**
- **macOS Quartz**: Subpixel konumlandırma — glyph'leri piksel sınırlarına zorlamaz, outline'a sadık kalır. macOS Mojave'den beri subpixel rendering kaldırıldı, sadece grayscale AA. Retina ekranlarda sorun yok, harici monitörlerde okunabilirlik düşebilir.
- **FreeType (Linux)**: Hem hinting hem AA hem subpixel rendering desteği. Renk dengeli subpixel rendering ve gamma düzeltme gibi ek özellikler. Ayarlara göre Microsoft veya Apple yaklaşımları arasında herhangi bir noktaya ayarlanabilir.

**[Görsel önerisi: Anti-aliasing karşılaştırma — bi-level, grayscale, subpixel. Alt metin: "Aynı metnin üç farklı rendering yöntemiyle görünümü: 1) Hinting ile bi-level (siyah-beyaz), 2) Grayscale anti-aliasing, 3) ClearType subpixel rendering — büyütülmüş görünümde RGB alt piksel renkleri görülür"]**

### 3.5 Neden Metin Farklı Ekranlarda Farklı Görünür?

| Faktör | Etki |
|--------|------|
| **Ekran çözünürlüğü (DPI)** | 72 DPI vs 96 DPI vs 220+ DPI (Retina) — aynı punto boyutu, farklı piksel sayısı |
| **Rasterizer yazılımı** | Windows (GDI/DirectWrite), macOS (Quartz/Core Text), Linux (FreeType) — farklı algoritmalar |
| **Hinting uygulaması** | Windows hintlere güvenir, macOS çoğunlukla yok sayar |
| **Anti-aliasing yöntemi** | Grayscale, ClearType, subpixel, yok |
| **Alt piksel düzeni** | RGB, BGR, dikey çizgili, PenTile — yanlış ayarlarda ClearType sorunlu |
| **Font'un hinting kalitesi** | İyi hinted fontlar (Arial, Verdana) vs otomatik hinting |
| **Gamma ayarları** | Ekranın parlaklık eğrisi |

---

## 4. Oyunlar İçin Tipografi Temelleri 🎮

### 4.1 Tipografik Ölçüler ve Anatomisi

Bir harfin anatomisini anlamak, font seçimi ve metin düzeni için temeldir:

**Dikey Ölçüler:**

```
        ┌─────── Ascender Line (Yükselen Çizgi)
        │   b d f h k l     ← Ascender (Yükselen bölüm)
        │
Cap H.──┤   H E L T B      ← Cap Height (Büyük Harf Yüksekliği)
        │
x-h. ──┤   a c e o x       ← x-height (Küçük x Yüksekliği)
        │                      "mean line" (orta çizgi) ile baseline arası
        │
Baseline┤───────────────    ← Baseline (Taban Çizgisi) — harflerin "oturduğu" çizgi
        │
        │   g j p q y       ← Descender (İnen bölüm)
        └─────── Descender Line (İnen Çizgi)
```

| Terim (İngilizce) | Türkçe | Açıklama |
|-------------------|--------|----------|
| **Baseline** | Taban Çizgisi | Harflerin "oturduğu" hayali yatay çizgi. Tüm harfler bu çizgiye hizalanır. |
| **x-height** | x-yüksekliği | Küçük "x" harfinin yüksekliği (taban çizgisinden orta çizgiye). Font okunabilirliğinin en önemli ölçüsü. Büyük x-height = daha okunabilir (ekranda). |
| **Cap Height** | Büyük Harf Yüksekliği | Büyük harflerin (H, E, T) tepe noktası. x-height'tan biraz yüksek. |
| **Ascender** | Yükselen Kısım | b, d, f, h, k, l gibi harflerin cap height'ın üzerine çıkan bölümü. |
| **Descender** | İnen Kısım | g, j, p, q, y gibi harflerin baseline'ın altına inen bölümü. |
| **Leading** | Satır Aralığı | İki ardışık metin satırının baseline'ları arasındaki dikey mesafe. Terim, matbaa döneminde satırlar arasına yerleştirilen kurşun (lead) çubuklardan gelir. CSS'te `line-height`. |
| **Kerning** | Karakter Çifti Aralığı | İki belirli karakter arasındaki yatay mesafe ayarı. Örnek: "AV", "To", "WA" çiftlerinde harfler birbirine yaklaştırılır. OpenType fontlarda GPOS tablosunda "kern" feature olarak tanımlanır. |
| **Tracking** | Harf Aralığı | Tüm karakterler arasındaki genel mesafe ayarı (uniform). CSS'te `letter-spacing`. Kerning'den farklı olarak tüm çiftlere eşit uygulanır. |
| **Em** | Em Birimi | Font boyutuna eşit kare birim. 12pt fontta 1 em = 12pt. TrueType'ta genellikle 2048 birim, CFF'te 1000 birim. |

### 4.2 Serif vs Sans-Serif

| Özellik | Serif (Tırnaklı) | Sans-Serif (Tırnaksız) |
|---------|-------------------|------------------------|
| **Tanım** | Harf çizgilerinin uçlarında küçük tırnaklar (serifs) | Harf uçlarında tırnak yok — düz uçlar |
| **Örnekler** | Times New Roman, Georgia, Garamond, Palatino | Arial, Helvetica, Verdana, Roboto, Inter |
| **Tarih** | 1. yüzyıl Roma yazıtlarından türemiş | 19. yüzyıl başlarında ortaya çıktı ("Grotesk" olarak da bilinir) |
| **Baskı** | Uzun metinlerde okunabilirlik yüksek (serifler göz akışını yönlendirir) | Başlıklar, kısa metinler |
| **Ekran** | Düşük çözünürlükte (96 DPI) tırnaklar bulanıklaşabilir | Ekranda daha net, küçük boyutlarda daha okunabilir |
| **Oyunlarda** | Hikâye, diyalog, RPG dünyası | UI, HUD, menü, skorlar |

### 4.3 Monospace (Eşit Genişlikli) Fontlar

- Her karakter aynı yatay alanı kaplar (W = i = m = . = aynı genişlik)
- Terminal/konsol, kod editörü, hata ayıklama ekranları
- Oyunlarda: skor tabloları, zamanlayıcılar, hata ayıklama overlay'leri, retro terminaller
- Örnekler: **Courier New**, **Consolas**, **JetBrains Mono**, **Fira Code**, **IBM Plex Mono**

### 4.4 Oyunlar İçin Font Seçim Rehberi

| Kullanım Alanı | Önerilen Tür | Dikkat Edilecekler |
|----------------|--------------|-------------------|
| Ana menü / başlık | Display / dekoratif | Oyunun temasıyla uyum, büyük boyutlarda etkileyici |
| Diyalog / hikâye | Serif veya sans-serif, yüksek x-height | Uzun okuma konforu, geniş satır aralığı |
| HUD (sağlık, cephane, skor) | Sans-serif, kalın | Hızlı okunabilirlik, arka plana karşı kontrast |
| Zamanlayıcı / skor | Monospace | Rakamlar kaymamalı (tabular figures) |
| Piksel art oyun | Piksel font | Oyun çözünürlüğüne uygun boyut |
| Hata ayıklama | Monospace | FPS sayacı, koordinat bilgisi |

**[Görsel önerisi: Tipografik terimler anatomisi diyagramı. Alt metin: "Bir harfin anatomisi: baseline (taban çizgisi), x-height, cap height, ascender, descender, serif ve counter (iç boşluk) bölgeleri işaretlenmiş 'Typography' kelimesi"]**

---

## 5. Piksel Fontlar (Pixel Fonts) 👾

### 5.1 Piksel Font Nedir?

Piksel fontlar, piksel art estetiğiyle özel olarak tasarlanmış, her pikselin kasıtlı olarak yerleştirildiği bitmap fontlardır. Anti-aliasing kullanılmaz — her piksel ya var ya yok.

**Genel bitmap fontlardan farkı:** Geleneksel bitmap fontlar "sınırlama" nedeniyle pikselli idi; piksel fontlar ise kasıtlı estetik seçimdir.

### 5.2 Yaygın Piksel Font Boyutları

| Boyut | Kullanım | Açıklama |
|-------|----------|----------|
| **3×5** | Minimum okunabilir | Çok küçük etiketler, gömülü sistemler |
| **4×6** | Çok küçük UI | Skor göstergesi, mini HUD |
| **5×7** | Yaygın mikrodenetleyici | Arduino LCD, LED matris |
| **6×8** | Yaygın piksel art | Commodore 64 karakter seti. Birçok retro oyunun standart metin boyutu |
| **8×8** | En yaygın retro boyut | NES, Game Boy, ZX Spectrum, Atari. Karakter başına 8 byte (monochrome). Birçok retro oyun motorunun varsayılan boyutu |
| **8×12** veya **8×16** | PC/DOS metin modu | IBM PC BIOS fontu. CGA/EGA/VGA metin modu |
| **12×12** | Gelişmiş piksel art | Daha detaylı karakterler, CJK desteği |
| **16×16** | Büyük piksel art | Kanji/Çince/Japonca karakterler, büyük başlıklar |

### 5.3 Piksel Font Nasıl Oluşturulur?

**Adım adım:**
1. **Izgara boyutu seç**: Oyunun çözünürlüğüne göre (örneğin 8×8)
2. **Temel harfleri tasarla**: A-Z, a-z, 0-9, temel noktalama
3. **Tutarlı stil kur**: x-height, ascender/descender oranları, çizgi kalınlığı (genellikle 1px)
4. **Kerning ayarla**: Gerekirse karakter çiftleri arası boşluk ayarı
5. **Özel karakterler**: Türkçe ç, ğ, ı, ö, ş, ü, İ — Türkçe desteği önemli!
6. **Test**: Oyun içi çözünürlükte, hedef arka plan üzerinde test

**Temel kurallar:**
- Anti-aliasing **kullanma** — keskin piksel sınırları korunmalı
- 1 piksel çizgi kalınlığı genellikle yeterli (8×8'de)
- Tüm harflerin baseline'ı aynı hizada olmalı
- Descender'lar için en az 1-2 piksel bırak
- Okunabilirlik > estetik

### 5.4 Piksel Font Araçları

| Araç | Tür | Açıklama |
|------|-----|----------|
| **BitFontMaker2** | Web (ücretsiz) | bitfontmaker2.com — Tarayıcıda piksel font tasarla, TTF olarak indir. 8×8 ile 16×16 arası. Çok basit ve hızlı. |
| **Pixie Font Editor** | Web (ücretsiz) | Basit piksel font editörü |
| **FontForge** | Masaüstü (ücretsiz, açık kaynak) | Profesyonel font editörü. Bitmap fontlar da desteklenir. |
| **Aseprite** | Masaüstü ($19.99) | Piksel art programı. Font sprite sheet oluşturma. |
| **GIMP / Photoshop** | Masaüstü | Manuel piksel font sprite sheet çizimi |
| **Piskel** | Web (ücretsiz) | piskelapp.com — ücretsiz piksel art editörü, font sprite sheet yapılabilir |

### 5.5 Ücretsiz Piksel Font Kaynakları

| Kaynak | URL | Açıklama |
|--------|-----|----------|
| **Google Fonts — Pixel** | fonts.google.com | "Press Start 2P", "VT323", "Silkscreen", "DotGothic16" gibi ücretsiz piksel fontlar |
| **dafont.com — Bitmap** | dafont.com/bitmap.php | Yüzlerce ücretsiz piksel font. Lisans bilgisine dikkat! |
| **fontstruct.com** | fontstruct.com | Kullanıcıların ızgara üzerinde font tasarladığı topluluk |
| **itch.io** | itch.io/game-assets/tag-fonts | Oyun geliştiriciler için piksel font paketleri |
| **OpenGameArt** | opengameart.org | CC/GPL lisanslı ücretsiz piksel fontlar |

**[Görsel önerisi: Farklı boyutlarda piksel font örnekleri. Alt metin: "Piksel font boyut karşılaştırması: 3×5, 5×7, 6×8, 8×8 ve 8×16 boyutlarında 'Hello World' metni — her boyutta piksel ızgarası görünür"]**

---

## 6. Web Tipografisi 🌐

### 6.1 CSS `@font-face` Kuralı

Web'de uzun süre yalnızca "web-safe fontlar" (Arial, Verdana, Georgia, Times New Roman, Courier New) kullanılabildi — ziyaretçinin bilgisayarında yüklü olması gerekliydi.

**`@font-face` kuralı** (CSS2, 1997 / CSS3'te modernleştirildi):

```css
@font-face {
  font-family: 'OyunFontu';
  src: url('fonts/oyun-fontu.woff2') format('woff2'),
       url('fonts/oyun-fontu.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'OyunFontu', sans-serif;
}
```

**Font formatları ve tarayıcı desteği:**

| Format | Dosya Uzantısı | Sıkıştırma | Destek |
|--------|---------------|-------------|--------|
| **WOFF2** | .woff2 | Brotli (~%30 daha küçük) | Tüm modern tarayıcılar (2018+) |
| **WOFF** | .woff | zlib | IE9+, tüm modern tarayıcılar |
| **TTF/OTF** | .ttf / .otf | Yok | Çoğu tarayıcı (IE9 kısıtlı) |
| **EOT** | .eot | LZ sıkıştırma | Sadece IE (artık gereksiz) |
| **SVG** | .svg | Yok | Sadece eski Safari (artık gereksiz) |

**Modern öneri**: Sadece WOFF2 yeterli. Eski tarayıcı desteği gerekiyorsa WOFF fallback ekle.

### 6.2 Google Fonts

**Google Fonts** (2010'da başladı, eskiden Google Web Fonts):
- 1.600+ açık kaynak font ailesi
- Tamamen ücretsiz, ticari kullanıma açık
- CDN üzerinden sunulur — hızlı global erişim
- CSS veya `<link>` ile tek satırda eklenir

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

**Popüler Google Fonts (oyun/web):**
- **Inter** — modern sans-serif, ekran için optimize
- **Roboto** — Android varsayılan fontu
- **Press Start 2P** — piksel font, retro oyun teması
- **VT323** — terminal/monospace piksel font
- **Noto Sans** / **Noto Serif** — 1.000+ dil desteği (Google + Adobe ortak projesi)
- **Poppins** — geometrik sans-serif, modern UI
- **JetBrains Mono** — kod editörü için monospace

### 6.3 Font Yükleme Stratejileri

Web fontları ağ üzerinden indirilir → sayfa yüklenirken bir gecikme oluşur. Bu gecikme sırasında metin nasıl gösterilir?

**FOIT — Flash of Invisible Text (Görünmez Metin Yanıp Sönmesi):**
- Tarayıcı, web fontu indirilene kadar metni **gizler** (boş alan gösterir)
- Font yüklenince metin aniden belirir
- Kullanıcı deneyimi: sayfa içeriği saniye(ler) boyunca okunamaz
- Safari, eski Chrome davranışı

**FOUT — Flash of Unstyled Text (Stilsiz Metin Yanıp Sönmesi):**
- Tarayıcı, web fontu indirene kadar **yedek fontu** (fallback) gösterir
- Font yüklenince metin "zıplar" — boyut ve harf aralıkları değişir
- Genellikle FOIT'den daha iyi kullanıcı deneyimi
- Firefox varsayılan davranışı

**`font-display` CSS özelliği:**

| Değer | Davranış | Kullanım |
|-------|----------|----------|
| `auto` | Tarayıcıya bırak (genellikle FOIT) | Varsayılan |
| `swap` | Hemen fallback göster, font gelince değiştir (FOUT) | **Çoğu zaman en iyisi** |
| `block` | ~3 saniye gizle, sonra fallback (FOIT + timeout) | Ikon fontları |
| `fallback` | ~100ms gizle, ~3s içinde gelmezse fallback kalır | Denge |
| `optional` | ~100ms gizle, gelmezse fallback kalır, bir sonraki ziyarette cache'den | Performans öncelikli |

**Optimization stratejileri:**
1. **`font-display: swap`** kullan — metin her zaman okunabilir
2. **`<link rel="preload">`** ile fontu erken yüklemeye başla
3. **WOFF2 kullan** — en küçük dosya boyutu
4. **Subset** — sadece kullanılan karakter aralığını yükle (Türkçe: `unicode-range: U+0000-00FF, U+00C7, U+00E7, U+011E-011F, U+0130-0131, U+00D6, U+00F6, U+015E-015F, U+00DC, U+00FC;`)
5. **Local font kontrolü** — `src: local('Inter'), url(...)` → zaten yüklüyse indirme

```css
@font-face {
  font-family: 'Inter';
  src: local('Inter'),
       url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
  unicode-range: U+0000-024F, U+0100-017F; /* Latin Extended + Türkçe */
}
```

**[Görsel önerisi: FOIT vs FOUT karşılaştırması. Alt metin: "Web font yükleme sürecinde FOIT (solda — metin görünmez, aniden belirir) ve FOUT (sağda — yedek font görünür, sonra web fontuyla değişir) davranışlarının zaman çizelgeli karşılaştırması"]**

---

## 7. Oyun Arayüzünde (UI) Tipografi 🎮

### 7.1 Farklı Çözünürlüklerde Okunabilirlik

| Çözünürlük | Platform | Font Boyutu Önerisi | Dikkat |
|------------|----------|--------------------|----|
| **320×240** (QVGA) | Retro, Game Boy | 8×8 piksel font | Piksel font zorunlu |
| **640×480** (VGA) | Retro PC | 8-16px bitmap veya küçük vektör | |
| **1280×720** (720p) | Mobil, Switch | Min 18px body, 14px minimum | |
| **1920×1080** (1080p) | PC, konsol | 20-24px body, 16px minimum | En yaygın hedef |
| **2560×1440** (1440p) | PC | UI ölçekleme gerekli | DPI scaling |
| **3840×2160** (4K) | PC, yeni konsol | 2× ölçekleme veya yüksek DPI font | Retina benzeri |

**Genel kurallar:**
- **Minimum font boyutu**: Metin asla 12px altında olmamalı (1080p'de). TV'de oynanacak konsollar için 16px üzeri.
- **Kontrast**: WCAG 2.1 standardı — normal metin için en az 4.5:1 kontrast oranı
- **Satır uzunluğu**: İdeal 45-75 karakter / satır
- **Satır aralığı**: Font boyutunun 1.3-1.6 katı
- **Arka plan**: Metin üzerine gölge, outline veya yarı saydam arka plan kutusu

### 7.2 Oyun Türüne Göre Tipografi

| Oyun Türü | Font Stili | Örnekler |
|-----------|-----------|----------|
| **RPG / Fantezi** | Serif veya el yazısı, antik his | Garamond, Cinzel, IM Fell, MedievalSharp |
| **Sci-Fi** | Geometrik sans-serif, monospace | Orbitron, Rajdhani, Share Tech Mono |
| **Horror** | Bozulmuş, düzensiz, el yazısı | Creepster, Nosifer, Special Elite |
| **Casual / Mobil** | Yuvarlatılmış sans-serif, eğlenceli | Nunito, Quicksand, Fredoka |
| **Pixel Art / Retro** | Piksel font | Press Start 2P, PixelMplus, Silkscreen |
| **Yarış / Spor** | Italik, kalın, dinamik | Russo One, Black Ops One |
| **Simülasyon / Strateji** | Temiz sans-serif | Inter, Source Sans Pro, Noto Sans |

### 7.3 Yerelleştirme (Localization) Zorlukları

Font seçerken uluslararası dil desteği kritiktir:

| Zorluk | Açıklama | Çözüm |
|--------|----------|-------|
| **Karakter seti** | Türkçe: ç, ğ, ı, ö, ş, ü, İ. Almanca: ß, ü. Polonca: ł, ź, ż. Japonca: ~6.000 kanji | Unicode kapsamlı fontlar (Noto, Source Sans) |
| **Metin uzunluğu** | Almanca metin İngilizceden %30-40 daha uzun olabilir. Fince, Macarca da uzun | Esnek UI kutuları, metin taşma kontrolü |
| **Yazı yönü** | Arapça, İbranice: sağdan sola (RTL). Çince, Japonca: dikey de yazılabilir | BiDi (bidirectional) text rendering desteği |
| **CJK fontlar** | Çince/Japonca/Korece: binlerce glyph → büyük font dosyaları (5-20 MB) | Font subsetting, yalnızca kullanılan glyph'leri yükle |
| **Özel kurallar** | Türkçe: I→ı, İ→i dönüşümü. Almanca: eszett (ß↔SS) | Locale-aware string işlemleri |

**Noto Fonts projesi (Google + Adobe):**
- 1.000'den fazla dil ve yazı sistemi desteği
- "No Tofu" — hiçbir karakter için "tofu" (□ boş kare) gösterilmesin hedefi
- Noto Sans CJK + Noto Serif CJK: Pan-CJK (Çince, Japonca, Korece) desteği
- OpenType Collection olarak ~10 MB daha küçük paketleme

---

## 8. Font Tasarım Araçları 🛠️

### 8.1 FontForge

- **Tür**: Masaüstü, açık kaynak (GNU GPL), ücretsiz
- **Platform**: Windows, macOS, Linux
- **Yetenekler**:
  - TrueType, OpenType (CFF & TrueType), WOFF, SVG font oluşturma/düzenleme
  - Bézier eğri düzenleme, node editing
  - Hinting (otomatik ve manuel)
  - Kerning tablosu düzenleme
  - OpenType feature (ligature, swash, vb.) tanımlama
  - Python scripting desteği
  - Bitmap font oluşturma/düzenleme
- **Dezavantaj**: Arayüzü karmaşık ve eski görünümlü. Öğrenme eğrisi yüksek.
- **URL**: fontforge.org

### 8.2 Glyphr Studio

- **Tür**: Web tabanlı, açık kaynak, ücretsiz
- **Platform**: Tarayıcı (modern tarayıcılar)
- **Yetenekler**:
  - OTF, TTF, SVG font oluşturma
  - Sezgisel Bézier eğri editörü
  - Bileşen (component) sistemi — ortak parçaları yeniden kullanma
  - Kerning
  - Ligature desteği
  - SVG glyph import
- **Avantaj**: Modern, kullanıcı dostu arayüz. Yükleme gerektirmez. Başlangıç için ideal.
- **URL**: glyphrstudio.com

### 8.3 BitFontMaker2

- **Tür**: Web tabanlı, ücretsiz
- **Amacı**: Özel olarak **piksel font** oluşturma
- **Yetenekler**:
  - Piksel ızgarasında glyph tasarma
  - TTF olarak export
  - 8×8 ile 16×16 arası boyutlar
  - Topluluk galerisi — başkalarının fontlarını görme
- **Avantaj**: Son derece basit ve hızlı. Piksel font için en kolay giriş noktası.
- **URL**: pentacom.jp/pentacom/bitfontmaker2

### 8.4 Diğer Araçlar

| Araç | Tür | Fiyat | Açıklama |
|------|-----|-------|----------|
| **FontLab 8** | Masaüstü | ~$499 | Profesyonel font editörü. Endüstri standardı. Variable font desteği. |
| **Glyphs 3** | macOS | ~€299 | Profesyonel, modern arayüz. Apple ekosistemi. Mini versiyonu (~€49). |
| **RoboFont** | macOS | ~$490 | Python scripting odaklı profesyonel editör. |
| **Birdfont** | Masaüstü | Ücretsiz / Paralı | Açık kaynak font editörü. Basit arayüz. |
| **Calligraphr** | Web | Ücretsiz/Pro | El yazısı → font dönüşümü. Kağıda yaz, tara, font yap. |
| **Hiero** | Java | Ücretsiz | libGDX bitmap font aracı. Oyun motorları için bitmap font atlas oluşturur. |
| **BMFont** | Windows | Ücretsiz | AngelCode'un bitmap font generator'ı. Yaygın oyun motorları formatı. |

**[Görsel önerisi: Font editörü arayüz örnekleri — FontForge ve Glyphr Studio. Alt metin: "Font tasarım araçları arayüz karşılaştırması: FontForge (solda — profesyonel, karmaşık arayüz) ve Glyphr Studio (sağda — modern, sezgisel web arayüzü) bir 'g' harfinin Bézier düğümlerini düzenlerken"]**

---

## 9. Kaynaklar ve Referanslar 📚

### 9.1 Temel Okumalar

| Kaynak | Açıklama | URL / Bilgi |
|--------|----------|-------------|
| **Practical Typography (Matthew Butterick)** | Online ücretsiz kitap. Tipografi temelleri. | practicaltypography.com |
| **The Elements of Typographic Style (Robert Bringhurst)** | "Tipografinin İncili" — en önemli tipografi kitabı. 1992 ilk baskı. | Kitap (ISBN: 0881792128) |
| **Thinking with Type (Ellen Lupton)** | Tasarımcılar için tipografi el kitabı. | thinkingwithtype.com |
| **Butterick's Practical Typography** | Web'de ücretsiz erişilebilir, detaylı tipografi rehberi | practicaltypography.com |

### 9.2 Web Tipografisi Kaynakları

| Kaynak | Açıklama | URL |
|--------|----------|-----|
| **Google Fonts** | 1.600+ ücretsiz font | fonts.google.com |
| **Google Fonts Knowledge** | Font seçim rehberi, tipografi eğitimi | fonts.google.com/knowledge |
| **MDN: @font-face** | CSS @font-face referansı | developer.mozilla.org/en-US/docs/Web/CSS/@font-face |
| **Variable Fonts** | Değişken fontlar rehberi | v-fonts.com |
| **Wakamaifondue** | Font dosyasının özelliklerini keşfet | wakamaifondue.com |
| **FontDrop!** | Font dosyasını sürükle-bırak, glyph'leri incele | fontdrop.info |

### 9.3 Font Tasarım ve Araç Kaynakları

| Kaynak | Açıklama | URL |
|--------|----------|-----|
| **FontForge** | Ücretsiz açık kaynak font editörü | fontforge.org |
| **Glyphr Studio** | Web tabanlı ücretsiz font editörü | glyphrstudio.com |
| **BitFontMaker2** | Piksel font oluşturucu | pentacom.jp/pentacom/bitfontmaker2 |
| **Calligraphr** | El yazısından font oluşturma | calligraphr.com |

### 9.4 Ücretsiz Font Kütüphaneleri

| Kaynak | Lisans | Açıklama |
|--------|--------|----------|
| **Google Fonts** | SIL Open Font License | 1.600+ font ailesi |
| **Font Squirrel** | Çeşitli (filtrelenmiş) | Ticari kullanıma uygun ücretsiz fontlar |
| **DaFont** | Çeşitli (dikkat!) | Binlerce font, lisansları karışık olabilir |
| **The League of Moveable Type** | OFL | Yüksek kalite açık kaynak fontlar |
| **Font Library** | Çeşitli açık kaynak | Topluluk odaklı font kütüphanesi |
| **Adobe Fonts (Typekit)** | Adobe aboneliği ile | Adobe CC aboneleri için 20.000+ font |

### 9.5 Oyun Tipografisi Kaynakları

| Kaynak | Açıklama |
|--------|----------|
| **itch.io (font assets)** | Oyun geliştiriciler için piksel fontlar ve game-ready font paketleri |
| **OpenGameArt.org** | CC/GPL lisanslı ücretsiz oyun fontları |
| **Kenney.nl** | Ücretsiz oyun assetleri (fontlar dahil) |
| **Game UI Database** | gameuidatabase.com — oyun arayüzü tipografi referansları |

### 9.6 Teknik Referanslar

| Kaynak | Açıklama |
|--------|----------|
| **Microsoft OpenType Specification** | learn.microsoft.com/en-us/typography/opentype/spec |
| **Apple TrueType Reference** | developer.apple.com/fonts/TrueType-Reference-Manual |
| **The Raster Tragedy (Beat Stamm)** | rastertragedy.com — font rasterizasyonu derinlemesine |
| **FreeType** | freetype.org — açık kaynak font rendering kütüphanesi |
| **HarfBuzz** | harfbuzz.github.io — metin şekillendirme (shaping) motoru |

### 9.7 Tipografi Terimler Sözlüğü (Hızlı Referans)

| İngilizce | Türkçe | Kısa Açıklama |
|-----------|--------|---------------|
| Font | Font / Yazı Tipi | Bir yazı tipinin belirli ağırlık, boyut ve stilindeki seti |
| Typeface | Yazı Tipi Ailesi | Font ailesinin genel tasarımı (ör. "Helvetica" bir typeface) |
| Glyph | Glif / Karakter Şekli | Bir karakterin görsel temsili |
| Serif | Tırnak / Serif | Harflerin uçlarındaki küçük çizgiler |
| Sans-Serif | Tırnaksız | Serif olmayan (sans = Fransızca "olmadan") |
| Monospace | Eşit Genişlikli | Her karakter aynı genişlikte |
| Kerning | Karakter Çifti Aralığı | İki karakter arası özel boşluk ayarı |
| Leading | Satır Aralığı | Satırlar arası dikey mesafe |
| Tracking | Harf Aralığı | Tüm karakterler arası genel boşluk |
| Baseline | Taban Çizgisi | Harflerin oturduğu çizgi |
| x-height | x-yüksekliği | Küçük x'in yüksekliği |
| Ascender | Yükselen Kısım | Taban çizgisi üstüne çıkan parça (b, d, h) |
| Descender | İnen Kısım | Taban çizgisi altına inen parça (g, p, y) |
| Cap Height | Büyük Harf Yüksekliği | Büyük harflerin yüksekliği |
| Em | Em Birimi | Font boyutuna eşit ölçü birimi |
| Hinting | İpuçlama | Piksel ızgarasına hizalama talimatları |
| Rasterization | Rasterizasyon | Vektör → piksel dönüşümü |
| Anti-aliasing | Kenar Yumuşatma | Testere dişlerini azaltma |
| Subpixel rendering | Alt Piksel İşleme | LCD alt piksellerini kullanarak çözünürlük artırma |
| Ligature | Bitişik Harf | İki harfin birleşik glyph'i (fi, fl, ff) |
| Variable Font | Değişken Font | Tek dosyada sürekli ağırlık/genişlik aralığı |
| FOIT | Görünmez Metin Yanıp Sönmesi | Web fontu yüklenene kadar metin gizli |
| FOUT | Stilsiz Metin Yanıp Sönmesi | Web fontu yüklenene kadar yedek font gösterilir |
| WOFF/WOFF2 | Web Açık Font Formatı | Web için sıkıştırılmış font konteyner formatı |
| DPI / PPI | Nokta/Piksel / İnç | Ekran veya baskı çözünürlüğü |

---

> **Bu belge**, Wikipedia (CC BY-SA 4.0), Microsoft Typography, Google Fonts Documentation, MDN Web Docs ve çeşitli tipografi kaynaklarından derlenmiş bilgilerle hazırlanmıştır. Tüm tarihler, sayılar ve teknik detaylar doğrulanmış kaynaklara dayanmaktadır.
