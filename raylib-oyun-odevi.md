# Ödev 2: Raylib ile Oyun Geliştirme

**Ders:** Bilgisayar Grafikleri  
**GitHub Classroom:** [https://classroom.github.com/a/hi5MBbQW](https://classroom.github.com/a/hi5MBbQW)  
**Kurs deposu:** [https://github.com/gusanmaz/comp-graphs](https://github.com/gusanmaz/comp-graphs)

---

## Ödev Özeti

Bu ödevde [Raylib](https://www.raylib.com/) kütüphanesini kullanarak hayal ettiğiniz bir oyunu geliştireceksiniz. Oyun mekaniği basit olabilir; çok karmaşık bir oyun beklenmemektedir. Önemli olan Raylib'in temel özelliklerini kullanarak çalışan bir oyun ortaya koymanızdır.

Bu ödevde sprite tasarımı birincil odak **değildir**; hazır asset'ler kullanabilirsiniz. Ancak oyununuzda **Raylib kamera fonksiyonları** ve **model yükleme fonksiyonları** mutlaka kullanılmalıdır.

---

## Çalışma Şekli

- Ödev **bireysel** veya **grup** halinde yapılabilir.
- Grup çalışmasında **gruptan yalnızca bir kişinin teslim etmesi yeterlidir**.
- Tüm grup üyelerinin bilgileri README dosyasında açıkça belirtilmelidir (aşağıdaki şablona bakın).

---

## Teknik Gereksinimler

### Raylib Kullanımı (Zorunlu)

Oyununuz **Raylib** kütüphanesi ile geliştirilmelidir. Aşağıdaki dillerden birinin Raylib bağlantısını (binding) kullanabilirsiniz:

| Dil | Binding / Kaynak |
|-----|------------------|
| C | [raylib (resmi)](https://github.com/raysan5/raylib) |
| C++ | raylib (C API doğrudan kullanılabilir) |
| Python | [raylib-python-cffi](https://github.com/electronstudio/raylib-python-cffi) |
| C# | [Raylib-cs](https://github.com/ChrisDill/Raylib-cs) |
| Go, Rust, Zig vb. | Raylib topluluk binding'leri |

### Zorunlu Raylib Özellikleri

Oyununuzda aşağıdaki iki özellik **mutlaka** kullanılmalıdır:

#### 1. Kamera Fonksiyonları

Raylib'in kamera sistemi kullanılmalıdır. **Camera2D** veya **Camera3D** — ikisinden biri veya her ikisi birlikte kullanılabilir.

**Camera2D (2D oyunlar için):**

- `BeginMode2D()` / `EndMode2D()` — 2D kamera modu
- `Camera2D` yapısı — offset, hedef (target), zoom, rotasyon
- `GetWorldToScreen2D()` / `GetScreenToWorld2D()` — dünya/koordinat dönüşümü

**Örnek kullanım senaryoları (2D):**
- Oyuncuyu takip eden 2D kamera
- Zoom in / zoom out
- Harita üzerinde kaydırma (pan)

**Camera3D (3D oyunlar için):**

- `BeginMode3D()` / `EndMode3D()` — 3D kamera modu
- `UpdateCamera()` — kamera güncelleme
- `Camera3D` yapısı — kamera pozisyonu, hedef, yukarı vektörü, FOV
- `SetCameraMode()` — kamera modu (serbest, birinci/üçüncü şahıs, orbital vb.)

**Örnek kullanım senaryoları (3D):**
- Oyuncuyu takip eden üçüncü şahıs kamera
- Orbital kamera ile sahneyi döndürme
- Birinci şahıs bakış açısı

#### 2. Model Yükleme Fonksiyonları

En az bir 3D model dosyası yüklenmeli ve sahnede gösterilmelidir. Örnek fonksiyonlar:

- `LoadModel()` — 3D model yükleme (.obj, .gltf, .fbx vb.)
- `DrawModel()` / `DrawModelEx()` — model çizimi
- `UnloadModel()` — model bellekten temizleme
- `LoadModelFromMesh()` — mesh'ten model oluşturma (opsiyonel)

**Desteklenen formatlar:** `.obj`, `.gltf`, `.glb`, `.iqm`, `.vox` ve Raylib'in desteklediği diğer formatlar.

> **Not:** Kamera ve model yükleme dışında 2D çizim, texture, ses ve diğer Raylib özelliklerini de kullanabilirsiniz; ancak yukarıdaki ikisi zorunludur.

### Asset Kullanımı

- Sprite veya 3D model tasarımı zorunlu değildir; **hazır asset'ler kullanılabilir**.
- Kullandığınız tüm hazır asset'lerin kaynak linklerini README'de belirtmeniz zorunludur.
- Ücretsiz asset kaynakları: [Kenney.nl](https://kenney.nl/), [OpenGameArt](https://opengameart.org/), [Sketchfab](https://sketchfab.com/) (Creative Commons modeller) vb.

---

## Teslim

### GitHub Classroom Üzerinden

1. [GitHub Classroom bağlantısına](https://classroom.github.com/a/hi5MBbQW) gidin.
2. GitHub hesabınızla giriş yapın ve size atanacak ödev deposunu kabul edin.
3. Yalnızca **kaynak kod**, **asset dosyaları** (model, texture, ses vb.) ve **README.md** dosyanızı depoya yükleyin. Derleme çıktıları ve kurulum dosyalarını yüklemeyin (aşağıdaki bölüme bakın).
4. Grup çalışmasıysa, teslimi gruptan **bir kişi** yapabilir; diğer üyelerin bilgileri README'de listelenmelidir.

### Ne Yüklenmeli, Ne Yüklenmemeli?

Depoya **yalnızca projeyi yeniden oluşturmak ve çalıştırmak için gerekli dosyalar** yüklenmelidir.

**Yüklenmesi gerekenler:**

| Tür | Örnekler |
|-----|----------|
| Kaynak kod | `.c`, `.cpp`, `.py`, `.cs`, `.h` vb. |
| Asset dosyaları | 3D modeller (`.obj`, `.gltf`, `.glb`), texture'lar (`.png`), sesler (`.wav`, `.ogg`) |
| Proje / bağımlılık tanımları | `Makefile`, `CMakeLists.txt`, `requirements.txt`, `*.csproj` |
| README | `README.md` |
| İsteğe bağlı | `.gitignore` |

**Yüklenmemesi gerekenler:**

| Tür | Örnekler | Neden? |
|-----|----------|--------|
| Çalıştırılabilir dosyalar | `.exe`, `.out`, `.app`, derlenmiş binary | Platforma özeldir; kaynak koddan yeniden derlenebilir |
| Derleme object dosyaları | `.o`, MSVC derleme çıktısı `.obj` | Derlemenin ara ürünüdür; kaynak koddan otomatik üretilir |
| Raylib kütüphanesinin kendisi | `libraylib.a`, `raylib.dll` | Sistem geneline veya paket yöneticisine kurulur; repoya dahil edilmez |
| Build / çıktı klasörleri | `build/`, `dist/`, `bin/`, `out/`, `Debug/`, `Release/` | Geçici derleme çıktılarıdır |
| Bağımlılık cache'leri | `__pycache__/`, `.venv/`, `vendor/` | `pip install` vb. ile yeniden indirilebilir |
| Kurulum / setup dosyaları | `.msi`, `.dmg` (oyun installer'ı), `.deb` | Dağıtım paketleridir; kaynak kod teslimi için gerekli değildir |
| IDE / editör ayarları | `.vs/`, `.idea/` (isteğe bağlı hariç tutulabilir) | Kişisel geliştirme ortamına özeldir |

> **Dikkat — `.obj` dosyaları:** 3D model formatı olan `.obj` dosyaları **asset'tir ve yüklenmelidir**. MSVC derleyicisinin ürettiği object dosyaları da `.obj` uzantılı olabilir; bunlar genellikle `build/`, `Debug/`, `Release/` gibi klasörlerde bulunur ve **yüklenmemelidir**.

#### Neden bu dosyalar repoya yüklenmemeli?

1. **Git kaynak kod için tasarlanmıştır.** Binary dosyalar (exe, object, derlenmiş kütüphaneler) Git geçmişini kalıcı olarak şişirir. Bir kez commit edilen büyük dosya, silinse bile geçmişte kalır ve repoyu yavaşlatır.

2. **Platform bağımsızlığı.** Windows'ta derlenmiş bir `.exe`, macOS veya Linux'ta çalışmaz. Öğretmen veya grup arkadaşınız projeyi kendi bilgisayarında Raylib kurup kaynak koddan derleyebilmelidir.

3. **Yeniden üretilebilirlik.** Object dosyaları ve build klasörleri derleme sürecinin yan ürünüdür. Kaynak kod + README'deki derleme talimatları yeterlidir; Raylib zaten sistemde kurulu olduğundan kütüphaneyi de repoya eklemenize gerek yoktur.

4. **GitHub dosya boyutu limitleri.** GitHub tek bir dosya için yaklaşık **100 MB** sınırı uygular; **50 MB** üzeri dosyalarda uyarı verir. Büyük binary dosyalar push işlemini başarısız kılar.

5. **Güvenlik ve inceleme.** Kaynak kod incelenebilir; çalıştırılabilir dosyaların içeriği doğrudan okunamaz. Akademik teslimlerde kodun okunabilir olması beklenir.

> **İpucu:** Proje köküne bir `.gitignore` dosyası ekleyerek bu tür dosyaların yanlışlıkla commit edilmesini önleyebilirsiniz. Örneğin: `build/`, `dist/`, `*.exe`, `*.o`, `__pycache__/`

### Dosya Boyutu Sınırı (100 MB)

- Raylib projelerinde yalnızca **kaynak kod ve asset dosyaları** yüklendiğinde 100 MB sınırını aşmak **genellikle çok zordur**. Tipik bir ödev projesi birkaç MB ile onlarca MB arasında kalır.
- Tüm ödev dosyalarının toplam boyutu **100 MB'ı geçmemelidir**.
- 100 MB sınırına ancak çok büyük model/texture dosyaları veya yanlışlıkla executable, object ve build klasörleri eklendiğinde ulaşılır.
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
- Kullanılan programlama dili ve Raylib binding'i

### 3. Raylib Özelliklerinin Kullanımı

README'de aşağıdakileri açıkça belirtin:

**Kamera kullanımı:**
- Hangi kamera türü kullanıldı? (`Camera2D` / `Camera3D`)
- Hangi kamera modu veya davranışı uygulandı? (ör. 2D takip/zoom, üçüncü şahıs, orbital, birinci şahıs)
- Kamera oyunda ne işe yarıyor?

**Model yükleme:**
- Hangi model(ler) yüklendi?
- Modeller sahnede nasıl kullanılıyor?

### 4. Kullanılan Hazır Asset'ler

Kullandığınız tüm hazır asset'leri listeleyin:

| Asset Adı | Tür (model / texture / ses vb.) | Kaynak / Link | Nerede Kullanıldı |
|-----------|----------------------------------|---------------|-------------------|
| ...       | ...                              | ...           | ...               |

### 5. Oyunu Çalıştırma (Lokal)

Adım adım kurulum ve çalıştırma talimatları:

```bash
# Örnek — C ile Raylib
# Raylib kurulumu (macOS)
brew install raylib

# Derleme ve çalıştırma
gcc main.c -o oyun -lraylib -lm
./oyun
```

```bash
# Örnek — Python ile Raylib
pip install raylib
python main.py
```

- Gerekli yazılımlar (Raylib sürümü, derleyici, Python sürümü vb.)
- İşletim sistemi notları (Windows / macOS / Linux farkları varsa)
- Asset dosyalarının doğru yolda olduğundan emin olun

### 6. Oyun Nasıl Oynanır?

- Kontroller (klavye, fare, gamepad)
- Oyunun amacı
- Temel oynanış akışı

### 7. Oyun Yayın Linki (varsa)

Oyun bir platformda yayınlandıysa linki paylaşın:

- itch.io, GitHub Releases vb.

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

**Dil / Binding:** [C / Python / C# + Raylib]

## Raylib Özelliklerinin Kullanımı

### Kamera
- **Kullanılan tür:** [Camera2D / Camera3D]
- **Kullanılan mod / davranış:** [2D takip / Zoom / Üçüncü şahıs / Orbital / Birinci şahıs / ...]
- **Açıklama:** [Kamera oyunda nasıl kullanılıyor]

### Model Yükleme
- **Yüklenen modeller:** [model1.obj, model2.gltf, ...]
- **Açıklama:** [Modeller sahnede nasıl kullanılıyor]

## Kullanılan Hazır Asset'ler

| Asset Adı | Tür | Kaynak / Link | Nerede Kullanıldı |
|-----------|-----|---------------|-------------------|
| ...       | 3D model | https://... | Oyuncu karakteri |

## Oyunu Çalıştırma

### Gereksinimler
- Raylib [sürüm]
- [Derleyici / Python sürümü / ...]

### Adımlar
1. ...
2. ...

## Oyun Nasıl Oynanır?

- **Hareket:** WASD
- **Kamera:** Fare ile bakış
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
| Raylib kullanımı | Oyun Raylib ile geliştirilmiş ve çalışır durumda |
| Kamera fonksiyonları | Raylib kamera sistemi (`Camera2D` ve/veya `Camera3D`) anlamlı şekilde kullanılmış |
| Model yükleme | En az bir 3D model yüklenmiş ve sahnede gösterilmiş |
| Oyun çalışır durumda | Oyun hatasız başlıyor ve oynanabiliyor |
| README kalitesi | Tüm zorunlu bölümler eksiksiz ve anlaşılır |
| Asset kaynakları | Kullanılan hazır asset'lerin linkleri belirtilmiş |
| Teslim formatı | GitHub Classroom deposuna doğru şekilde yüklenmiş |

---

## Faydalı Kaynaklar

### Raylib
- [Raylib resmi sitesi](https://www.raylib.com/)
- [Raylib GitHub](https://github.com/raysan5/raylib)
- [Raylib örnekleri (examples)](https://github.com/raysan5/raylib/tree/master/examples)
- [Raylib cheat sheet](https://www.raylib.com/cheatsheet/cheatsheet.html)

### Kamera Örnekleri (Raylib examples)

**Camera2D:**
- `core_2d_camera` — Temel 2D kamera kullanımı
- `core_2d_camera_platformer` — Platform oyununda 2D kamera takibi
- `core_2d_camera_split_screen` — Bölünmüş ekran 2D kamera

**Camera3D:**
- `core_3d_camera_free` — Serbest 3D kamera
- `core_3d_camera_mode` — Farklı kamera modları
- `core_3d_camera_first_person` — Birinci şahıs kamera

### Model Yükleme Örnekleri (Raylib examples)
- `models_loading` — Model yükleme ve çizim
- `models_waving_cube` — Animasyonlu model
- `models_geometric_shapes` — Temel 3D şekiller

### Ücretsiz Asset Kaynakları
- [Kenney.nl](https://kenney.nl/) — Ücretsiz oyun asset paketleri
- [OpenGameArt](https://opengameart.org/) — Açık kaynak oyun sanatı
- [Sketchfab](https://sketchfab.com/) — Creative Commons 3D modeller
- [Poly Pizza](https://poly.pizza/) — Ücretsiz low-poly modeller

---

## Sık Sorulan Sorular

**Hangi dili kullanmalıyım?**  
C (resmi Raylib API) en yaygın seçenektir. Python veya C# gibi binding'ler de kabul edilir. Önemli olan Raylib'in kamera ve model yükleme fonksiyonlarını kullanmanızdır.

**2D oyun yapabilir miyim?**  
Evet. 2D oyunlarda `Camera2D` kullanabilirsiniz; 3D oyunlarda `Camera3D` kullanabilirsiniz. Her iki durumda da **kamera fonksiyonları** ve **model yükleme** zorunludur. Tamamen 2D bir oyun bile en az bir 3D model içermeli ve kamera sistemi (`Camera2D` veya `Camera3D`) kullanmalıdır.

**Grup olarak çalışırsak herkes ayrı teslim etmeli mi?**  
Hayır. Gruptan bir kişinin teslim etmesi yeterlidir; README'de tüm üye bilgileri olmalıdır.

**Kendi modelimi tasarlamak zorunda mıyım?**  
Hayır. Hazır asset kullanabilirsiniz; kaynak linklerini README'de belirtmeniz yeterlidir.

**Derlenmiş oyun dosyasını (.exe vb.) yüklemem gerekir mi?**  
Hayır. Yalnızca kaynak kod ve asset dosyalarını yükleyin. Raylib'i README'deki talimatlarla kurup projeyi kendi bilgisayarınızda derlemeniz yeterlidir.

**Raylib kütüphanesini repoya eklemem gerekir mi?**  
Hayır. Raylib sistem geneline veya paket yöneticisiyle (`brew install raylib`, `pip install raylib` vb.) kurulur. Repoya yalnızca kendi kaynak kodunuz ve asset'leriniz gitmelidir.

**Proje 100 MB'dan büyükse ne yapmalıyım?**  
Önce build çıktıları, executable ve Raylib kütüphane dosyalarının repoda olmadığından emin olun. Yalnızca kaynak kod ve asset'lerle hâlâ 100 MB'ı aşıyorsa dosyaları Google Drive'a yükleyin ve linki README.md içine ekleyin.
