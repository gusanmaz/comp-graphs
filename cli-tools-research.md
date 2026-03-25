# 🖥️ CLI Görüntü İşleme Araçları — Bilgisayar Grafiğinde Kapsamlı Araştırma

> Bu belge, "Bilgisayar Grafiği" dersi için komut satırı (CLI) tabanlı görüntü/video işleme araçlarını detaylı olarak ele almaktadır. Oyun geliştirme ve grafik eğitimi odaklıdır. Her araç için kurulum, pratik komut örnekleri ve kullanım senaryoları verilmiştir.

---

## İçindekiler

1. [ImageMagick — CLI Görüntü İşlemenin Kralı](#1-imagemagick)
2. [FFmpeg — Video ve Animasyon İşleme](#2-ffmpeg)
3. [ExifTool — Görüntü Metadata Yönetimi](#3-exiftool)
4. [Görüntü Optimizasyon Araçları](#4-görüntü-optimizasyon-araçları)
5. [Potrace — Bitmap'ten Vektöre Dönüşüm](#5-potrace)
6. [GIMP CLI — Script-Fu ve Python-Fu](#6-gimp-cli)
7. [Inkscape CLI — Komut Satırından SVG İşleme](#7-inkscape-cli)
8. [GraphicsMagick — ImageMagick'in Kardeşi](#8-graphicsmagick)
9. [Modern CLI Araçları](#9-modern-cli-araçları)
10. [LLM Çağı CLI Araçları — Yapay Zeka Destekli](#10-llm-çağı-cli-araçları)
11. [Otomasyon ve Betik Yazımı](#11-otomasyon-ve-betik-yazımı)
12. [Pratik Proje Fikirleri](#12-pratik-proje-fikirleri)

---

## Popülerlik ve Öncelik Tablosu

| Araç | Kategori | Popülerlik | Öğrenme Önceliği | Kullanım Alanı |
|------|----------|-----------|-------------------|----------------|
| **ImageMagick** | Görüntü işleme | ⭐⭐⭐⭐⭐ | 🔴 Zorunlu | Her türlü görüntü dönüşümü |
| **FFmpeg** | Video/animasyon | ⭐⭐⭐⭐⭐ | 🔴 Zorunlu | Video işleme, GIF, animasyon |
| **ExifTool** | Metadata | ⭐⭐⭐⭐ | 🟡 Önerilen | Metadata okuma/yazma |
| **OptiPNG/pngquant** | Optimizasyon | ⭐⭐⭐⭐ | 🟡 Önerilen | Dosya boyutu küçültme |
| **Potrace** | Vektörizasyon | ⭐⭐⭐ | 🟡 Önerilen | Bitmap → SVG dönüşümü |
| **GIMP CLI** | Toplu işleme | ⭐⭐⭐ | 🟢 İsteğe bağlı | Karmaşık toplu düzenleme |
| **Inkscape CLI** | SVG işleme | ⭐⭐⭐⭐ | 🟡 Önerilen | SVG ve PDF dönüşüm |
| **GraphicsMagick** | Görüntü işleme | ⭐⭐⭐ | 🟢 İsteğe bağlı | Yüksek performans |
| **pastel** | Renk yönetimi | ⭐⭐⭐ | 🟡 Önerilen | Renk paleti, dönüşüm |
| **rembg** | AI arka plan | ⭐⭐⭐⭐ | 🟡 Önerilen | Arka plan kaldırma |
| **Real-ESRGAN** | AI büyütme | ⭐⭐⭐⭐ | 🟡 Önerilen | Görüntü büyütme |
| **gifski** | GIF kodlama | ⭐⭐⭐ | 🟢 İsteğe bağlı | Yüksek kalite GIF |
| **cwebp/avifenc** | Modern formatlar | ⭐⭐⭐⭐ | 🟡 Önerilen | WebP/AVIF dönüşüm |
| **chafa** | Terminal görüntü | ⭐⭐⭐ | 🟢 İsteğe bağlı | Terminalde görüntü gösterimi |

---

## 1. ImageMagick

### 1.1 Genel Bakış

**ImageMagick**, 1990 yılında John Cristy tarafından DuPont şirketinde başlatılmış, açık kaynaklı, komut satırı tabanlı görüntü işleme paketidir. 200'den fazla görüntü formatını destekler ve günümüzde neredeyse tüm Linux dağıtımlarında, macOS ve Windows'ta kullanılabilir. Web sunucularından masaüstü betiklerine, oyun geliştirme pipeline'larından bilimsel görüntülemeye kadar geniş bir kullanım alanına sahiptir.

**Desteklenen formatlar (bazıları):** PNG, JPEG, GIF, TIFF, BMP, WebP, AVIF, SVG, PDF, PSD, ICO, EPS, RAW, HEIF, DPX, EXR, PCX, TGA ve 200+ diğer format.

**GitHub yıldızları:** ~12.000+ (2024 itibarıyla)

### 1.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install imagemagick

# macOS (Homebrew)
brew install imagemagick

# Windows (Chocolatey)
choco install imagemagick

# Windows (Scoop)
scoop install imagemagick

# Kaynak koddan derleme (en son sürüm)
git clone https://github.com/ImageMagick/ImageMagick.git
cd ImageMagick
./configure
make
sudo make install

# Sürüm doğrulama
magick --version
# veya eski sürümlerde:
convert --version
```

> **Not:** ImageMagick 7'den itibaren tüm alt komutlar `magick` komutu altında birleştirilmiştir. Eski sürümlerde `convert`, `mogrify`, `composite` gibi ayrı komutlar kullanılırdı. Yeni sürümde `magick convert`, `magick mogrify` şeklinde veya doğrudan `magick` ile çağrılır.

### 1.3 Ana Komutlar

| Komut | Açıklama | Kullanım |
|-------|----------|----------|
| `magick` (eski: `convert`) | Bir görüntüyü dönüştürüp yeni dosyaya yazar | Format, boyut, filtre, efekt dönüşümleri |
| `magick mogrify` | Dosyayı **yerinde (in-place)** değiştirir | Toplu işlemler, orijinal dosyayı değiştirir |
| `magick composite` | İki görüntüyü birleştirir / üst üste koyar | Filigran (watermark), katman birleştirme |
| `magick identify` | Görüntü bilgilerini gösterir (boyut, format, renk derinliği) | Dosya analizi, betik otomasyon |
| `magick montage` | Birden fazla görüntüyü tek bir sayfada düzenler | Küçük resim sayfası (thumbnail sheet), sprite grid |
| `magick display` | Görüntüyü X11 ekranında gösterir | Hızlı önizleme (Linux) |
| `magick animate` | GIF/animasyon oynatır | Animasyon testi |
| `magick compare` | İki görüntüyü karşılaştırır | Fark analizi, regresyon testi |
| `magick conjure` | MSL (Magick Scripting Language) betiği çalıştırır | Karmaşık iş akışları |
| `magick stream` | Ham piksel verisi akışı çıktılar | Büyük dosya işleme, boru hattı |

### 1.4 Temel İşlemler ve Komut Örnekleri

#### 1.4.1 Boyutlandırma (Resize)

```bash
# Genişliği 800px yap, yüksekliği orantılı ayarla
magick input.png -resize 800x output.png

# Yüksekliği 600px yap, genişliği orantılı ayarla
magick input.png -resize x600 output.png

# Tam boyut belirle (en-boy oranı korunmaz, zorla sığdır)
magick input.png -resize 800x600! output.png

# Sadece küçült (büyükse küçült, küçükse dokunma)
magick input.png -resize 800x600\> output.png

# Sadece büyüt (küçükse büyüt, büyükse dokunma)
magick input.png -resize 800x600\< output.png

# Yüzdeyle boyutlandır (%50'ye küçült)
magick input.png -resize 50% output.png

# Piksel alanına göre boyutlandır (yaklaşık 250.000 piksel)
magick input.png -resize 250000@ output.png

# Oyun geliştirme: Sprite'ı 2x büyüt (nearest neighbor — piksel art korunur)
magick sprite.png -filter Point -resize 200% sprite_2x.png

# Oyun geliştirme: Retina/HiDPI için 2x asset oluştur
magick icon.png -resize 128x128 icon@2x.png
```

#### 1.4.2 Kırpma (Crop)

```bash
# 300x200 piksellik alan kırp, sol üst köşeden (0,0) başla
magick input.png -crop 300x200+0+0 output.png

# Merkezden 500x500 kırp
magick input.png -gravity Center -crop 500x500+0+0 output.png

# Sağ alt köşeden kırp (gravity kullanarak)
magick input.png -gravity SouthEast -crop 200x200+0+0 output.png

# Otomatik trim (şeffaf/boş alanları kaldır — sprite sheet optimizasyonu)
magick sprite.png -trim +repage sprite_trimmed.png

# Fuzz ile trim (yakın renkleri de kırp, %10 tolerans)
magick input.png -fuzz 10% -trim +repage output.png

# Görüntüyü eşit parçalara böl (sprite sheet'ten sprite çıkarma)
magick spritesheet.png -crop 64x64 +repage sprite_%03d.png
# Bu komut 64x64'lük parçalara böler: sprite_000.png, sprite_001.png, ...
```

#### 1.4.3 Döndürme (Rotate)

```bash
# Saat yönünde 90 derece döndür
magick input.png -rotate 90 output.png

# Saat yönünün tersine 90 derece
magick input.png -rotate -90 output.png

# 180 derece döndür
magick input.png -rotate 180 output.png

# 45 derece döndür (arka plan beyaz)
magick input.png -background white -rotate 45 output.png

# 45 derece döndür (arka plan şeffaf)
magick input.png -background none -rotate 45 output.png

# Otomatik EXIF rotasy onu düzelt
magick input.jpg -auto-orient output.jpg
```

#### 1.4.4 Renk İşlemleri

```bash
# Gri tonlamaya çevir
magick input.png -colorspace Gray output.png

# Sepya tonu
magick input.png -sepia-tone 80% output.png

# Renk kanallarını ayır
magick input.png -separate channel_%d.png

# Renk alanı dönüşümü (sRGB → CMYK)
magick input.png -colorspace CMYK output.tiff

# sRGB → Linear RGB (oyun motorları için doğrusal renk)
magick input.png -colorspace RGB output.png

# Renk derinliğini değiştir (16-bit → 8-bit)
magick input.png -depth 8 output.png

# Negatif (renkleri ters çevir)
magick input.png -negate output.png

# Parlaklık/kontrast ayarı (-brightness-contrast "parlaklık"x"kontrast")
magick input.png -brightness-contrast 10x20 output.png

# Renk sayısını azalt (posterize efekti — pixel art pipeline)
magick input.png -colors 16 output.png

# Renk sayısını düşür + dithering (retro oyun görünümü)
magick input.png -colors 16 -dither FloydSteinberg output.png

# Palette dönüşüm (indeksli renk — GBA/NES tarzı)
magick input.png -colors 4 -type Palette output.png
```

#### 1.4.5 Format Dönüşümü

```bash
# PNG → JPEG (kalite %90)
magick input.png -quality 90 output.jpg

# JPEG → PNG
magick input.jpg output.png

# PNG → WebP
magick input.png output.webp

# PSD → PNG (Photoshop'tan dönüştür)
magick input.psd[0] output.png   # [0] = birleştirilmiş katman

# SVG → PNG (belirli boyutta rasterize et)
magick -density 300 input.svg output.png

# PDF → PNG (sayfa sayfa)
magick -density 300 input.pdf page_%03d.png

# ICO dosyası oluştur (oyun/web favicon)
magick input.png -define icon:auto-resize=256,128,64,48,32,16 favicon.ico

# BMP → PNG (eski oyun asset'lerini dönüştür)
magick input.bmp output.png

# TGA → PNG (3D modelleme programlarından gelen texture)
magick input.tga output.png

# HDR/EXR → PNG (tone mapping ile)
magick input.exr -auto-level output.png
```

#### 1.4.6 Filigran (Watermark) ve Metin Ekleme

```bash
# Metin filigranı ekle
magick input.png \
  -gravity SouthEast \
  -fill "rgba(255,255,255,0.5)" \
  -pointsize 36 \
  -annotate +10+10 "© 2026 Ders Projesi" \
  output.png

# Görüntü filigranı (logo overlay)
magick input.png logo.png \
  -gravity SouthEast \
  -geometry +20+20 \
  -composite output.png

# Yarı saydam filigran
magick input.png \
  \( logo.png -alpha set -channel A -evaluate set 30% \) \
  -gravity Center \
  -composite output.png

# Başlık metni ekle (oyun splash screen)
magick input.png \
  -gravity North \
  -fill white -stroke black -strokewidth 2 \
  -font "Impact" -pointsize 72 \
  -annotate +0+50 "OYUN ADI" \
  output.png

# Çok satırlı metin
magick -size 800x200 xc:transparent \
  -fill white -font "Arial" -pointsize 24 \
  -gravity Center \
  -annotate +0+0 "Satır 1\nSatır 2\nSatır 3" \
  text_overlay.png
```

#### 1.4.7 Bulanıklaştırma, Keskinleştirme ve Kenar Algılama

```bash
# Gaussian bulanıklaştırma (blur)
magick input.png -blur 0x8 output.png

# Motion blur (hareket bulanıklığı — 45 derece, 20px)
magick input.png -motion-blur 0x20+45 output.png

# Keskinleştirme (sharpen)
magick input.png -sharpen 0x2 output.png

# Unsharp mask (profesyonel keskinleştirme)
magick input.png -unsharp 0x5+1.5+0.02 output.png

# Kenar algılama (Canny edge detection)
magick input.png -canny 0x1+10%+30% edges.png

# Kenar algılama (basit — oyun tarzı outline efekti)
magick input.png -edge 1 edges.png

# Emboss (kabartma efekti)
magick input.png -shade 135x45 output.png

# Charcoal (kömür kalem efekti)
magick input.png -charcoal 2 output.png

# Oil paint efekti
magick input.png -paint 4 output.png

# Sketch efekti (çizim tarzı)
magick input.png -sketch 0x20+135 output.png

# Pixelate efekti (pikselleştirme — retro oyun efekti)
magick input.png -scale 10% -scale 1000% output.png
```

#### 1.4.8 GIF Animasyon Oluşturma

```bash
# Karelerden GIF oluştur
magick -delay 10 -loop 0 frame_*.png animation.gif
# -delay 10 = her kare arası 10/100 saniye = 100ms
# -loop 0  = sonsuz döngü

# Belirli kare hızında GIF (24 FPS → delay = 100/24 ≈ 4)
magick -delay 4 -loop 0 frame_*.png animation_24fps.gif

# GIF'i optimize et (dosya boyutunu küçült)
magick animation.gif -layers Optimize optimized.gif

# GIF'ten kareleri çıkar
magick animation.gif frame_%03d.png

# Mevcut GIF'i yavaşlat (delay'i artır)
magick input.gif -delay 20 slow.gif

# Bounce efekti (ileri-geri döngü)
magick -delay 10 frame_*.png -delay 10 \( frame_*.png -reverse \) -loop 0 bounce.gif

# GIF boyutunu küçült
magick animation.gif -resize 50% -layers Optimize small.gif
```

#### 1.4.9 Küçük Resim (Thumbnail) ve Montaj

```bash
# Hızlı küçük resim oluştur (150x150, aspect ratio korunur)
magick input.png -thumbnail 150x150 thumb.png

# Kare thumbnail (crop + resize)
magick input.png -thumbnail 150x150^ -gravity Center -extent 150x150 thumb.png

# Montaj (birden fazla görüntüyü ızgara olarak birleştir)
magick montage *.png -geometry 128x128+4+4 -tile 4x4 montage.png
# 4x4 ızgara, her hücre 128x128, 4px boşluk

# Etiketli montaj
magick montage *.png -geometry 128x128+4+4 -tile 4x -label '%f' montage.png

# Sprite sheet inceleme montajı (her sprite'ı numaralı göster)
magick montage sprite_*.png -geometry 64x64+2+2 -tile 8x \
  -label '%[fx:t]' -pointsize 10 sprite_overview.png
```

#### 1.4.10 Sprite Sheet Oluşturma (Oyun Geliştirme)

```bash
# Tek satırlık sprite sheet (yatay — walk cycle)
magick walk_01.png walk_02.png walk_03.png walk_04.png \
  walk_05.png walk_06.png walk_07.png walk_08.png \
  +append spritesheet_walk.png

# Dikine sprite sheet (dikey)
magick frame_*.png -append spritesheet_vertical.png

# NxM ızgara sprite sheet (4 sütun)
magick montage frame_*.png -geometry 64x64+0+0 -tile 4x -background none spritesheet.png

# Şeffaf arka planlı sprite sheet
magick montage frame_*.png -geometry 64x64+0+0 -tile 8x \
  -background none spritesheet.png

# Sprite sheet'ten tek sprite çıkar (2. satır, 3. sütun, her biri 64x64)
magick spritesheet.png -crop 64x64+128+64 +repage single_sprite.png
# +128 = 2*64 (3. sütun), +64 = 1*64 (2. satır, 0-indexed)
```

#### 1.4.11 Toplu İşleme (Batch Processing)

```bash
# Bir klasördeki tüm PNG'leri JPEG'e dönüştür
magick mogrify -format jpg -quality 85 *.png

# Tüm görüntüleri %50 küçült
magick mogrify -resize 50% *.png

# Tüm JPEG'lere filigran ekle
for file in *.jpg; do
  magick "$file" \
    -gravity SouthEast \
    -fill "rgba(255,255,255,0.4)" \
    -pointsize 24 -annotate +10+10 "TASLAK" \
    "watermarked_$file"
done

# Tüm görüntüleri gri tonlamaya çevir ve yeniden boyutlandır
magick mogrify -colorspace Gray -resize 512x512 assets/*.png

# Farklı çözünürlüklerde asset seti oluştur (oyun geliştirme)
for file in icons/*.png; do
  base=$(basename "$file" .png)
  magick "$file" -resize 16x16   "output/${base}_16.png"
  magick "$file" -resize 32x32   "output/${base}_32.png"
  magick "$file" -resize 64x64   "output/${base}_64.png"
  magick "$file" -resize 128x128 "output/${base}_128.png"
  magick "$file" -resize 256x256 "output/${base}_256.png"
done
```

#### 1.4.12 Gelişmiş İşlemler

```bash
# Alpha kanalı (şeffaflık) işlemleri
# Belirli rengi şeffaf yap (yeşil ekran kaldırma)
magick input.png -fuzz 20% -transparent "#00FF00" output.png

# Alfa kanalı ekle
magick input.jpg -alpha set output.png

# Görüntü bilgisi al (identify)
magick identify input.png
# Çıktı: input.png PNG 1920x1080 1920x1080+0+0 8-bit sRGB 2.5MB

# Detaylı bilgi
magick identify -verbose input.png

# Sadece boyut bilgisi
magick identify -format "%wx%h" input.png

# Histogram (renk dağılımı görüntüle)
magick input.png -define histogram:unique-colors=true histogram:histogram.png

# İki görüntüyü karşılaştır (fark haritası)
magick compare image_a.png image_b.png diff.png

# Normal map oluştur (basit — oyun geliştirme)
magick heightmap.png \
  \( -clone 0 -morphology Convolve Sobel:0 \) \
  \( -clone 0 -morphology Convolve Sobel:90 \) \
  -delete 0 \
  -background "rgb(128,128,255)" -combine \
  normalmap.png

# Distortion (lens efekti)
magick input.png -distort barrel "0.2 0.0 0.0" barrel.png

# Perspective dönüşüm (4 nokta)
magick input.png -distort Perspective \
  "0,0 50,10  800,0 750,20  0,600 30,580  800,600 770,590" output.png

# Tile pattern (texture tiling testi)
magick input.png -write mpr:tile +delete \
  -size 512x512 tile:mpr:tile tiled.png
```

### 1.5 ImageMagick Güvenlik Notu

ImageMagick'in `policy.xml` dosyası, güvenlik ayarlarını kontrol eder. Web sunucularında kullanırken özellikle dikkat edilmelidir:

```bash
# Policy dosyasının konumu
identify -list policy

# Güvenli kullanım için policy.xml'de kısıtlama:
# <policy domain="coder" rights="none" pattern="MVG" />
# <policy domain="coder" rights="none" pattern="URL" />
# <policy domain="coder" rights="none" pattern="HTTPS" />
```

---

## 2. FFmpeg

### 2.1 Genel Bakış

**FFmpeg**, 2000 yılında Fabrice Bellard tarafından başlatılmış, ses ve video işleme için fiilen standart olan açık kaynaklı araç setidir. Adı "Fast Forward MPEG" kısaltmasıdır. Neredeyse tüm ses/video formatlarını destekler. YouTube, Netflix, VLC ve sayısız başka uygulama altyapıda FFmpeg kullanır.

**Bileşenler:**

| Bileşen | Açıklama |
|---------|----------|
| `ffmpeg` | Ana dönüştürme/işleme aracı |
| `ffprobe` | Medya dosyası bilgisi sorgulama |
| `ffplay` | Basit medya oynatıcı |
| `libavcodec` | Codec kütüphanesi (H.264, H.265, VP9, AV1...) |
| `libavformat` | Format kütüphanesi (MP4, MKV, AVI, MOV...) |
| `libavfilter` | Filtre kütüphanesi (blur, overlay, scale...) |
| `libswscale` | Ölçekleme ve renk dönüşüm kütüphanesi |

### 2.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install ffmpeg

# macOS (Homebrew)
brew install ffmpeg

# Windows (Chocolatey)
choco install ffmpeg

# Windows (Scoop)
scoop install ffmpeg

# Sürüm doğrulama
ffmpeg -version

# Desteklenen codec'leri listele
ffmpeg -codecs

# Desteklenen formatları listele
ffmpeg -formats
```

### 2.3 Video → Kareler (Frame Extraction)

```bash
# Videodan tüm kareleri çıkar (PNG olarak)
ffmpeg -i video.mp4 frames/frame_%04d.png

# Belirli FPS'de kare çıkar (saniyede 1 kare)
ffmpeg -i video.mp4 -vf "fps=1" frames/frame_%04d.png

# Saniyede 10 kare çıkar
ffmpeg -i video.mp4 -vf "fps=10" frames/frame_%04d.png

# Sadece ilk 5 saniyeden kare çıkar
ffmpeg -i video.mp4 -t 5 -vf "fps=24" frames/frame_%04d.png

# Belirli zaman aralığından kare çıkar (10s-20s arası)
ffmpeg -i video.mp4 -ss 00:00:10 -to 00:00:20 -vf "fps=24" frames/frame_%04d.png

# Tek kare çıkar (5. saniyedeki kare)
ffmpeg -i video.mp4 -ss 00:00:05 -frames:v 1 screenshot.png

# Kare çıkar + boyut değiştir
ffmpeg -i video.mp4 -vf "fps=10,scale=320:-1" frames/frame_%04d.png
```

### 2.4 Kareler → Video / GIF

```bash
# PNG karelerden video oluştur (24 FPS)
ffmpeg -framerate 24 -i frame_%04d.png -c:v libx264 -pix_fmt yuv420p output.mp4

# Karelerden yüksek kalite video
ffmpeg -framerate 30 -i frame_%04d.png \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p output.mp4
# -crf 18 = neredeyse kayıpsız kalite (0=kayıpsız, 23=varsayılan, 51=en kötü)

# Karelerden GIF oluştur (paleta dayalı yüksek kalite)
ffmpeg -framerate 15 -i frame_%04d.png \
  -vf "fps=15,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  animation.gif

# Videodan doğrudan GIF
ffmpeg -i video.mp4 \
  -vf "fps=15,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  output.gif

# Karelerden WebM (VP9) — web uyumlu
ffmpeg -framerate 24 -i frame_%04d.png \
  -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm
```

### 2.5 Video Ölçekleme ve Kırpma

```bash
# Video boyutlandır (genişlik 1280, yükseklik orantılı)
ffmpeg -i input.mp4 -vf "scale=1280:-1" output.mp4

# Tam boyut (1920x1080)
ffmpeg -i input.mp4 -vf "scale=1920:1080" output.mp4

# Aspect ratio koruyarak pad (siyah kenarlık) ekle
ffmpeg -i input.mp4 -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" output.mp4

# Video kırp (merkezden 640x480)
ffmpeg -i input.mp4 -vf "crop=640:480" output.mp4

# Sol üst köşeden kırp
ffmpeg -i input.mp4 -vf "crop=640:480:0:0" output.mp4
```

### 2.6 Filtreler ve Efektler

```bash
# Bulanıklaştırma (Gaussian blur)
ffmpeg -i input.mp4 -vf "gblur=sigma=5" output.mp4

# Keskinleştirme
ffmpeg -i input.mp4 -vf "unsharp=5:5:1.0:5:5:0.0" output.mp4

# Gri tonlama
ffmpeg -i input.mp4 -vf "colorchannelmixer=.3:.4:.3:0:.3:.4:.3:0:.3:.4:.3" output.mp4

# Hız değiştir (2x hızlı)
ffmpeg -i input.mp4 -vf "setpts=0.5*PTS" fast.mp4

# Yavaşlat (0.5x)
ffmpeg -i input.mp4 -vf "setpts=2.0*PTS" slow.mp4

# Ters oynat (reverse)
ffmpeg -i input.mp4 -vf "reverse" reversed.mp4

# Döndür (90 derece saat yönünde)
ffmpeg -i input.mp4 -vf "transpose=1" rotated.mp4
# 0=90° ters + dikey flip, 1=90° saat yönü, 2=90° ters, 3=90° saat yönü + dikey flip

# Overlay (görüntü üzerine logo ekle)
ffmpeg -i video.mp4 -i logo.png \
  -filter_complex "overlay=W-w-10:H-h-10" output.mp4
# Sağ alt köşeye 10px boşlukla

# Yarı saydam overlay
ffmpeg -i video.mp4 -i watermark.png \
  -filter_complex "[1:v]colorchannelmixer=aa=0.3[wm];[0:v][wm]overlay=10:10" output.mp4

# Metin overlay
ffmpeg -i input.mp4 \
  -vf "drawtext=text='Bilgisayar Grafiği':fontsize=36:fontcolor=white:x=10:y=10" output.mp4

# Zamanlı metin (5-10 saniye arası göster)
ffmpeg -i input.mp4 \
  -vf "drawtext=text='Sahne 2':fontsize=48:fontcolor=white:enable='between(t,5,10)':x=(w-tw)/2:y=(h-th)/2" output.mp4

# Fade in/out efekti (ilk 2 saniye fade in, son 2 saniye fade out)
ffmpeg -i input.mp4 \
  -vf "fade=t=in:st=0:d=2,fade=t=out:st=8:d=2" output.mp4

# Vignette efekti
ffmpeg -i input.mp4 -vf "vignette=PI/4" output.mp4

# Kenar algılama (edge detection)
ffmpeg -i input.mp4 -vf "edgedetect=low=0.1:high=0.4" edges.mp4
```

### 2.7 Format Dönüşümü

```bash
# MP4 → AVI
ffmpeg -i input.mp4 output.avi

# MP4 → WebM (VP9)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm

# MOV → MP4
ffmpeg -i input.mov -c:v libx264 -c:a aac output.mp4

# Video → Sadece ses çıkar
ffmpeg -i video.mp4 -vn -c:a libmp3lame audio.mp3

# Video → Sesi kaldır (sessiz video)
ffmpeg -i input.mp4 -an output_nosound.mp4

# Videoyu H.265 (HEVC) ile sıkıştır (daha küçük dosya)
ffmpeg -i input.mp4 -c:v libx265 -crf 28 output_h265.mp4

# AV1 ile encode (en modern codec — küçük dosya, yavaş encode)
ffmpeg -i input.mp4 -c:v libaom-av1 -crf 30 output_av1.mp4
```

### 2.8 Timelapse (Hızlandırılmış Video)

```bash
# Fotoğraflardan timelapse video
ffmpeg -framerate 30 -pattern_type glob -i 'photos/*.jpg' \
  -c:v libx264 -pix_fmt yuv420p timelapse.mp4

# Videoyu 10x hızlandır (timelapse efekti)
ffmpeg -i input.mp4 -vf "setpts=0.1*PTS" -an timelapse.mp4

# Timelapse + boyutlandırma
ffmpeg -framerate 24 -i photo_%04d.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -pix_fmt yuv420p timelapse_hd.mp4
```

### 2.9 Dosya Bilgisi (ffprobe)

```bash
# Dosya bilgisi
ffprobe input.mp4

# JSON formatında detaylı bilgi
ffprobe -v quiet -print_format json -show_format -show_streams input.mp4

# Sadece süre
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp4

# Sadece çözünürlük
ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 input.mp4

# Toplam kare sayısı
ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames -of csv=p=0 input.mp4
```

---

## 3. ExifTool

### 3.1 Genel Bakış

**ExifTool**, Phil Harvey tarafından Perl ile yazılmış, görüntü/video/ses dosyalarının metadata (üstveri) bilgilerini okuyan ve yazan güçlü bir araçtır. EXIF, IPTC, XMP, JFIF, GeoTIFF, ICC, GPS ve daha birçok metadata formatını destekler.

**Neden önemli?**
- Dijital fotoğraf makineleri her çekimde yüzlerce metadata alanı kaydeder
- GPS konumu, kamera modeli, lens bilgisi, pozlama süreleri
- Telif hakkı bilgileri, oluşturulma tarihi
- Oyun geliştirmede asset yönetimi ve organizasyonu için metadata kullanılabilir

### 3.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt install libimage-exiftool-perl

# macOS (Homebrew)
brew install exiftool

# Windows (Chocolatey)
choco install exiftool

# Sürüm doğrulama
exiftool -ver
```

### 3.3 Metadata Okuma

```bash
# Tüm metadata bilgilerini göster
exiftool photo.jpg

# Sadece temel bilgiler
exiftool -s -s photo.jpg

# Belirli alanları göster
exiftool -ImageSize -Model -DateTimeOriginal -GPSPosition photo.jpg

# Sadece EXIF bilgileri
exiftool -EXIF:all photo.jpg

# GPS koordinatları
exiftool -GPSLatitude -GPSLongitude photo.jpg

# Kamera bilgileri
exiftool -Make -Model -LensModel -FocalLength -FNumber -ISO -ExposureTime photo.jpg

# Renk profili bilgisi
exiftool -ICC_Profile:all photo.jpg

# JSON formatında çıktı
exiftool -json photo.jpg

# CSV formatında birden fazla dosya
exiftool -csv *.jpg > metadata.csv

# Dosya formatı ve teknik bilgiler
exiftool -FileType -MIMEType -ImageWidth -ImageHeight -BitDepth -ColorSpace photo.png
```

### 3.4 Metadata Yazma ve Silme

```bash
# Telif hakkı ekle
exiftool -Copyright="© 2026 Bilgisayar Grafiği Dersi" photo.jpg

# GPS bilgisi ekle
exiftool -GPSLatitude=39.9334 -GPSLongitude=32.8597 -GPSLatitudeRef=N -GPSLongitudeRef=E photo.jpg

# Tüm metadata'yı sil (gizlilik için)
exiftool -all= photo.jpg

# GPS bilgisini sil (gizlilik)
exiftool -GPS:all= photo.jpg

# Tarih bilgisini güncelle
exiftool "-DateTimeOriginal=2026:03:18 14:30:00" photo.jpg

# Açıklama ekle
exiftool -Description="Oyun projesi için oluşturulan texture" texture.png

# Yazar bilgisi (toplu — bir klasördeki tüm dosyalara)
exiftool -Artist="Öğrenci Adı" -Copyright="CC BY-SA 4.0" *.png

# Bir dosyanın metadata'sını diğerine kopyala
exiftool -TagsFromFile source.jpg target.jpg

# Toplu metadata silme (bir klasördeki tüm dosyalardan)
exiftool -all= -overwrite_original *.jpg
# -overwrite_original: yedek dosya oluşturmaz

# IPTC anahtar kelimeler ekle
exiftool -Keywords="game asset" -Keywords="texture" -Keywords="sprite" asset.png
```

### 3.5 Toplu İşlemler ve Dosya Yeniden Adlandırma

```bash
# Dosyaları çekim tarihine göre yeniden adlandır
exiftool '-FileName<DateTimeOriginal' -d '%Y%m%d_%H%M%S.%%e' *.jpg

# Alt klasörleri dahil et (recursive)
exiftool -r -DateTimeOriginal *.jpg

# Kamera modeline göre klasörlere ayır
exiftool '-Directory<Model' *.jpg

# Tarihe göre klasörlere ayır (YYYY/MM/DD)
exiftool '-Directory<DateTimeOriginal' -d '%Y/%m/%d' *.jpg

# Tüm PNG asset'lerine proje bilgisi ekle
exiftool -r -overwrite_original \
  -XMP:Creator="Oyun Projesi Takımı" \
  -XMP:Rights="Proje İçi Kullanım" \
  assets/
```

---

## 4. Görüntü Optimizasyon Araçları

### 4.1 Genel Bakış — Kayıpsız vs Kayıplı Sıkıştırma

| Özellik | Kayıpsız (Lossless) | Kayıplı (Lossy) |
|---------|---------------------|------------------|
| Kalite kaybı | Yok | Var (kontrol edilebilir) |
| Sıkıştırma oranı | Düşük-orta (%10-40) | Yüksek (%50-90) |
| Kullanım | Oyun asset'leri, pixel art | Web, mobil, önizleme |
| Araçlar | OptiPNG, oxipng, jpegoptim (kayıpsız mod) | pngquant, jpegoptim (kayıplı), mozjpeg |
| Geri dönüş | Orijinal piksel verisi korunur | Orijinal veri kaybolur |

### 4.2 OptiPNG

**OptiPNG**, PNG dosyalarını kayıpsız olarak optimize eder. PNG'nin dahili sıkıştırma parametrelerini (zlib seviyesi, filtre stratejisi, renk tipi) deneyerek en küçük dosya boyutunu bulur.

```bash
# Kurulum
sudo apt install optipng     # Ubuntu
brew install optipng          # macOS

# Temel kullanım (dosyayı yerinde optimize et)
optipng input.png

# Optimizasyon seviyesi belirle (0-7, varsayılan 2)
optipng -o7 input.png         # En yüksek sıkıştırma (en yavaş)
optipng -o2 input.png         # Orta seviye (hızlı ve etkili)

# Yedek oluştur
optipng -backup input.png

# Toplu optimizasyon
optipng -o5 sprites/*.png

# Simülasyon (değiştirmeden boyut karşılaştırması göster)
optipng -simulate input.png

# Birden fazla dosya (recursive)
find assets/ -name "*.png" -exec optipng -o5 {} \;
```

### 4.3 pngquant

**pngquant** kayıplı PNG sıkıştırma aracıdır. 24-bit/32-bit PNG'yi 8-bit (256 renk) palettli PNG'ye dönüştürür. Dosya boyutunu %60-80 oranında küçültebilir. Görsel kayıp genellikle gözle fark edilemez.

```bash
# Kurulum
sudo apt install pngquant     # Ubuntu
brew install pngquant          # macOS

# Temel kullanım (256 renk, kalite otomatik)
pngquant input.png
# Çıktı: input-fs8.png

# Renk sayısı belirle
pngquant 64 input.png         # 64 renk

# Kalite aralığı belirle (min-max, 0-100)
pngquant --quality=65-80 input.png

# Çıktı dosyası belirle
pngquant input.png -o output.png

# Yerinde değiştir (orijinalin üzerine yaz)
pngquant --ext .png --force input.png

# Toplu işlem
pngquant --quality=65-80 --ext .png --force sprites/*.png

# Stripe (interlace) kaldır + optimize et
pngquant --strip --quality=65-80 input.png

# Hız ayarı (1=en yavaş/en iyi, 11=en hızlı)
pngquant --speed 1 input.png
```

### 4.4 jpegoptim

**jpegoptim**, JPEG dosyalarını hem kayıpsız hem kayıplı olarak optimize eder.

```bash
# Kurulum
sudo apt install jpegoptim     # Ubuntu
brew install jpegoptim         # macOS

# Kayıpsız optimizasyon
jpegoptim input.jpg

# Kayıplı — maksimum kalite %80
jpegoptim -m80 input.jpg

# Hedef dosya boyutu (200KB'a sığdır)
jpegoptim --size=200k input.jpg

# Metadata sil + optimize et
jpegoptim --strip-all input.jpg

# EXIF koru, diğer metadata'yı sil
jpegoptim --strip-com --strip-iptc input.jpg

# Toplu (bir klasördeki tüm JPEG'ler)
jpegoptim -m85 --strip-all photos/*.jpg

# Progressive JPEG'e dönüştür
jpegoptim --all-progressive input.jpg
```

### 4.5 oxipng (Rust tabanlı OptiPNG alternatifi)

**oxipng**, Rust ile yazılmış modern bir PNG optimizer'dır. OptiPNG'den çok daha hızlıdır çünkü çoklu iş parçacığı (multi-threading) destekler.

```bash
# Kurulum
cargo install oxipng           # Rust/Cargo ile
brew install oxipng            # macOS

# Temel kullanım
oxipng input.png

# Maksimum sıkıştırma
oxipng -o max input.png

# Çoklu iş parçacığı (CPU üzerinden hız artışı)
oxipng -o 4 --threads 8 input.png

# Metadata sil
oxipng --strip all input.png

# Toplu (recursive)
oxipng -r -o 4 --strip all assets/

# Interlacing kaldır
oxipng --interlace 0 input.png
```

### 4.6 mozjpeg

**mozjpeg**, Mozilla'nın geliştirdiği, standart JPEG uyumlu ama çok daha verimli sıkıştırma yapan JPEG encoder'dır. Aynı görsel kalitede %5-15 daha küçük dosyalar üretir.

```bash
# Kurulum
sudo apt install mozjpeg       # Bazı dağıtımlarda
brew install mozjpeg           # macOS

# Kullanım (cjpeg — compress JPEG)
cjpeg -quality 80 input.ppm > output.jpg

# PNG → mozjpeg (ImageMagick ile pipe)
magick input.png ppm:- | cjpeg -quality 85 > output.jpg

# Mevcut JPEG'i yeniden sıkıştır
djpeg input.jpg | cjpeg -quality 80 > output.jpg

# Progressive JPEG
cjpeg -quality 85 -progressive input.ppm > output.jpg
```

---

## 5. Potrace

### 5.1 Genel Bakış

**Potrace** (Polygon Tracer), Peter Selinger tarafından geliştirilmiş, bitmap (raster) görüntüleri vektörel formatlara (SVG, EPS, PDF, DXF) dönüştüren bir komut satırı aracıdır. İkili (siyah-beyaz) görüntüler üzerinde çalışır. Logo, çizgi sanat (line art), siluet ve metin gibi görüntüleri vektöre çevirmede son derece başarılıdır.

**Oyun geliştirmedeki kullanımları:**
- El çizimi oyun karakteri taslağını vektöre dönüştürme
- Logo ve UI elemanları için SVG oluşturma
- Pixel art'dan temiz vektör grafikler çıkarma
- Procedural harita sınırları oluşturma

### 5.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt install potrace

# macOS (Homebrew)
brew install potrace

# Sürüm doğrulama
potrace --version
```

### 5.3 Kullanım Örnekleri

```bash
# BMP → SVG (en temel kullanım)
potrace input.bmp -s -o output.svg

# PBM formatından SVG'ye (PBM = Portable Bitmap, siyah-beyaz)
potrace input.pbm -s -o output.svg

# PNG → SVG (önce ImageMagick ile dönüştür, Potrace BMP/PBM ister)
magick input.png -threshold 50% input.pbm
potrace input.pbm -s -o output.svg

# Eşik değerini (threshold) ayarla (0.0-1.0)
magick input.png -threshold 40% input.pbm
potrace input.pbm -s -o output.svg

# Farklı çıktı formatları
potrace input.pbm -e -o output.eps    # EPS (Encapsulated PostScript)
potrace input.pbm -p -o output.pdf    # PDF
potrace input.pbm -g -o output.pgm    # PGM (gri tonlama bitmap)
potrace input.pbm -b dxf -o output.dxf # DXF (CAD formatı)

# Eğri düzgünlüğü ayarla (turnpolicy)
# majority: en yaygın piksel rengine dön
# minority: en az yaygın renge dön
# black/white: siyah/beyaz piksel yönünde dön
potrace input.pbm -s --turnpolicy majority -o output.svg

# Detay seviyesi (turdsize — minimum yol uzunluğu)
potrace input.pbm -s -t 5 -o output.svg
# -t 5: 5 piksel altı detayları yoksay (gürültü azaltma)

# Alpha optimize (köşe yumuşatma miktarı, 0-1.34)
potrace input.pbm -s -a 1.0 -o output.svg

# Ölçekleme
potrace input.pbm -s -W 800 -o output.svg    # Genişlik 800 birim

# Renkli SVG (arka plan ve ön plan rengi belirle)
potrace input.pbm -s --color "#FF0000" --fillcolor "#FFFFFF" -o output.svg

# Ters çevir (siyah/beyaz ters)
potrace input.pbm -s --invert -o output.svg

# Pipe ile tek satırda PNG → SVG
magick input.png -threshold 50% pbm:- | potrace -s -o output.svg

# Logo vektörizasyonu (yüksek kalite ayarlar)
magick logo.png -colorspace Gray -threshold 50% pbm:- | \
  potrace -s -a 1.2 -t 2 -o logo.svg

# Toplu dönüşüm (bir klasördeki tüm PNG'leri SVG yap)
for f in sketches/*.png; do
  base=$(basename "$f" .png)
  magick "$f" -threshold 50% pbm:- | potrace -s -o "vectors/${base}.svg"
done
```

### 5.4 mkbitmap (Potrace'in Yardımcı Aracı)

`mkbitmap`, Potrace ile birlikte gelir. Gri tonlamalı veya renkli görüntüleri Potrace için uygun yüksek kontrastlı bitmap'lere dönüştürür.

```bash
# Gri tonlama → yüksek kontrastlı bitmap
mkbitmap input.pgm -o prepared.pbm

# Ölçekleme + filtreleme
mkbitmap input.pgm -s 2 -f 4 -t 0.5 -o prepared.pbm
# -s 2: 2x büyüt
# -f 4: 4x highpass filtre (gürültü azaltma)
# -t 0.5: eşik değeri %50

# Pipe ile: renkli PNG → iyi hazırlanmış SVG
magick input.png -colorspace Gray pgm:- | mkbitmap -f 4 -t 0.45 - -o - | potrace -s -o output.svg
```

---

## 6. GIMP CLI

### 6.1 Genel Bakış

**GIMP** (GNU Image Manipulation Program), açık kaynaklı en güçlü görüntü düzenleme yazılımıdır. GUI arayüzüne ek olarak, komut satırından **Script-Fu** (Scheme tabanlı) ve **Python-Fu** (Python tabanlı) betikleriyle toplu işlem (batch processing) yapılabilir.

### 6.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt install gimp

# macOS (Homebrew Cask)
brew install --cask gimp

# GIMP'in Python-Fu desteğini kontrol et
gimp -i -b '(gimp-version)' -b '(gimp-quit 0)'
```

### 6.3 Script-Fu (Scheme) ile Toplu İşleme

```bash
# Bir görüntüyü GIMP ile boyutlandır ve kaydet (Script-Fu)
gimp -i -b '
  (let* (
    (image (car (gimp-file-load RUN-NONINTERACTIVE "input.png" "input.png")))
    (drawable (car (gimp-image-get-active-drawable image)))
  )
  (gimp-image-scale-full image 800 600 INTERPOLATION-CUBIC)
  (gimp-file-overwrite RUN-NONINTERACTIVE image drawable "output.png" "output.png")
  (gimp-image-delete image)
  )
' -b '(gimp-quit 0)'

# JPEG kalitesiyle dışa aktar
gimp -i -b '
  (let* (
    (image (car (gimp-file-load RUN-NONINTERACTIVE "input.png" "input.png")))
    (drawable (car (gimp-image-flatten image)))
  )
  (file-jpeg-save RUN-NONINTERACTIVE image drawable "output.jpg" "output.jpg" 0.85 0 0 0 "" 0 0 0 2)
  (gimp-image-delete image)
  )
' -b '(gimp-quit 0)'
```

### 6.4 Python-Fu ile Toplu İşleme

```bash
# Python-Fu betik dosyası oluştur (batch_resize.py)
cat > batch_resize.py << 'SCRIPT'
import glob, os
from gimpfu import *

def batch_resize(input_dir, output_dir, width, height):
    for filepath in glob.glob(os.path.join(input_dir, "*.png")):
        image = pdb.gimp_file_load(filepath, filepath)
        pdb.gimp_image_scale_full(image, width, height, INTERPOLATION_CUBIC)
        drawable = pdb.gimp_image_flatten(image)
        output_path = os.path.join(output_dir, os.path.basename(filepath))
        pdb.gimp_file_overwrite(image, drawable, output_path, output_path)
        pdb.gimp_image_delete(image)
SCRIPT

# Çalıştır
gimp -i -b '(python-fu-eval RUN-NONINTERACTIVE 0 "exec(open(\"batch_resize.py\").read()); batch_resize(\"input/\", \"output/\", 256, 256)")' -b '(gimp-quit 0)'
```

### 6.5 GIMP Komut Satırı Bayrakları

```bash
# Temel bayraklar
gimp -i                          # Arayüz olmadan (headless) çalıştır
gimp -b '<script>'               # Script-Fu betiği çalıştır
gimp -b - < script.scm           # Dosyadan betik oku
gimp --batch-interpreter python-fu-eval  # Python-Fu yorumlayıcı kullan
gimp -d                          # Veri dosyalarını yükleme (hızlı başlangıç)
gimp -f                          # Fontları yükleme (hızlı başlangıç)

# Hızlı headless çalışma için ideal kombinasyon:
gimp -i -d -f -b '<script>' -b '(gimp-quit 0)'
```

### 6.6 Yaygın GIMP Script-Fu İşlemleri

```bash
# Gaussian bulanıklaştırma
gimp -i -d -f -b '
  (let* (
    (image (car (gimp-file-load RUN-NONINTERACTIVE "input.png" "input.png")))
    (drawable (car (gimp-image-get-active-drawable image)))
  )
  (plug-in-gauss RUN-NONINTERACTIVE image drawable 10 10 0)
  (gimp-file-overwrite RUN-NONINTERACTIVE image drawable "blur.png" "blur.png")
  (gimp-image-delete image)
  )
' -b '(gimp-quit 0)'

# Gri tonlama dönüşüm
gimp -i -d -f -b '
  (let* (
    (image (car (gimp-file-load RUN-NONINTERACTIVE "input.png" "input.png")))
    (drawable (car (gimp-image-get-active-drawable image)))
  )
  (gimp-image-convert-grayscale image)
  (set! drawable (car (gimp-image-flatten image)))
  (gimp-file-overwrite RUN-NONINTERACTIVE image drawable "gray.png" "gray.png")
  (gimp-image-delete image)
  )
' -b '(gimp-quit 0)'

# Otomatik renk seviyeleri düzelt
gimp -i -d -f -b '
  (let* (
    (image (car (gimp-file-load RUN-NONINTERACTIVE "input.jpg" "input.jpg")))
    (drawable (car (gimp-image-get-active-drawable image)))
  )
  (gimp-curves-spline drawable HISTOGRAM-VALUE 10 #(0 0 64 60 128 135 192 210 255 255))
  (gimp-displays-flush)
  (set! drawable (car (gimp-image-flatten image)))
  (gimp-file-overwrite RUN-NONINTERACTIVE image drawable "enhanced.jpg" "enhanced.jpg")
  (gimp-image-delete image)
  )
' -b '(gimp-quit 0)'
```

---

## 7. Inkscape CLI

### 7.1 Genel Bakış

**Inkscape**, açık kaynaklı profesyonel vektör grafik editörüdür. SVG formatını birincil dosya formatı olarak kullanır. Komut satırı arayüzüyle SVG → PNG/PDF/EPS dönüşümleri ve toplu SVG işlemleri yapılabilir.

**Oyun geliştirmedeki kullanımları:**
- SVG asset'leri farklı çözünürlüklerde rasterize etme
- SVG'den oyun UI elemanları üretme
- Logo ve ikon setleri oluşturma
- Vektör animasyon karelerini dışa aktarma

### 7.2 Kurulum

```bash
# Ubuntu / Debian
sudo apt install inkscape

# macOS (Homebrew Cask)
brew install --cask inkscape

# Sürüm doğrulama
inkscape --version
```

### 7.3 Komut Örnekleri

```bash
# SVG → PNG (varsayılan DPI: 96)
inkscape input.svg -o output.png

# SVG → PNG (yüksek çözünürlük: 300 DPI)
inkscape input.svg -o output.png -d 300

# SVG → PNG (belirli boyut)
inkscape input.svg -o output.png -w 1024 -h 768

# SVG → PNG (sadece genişlik belirle, yükseklik orantılı)
inkscape input.svg -o output.png -w 512

# SVG → PDF
inkscape input.svg -o output.pdf

# SVG → EPS
inkscape input.svg -o output.eps

# SVG → EMF (Windows metafile)
inkscape input.svg -o output.emf

# PDF → SVG
inkscape input.pdf -o output.svg

# EPS → SVG
inkscape input.eps -o output.svg

# Belirli bir nesneyi (ID ile) dışa aktar
inkscape input.svg -o icon.png -i "icon_layer" -j
# -i: spesifik nesne ID'si
# -j: sadece o nesnenin sınırlarını kullan

# Sayfa yerine çizim sınırlarını kullan
inkscape input.svg -o output.png -D

# Arka plan rengi ayarla (şeffaf yerine beyaz)
inkscape input.svg -o output.png -b "#FFFFFF" -y 1.0

# Şeffaf arka plan (varsayılan)
inkscape input.svg -o output.png -y 0

# Toplu dönüşüm (bir klasördeki tüm SVG'leri PNG yap)
for f in icons/*.svg; do
  base=$(basename "$f" .svg)
  inkscape "$f" -o "png_icons/${base}.png" -w 128
done

# Farklı boyutlarda ikon seti oluştur (Android/iOS)
for size in 48 72 96 144 192; do
  inkscape icon.svg -o "icon_${size}.png" -w $size -h $size
done

# SVG düz metin olarak optimize et (metin → yol dönüşümü)
inkscape input.svg --export-text-to-path -o output.svg

# Inkscape shell modu (birden fazla işlem, tek başlatma)
inkscape --shell <<EOF
input1.svg -o output1.png -w 256
input2.svg -o output2.png -w 256
input3.svg -o output3.png -w 256
quit
EOF
```

### 7.4 Inkscape Actions (Inkscape 1.2+)

Inkscape 1.2'den itibaren `--actions` parametresiyle zincirleme işlemler yapılabilir:

```bash
# Dosya aç, seçimi düzenle, dışa aktar
inkscape --actions="file-open:input.svg; select-all; object-align:center page; export-filename:output.png; export-do" input.svg

# Birden fazla aksiyon
inkscape input.svg --actions="select-all; transform-scale:2; export-filename:scaled.svg; export-do"
```

---

## 8. GraphicsMagick

### 8.1 Genel Bakış

**GraphicsMagick**, 2002 yılında ImageMagick 5.5.2'den fork edilmiş bir projedir. "Swiss Army Knife of Image Processing" (Görüntü İşlemenin İsviçre Çakısı) sloganıyla bilinir. ImageMagick ile büyük ölçüde komut uyumluluğu vardır ama odak noktası **kararlılık, performans ve güvenilirlik**tir.

### 8.2 ImageMagick vs GraphicsMagick

| Özellik | ImageMagick | GraphicsMagick |
|---------|------------|----------------|
| Format desteği | 200+ | ~90 (daha az ama kararlı) |
| Performans | Orta-iyi | Genellikle daha hızlı (özellikle büyük dosyalarda) |
| Bellek kullanımı | Daha fazla | Daha az ve öngörülebilir |
| API kararlılığı | Sık değişir | Çok kararlı |
| Güncelleme sıklığı | Çok sık | Nadir ama kararlı |
| Topluluk | Daha büyük | Daha küçük ama sadık |
| Güvenlik | Tarihsel olarak daha fazla CVE | Daha az güvenlik açığı |
| Komut yapısı | `magick <komut>` veya `convert` | `gm <komut>` |
| OpenMP desteği | Var | Var (erken dönemde öncü) |
| Büyük kuruluşlarda kullanım | Yaygın | Flickr, Etsy (tarihsel) |

### 8.3 Kurulum ve Kullanım

```bash
# Ubuntu / Debian
sudo apt install graphicsmagick

# macOS (Homebrew)
brew install graphicsmagick

# Sürüm doğrulama
gm version

# Temel sözdizimi: gm <komut> [seçenekler] <dosyalar>
# ImageMagick'teki "convert" → "gm convert" olur

# Boyutlandırma
gm convert input.png -resize 800x600 output.png

# Format dönüşüm
gm convert input.png -quality 85 output.jpg

# Gri tonlama
gm convert input.png -colorspace GRAY output.png

# Toplu boyutlandırma
gm mogrify -resize 512x512 assets/*.png

# Küçük resim
gm convert input.png -thumbnail 150x150 thumb.png

# Montaj
gm montage *.png -geometry 128x128+4+4 -tile 4x4 montage.png

# Dosya bilgisi
gm identify input.png
gm identify -verbose input.png

# Karşılaştırma
gm compare image_a.png image_b.png -file diff.png

# Composite (filigran)
gm composite -gravity SouthEast logo.png input.png output.png

# Benchmark (performans testi)
gm benchmark convert input.png -resize 50% output.png
```

---

## 9. Modern CLI Araçları

### 9.1 Terminal Görüntü Görüntüleyiciler

#### chafa — Terminal Görüntü Görüntüleyici / ASCII Art

**chafa**, terminalde görüntüleri Unicode karakter blokları, semboller ve renklendirme kullanarak gösteren araçtır. Sixel, Kitty ve iTerm2 grafik protokollerini de destekler.

```bash
# Kurulum
sudo apt install chafa           # Ubuntu 22.04+
brew install chafa               # macOS
cargo install chafa-cli          # Rust (üçüncü taraf)

# Temel kullanım
chafa image.png

# Genişlik belirle (karakter cinsinden)
chafa image.png -s 80

# Sadece ASCII karakterler kullan
chafa image.png --symbols ascii

# Braille Unicode karakterleri
chafa image.png --symbols braille

# Sixel çıktı (destekleyen terminallerde)
chafa image.png --format sixel

# Kitty grafik protokolü
chafa image.png --format kitty

# GIF animasyon oynat
chafa animation.gif

# Renk modu (256 renk, 16 renk, mono)
chafa image.png --colors 256
chafa image.png --colors 16
chafa image.png --colors 2          # Siyah-beyaz

# Pipe ile kullan
curl -s "https://example.com/image.png" | chafa -

# Sprite sheet'i terminalde incele
chafa spritesheet.png -s 120
```

#### viu — Terminal Görüntü Görüntüleyici (Rust)

```bash
# Kurulum
cargo install viu                # Rust/Cargo
brew install viu                 # macOS
sudo snap install viu            # Ubuntu (snap)

# Temel kullanım
viu image.png

# Boyut belirle
viu image.png -w 60 -h 30

# Mutlak boyut
viu image.png -w 80

# Birden fazla görüntü
viu *.png

# Pipe
cat image.png | viu -
```

#### catimg — Terminalde Görüntü Göster

```bash
# Kurulum
sudo apt install catimg          # Ubuntu
brew install catimg              # macOS

# Temel kullanım
catimg image.png

# Genişlik belirle
catimg -w 100 image.png

# Yüksek çözünürlük modu
catimg -r 2 image.png
```

#### timg — Terminal Image and Video Viewer

```bash
# Kurulum
sudo apt install timg            # Ubuntu 22.04+
brew install timg                # macOS

# Temel kullanım
timg image.png

# Video oynat
timg video.mp4

# GIF animasyon
timg animation.gif

# Izgara düzeninde birden fazla görüntü
timg --grid=3 *.png

# Sixel çıktı
timg -p sixel image.png

# Boyut belirle
timg -g 80x40 image.png
```

### 9.2 pastel — CLI Renk Aracı

**pastel**, Rust ile yazılmış renk yönetimi CLI aracıdır. Renk paletleri oluşturmak, dönüşümler yapmak, renk analizi yapmak için kullanılır. Bilgisayar grafiği dersinde renk teorisi konusuyla doğrudan ilişkilidir.

```bash
# Kurulum
cargo install pastel             # Rust/Cargo
brew install pastel              # macOS
sudo snap install pastel         # Ubuntu (snap)

# Renk bilgisi göster (HEX girdi)
pastel color "#FF6B35"

# RGB, HSL, Lab, LCh gibi tüm renk alanlarında değerleri göster
pastel color "rgb(255,107,53)"
pastel color "hsl(20,100%,60%)"

# Renk paleti oluştur (tamamlayıcı — complementary)
pastel complement "#FF6B35"

# Analogous renkler (yakın renkler)
pastel colorcheck "#FF6B35" "#E8451E" "#FFB347"

# Renk karıştır
pastel mix "#FF0000" "#0000FF"            # Mor
pastel mix --fraction 0.3 red blue        # %30 kırmızı, %70 mavi

# Renk listesi oluştur (gradient)
pastel gradient -n 10 "#FF0000" "#0000FF"

# Renk açıklaştır/koyulaştır
pastel lighten 0.2 "#FF6B35"              # %20 açıklaştır
pastel darken 0.3 "#FF6B35"               # %30 koyulaştır

# Doygunluk (saturation) ayarla
pastel saturate 0.5 "#808080"
pastel desaturate 0.5 "#FF0000"

# Renk formatı dönüştür
pastel format hex "rgb(255,107,53)"       # → #FF6B35
pastel format rgb "#FF6B35"               # → rgb(255,107,53)
pastel format hsl "#FF6B35"               # → hsl(20,100%,60%)
pastel format lab "#FF6B35"               # → Lab değerleri

# Rastgele renk
pastel random

# n adet rastgele renk
pastel random -n 5

# Distinct (birbirinden belirgin) renkler
pastel distinct -n 8

# Renk setlerini sırala (parlaklığa göre)
pastel sort-by luminance "#FF0000" "#00FF00" "#0000FF" "#FFFF00"

# ANSI terminal rengi olarak göster
pastel paint "#FF6B35" "Bu metin turuncu arka planlı"

# Renk adını bul
pastel colorname "#FF6B35"
```

### 9.3 SVG Optimizasyon Araçları

#### svgo (SVG Optimizer — Node.js)

```bash
# Kurulum
npm install -g svgo

# Temel kullanım
svgo input.svg -o output.svg

# Klasör içeriğini optimize et
svgo -f input_folder/ -o output_folder/

# Yapılandırma dosyasıyla
cat > svgo.config.js << 'EOF'
module.exports = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIds',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
  ],
};
EOF
svgo input.svg -o output.svg --config svgo.config.js

# İstatistik göster
svgo input.svg -o output.svg --show-plugins

# Hassasiyet ayarı (ondalık basamak — daha az = daha küçük dosya)
svgo input.svg -o output.svg -p 1

# Toplu
svgo -f icons/ -o icons_optimized/
```

#### svgcleaner

```bash
# Kurulum (Rust tabanlı)
cargo install svgcleaner

# Temel kullanım
svgcleaner input.svg output.svg

# Agresif temizlik
svgcleaner input.svg output.svg \
  --remove-metadata=true \
  --remove-comments=true \
  --remove-unused-defs=true \
  --convert-shapes=true \
  --join-arcto-flags=true
```

### 9.4 Modern Görüntü Optimizasyon

#### squoosh-cli (Google)

```bash
# Kurulum
npm install -g @aspect-ratio/squoosh-cli
# veya npx ile doğrudan çalıştır
npx @aspect-ratio/squoosh-cli

# JPEG sıkıştır (MozJPEG codec)
npx @aspect-ratio/squoosh-cli --mozjpeg '{quality:80}' input.png

# WebP'ye dönüştür
npx @aspect-ratio/squoosh-cli --webp '{quality:80}' input.png

# AVIF'e dönüştür
npx @aspect-ratio/squoosh-cli --avif '{quality:50}' input.png

# Boyutlandır + dönüştür
npx @aspect-ratio/squoosh-cli --resize '{width:800}' --webp '{quality:80}' input.png
```

#### sharp-cli (Node.js — libvips tabanlı)

```bash
# Kurulum
npm install -g sharp-cli

# Boyutlandır
sharp resize 800 600 -i input.png -o output.png

# WebP'ye dönüştür
sharp -i input.png -o output.webp

# Toplu dönüşüm
sharp resize 512 512 --fit cover -i "assets/*.png" -o "resized/{name}.png"
```

### 9.5 gifski — Yüksek Kalite GIF Encoder

**gifski**, Rust ile yazılmış, pngquant'ın renk quantization algoritmasını kullanan en kaliteli GIF encoder'dır. ImageMagick'ten çok daha iyi renk geçişleri üretir.

```bash
# Kurulum
cargo install gifski             # Rust/Cargo
brew install gifski              # macOS
sudo apt install gifski          # Ubuntu (yeni sürümlerde)

# Karelerden GIF oluştur
gifski -o animation.gif frame_*.png

# FPS belirle
gifski --fps 24 -o animation.gif frame_*.png

# Genişlik belirle
gifski --width 480 --fps 15 -o small.gif frame_*.png

# Kalite belirle (1-100)
gifski --quality 90 --fps 20 -o high_quality.gif frame_*.png

# Karelerden + video'dan (ffmpeg ile birleşik kullanım)
ffmpeg -i video.mp4 -vf "fps=15,scale=480:-1" frames/frame_%04d.png
gifski --fps 15 --width 480 -o output.gif frames/frame_*.png
```

### 9.6 WebP Araçları (cwebp / dwebp)

**WebP**, Google tarafından geliştirilen modern görüntü formatıdır. JPEG'den %25-34, PNG'den %26 daha küçük dosyalar üretir.

```bash
# Kurulum
sudo apt install webp            # Ubuntu
brew install webp                # macOS

# PNG → WebP (kayıplı)
cwebp input.png -o output.webp

# Kalite belirle (0-100)
cwebp -q 80 input.png -o output.webp

# Kayıpsız WebP
cwebp -lossless input.png -o output.webp

# JPEG → WebP
cwebp -q 85 input.jpg -o output.webp

# WebP → PNG (decode)
dwebp input.webp -o output.png

# Alfa kanalı önizleme
cwebp -alpha_q 90 input.png -o output.webp

# Boyutlandır + dönüştür
cwebp -resize 800 0 -q 80 input.png -o output.webp

# Animasyonlu WebP oluştur
img2webp -d 100 frame_01.png frame_02.png frame_03.png -o animation.webp
# -d 100: her kare 100ms

# Toplu PNG → WebP
for f in images/*.png; do
  cwebp -q 80 "$f" -o "${f%.png}.webp"
done

# WebP bilgi
webpinfo input.webp

# Animasyonlu WebP'den kareleri çıkar
anim_dump input.webp
```

### 9.7 AVIF Araçları (avifenc / avifdec)

**AVIF** (AV1 Image File Format), AV1 video codec'ine dayanan yeni nesil görüntü formatıdır. WebP'den de daha iyi sıkıştırma sağlar.

```bash
# Kurulum
sudo apt install libavif-bin     # Ubuntu
brew install libavif             # macOS

# PNG → AVIF
avifenc input.png output.avif

# Kalite belirle (0-63, düşük = daha iyi kalite)
avifenc -q 30 input.png output.avif

# Hız ayarı (0=en yavaş/en iyi, 10=en hızlı)
avifenc --speed 4 -q 30 input.png output.avif

# AVIF → PNG
avifdec input.avif output.png

# Kayıpsız AVIF
avifenc --lossless input.png output.avif

# Toplu dönüşüm
for f in textures/*.png; do
  avifenc -q 35 --speed 6 "$f" "${f%.png}.avif"
done
```

### 9.8 Lottie Dönüşüm Araçları

**Lottie**, Airbnb tarafından geliştirilen, After Effects animasyonlarını JSON formatında temsil eden bir formattır. Oyun UI ve mobil animasyonlarda yaygındır.

```bash
# lottie-to-gif — Lottie → GIF
pip install lottie-to-gif
lottie_to_gif animation.json animation.gif

# lottie-to-png — Lottie → PNG kareleri
pip install lottie-to-png
lottie_to_png animation.json output_dir/

# puppeteer-lottie-cli — Daha gelişmiş seçenekler
npm install -g puppeteer-lottie-cli
puppeteer-lottie -i animation.json -o animation.gif
puppeteer-lottie -i animation.json -o animation.mp4

# Boyut ve FPS ayarla
puppeteer-lottie -i animation.json -o output.gif --width 512 --height 512 --fps 30
```

---

## 10. LLM Çağı CLI Araçları — Yapay Zeka Destekli

### 10.1 Genel Bakış

Yapay zeka (özellikle derin öğrenme) tabanlı görüntü işleme araçları, klasik algoritmik yaklaşımların yapamadığı işlemleri başarabilir: arka plan kaldırma, süper çözünürlük (super resolution), stil transferi, metin'den görüntü oluşturma. Bu araçların çoğu komut satırından kullanılabilir.

### 10.2 rembg — AI Arka Plan Kaldırma

**rembg**, U2-Net derin öğrenme modeli kullanarak görüntülerden arka planı otomatik kaldırır. Oyun geliştirmede karakter sprite'larının arka planını temizlemek için idealdir.

```bash
# Kurulum
pip install rembg[cli]

# Temel kullanım (arka planı kaldır)
rembg i input.jpg output.png

# Pipe ile kullan
cat input.jpg | rembg i > output.png

# Farklı model kullan (u2net, u2netp, u2net_human_seg, silueta, isnet-general-use)
rembg i -m u2net_human_seg input.jpg output.png    # İnsan segmentasyonu
rembg i -m isnet-general-use input.jpg output.png   # Genel amaçlı (en iyi)

# Alfa kenarları (alpha matting — daha yumuşak kenarlar)
rembg i -a input.jpg output.png

# Arka plan rengini değiştir (kaldırmak yerine)
rembg i -bg "#00FF00" input.jpg output.png          # Yeşil ekran

# Toplu İşlem (bir klasördeki tüm dosyalar)
rembg p input_folder/ output_folder/

# Belirli format
rembg i -of png input.jpg output.png

# GPU kullan (CUDA destekli)
# ONNX Runtime GPU sürümünü kurmak yeterli
pip install onnxruntime-gpu
rembg i input.jpg output.png
```

### 10.3 Real-ESRGAN — AI Görüntü Büyütme (Upscaling)

**Real-ESRGAN**, Tencent tarafından geliştirilen, düşük çözünürlüklü görüntüleri yüksek kalitede büyütebilen derin öğrenme modelidir. Oyun geliştirmede eski/düşük çözünürlüklü asset'leri modernleştirmek için kullanılır.

```bash
# Kurulum (önceden derlenmiş — portable)
# GitHub'dan indirme: https://github.com/xinntao/Real-ESRGAN
wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip
unzip realesrgan-ncnn-vulkan-*.zip -d realesrgan
chmod +x realesrgan/realesrgan-ncnn-vulkan

# Python versiyonu
pip install realesrgan

# 4x büyütme (varsayılan)
./realesrgan-ncnn-vulkan -i input.png -o output.png

# 2x büyütme (daha hızlı)
./realesrgan-ncnn-vulkan -i input.png -o output.png -s 2

# Farklı model kullan
# realesrgan-x4plus: genel amaçlı (varsayılan)
# realesrgan-x4plus-anime: anime/çizgi film tarzı
# realesr-animevideov3: anime video kareleri
./realesrgan-ncnn-vulkan -i input.png -o output.png -n realesrgan-x4plus-anime

# Toplu işleme
./realesrgan-ncnn-vulkan -i input_folder/ -o output_folder/ -s 4

# GPU belirleme
./realesrgan-ncnn-vulkan -i input.png -o output.png -g 0    # İlk GPU

# Python API ile (betik otomasyon)
python -c "
from realesrgan import RealESRGANer
from basicsr.archs.rrdbnet_arch import RRDBNet
import cv2

model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
upsampler = RealESRGANer(scale=4, model_path='RealESRGAN_x4plus.pth', model=model)
img = cv2.imread('input.png', cv2.IMREAD_UNCHANGED)
output, _ = upsampler.enhance(img, outscale=4)
cv2.imwrite('output.png', output)
"
```

### 10.4 waifu2x — Anime/Çizgi Film Büyütme

```bash
# waifu2x-ncnn-vulkan (GPU destekli, taşınabilir)
# GitHub: https://github.com/nihui/waifu2x-ncnn-vulkan
wget https://github.com/nihui/waifu2x-ncnn-vulkan/releases/latest/download/waifu2x-ncnn-vulkan-ubuntu.zip
unzip waifu2x-ncnn-vulkan-ubuntu.zip

# 2x büyütme + gürültü azaltma (noise reduction)
./waifu2x-ncnn-vulkan -i input.png -o output.png -s 2 -n 2
# -s: ölçek (1, 2, 4, 8, 16, 32)
# -n: gürültü azaltma seviyesi (-1=yok, 0, 1, 2, 3)

# Python alternatifi (waifu2x-caffe)
pip install waifu2x-chainer
waifu2x --scale 2 --noise_level 1 -i input.png -o output.png
```

### 10.5 Stable Diffusion CLI

```bash
# Python ile Stable Diffusion kurulumu
pip install diffusers transformers accelerate torch

# Temel metin'den görüntü (text-to-image) betiği
python -c "
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    'stabilityai/stable-diffusion-2-1',
    torch_dtype=torch.float16
)
pipe = pipe.to('cuda')

image = pipe('a cute game character, pixel art style, 2D platformer').images[0]
image.save('generated_character.png')
"

# img2img (mevcut görüntüyü referans alarak üret)
python -c "
from diffusers import StableDiffusionImg2ImgPipeline
from PIL import Image
import torch

pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    'stabilityai/stable-diffusion-2-1',
    torch_dtype=torch.float16
)
pipe = pipe.to('cuda')

init_image = Image.open('sketch.png').convert('RGB').resize((512, 512))
image = pipe(
    prompt='detailed game character, fantasy RPG style',
    image=init_image,
    strength=0.7,
    guidance_scale=7.5
).images[0]
image.save('refined_character.png')
"

# ComfyUI CLI (daha gelişmiş pipeline'lar)
# ComfyUI JSON workflow'larını CLI'dan çalıştırma
pip install comfyui-cli
comfyui-cli run workflow.json --output output/
```

### 10.6 Stil Transferi (Style Transfer)

```bash
# neural-style-transfer (PyTorch tabanlı)
pip install neural-style-transfer

# Temel kullanım
python -m neural_style \
  --content input.png \
  --style style_reference.png \
  --output stylized.png \
  --iterations 300

# fast-neural-style (önceden eğitilmiş modeller — anlık)
git clone https://github.com/pytorch/examples.git
cd examples/fast_neural_style

python neural_style/neural_style.py eval \
  --content-image input.png \
  --model saved_models/mosaic.pth \
  --output-image stylized.png \
  --cuda 1

# style_transfer CLI paketi
pip install style-transfer
style_transfer content.png style.png -o output.png
```

### 10.7 Diğer AI CLI Araçları

```bash
# --- GFPGAN (Yüz onarma / Face Restoration) ---
pip install gfpgan
python -c "
from gfpgan import GFPGANer
import cv2
restorer = GFPGANer(model_path='GFPGANv1.4.pth', upscale=2)
img = cv2.imread('blurry_face.png')
_, _, output = restorer.enhance(img, paste_back=True)
cv2.imwrite('restored_face.png', output)
"

# --- CodeFormer (Yüz onarma — daha yeni) ---
pip install codeformer-pip
codeformer -i blurry_face.png -o restored.png

# --- Instruct-pix2pix (metin ile görüntü düzenleme) ---
pip install diffusers
python -c "
from diffusers import StableDiffusionInstructPix2PixPipeline
from PIL import Image
import torch

pipe = StableDiffusionInstructPix2PixPipeline.from_pretrained(
    'timbrooks/instruct-pix2pix',
    torch_dtype=torch.float16
)
pipe = pipe.to('cuda')

image = Image.open('input.png').convert('RGB')
edited = pipe('make it look like a watercolor painting', image=image).images[0]
edited.save('watercolor.png')
"

# --- segment-anything (Meta SAM — otomatik segmentasyon) ---
pip install segment-anything
python -c "
from segment_anything import sam_model_registry, SamAutomaticMaskGenerator
import cv2

sam = sam_model_registry['vit_h'](checkpoint='sam_vit_h_4b8939.pth')
mask_generator = SamAutomaticMaskGenerator(sam)
image = cv2.imread('scene.png')
masks = mask_generator.generate(image)
print(f'{len(masks)} segment bulundu')
"

# --- depth-anything (derinlik haritası çıkarma) ---
pip install depth-anything
python -c "
from depth_anything.dpt import DepthAnything
import cv2, torch
model = DepthAnything.from_pretrained('LiheYoung/depth_anything_vitl14')
img = cv2.imread('scene.png')
depth = model.infer_image(img)
cv2.imwrite('depth_map.png', depth)
"
```

### 10.8 AI Araçları Karşılaştırma

| Araç | İşlev | GPU Gerektiriyor mu? | Model Boyutu | Hız |
|------|-------|---------------------|-------------|-----|
| **rembg** | Arka plan kaldırma | Hayır (CPU yeterli) | ~170 MB | Hızlı |
| **Real-ESRGAN** | Süper çözünürlük | Önerilir | ~65 MB | Orta |
| **waifu2x** | Anime büyütme | Önerilir | ~20 MB | Orta |
| **GFPGAN** | Yüz onarma | Evet | ~330 MB | Orta |
| **Stable Diffusion** | Görüntü üretme | Evet (>4GB VRAM) | ~4 GB | Yavaş |
| **SAM** | Segmentasyon | Evet | ~2.5 GB | Orta |
| **Depth Anything** | Derinlik haritası | Önerilir | ~350 MB | Hızlı |

---

## 11. Otomasyon ve Betik Yazımı

### 11.1 Bash ile Oyun Asset Pipeline'ı

Aşağıda, oyun geliştirme sürecinde sıklıkla ihtiyaç duyulan otomatik iş akışları (pipeline) için kapsamlı bash betik örnekleri verilmiştir.

#### 11.1.1 Sprite Sheet Oluşturma Pipeline'ı

```bash
#!/bin/bash
# sprite_pipeline.sh — Bireysel karelerden sprite sheet oluştur
# Kullanım: ./sprite_pipeline.sh <kareler_klasörü> <sprite_boyutu> <sütun_sayısı>

set -e  # Hata durumunda dur

FRAMES_DIR="${1:?Kullanım: $0 <kareler_klasörü> <sprite_boyutu> <sütun_sayısı>}"
SPRITE_SIZE="${2:-64}"
COLUMNS="${3:-8}"
OUTPUT_DIR="output"

mkdir -p "$OUTPUT_DIR"

echo "📁 Kareler klasörü: $FRAMES_DIR"
echo "📐 Sprite boyutu: ${SPRITE_SIZE}x${SPRITE_SIZE}"
echo "📊 Sütun sayısı: $COLUMNS"

# 1. Tüm kareleri aynı boyuta getir
echo "🔄 Kareler boyutlandırılıyor..."
for frame in "$FRAMES_DIR"/*.png; do
    base=$(basename "$frame")
    magick "$frame" \
        -resize "${SPRITE_SIZE}x${SPRITE_SIZE}" \
        -gravity Center \
        -background none \
        -extent "${SPRITE_SIZE}x${SPRITE_SIZE}" \
        "$OUTPUT_DIR/resized_$base"
done

# 2. Boş alanları kırp (trim) - opsiyonel
# magick mogrify -trim +repage "$OUTPUT_DIR"/resized_*.png

# 3. Sprite sheet oluştur
echo "🎨 Sprite sheet oluşturuluyor..."
magick montage "$OUTPUT_DIR"/resized_*.png \
    -geometry "${SPRITE_SIZE}x${SPRITE_SIZE}+0+0" \
    -tile "${COLUMNS}x" \
    -background none \
    "$OUTPUT_DIR/spritesheet.png"

# 4. Optimizasyonlar
echo "⚡ Optimize ediliyor..."
if command -v oxipng &> /dev/null; then
    oxipng -o 4 --strip all "$OUTPUT_DIR/spritesheet.png"
elif command -v optipng &> /dev/null; then
    optipng -o5 "$OUTPUT_DIR/spritesheet.png"
fi

# 5. JSON metadata oluştur (oyun motoru için)
FRAME_COUNT=$(ls "$OUTPUT_DIR"/resized_*.png 2>/dev/null | wc -l)
ROWS=$(( (FRAME_COUNT + COLUMNS - 1) / COLUMNS ))
SHEET_W=$((COLUMNS * SPRITE_SIZE))
SHEET_H=$((ROWS * SPRITE_SIZE))

cat > "$OUTPUT_DIR/spritesheet.json" << EOF
{
  "image": "spritesheet.png",
  "frameWidth": $SPRITE_SIZE,
  "frameHeight": $SPRITE_SIZE,
  "columns": $COLUMNS,
  "rows": $ROWS,
  "totalFrames": $FRAME_COUNT,
  "sheetWidth": $SHEET_W,
  "sheetHeight": $SHEET_H
}
EOF

echo "✅ Tamamlandı!"
echo "   Sprite sheet: $OUTPUT_DIR/spritesheet.png (${SHEET_W}x${SHEET_H})"
echo "   Metadata: $OUTPUT_DIR/spritesheet.json"
echo "   Toplam kare: $FRAME_COUNT"

# Geçici dosyaları temizle
rm -f "$OUTPUT_DIR"/resized_*.png
```

#### 11.1.2 Toplu Asset Dönüştürme Pipeline'ı

```bash
#!/bin/bash
# asset_converter.sh — Oyun asset'lerini farklı platformlar için hazırla
# Kullanım: ./asset_converter.sh <kaynak_klasör>

set -e

SOURCE_DIR="${1:?Kullanım: $0 <kaynak_klasör>}"

# Platform hedefleri
TARGETS=(
    "web:webp:80:1024"      # Platform:Format:Kalite:MaxBoyut
    "mobile:webp:70:512"
    "desktop:png:_:2048"
    "thumbnail:jpg:75:256"
)

for target in "${TARGETS[@]}"; do
    IFS=':' read -r platform format quality maxsize <<< "$target"
    OUTDIR="build/${platform}"
    mkdir -p "$OUTDIR"
    
    echo "🎯 Platform: $platform (${format}, kalite:${quality}, max:${maxsize}px)"
    
    for file in "$SOURCE_DIR"/*.png; do
        [ -f "$file" ] || continue
        base=$(basename "$file" .png)
        
        case $format in
            webp)
                magick "$file" \
                    -resize "${maxsize}x${maxsize}>" \
                    -quality "$quality" \
                    "$OUTDIR/${base}.webp"
                ;;
            png)
                magick "$file" \
                    -resize "${maxsize}x${maxsize}>" \
                    "$OUTDIR/${base}.png"
                if command -v oxipng &> /dev/null; then
                    oxipng -o 4 --strip all "$OUTDIR/${base}.png"
                fi
                ;;
            jpg)
                magick "$file" \
                    -resize "${maxsize}x${maxsize}>" \
                    -background white -flatten \
                    -quality "$quality" \
                    "$OUTDIR/${base}.jpg"
                ;;
        esac
    done
    
    # Klasör boyutunu göster
    SIZE=$(du -sh "$OUTDIR" | cut -f1)
    COUNT=$(ls "$OUTDIR" | wc -l)
    echo "   → $COUNT dosya, toplam $SIZE"
done

echo "✅ Tüm platformlar hazır!"
```

#### 11.1.3 Video → Sprite Sheet Pipeline'ı

```bash
#!/bin/bash
# video_to_spritesheet.sh — Videodan otomatik sprite sheet oluştur
# Kullanım: ./video_to_spritesheet.sh <video> <fps> <sprite_boyutu> <sütun>

set -e

VIDEO="${1:?Kullanım: $0 <video> <fps> <sprite_boyutu> <sütun>}"
FPS="${2:-12}"
SIZE="${3:-64}"
COLS="${4:-8}"
TEMP_DIR=$(mktemp -d)

echo "🎬 Video: $VIDEO"
echo "📐 FPS: $FPS, Boyut: ${SIZE}x${SIZE}, Sütun: $COLS"

# 1. Videodan kareleri çıkar
echo "📸 Kareler çıkarılıyor..."
ffmpeg -i "$VIDEO" -vf "fps=$FPS" "$TEMP_DIR/frame_%04d.png" -y -loglevel error

FRAME_COUNT=$(ls "$TEMP_DIR"/frame_*.png | wc -l)
echo "   $FRAME_COUNT kare çıkarıldı"

# 2. Arka planı kaldır (opsiyonel — rembg kuruluysa)
if command -v rembg &> /dev/null; then
    echo "🎭 Arka plan kaldırılıyor..."
    rembg p "$TEMP_DIR/" "$TEMP_DIR/nobg/"
    FRAMES_DIR="$TEMP_DIR/nobg"
else
    FRAMES_DIR="$TEMP_DIR"
fi

# 3. Boyutlandır ve sprite sheet oluştur
echo "🔧 Sprite sheet oluşturuluyor..."
magick montage "$FRAMES_DIR"/frame_*.png \
    -geometry "${SIZE}x${SIZE}+0+0" \
    -tile "${COLS}x" \
    -background none \
    -resize "${SIZE}x${SIZE}" \
    spritesheet_from_video.png

# 4. Optimize et
if command -v oxipng &> /dev/null; then
    oxipng -o 4 --strip all spritesheet_from_video.png
fi

echo "✅ Sprite sheet oluşturuldu: spritesheet_from_video.png"
echo "   Kareler: $FRAME_COUNT, Düzen: ${COLS}x$((($FRAME_COUNT + COLS - 1) / COLS))"

# Geçici dosyaları temizle
rm -rf "$TEMP_DIR"
```

#### 11.1.4 Texture Atlas Oluşturma

```bash
#!/bin/bash
# texture_atlas.sh — Birden fazla texture'ı tek atlas'a birleştir
# Oyun motorlarında draw call (çizim çağrısı) sayısını azaltmak için kullanılır

set -e

INPUT_DIR="${1:?Kullanım: $0 <texture_klasörü>}"
ATLAS_SIZE="${2:-2048}"
OUTPUT="atlas"

mkdir -p "$OUTPUT"

echo "🗺️ Texture Atlas oluşturuluyor..."
echo "   Kaynak: $INPUT_DIR"
echo "   Atlas boyutu: ${ATLAS_SIZE}x${ATLAS_SIZE}"

# Tüm texture'ları listele ve boyutlarını al
declare -A TEXTURES
for file in "$INPUT_DIR"/*.png; do
    [ -f "$file" ] || continue
    base=$(basename "$file" .png)
    dims=$(magick identify -format "%wx%h" "$file")
    TEXTURES["$base"]="$dims"
    echo "   📄 $base: $dims"
done

# Montaj ile basit atlas oluştur
magick montage "$INPUT_DIR"/*.png \
    -geometry +0+0 \
    -tile x1 \
    -background none \
    "$OUTPUT/atlas.png"

# Atlas haritası (JSON) oluştur
echo "{" > "$OUTPUT/atlas.json"
echo '  "frames": {' >> "$OUTPUT/atlas.json"

X_OFFSET=0
FIRST=true
for file in "$INPUT_DIR"/*.png; do
    [ -f "$file" ] || continue
    base=$(basename "$file" .png)
    W=$(magick identify -format "%w" "$file")
    H=$(magick identify -format "%h" "$file")
    
    if [ "$FIRST" = true ]; then
        FIRST=false
    else
        echo "," >> "$OUTPUT/atlas.json"
    fi
    
    printf '    "%s": {"x": %d, "y": 0, "w": %d, "h": %d}' "$base" "$X_OFFSET" "$W" "$H" >> "$OUTPUT/atlas.json"
    X_OFFSET=$((X_OFFSET + W))
done

echo "" >> "$OUTPUT/atlas.json"
echo "  }" >> "$OUTPUT/atlas.json"
echo "}" >> "$OUTPUT/atlas.json"

echo "✅ Atlas oluşturuldu:"
echo "   Görüntü: $OUTPUT/atlas.png"
echo "   Harita: $OUTPUT/atlas.json"
```

#### 11.1.5 Otomatik İkon Seti Oluşturma

```bash
#!/bin/bash
# icon_generator.sh — Tek bir kaynak görüntüden tüm platform ikonları oluştur

set -e

SOURCE="${1:?Kullanım: $0 <kaynak_görüntü.png>}"
OUTPUT_DIR="icons"

mkdir -p "$OUTPUT_DIR"/{android,ios,web,windows}

echo "🎨 İkon seti oluşturuluyor..."

# Android ikonları (mipmap)
ANDROID_SIZES=("48:mdpi" "72:hdpi" "96:xhdpi" "144:xxhdpi" "192:xxxhdpi")
for entry in "${ANDROID_SIZES[@]}"; do
    IFS=':' read -r size dpi <<< "$entry"
    magick "$SOURCE" -resize "${size}x${size}" "$OUTPUT_DIR/android/ic_launcher_${dpi}.png"
done

# iOS ikonları
IOS_SIZES=(20 29 40 58 60 76 80 87 120 152 167 180 1024)
for size in "${IOS_SIZES[@]}"; do
    magick "$SOURCE" -resize "${size}x${size}" "$OUTPUT_DIR/ios/icon_${size}.png"
done

# Web ikonları (favicon)
magick "$SOURCE" -resize 16x16   "$OUTPUT_DIR/web/favicon-16x16.png"
magick "$SOURCE" -resize 32x32   "$OUTPUT_DIR/web/favicon-32x32.png"
magick "$SOURCE" -resize 192x192 "$OUTPUT_DIR/web/android-chrome-192x192.png"
magick "$SOURCE" -resize 512x512 "$OUTPUT_DIR/web/android-chrome-512x512.png"
magick "$SOURCE" -resize 180x180 "$OUTPUT_DIR/web/apple-touch-icon.png"

# Favicon ICO (çoklu boyut)
magick "$SOURCE" -define icon:auto-resize=256,128,64,48,32,16 "$OUTPUT_DIR/web/favicon.ico"

# Windows (tiles)
magick "$SOURCE" -resize 70x70   "$OUTPUT_DIR/windows/SmallTile.png"
magick "$SOURCE" -resize 150x150 "$OUTPUT_DIR/windows/MediumTile.png"
magick "$SOURCE" -resize 310x150 "$OUTPUT_DIR/windows/WideTile.png"
magick "$SOURCE" -resize 310x310 "$OUTPUT_DIR/windows/LargeTile.png"

# Toplu optimize et
if command -v oxipng &> /dev/null; then
    find "$OUTPUT_DIR" -name "*.png" -exec oxipng -o 4 --strip all {} \;
fi

echo "✅ İkon seti oluşturuldu!"
find "$OUTPUT_DIR" -type f | wc -l
echo " dosya oluşturuldu."
ls -R "$OUTPUT_DIR"
```

### 11.2 Makefile ile Asset Pipeline

```makefile
# Makefile — Oyun asset pipeline'ı
# Kullanım: make all / make sprites / make textures / make clean

SHELL := /bin/bash
SPRITE_SIZE := 64
SPRITE_COLS := 8
WEB_QUALITY := 80
SOURCE_DIR := raw_assets
BUILD_DIR := build

# Kaynak dosyaları bul
RAW_SPRITES := $(wildcard $(SOURCE_DIR)/sprites/*.png)
RAW_TEXTURES := $(wildcard $(SOURCE_DIR)/textures/*.png)
RAW_BACKGROUNDS := $(wildcard $(SOURCE_DIR)/backgrounds/*.png)

# Hedef dosyalar
WEBP_TEXTURES := $(patsubst $(SOURCE_DIR)/textures/%.png,$(BUILD_DIR)/textures/%.webp,$(RAW_TEXTURES))
OPT_BACKGROUNDS := $(patsubst $(SOURCE_DIR)/backgrounds/%.png,$(BUILD_DIR)/backgrounds/%.png,$(RAW_BACKGROUNDS))

.PHONY: all sprites textures backgrounds clean

all: sprites textures backgrounds
	@echo "✅ Tüm asset'ler hazır!"

# Sprite sheet oluştur
sprites: $(BUILD_DIR)/sprites/spritesheet.png

$(BUILD_DIR)/sprites/spritesheet.png: $(RAW_SPRITES) | $(BUILD_DIR)/sprites
	magick montage $^ \
		-geometry $(SPRITE_SIZE)x$(SPRITE_SIZE)+0+0 \
		-tile $(SPRITE_COLS)x \
		-background none $@
	oxipng -o 4 --strip all $@ 2>/dev/null || optipng -o5 $@ 2>/dev/null || true

# Texture'ları WebP'ye dönüştür
textures: $(WEBP_TEXTURES)

$(BUILD_DIR)/textures/%.webp: $(SOURCE_DIR)/textures/%.png | $(BUILD_DIR)/textures
	cwebp -q $(WEB_QUALITY) $< -o $@

# Arka planları optimize et
backgrounds: $(OPT_BACKGROUNDS)

$(BUILD_DIR)/backgrounds/%.png: $(SOURCE_DIR)/backgrounds/%.png | $(BUILD_DIR)/backgrounds
	magick $< -resize 1920x1080\> $@
	oxipng -o 4 --strip all $@ 2>/dev/null || true

# Klasörleri oluştur
$(BUILD_DIR)/sprites $(BUILD_DIR)/textures $(BUILD_DIR)/backgrounds:
	mkdir -p $@

# Temizle
clean:
	rm -rf $(BUILD_DIR)

# Dosya boyut raporu
report:
	@echo "=== Asset Boyut Raporu ==="
	@du -sh $(BUILD_DIR)/*/ 2>/dev/null || echo "Henüz build yapılmamış"
	@echo "Toplam:"
	@du -sh $(BUILD_DIR)/ 2>/dev/null || echo "Henüz build yapılmamış"
```

### 11.3 Python ile Otomatik Pipeline

```python
#!/usr/bin/env python3
"""
asset_pipeline.py — Python ile kapsamlı asset pipeline
Gereksinimler: pip install Pillow
"""

import os
import json
import subprocess
from pathlib import Path
from PIL import Image

class AssetPipeline:
    def __init__(self, source_dir, build_dir="build"):
        self.source_dir = Path(source_dir)
        self.build_dir = Path(build_dir)
    
    def create_spritesheet(self, frames_dir, output_name, 
                           frame_size=64, columns=8):
        """Karelerden sprite sheet oluştur"""
        frames_path = self.source_dir / frames_dir
        frames = sorted(frames_path.glob("*.png"))
        
        if not frames:
            print(f"⚠️ {frames_path} klasöründe PNG bulunamadı")
            return
        
        rows = (len(frames) + columns - 1) // columns
        sheet_w = columns * frame_size
        sheet_h = rows * frame_size
        
        sheet = Image.new("RGBA", (sheet_w, sheet_h), (0, 0, 0, 0))
        
        metadata = {"frames": [], "frameWidth": frame_size, 
                     "frameHeight": frame_size, "columns": columns}
        
        for i, frame_path in enumerate(frames):
            img = Image.open(frame_path).convert("RGBA")
            img = img.resize((frame_size, frame_size), Image.NEAREST)
            
            col = i % columns
            row = i // columns
            x = col * frame_size
            y = row * frame_size
            
            sheet.paste(img, (x, y))
            metadata["frames"].append({
                "name": frame_path.stem,
                "x": x, "y": y,
                "w": frame_size, "h": frame_size
            })
        
        output_dir = self.build_dir / "sprites"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        sheet_path = output_dir / f"{output_name}.png"
        sheet.save(sheet_path, "PNG")
        
        json_path = output_dir / f"{output_name}.json"
        with open(json_path, "w") as f:
            json.dump(metadata, f, indent=2)
        
        print(f"✅ Sprite sheet: {sheet_path} ({sheet_w}x{sheet_h}, {len(frames)} kare)")
        return sheet_path
    
    def batch_convert(self, input_dir, output_format="webp", 
                      quality=80, max_size=None):
        """Toplu format dönüşümü"""
        src = self.source_dir / input_dir
        dst = self.build_dir / input_dir
        dst.mkdir(parents=True, exist_ok=True)
        
        count = 0
        for img_path in src.glob("*.png"):
            img = Image.open(img_path)
            
            if max_size:
                img.thumbnail((max_size, max_size), Image.LANCZOS)
            
            output_path = dst / f"{img_path.stem}.{output_format}"
            
            if output_format == "webp":
                img.save(output_path, "WEBP", quality=quality)
            elif output_format == "jpg":
                img = img.convert("RGB")
                img.save(output_path, "JPEG", quality=quality)
            else:
                img.save(output_path)
            
            count += 1
        
        print(f"✅ {count} dosya dönüştürüldü → {dst}/")
    
    def generate_icons(self, source_image, sizes=None):
        """Farklı boyutlarda ikon seti oluştur"""
        if sizes is None:
            sizes = [16, 32, 48, 64, 128, 256, 512]
        
        img = Image.open(self.source_dir / source_image)
        output_dir = self.build_dir / "icons"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for size in sizes:
            resized = img.resize((size, size), Image.LANCZOS)
            resized.save(output_dir / f"icon_{size}.png")
        
        print(f"✅ {len(sizes)} ikon oluşturuldu → {output_dir}/")
    
    def remove_backgrounds(self, input_dir):
        """AI ile arka plan kaldır (rembg gerekli)"""
        src = self.source_dir / input_dir
        dst = self.build_dir / f"{input_dir}_nobg"
        dst.mkdir(parents=True, exist_ok=True)
        
        subprocess.run(["rembg", "p", str(src), str(dst)], check=True)
        print(f"✅ Arka planlar kaldırıldı → {dst}/")


# Kullanım örneği
if __name__ == "__main__":
    pipeline = AssetPipeline("raw_assets")
    
    # Sprite sheet oluştur
    pipeline.create_spritesheet("walk_frames", "walk_cycle", 
                                 frame_size=64, columns=8)
    
    # Toplu WebP dönüşümü
    pipeline.batch_convert("textures", "webp", quality=80, max_size=1024)
    
    # İkon seti
    pipeline.generate_icons("logo.png")
```

---

## 12. Pratik Proje Fikirleri

### 12.1 Başlangıç Seviyesi Projeler

#### Proje 1: CLI Görüntü Galerisi Oluşturucu
**Araçlar:** ImageMagick, FFmpeg
**Açıklama:** Bir klasördeki fotoğraflardan otomatik küçük resim (thumbnail) sayfası oluşturun. Her fotoğraf için 150x150 küçük resim, başlık ve çerçeve ekleyin. Sonucu tek bir HTML sayfası ve montaj görüntüsü olarak sunun.

```bash
# Proje adımları:
# 1. Tüm fotoğrafları 150x150 küçük resim yap
magick mogrify -path thumbs/ -thumbnail 150x150^ -gravity Center -extent 150x150 photos/*.jpg
# 2. Montaj oluştur
magick montage thumbs/*.jpg -geometry 150x150+5+5 -tile 5x -title "Fotoğraf Galerisi" gallery.png
# 3. HTML galeri oluştur (bash ile)
```

#### Proje 2: Retro Pixel Art Filtre Pipeline'ı
**Araçlar:** ImageMagick
**Açıklama:** Normal fotoğrafları retro pixel art tarzına dönüştüren bir CLI pipeline yazın: küçült → sınırlı renk paleti → nearest neighbor ile büyüt → kenar ekle.

```bash
# Bir fotoğrafı retro oyun tarzına dönüştür
magick photo.jpg \
    -resize 64x64 \
    -colors 16 \
    -dither FloydSteinberg \
    -filter Point -resize 512x512 \
    retro_photo.png
```

#### Proje 3: Metadata Temizleyici ve Raporlayıcı
**Araçlar:** ExifTool
**Açıklama:** Bir klasördeki tüm fotoğrafların metadata'sını analiz edin: kamera modelleri, GPS konumları, çekim tarihleri. CSV raporu oluşturun. Gizlilik için GPS bilgisini temizleyin.

```bash
# Rapor oluştur
exiftool -csv -r -Make -Model -DateTimeOriginal -GPSPosition photos/ > report.csv
# GPS temizle
exiftool -GPS:all= -overwrite_original -r photos/
```

### 12.2 Orta Seviye Projeler

#### Proje 4: Animasyonlu GIF Kartpostal Oluşturucu
**Araçlar:** ImageMagick, FFmpeg, gifski
**Açıklama:** Farklı kaynaklardan (fotoğraf, metin, şekil) animasyonlu GIF kartpostallar oluşturun. Her kareye farklı efektler uygulayın (fade, slide, zoom).

```bash
# 1. Arka plan kareleri oluştur (renk geçişi)
for i in $(seq 0 29); do
    HUE=$((i * 12))
    magick -size 480x320 "xc:hsl($HUE,100%,50%)" frame_$i.png
done
# 2. Metin ekle
for i in $(seq 0 29); do
    OPACITY=$((i * 3 + 10))
    magick frame_$i.png \
        -gravity Center -fill "rgba(255,255,255,0.${OPACITY})" \
        -pointsize 48 -annotate +0+0 "Bilgisayar\nGrafiği" \
        frame_text_$i.png
done
# 3. GIF oluştur
gifski --fps 15 --width 480 -o postcard.gif frame_text_*.png
```

#### Proje 5: Otomatik Sprite Sheet Oluşturucu
**Araçlar:** ImageMagick, rembg (opsiyonel), Python
**Açıklama:** Bireysel karakter animasyon karelerinden otomatik sprite sheet ve metadata JSON oluşturan araç. Unity/Godot uyumlu çıktı.

#### Proje 6: Görüntü Format Karşılaştırma Raporu
**Araçlar:** ImageMagick, cwebp, avifenc, pngquant, mozjpeg
**Açıklama:** Aynı kaynak görüntüyü farklı formatlarda (PNG, JPEG, WebP, AVIF) ve kalite seviyelerinde kaydedin. Dosya boyutu, SSIM (yapısal benzerlik), PSNR metrikleriyle karşılaştırma raporu oluşturun.

```bash
#!/bin/bash
# format_comparison.sh
SOURCE="test_image.png"
echo "Format,Kalite,Boyut(KB),SSIM" > comparison.csv

for q in 30 50 70 85 95; do
    # JPEG
    magick "$SOURCE" -quality $q "test_q${q}.jpg"
    SIZE=$(stat -c%s "test_q${q}.jpg" 2>/dev/null || stat -f%z "test_q${q}.jpg")
    SIZE_KB=$((SIZE / 1024))
    echo "JPEG,$q,$SIZE_KB,-" >> comparison.csv
    
    # WebP
    cwebp -q $q "$SOURCE" -o "test_q${q}.webp" 2>/dev/null
    SIZE=$(stat -c%s "test_q${q}.webp" 2>/dev/null || stat -f%z "test_q${q}.webp")
    SIZE_KB=$((SIZE / 1024))
    echo "WebP,$q,$SIZE_KB,-" >> comparison.csv
    
    # AVIF
    avifenc -q $q --speed 6 "$SOURCE" "test_q${q}.avif" 2>/dev/null
    SIZE=$(stat -c%s "test_q${q}.avif" 2>/dev/null || stat -f%z "test_q${q}.avif")
    SIZE_KB=$((SIZE / 1024))
    echo "AVIF,$q,$SIZE_KB,-" >> comparison.csv
done

echo "Rapor: comparison.csv"
cat comparison.csv | column -t -s ','
```

### 12.3 İleri Seviye Projeler

#### Proje 7: AI-Powered Asset Pipeline
**Araçlar:** rembg, Real-ESRGAN, ImageMagick, FFmpeg
**Açıklama:** Düşük kaliteli/arka planlı referans görüntülerin → arka plan kaldırma → AI büyütme → sprite sheet haline getirme tam otomatik pipeline'ı. 

#### Proje 8: Procedural Texture Generator
**Araçlar:** ImageMagick, Python (Pillow/NumPy)
**Açıklama:** Komut satırından parametrik texture'lar oluşturun: Perlin noise, taş duvar, ahşap, metal, vb. Tile-able (döşenebilir) texture üretimi.

```bash
# ImageMagick ile basit noise texture
magick -size 256x256 xc: +noise Random noise.png

# Plasma (sıvı doku)
magick -size 256x256 plasma: plasma.png

# Plasma + renk haritası (lava texture)
magick -size 256x256 plasma: -colorspace Gray \
    -sigmoidal-contrast 10x50% \
    -fill "orange" -tint 100 \
    lava_texture.png

# Checkerboard pattern (satranç tahtası)
magick -size 256x256 pattern:checkerboard checkerboard.png

# Brick pattern (tuğla duvar)
magick -size 256x256 pattern:bricks bricks.png

# Hexagonal pattern
magick -size 256x256 pattern:hexagons hexagons.png

# Tileable noise (kenarlar uyumlu)
magick -size 256x256 xc: +noise Gaussian \
    -blur 0x2 \
    -virtual-pixel tile \
    -blur 0x5 \
    tileable_noise.png
```

#### Proje 9: Vektörizasyon Pipeline'ı
**Araçlar:** ImageMagick, Potrace, Inkscape, svgo
**Açıklama:** El çizimi (kağıt üzerinde) oyun karakteri taslağını → fotoğrafla → kontrastı artır → bitmap'e dönüştür → vektörize et → SVG temizle → farklı boyutlarda PNG dışa aktar.

```bash
#!/bin/bash
# sketch_to_vector.sh — El çiziminden vektör grafik
SOURCE="${1:?Kullanım: $0 <fotoğraf.jpg>}"
BASE=$(basename "$SOURCE" | sed 's/\.[^.]*$//')

echo "1️⃣ Kontrastı artır ve gri tonlamaya çevir..."
magick "$SOURCE" \
    -colorspace Gray \
    -auto-level \
    -contrast-stretch 5%x5% \
    -sharpen 0x2 \
    "${BASE}_enhanced.png"

echo "2️⃣ Bitmap'e dönüştür (eşikleme)..."
magick "${BASE}_enhanced.png" \
    -threshold 45% \
    "${BASE}.pbm"

echo "3️⃣ Vektörize et (Potrace)..."
potrace "${BASE}.pbm" -s -a 1.0 -t 3 -o "${BASE}.svg"

echo "4️⃣ SVG optimize et..."
if command -v svgo &> /dev/null; then
    svgo "${BASE}.svg" -o "${BASE}_optimized.svg"
    SVG_FILE="${BASE}_optimized.svg"
else
    SVG_FILE="${BASE}.svg"
fi

echo "5️⃣ Farklı boyutlarda PNG dışa aktar..."
for size in 64 128 256 512 1024; do
    if command -v inkscape &> /dev/null; then
        inkscape "$SVG_FILE" -o "${BASE}_${size}.png" -w $size
    else
        magick -density 300 "$SVG_FILE" -resize "${size}x${size}" "${BASE}_${size}.png"
    fi
done

echo "✅ Tamamlandı!"
echo "   SVG: $SVG_FILE"
ls -la "${BASE}"_*.png

# Geçici dosyaları temizle
rm -f "${BASE}_enhanced.png" "${BASE}.pbm"
```

#### Proje 10: Terminal Art Gallery
**Araçlar:** chafa, pastel, ImageMagick
**Açıklama:** Terminalde ASCII/Unicode art galerisi oluşturun. Renk paleti analizi, çerçeve efekti ve metin açıklaması ile sanat eserleri sunun.

```bash
#!/bin/bash
# terminal_gallery.sh — Terminalde görüntü galerisi

echo "═══════════════════════════════════════════"
echo "       🎨 Terminal Sanat Galerisi 🎨       "
echo "═══════════════════════════════════════════"
echo ""

for img in gallery/*.png; do
    base=$(basename "$img" .png)
    dims=$(magick identify -format "%wx%h" "$img")
    
    echo "┌─────────────────────────────────────────┐"
    printf "│ %-39s │\n" "$base ($dims)"
    echo "├─────────────────────────────────────────┤"
    
    # Terminal genişliğinde göster
    chafa "$img" -s 40x20 --symbols block
    
    echo "└─────────────────────────────────────────┘"
    echo ""
done

# Renk analizi
if command -v pastel &> /dev/null; then
    echo "🎨 Renk Paleti Analizi:"
    echo "─────────────────────────"
    pastel distinct -n 5
fi
```

#### Proje 11: Film Şeridi (Contact Sheet) Oluşturucu
**Araçlar:** FFmpeg, ImageMagick
**Açıklama:** Bir videodan otomatik film şeridi (contact sheet / thumbnail sheet) oluşturun.

```bash
#!/bin/bash
# contact_sheet.sh — Videodan film şeridi
VIDEO="${1:?Kullanım: $0 <video>}"
COLS=5
ROWS=4
THUMB_W=320
THUMB_H=180
TOTAL=$((COLS * ROWS))

# Video süresini al
DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$VIDEO")
INTERVAL=$(echo "$DURATION / $TOTAL" | bc -l)

TEMP_DIR=$(mktemp -d)

# Eşit aralıklı kareler çıkar
for i in $(seq 0 $((TOTAL - 1))); do
    TIME=$(echo "$i * $INTERVAL" | bc -l)
    ffmpeg -ss "$TIME" -i "$VIDEO" -frames:v 1 -q:v 2 \
        "$TEMP_DIR/frame_$(printf '%02d' $i).jpg" -y -loglevel error
done

# Zaman damgası ekle
for i in $(seq 0 $((TOTAL - 1))); do
    TIME=$(echo "$i * $INTERVAL" | bc -l)
    MINS=$(echo "$TIME / 60" | bc)
    SECS=$(echo "$TIME - $MINS * 60" | bc)
    TIMESTAMP=$(printf "%02d:%05.2f" "$MINS" "$SECS")
    
    magick "$TEMP_DIR/frame_$(printf '%02d' $i).jpg" \
        -resize "${THUMB_W}x${THUMB_H}!" \
        -gravity SouthEast \
        -fill "rgba(0,0,0,0.6)" -draw "rectangle $((THUMB_W-80)),${THUMB_H} ${THUMB_W},$((THUMB_H-20))" \
        -fill white -pointsize 14 -annotate +5+5 "$TIMESTAMP" \
        "$TEMP_DIR/thumb_$(printf '%02d' $i).jpg"
done

# Montaj
magick montage "$TEMP_DIR"/thumb_*.jpg \
    -geometry "${THUMB_W}x${THUMB_H}+2+2" \
    -tile "${COLS}x${ROWS}" \
    -title "$(basename "$VIDEO")" \
    contact_sheet.jpg

echo "✅ Film şeridi: contact_sheet.jpg"
rm -rf "$TEMP_DIR"
```

### 12.4 Proje Zorluk-Araç Matrisi

| Proje | Zorluk | Ana Araçlar | Süre (tahmini) | Dersin Hangi Konusuyla İlgili |
|-------|--------|-------------|----------------|-------------------------------|
| CLI Galeri | ⭐ Kolay | ImageMagick | 2-3 saat | Hafta 4: Dosya Formatları |
| Retro Pixel Art | ⭐ Kolay | ImageMagick | 2-3 saat | Hafta 7: 2D Grafik |
| Metadata Raporu | ⭐ Kolay | ExifTool | 1-2 saat | Hafta 4: Dosya Formatları |
| GIF Kartpostal | ⭐⭐ Orta | ImageMagick, gifski | 3-4 saat | Hafta 9: Animasyon |
| Sprite Sheet | ⭐⭐ Orta | ImageMagick, Python | 4-6 saat | Hafta 7: 2D Grafik |
| Format Karşılaştırma | ⭐⭐ Orta | Çoklu araç | 4-6 saat | Hafta 4: Dosya Formatları, Hafta 11: Optimizasyon |
| AI Asset Pipeline | ⭐⭐⭐ Zor | rembg, Real-ESRGAN | 6-8 saat | Hafta 10: İleri Teknikler |
| Procedural Texture | ⭐⭐⭐ Zor | ImageMagick, Python | 6-8 saat | Hafta 7-8: 2D/3D Grafik |
| Vektörizasyon | ⭐⭐ Orta | Potrace, Inkscape, svgo | 4-6 saat | Hafta 2: Raster/Vektör |
| Terminal Art Gallery | ⭐⭐ Orta | chafa, pastel | 3-4 saat | Hafta 1: Temel Grafikler, Hafta 3: Renk |
| Film Şeridi | ⭐⭐ Orta | FFmpeg, ImageMagick | 3-4 saat | Hafta 9: Animasyon |

---

## Ek: Hızlı Referans Kartı

### En Sık Kullanılan Komutlar

```bash
# === BOYUTLANDIRMA ===
magick in.png -resize 800x600 out.png          # Boyutlandır
magick in.png -resize 50% out.png              # Yüzde ile

# === FORMAT DÖNÜŞÜM ===
magick in.png out.jpg                           # PNG → JPEG
magick in.png out.webp                          # PNG → WebP
cwebp -q 80 in.png -o out.webp                # PNG → WebP (cwebp ile)
avifenc -q 30 in.png out.avif                  # PNG → AVIF

# === GRİ TONLAMA ===
magick in.png -colorspace Gray out.png

# === KIRPMA ===
magick in.png -crop 300x200+50+50 out.png      # Kırp (genişlik x yükseklik + x + y)
magick in.png -trim +repage out.png            # Otomatik kırp

# === GIF ===
magick -delay 10 -loop 0 frame_*.png anim.gif  # GIF oluştur
gifski --fps 24 -o hq.gif frame_*.png          # Yüksek kalite GIF

# === VIDEO ===
ffmpeg -i video.mp4 frame_%04d.png             # Video → kareler
ffmpeg -framerate 24 -i f_%04d.png -c:v libx264 -pix_fmt yuv420p out.mp4  # Kareler → video

# === SPRITE SHEET ===
magick montage *.png -geometry 64x64+0+0 -tile 8x -background none sheet.png

# === OPTİMİZASYON ===
oxipng -o 4 --strip all image.png              # PNG optimizasyon
pngquant --quality=65-80 image.png             # PNG kayıplı sıkıştır
jpegoptim -m85 --strip-all image.jpg           # JPEG optimizasyon

# === ARKA PLAN KALDIRMA ===
rembg i in.jpg out.png                         # AI arka plan kaldır

# === METADATA ===
exiftool photo.jpg                              # Metadata oku
exiftool -all= photo.jpg                       # Metadata sil

# === VEKTÖRIZASYON ===
magick in.png -threshold 50% pbm:- | potrace -s -o out.svg

# === SVG İŞLEMLERİ ===
inkscape in.svg -o out.png -w 512              # SVG → PNG
svgo in.svg -o out_opt.svg                     # SVG optimize

# === RENK ===
pastel color "#FF6B35"                         # Renk bilgisi
pastel gradient -n 10 "#FF0000" "#0000FF"      # Gradient oluştur
```

### Kurulum Komutları Özeti

```bash
# ===== Ubuntu / Debian =====
sudo apt install imagemagick ffmpeg libimage-exiftool-perl \
  optipng pngquant jpegoptim potrace gimp inkscape \
  graphicsmagick webp libavif-bin chafa timg catimg

# ===== macOS (Homebrew) =====
brew install imagemagick ffmpeg exiftool \
  optipng pngquant jpegoptim potrace graphicsmagick \
  webp libavif chafa viu pastel timg gifski oxipng
brew install --cask gimp inkscape

# ===== pip (Python) =====
pip install rembg[cli] realesrgan Pillow

# ===== cargo (Rust) =====
cargo install oxipng gifski pastel viu svgcleaner

# ===== npm (Node.js) =====
npm install -g svgo sharp-cli
```

---

> **Kaynaklar ve Daha Fazla Bilgi:**
> - ImageMagick Resmi Doküman: imagemagick.org
> - FFmpeg Resmi Doküman: ffmpeg.org
> - ExifTool Resmi Doküman: exiftool.org
> - Potrace: potrace.sourceforge.net
> - rembg GitHub: github.com/danielgatis/rembg
> - Real-ESRGAN GitHub: github.com/xinntao/Real-ESRGAN
> - gifski GitHub: github.com/ImageOptim/gifski
> - pastel GitHub: github.com/sharkdp/pastel
> - chafa GitHub: github.com/hpjansson/chafa

---

*Bu belge, Bilgisayar Grafiği dersi için hazırlanmıştır. 2026 Bahar Dönemi.*
