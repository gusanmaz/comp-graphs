# Ödev 1: Pixel Art Oyun Geliştirme

**Ders:** Bilgisayar Grafikleri  
**GitHub Classroom:** [https://classroom.github.com/a/VFx3Sk-Q](https://classroom.github.com/a/VFx3Sk-Q)  
**Kurs deposu:** [https://github.com/gusanmaz/comp-graphs](https://github.com/gusanmaz/comp-graphs)

---

## Ödev Özeti

Bu ödevde hayal ettiğiniz bir oyunu geliştireceksiniz. Ödevin temel odağı **kendi sprite'larınızı tasarlamak ve üretmektir**. Oyun mekaniği basit olabilir; çok karmaşık bir oyun beklenmemektedir. Önemli olan, pixel art sprite üretim sürecine odaklanmanız ve bunu oyununuzda kullanmanızdır.

---

## Çalışma Şekli

- Ödev **bireysel** veya **grup** halinde yapılabilir.
- Grup çalışmasında **gruptan yalnızca bir kişinin teslim etmesi yeterlidir**.
- Tüm grup üyelerinin bilgileri README dosyasında açıkça belirtilmelidir (aşağıdaki şablona bakın).

---

## Beklentiler

### Sprite Tasarımı (Ana Odak)

Oyununuzdaki karakter, düşman, arka plan, nesne ve benzeri görsellerin büyük çoğunluğunu **kendiniz tasarlamalısınız**. Bunun için Aseprite, Piskel, LibreSprite veya benzeri bir pixel art editörü kullanabilirsiniz.

- Sprite'larınızı projeye dahil edin (ör. `assets/`, `sprites/` klasörü).
- Tasarım sürecinde yaşadığınız zorlukları README dosyasında anlatın.
- Hazır (dışarıdan indirilen) asset kullandıysanız, hangi asset'lerin hazır olduğunu ve kaynak linklerini README'de belirtin.

### Oyun Kodu

- Oyun kodunu istediğiniz teknoloji veya motor ile yazabilirsiniz (JavaScript, Python, Godot, Unity vb.).
- **Kod yazımında yapay zekadan yardım alınabilir.** Ancak sprite tasarımı sizin çalışmanız olmalıdır.
- Oyun çalışır durumda olmalı ve README'de nasıl çalıştırılacağı açıkça yazılmalıdır.

---

## Teslim

### GitHub Classroom Üzerinden

1. [GitHub Classroom bağlantısına](https://classroom.github.com/a/VFx3Sk-Q) gidin.
2. GitHub hesabınızla giriş yapın ve size atanacak ödev deposunu kabul edin.
3. Yalnızca **kaynak kod**, **asset dosyaları** (sprite, texture, ses vb.) ve **README.md** dosyanızı depoya yükleyin. Derleme çıktıları ve kurulum dosyalarını yüklemeyin (aşağıdaki bölüme bakın).
4. Grup çalışmasıysa, teslimi gruptan **bir kişi** yapabilir; diğer üyelerin bilgileri README'de listelenmelidir.

### Ne Yüklenmeli, Ne Yüklenmemeli?

Depoya **yalnızca projeyi yeniden oluşturmak ve çalıştırmak için gerekli dosyalar** yüklenmelidir.

**Yüklenmesi gerekenler:**

| Tür | Örnekler |
|-----|----------|
| Kaynak kod | `.c`, `.cpp`, `.py`, `.cs`, `.js`, `.gd` vb. |
| Asset dosyaları | Sprite'lar (`.png`, `.gif`), sesler (`.wav`, `.ogg`), fontlar |
| Proje / bağımlılık tanımları | `package.json`, `requirements.txt`, `Makefile`, `CMakeLists.txt` |
| README | `README.md` |
| İsteğe bağlı | `.gitignore` |

**Yüklenmemesi gerekenler:**

| Tür | Örnekler | Neden? |
|-----|----------|--------|
| Çalıştırılabilir dosyalar | `.exe`, `.out`, `.app`, derlenmiş binary | Platforma özeldir; kaynak koddan yeniden derlenebilir |
| Derleme object dosyaları | `.o`, derleyici çıktısı `.obj` | Derlemenin ara ürünüdür; kaynak koddan otomatik üretilir |
| Build / çıktı klasörleri | `build/`, `dist/`, `bin/`, `out/`, `Debug/`, `Release/` | Geçici derleme çıktılarıdır |
| Bağımlılık cache'leri | `node_modules/`, `__pycache__/`, `.venv/`, `vendor/` | `npm install`, `pip install` vb. ile yeniden indirilebilir |
| Kurulum / setup dosyaları | `.msi`, `.dmg` (oyun installer'ı), `.deb` | Dağıtım paketleridir; kaynak kod teslimi için gerekli değildir |
| IDE / editör ayarları | `.vs/`, `.idea/` (isteğe bağlı hariç tutulabilir) | Kişisel geliştirme ortamına özeldir |

#### Neden bu dosyalar repoya yüklenmemeli?

1. **Git kaynak kod için tasarlanmıştır.** Binary dosyalar (exe, object, büyük cache klasörleri) Git geçmişini kalıcı olarak şişirir. Bir kez commit edilen büyük dosya, silinse bile geçmişte kalır ve repoyu yavaşlatır.

2. **Platform bağımsızlığı.** Windows'ta derlenmiş bir `.exe`, macOS veya Linux'ta çalışmaz. Öğretmen veya grup arkadaşınız projeyi kendi bilgisayarında kaynak koddan derleyebilmelidir.

3. **Yeniden üretilebilirlik.** Object dosyaları ve build klasörleri derleme sürecinin yan ürünüdür. Kaynak kod + README'deki derleme talimatları yeterlidir; ara çıktıları paylaşmaya gerek yoktur.

4. **GitHub dosya boyutu limitleri.** GitHub tek bir dosya için yaklaşık **100 MB** sınırı uygular; **50 MB** üzeri dosyalarda uyarı verir. Büyük binary dosyalar push işlemini başarısız kılar.

5. **Güvenlik ve inceleme.** Kaynak kod incelenebilir; çalıştırılabilir dosyaların içeriği doğrudan okunamaz. Akademik teslimlerde kodun okunabilir olması beklenir.

> **İpucu:** Proje köküne bir `.gitignore` dosyası ekleyerek bu tür dosyaların yanlışlıkla commit edilmesini önleyebilirsiniz. Örneğin: `build/`, `dist/`, `*.exe`, `*.o`, `node_modules/`, `__pycache__/`

### Dosya Boyutu Sınırı (100 MB)

- Depoya yüklemeniz gereken dosyalar (kaynak kod + asset'ler) genellikle **100 MB'ın çok altında** kalır.
- Tüm ödev dosyalarının toplam boyutu **100 MB'ı geçmemelidir**.
- 100 MB sınırına ancak çok büyük asset'ler veya yanlışlıkla build/installer dosyaları eklendiğinde ulaşılır — bu yüzden yalnızca kaynak kod ve asset yükleyin.
- Eğer proje 100 MB'ın üzerindeyse:
  1. Ödev dosyalarını **Google Drive**'a yükleyin.
  2. Drive klasörüne **"Bağlantıya sahip olan herkes görüntüleyebilir"** erişimi verin.
  3. Google Drive linkini **README.md dosyanızın içine** gömün.
  4. GitHub deposuna yine de README.md dosyasını ve mümkünse küçük boyutlu kaynak dosyaları yükleyin.

> **Not:** 100 MB üzeri dosyaları doğrudan GitHub'a yüklemeye çalışmayın; büyük dosyalar push işlemini başarısız kılar.

---

## README.md Gereksinimleri

Her teslimde kök dizinde bir `README.md` dosyası bulunmalıdır. Aşağıdaki bölümlerin tamamını içermelidir.

### 1. Grup Üyeleri / Öğrenci Bilgileri

Bireysel çalışmada kendi bilgilerinizi, grup çalışmasında tüm üyelerin bilgilerini yazın:

| Ad Soyad | Öğrenci Numarası |
|----------|------------------|
| ...      | ...              |

### 2. Oyun Hakkında

- Oyunun adı
- Kısa açıklama (ne tür bir oyun, temel mekanikler)
- Kullanılan teknoloji / motor / programlama dili

### 3. Sprite Tasarım Süreci

- Hangi pixel art programını kullandınız? (Aseprite, Piskel vb.)
- Sprite tasarımında karşılaştığınız zorluklar nelerdi?
- Tasarım sürecinde neler öğrendiniz?
- Kendi ürettiğiniz sprite'ların kısa açıklaması (karakter, düşman, arka plan vb.)

### 4. Kullanılan Hazır Asset'ler (varsa)

Eğer dışarıdan indirilen hazır asset kullandıysanız, her birini listeleyin:

| Asset Adı | Kaynak / Link | Nerede Kullanıldı |
|-----------|---------------|-------------------|
| ...       | ...           | ...               |

Hazır asset kullanmadıysanız: *"Bu projede hazır asset kullanılmamıştır; tüm görseller öğrenci(ler) tarafından üretilmiştir."* yazmanız yeterlidir.

### 5. Oyunu Çalıştırma (Lokal)

Adım adım kurulum ve çalıştırma talimatları:

```bash
# Örnek — kendi projenize göre düzenleyin
# Bağımlılıkları yükle
npm install

# Oyunu başlat
npm start
```

- Gerekli yazılımlar (Node.js, Python, Godot sürümü vb.)
- İşletim sistemi notları (Windows / macOS / Linux farkları varsa)

### 6. Oyun Nasıl Oynanır?

- Kontroller (klavye, fare, gamepad)
- Oyunun amacı
- Temel oynanış akışı

### 7. Oyun Yayın Linki (varsa)

Oyun bir platformda yayınlandıysa linki paylaşın:

- itch.io, GitHub Pages, Netlify, Vercel vb.

Yayınlanmadıysa: *"Oyun yalnızca lokal ortamda çalıştırılabilir."*

### 8. Oynanış Videosu (varsa)

Oyun oynanışını gösteren bir video çektiyseniz YouTube veya benzeri platform linkini ekleyin:

- **Video linki:** https://...

Video yoksa bu bölümü atlayabilir veya *"Oynanış videosu eklenmemiştir."* yazabilirsiniz.

### 9. Google Drive Linki (100 MB üzeri projeler için)

Proje dosyaları 100 MB'ı aştıysa:

- **Google Drive linki:** https://drive.google.com/...

---

## README Şablonu

Teslimde aşağıdaki şablonu kopyalayıp kendi projenize göre doldurabilirsiniz:

```markdown
# [Oyun Adı]

## Grup Üyeleri

| Ad Soyad | Öğrenci Numarası |
|----------|------------------|
| Ad Soyad | 123456789        |

## Oyun Hakkında

[Kısa açıklama]

**Teknoloji:** [Kullanılan dil / motor / framework]

## Sprite Tasarım Süreci

### Kullanılan Program
[Aseprite / Piskel / ...]

### Karşılaşılan Zorluklar
[Sprite tasarımında yaşadığınız sorunlar ve nasıl çözdüğünüz]

### Üretilen Sprite'lar
- Karakter: ...
- Düşman: ...
- Arka plan: ...

## Kullanılan Hazır Asset'ler

| Asset Adı | Kaynak / Link | Nerede Kullanıldı |
|-----------|---------------|-------------------|
| Yok       | —             | —                 |

## Oyunu Çalıştırma

### Gereksinimler
- ...

### Adımlar
1. ...
2. ...

## Oyun Nasıl Oynanır?

- **Hareket:** ...
- **Amaç:** ...

## Yayın Linki

[Platform linki veya "Yalnızca lokal çalıştırılabilir."]

## Oynanış Videosu

[YouTube linki veya "Eklenmemiştir."]

## Google Drive Linki

[Varsa link; yoksa bu bölümü silin.]
```

---

## Değerlendirme Kriterleri (Özet)

| Kriter | Açıklama |
|--------|----------|
| Sprite tasarımı | Kendi üretilen pixel art sprite'ların kalitesi ve projedeki kullanımı |
| Oyun çalışır durumda | Oyun hatasız başlıyor ve oynanabiliyor |
| README kalitesi | Tüm zorunlu bölümler eksiksiz ve anlaşılır |
| Tasarım süreci yansıması | Sprite üretiminde yaşanan zorlukların ve öğrenilenlerin anlatılması |
| Teslim formatı | GitHub Classroom deposuna doğru şekilde yüklenmiş |

---

## Faydalı Kaynaklar

- [Aseprite](https://www.aseprite.org/) — Pixel art editörü
- [Piskel](https://www.piskelapp.com/) — Ücretsiz, tarayıcı tabanlı pixel art editörü
- [LibreSprite](https://libresprite.github.io/) — Açık kaynak pixel art editörü
- [itch.io](https://itch.io/) — Oyun yayınlama platformu (isteğe bağlı)

---

## Sık Sorulan Sorular

**Yapay zeka ile kod yazabilir miyim?**  
Evet. Kod yazımında yapay zekadan yardım alabilirsiniz. Sprite tasarımı ise sizin çalışmanız olmalıdır.

**Grup olarak çalışırsak herkes ayrı teslim etmeli mi?**  
Hayır. Gruptan bir kişinin teslim etmesi yeterlidir; README'de tüm üye bilgileri olmalıdır.

**Hazır sprite kullanabilir miyim?**  
Mümkün olduğunca kendi sprite'larınızı üretmeniz beklenir. Hazır asset kullanırsanız README'de kaynaklarını belirtmeniz zorunludur.

**Derlenmiş oyun dosyasını (.exe vb.) yüklemem gerekir mi?**  
Hayır. Yalnızca kaynak kod ve asset dosyalarını yükleyin. README'de projeyi nasıl derleyip çalıştıracağınızı adım adım yazmanız yeterlidir.

**Proje 100 MB'dan büyükse ne yapmalıyım?**  
Önce build çıktıları, `node_modules/` gibi gereksiz klasörlerin repoda olmadığından emin olun. Yalnızca kaynak kod ve asset'lerle hâlâ 100 MB'ı aşıyorsa dosyaları Google Drive'a yükleyin ve linki README.md içine ekleyin.
