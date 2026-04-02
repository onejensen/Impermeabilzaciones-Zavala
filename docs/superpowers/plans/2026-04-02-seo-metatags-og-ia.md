# SEO Completo + Meta Tags OG + SEO para IA — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Meta tags perfectos, imagen OG 1200×630 para WhatsApp/iMessage, structured data JSON-LD, sitemap, robots.txt y llms.txt para SEO e IA.

**Architecture:** Sitio HTML estático puro. Sin build tools ni bundler. Todos los cambios son ediciones directas a ficheros HTML + creación de nuevos ficheros de texto + generación de imagen OG via Chrome headless (incluido en macOS). No se instala ninguna dependencia nueva.

**Tech Stack:** HTML, CSS, JSON-LD (schema.org), Chrome headless (`--screenshot`), `sips` (macOS built-in para conversión PNG→JPG)

---

## File Map

| Fichero | Acción |
|---|---|
| `robots.txt` | Crear |
| `sitemap.xml` | Crear |
| `llms.txt` | Crear |
| `assets/og-image-template.html` | Crear — página 1200×630 para capturar |
| `assets/og-image.jpg` | Crear — captura Chrome headless |
| `index.html` | Editar `<head>` — meta tags + JSON-LD |
| `blog/impermeabilizar-tejado-mallorca.html` | Editar `<head>` — meta tags + JSON-LD Article |
| `blog/precio-impermeabilizacion-terraza-palma.html` | Editar `<head>` — meta tags + JSON-LD Article |

---

## Task 0: .gitignore

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Crear .gitignore**

```
.DS_Store
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore"
```

---

## Task 1: robots.txt + sitemap.xml + llms.txt

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`
- Create: `llms.txt`

- [ ] **Step 1: Crear robots.txt**

Contenido exacto (sin línea en blanco al final):

```
User-agent: *
Allow: /

Sitemap: https://www.imperzavala.com/sitemap.xml
```

Guardar en la raíz del proyecto como `robots.txt`.

- [ ] **Step 2: Crear sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.imperzavala.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Guardar en la raíz del proyecto como `sitemap.xml`.

- [ ] **Step 3: Crear llms.txt**

```markdown
# Impermeabilizaciones Zavala

> Empresa de impermeabilización en Mallorca desde 2010. Especialistas en tejados, terrazas y fachadas. 100% local. Garantía escrita en cada trabajo. Presupuesto gratuito con visita en obra sin compromiso.

## Servicios
- Impermeabilización de tejados planos e inclinados
- Impermeabilización de terrazas y azoteas
- Impermeabilización de fachadas y muros
- Trabajos en sector industrial y hotelero

## Zona de trabajo
Mallorca completa: Palma, Alcúdia, Manacor, Llucmajor, Calvià y todos los municipios de la isla.

## Precios orientativos
- Tejados: 25–45 €/m²
- Terrazas: 35–60 €/m²
- Presupuesto gratuito siempre con visita en obra

## Garantía
Garantía escrita en cada trabajo. Entre 5 y 10 años según sistema aplicado.

## Contacto
- WhatsApp: +34 650 589 899
- Teléfono: +34 650 589 899
- Web: https://www.imperzavala.com

## Blog
- [¿Cuánto cuesta impermeabilizar un tejado en Mallorca?](https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html)
- [Precio impermeabilización terraza en Palma](https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html)
```

Guardar en la raíz del proyecto como `llms.txt`.

- [ ] **Step 4: Verificar los tres ficheros**

```bash
ls -la robots.txt sitemap.xml llms.txt
```

Resultado esperado: los tres ficheros aparecen con tamaño mayor que 0 bytes.

- [ ] **Step 5: Commit**

```bash
git add robots.txt sitemap.xml llms.txt
git commit -m "feat: add robots.txt, sitemap.xml and llms.txt"
```

---

## Task 2: OG Image — Template HTML 1200×630

**Files:**
- Create: `assets/og-image-template.html`

La imagen OG usará diseño split: foto real a la izquierda con overlay azul oscuro, datos de empresa en crema a la derecha.

- [ ] **Step 1: Crear assets/og-image-template.html**

Crear el fichero con este contenido exacto:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
    }
    .card {
      width: 1200px;
      height: 630px;
      display: flex;
    }
    .left {
      width: 48%;
      position: relative;
      overflow: hidden;
      background: #0f2440;
    }
    .left img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .left-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, rgba(15,36,64,0.35) 0%, rgba(27,58,92,0.7) 100%);
    }
    .right {
      width: 52%;
      background: #F5F0E8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 52px 48px;
    }
    .label {
      font-size: 11px;
      letter-spacing: 3px;
      color: #C9A84C;
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 14px;
    }
    .brand {
      font-size: 42px;
      font-weight: 700;
      color: #1B3A5C;
      line-height: 1.05;
      margin-bottom: 4px;
    }
    .location {
      font-size: 20px;
      font-weight: 300;
      color: #1B3A5C;
      opacity: 0.75;
      margin-bottom: 22px;
    }
    .divider {
      width: 36px;
      height: 2px;
      background: #C9A84C;
      margin-bottom: 22px;
    }
    .tagline {
      font-size: 15px;
      color: #444;
      line-height: 1.6;
      margin-bottom: 32px;
    }
    .cta {
      display: inline-block;
      background: #1B3A5C;
      color: #F5F0E8;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 13px 22px;
      margin-bottom: 28px;
    }
    .url {
      font-size: 12px;
      color: #C9A84C;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="left">
      <img src="../fotos_seleccion/photo_2026-03-24%2016.02.55.jpeg" alt="Trabajo de impermeabilización" />
      <div class="left-overlay"></div>
    </div>
    <div class="right">
      <div class="label">Impermeabilizaciones</div>
      <div class="brand">Zavala</div>
      <div class="location">Mallorca · Desde 2010</div>
      <div class="divider"></div>
      <div class="tagline">Sin filtraciones, garantizado.<br>Tejados · Terrazas · Fachadas</div>
      <div class="cta">Presupuesto gratis</div>
      <div class="url">imperzavala.com</div>
    </div>
  </div>
</body>
</html>
```

- [ ] **Step 2: Verificar que existe**

```bash
ls -la assets/og-image-template.html
```

---

## Task 3: OG Image — Captura con Chrome headless

**Files:**
- Create: `assets/og-image.jpg`

- [ ] **Step 1: Capturar la imagen con Chrome headless**

Ejecutar desde la raíz del proyecto:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --allow-file-access-from-files \
  --screenshot="$(pwd)/assets/og-image.png" \
  --window-size=1200,630 \
  --hide-scrollbars \
  "file://$(pwd)/assets/og-image-template.html"
```

Esperar ~3 segundos a que Chrome termine. El fichero `assets/og-image.png` debe aparecer.

- [ ] **Step 2: Convertir PNG → JPEG con sips (built-in macOS)**

```bash
sips -s format jpeg assets/og-image.png --out assets/og-image.jpg
```

- [ ] **Step 3: Verificar dimensiones**

```bash
sips -g pixelWidth -g pixelHeight assets/og-image.jpg
```

Resultado esperado:
```
pixelWidth: 1200
pixelHeight: 630
```

- [ ] **Step 4: Limpiar PNG temporal**

```bash
rm assets/og-image.png
```

- [ ] **Step 5: Verificar tamaño razonable del JPEG (>50KB)**

```bash
ls -lh assets/og-image.jpg
```

Si el fichero pesa menos de 10KB, algo ha ido mal en la captura (revisar que la foto existe en `fotos_seleccion/`).

- [ ] **Step 6: Commit**

```bash
git add assets/og-image-template.html assets/og-image.jpg
git commit -m "feat: add OG image 1200x630 for social sharing"
```

---

## Task 4: Meta tags perfectos — index.html

**Files:**
- Modify: `index.html` (bloque `<head>` desde línea 1 hasta el cierre `</head>`)

- [ ] **Step 1: Reemplazar el bloque de meta tags en index.html**

Localizar en `index.html` el bloque actual (líneas 4–11):

```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Impermeabilizaciones Zavala | Tejados, Terrazas y Fachadas en Mallorca</title>
  <meta name="description" content="Empresa local de impermeabilización en Mallorca. Tejados, terrazas y fachadas. Presupuesto gratuito con visita. Garantía escrita. Especialistas en industrial y hotelero." />
  <meta name="keywords" content="impermeabilización Mallorca, impermeabilizar tejado Mallorca, precio impermeabilización terraza Palma, empresa impermeabilización Mallorca, impermeabilizaciones Zavala" />
  <meta property="og:title" content="Impermeabilizaciones Zavala | Mallorca" />
  <meta property="og:description" content="Especialistas en impermeabilización de tejados, terrazas y fachadas en Mallorca. Presupuesto gratis, garantía escrita, 100% local." />
  <meta property="og:type" content="website" />
```

Reemplazarlo por:

```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Impermeabilizaciones Zavala | Tejados, Terrazas y Fachadas en Mallorca</title>
  <meta name="description" content="Empresa local de impermeabilización en Mallorca. Tejados, terrazas y fachadas. Presupuesto gratuito con visita. Garantía escrita. Especialistas en industrial y hotelero." />
  <meta name="keywords" content="impermeabilización Mallorca, impermeabilizar tejado Mallorca, precio impermeabilización terraza Palma, empresa impermeabilización Mallorca, impermeabilizaciones Zavala" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.imperzavala.com/" />
  <!-- Open Graph — WhatsApp, iMessage, Facebook, LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.imperzavala.com/" />
  <meta property="og:title" content="Impermeabilizaciones Zavala | Tejados, Terrazas y Fachadas en Mallorca" />
  <meta property="og:description" content="Empresa local mallorquina especializada en impermeabilización de tejados, terrazas y fachadas. Presupuesto gratis, garantía escrita, desde 2010." />
  <meta property="og:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Impermeabilizaciones Zavala — Tejados y terrazas en Mallorca sin filtraciones" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="Impermeabilizaciones Zavala" />
  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Impermeabilizaciones Zavala | Mallorca" />
  <meta name="twitter:description" content="Sin filtraciones, garantizado. Tejados, terrazas y fachadas en Mallorca. Empresa local desde 2010." />
  <meta name="twitter:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/assets/LogoZavala.png" />
  <link rel="apple-touch-icon" href="/assets/LogoZavala.png" />
```

- [ ] **Step 2: Verificar que el bloque está correcto**

```bash
grep -n "og:image\|canonical\|twitter:card\|favicon\|robots" index.html
```

Resultado esperado: líneas con `og:image`, `og:image:width`, `og:image:height`, `canonical`, `twitter:card`, `rel="icon"`.

---

## Task 5: Structured Data JSON-LD — index.html

**Files:**
- Modify: `index.html` (añadir `<script type="application/ld+json">` justo antes de `</head>`)

- [ ] **Step 1: Añadir JSON-LD antes de </head> en index.html**

Insertar el siguiente bloque justo antes de la etiqueta `</head>`:

```html
  <!-- Structured Data — Schema.org -->
  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.imperzavala.com/#business",
      "name": "Impermeabilizaciones Zavala",
      "description": "Empresa especializada en impermeabilización de tejados, terrazas y fachadas en Mallorca. Desde 2010. Garantía escrita en cada trabajo.",
      "url": "https://www.imperzavala.com",
      "telephone": "+34650589899",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palma de Mallorca",
        "addressRegion": "Illes Balears",
        "addressCountry": "ES"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Mallorca"
      },
      "foundingDate": "2010",
      "priceRange": "€€",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34650589899",
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      },
      "sameAs": ["https://www.instagram.com/imper_zavala"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta impermeabilizar un tejado en Mallorca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El precio varía entre 25€ y 45€/m² según el tipo de tejado y el material aplicado. Ofrecemos presupuesto gratuito con visita en obra sin compromiso."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué garantía ofrecéis en los trabajos de impermeabilización?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos garantía escrita en cada trabajo. El plazo varía según el sistema aplicado, habitualmente entre 5 y 10 años."
          }
        },
        {
          "@type": "Question",
          "name": "¿En qué zonas de Mallorca trabajáis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos en toda Mallorca: Palma, Alcúdia, Manacor, Llucmajor, Calvià y todos los municipios de la isla."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuándo es necesario impermeabilizar un tejado o terraza?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cuando aparecen manchas de humedad, goteras, burbujas en la pintura o fisuras. También se recomienda revisión preventiva tras más de 10 años sin mantenimiento."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Impermeabilización de tejados en Mallorca",
      "description": "Impermeabilización de tejados planos e inclinados en Mallorca. Sistemas líquidos, láminas bituminosas y poliuretano. Garantía escrita.",
      "provider": { "@id": "https://www.imperzavala.com/#business" },
      "areaServed": { "@type": "Place", "name": "Mallorca" },
      "serviceType": "Impermeabilización"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Impermeabilización de terrazas y azoteas en Mallorca",
      "description": "Impermeabilización de terrazas y azoteas en Mallorca. Soluciones definitivas para filtraciones. Presupuesto gratuito.",
      "provider": { "@id": "https://www.imperzavala.com/#business" },
      "areaServed": { "@type": "Place", "name": "Mallorca" },
      "serviceType": "Impermeabilización"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Impermeabilización de fachadas en Mallorca",
      "description": "Tratamiento impermeabilizante para fachadas y muros en Mallorca. Protección frente a humedad y filtraciones. Empresa local desde 2010.",
      "provider": { "@id": "https://www.imperzavala.com/#business" },
      "areaServed": { "@type": "Place", "name": "Mallorca" },
      "serviceType": "Impermeabilización"
    }
  ]
  </script>
```

- [ ] **Step 2: Verificar que el JSON-LD es válido**

```bash
python3 -c "
import json, sys
with open('index.html') as f:
    content = f.read()
start = content.index('<script type=\"application/ld+json\">') + len('<script type=\"application/ld+json\">')
end = content.index('</script>', start)
data = json.loads(content[start:end].strip())
print(f'JSON-LD válido: {len(data)} schemas encontrados')
for item in data:
    print(f'  - {item[\"@type\"]}')
"
```

Resultado esperado:
```
JSON-LD válido: 5 schemas encontrados
  - HomeAndConstructionBusiness
  - FAQPage
  - Service
  - Service
  - Service
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add complete meta tags, OG tags and JSON-LD structured data to index.html"
```

---

## Task 6: Meta tags + JSON-LD — blog/impermeabilizar-tejado-mallorca.html

**Files:**
- Modify: `blog/impermeabilizar-tejado-mallorca.html`

- [ ] **Step 1: Añadir meta tags al <head> del blog post 1**

Localizar en `blog/impermeabilizar-tejado-mallorca.html` la línea:
```html
  <meta name="description" content="Precio real de impermeabilizar un tejado en Mallorca: 25-45€/m². Factores, materiales y cómo elegir empresa. Guía completa actualizada 2025." />
```

Insertar inmediatamente DESPUÉS de esa línea:

```html
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html" />
  <link rel="icon" type="image/png" href="/assets/LogoZavala.png" />
  <link rel="apple-touch-icon" href="/assets/LogoZavala.png" />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html" />
  <meta property="og:title" content="¿Cuánto cuesta impermeabilizar un tejado en Mallorca? Guía 2025" />
  <meta property="og:description" content="Precio real de impermeabilizar un tejado en Mallorca: 25-45€/m². Factores, materiales y cómo elegir empresa. Guía completa actualizada 2025." />
  <meta property="og:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Impermeabilizaciones Zavala — Guía de precios para tejados en Mallorca" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="Impermeabilizaciones Zavala" />
  <meta property="article:published_time" content="2025-01-01T00:00:00+01:00" />
  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="¿Cuánto cuesta impermeabilizar un tejado en Mallorca? Guía 2025" />
  <meta name="twitter:description" content="Precio real: 25-45€/m². Factores, materiales y cómo elegir empresa. Guía completa 2025." />
  <meta name="twitter:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
```

- [ ] **Step 2: Añadir JSON-LD Article justo antes de </head> en el blog post 1**

Insertar antes de `</head>`:

```html
  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "¿Cuánto cuesta impermeabilizar un tejado en Mallorca? Guía 2025",
      "description": "Precio real de impermeabilizar un tejado en Mallorca: 25-45€/m². Factores, materiales y cómo elegir empresa. Guía completa actualizada 2025.",
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01",
      "author": {
        "@type": "Organization",
        "name": "Impermeabilizaciones Zavala",
        "url": "https://www.imperzavala.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Impermeabilizaciones Zavala",
        "url": "https://www.imperzavala.com"
      },
      "mainEntityOfPage": "https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html",
      "image": "https://www.imperzavala.com/assets/og-image.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.imperzavala.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.imperzavala.com/#blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "¿Cuánto cuesta impermeabilizar un tejado en Mallorca?",
          "item": "https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html"
        }
      ]
    }
  ]
  </script>
```

- [ ] **Step 3: Verificar JSON-LD válido**

```bash
python3 -c "
import json
with open('blog/impermeabilizar-tejado-mallorca.html') as f:
    content = f.read()
start = content.index('<script type=\"application/ld+json\">') + len('<script type=\"application/ld+json\">')
end = content.index('</script>', start)
data = json.loads(content[start:end].strip())
print(f'JSON-LD válido: {len(data)} schemas')
for item in data:
    print(f'  - {item[\"@type\"]}')
"
```

Resultado esperado:
```
JSON-LD válido: 2 schemas
  - Article
  - BreadcrumbList
```

- [ ] **Step 4: Verificar og:image en el blog post**

```bash
grep "og:image\|canonical\|twitter:card" blog/impermeabilizar-tejado-mallorca.html
```

Resultado esperado: líneas con `og:image`, `canonical`, `twitter:card`.

---

## Task 7: Meta tags + JSON-LD — blog/precio-impermeabilizacion-terraza-palma.html

**Files:**
- Modify: `blog/precio-impermeabilizacion-terraza-palma.html`

- [ ] **Step 1: Añadir meta tags al <head> del blog post 2**

Localizar en `blog/precio-impermeabilizacion-terraza-palma.html` la línea:
```html
  <meta name="description" content="Precio real de impermeabilizar una terraza en Palma de Mallorca: 35-60€/m². Errores comunes, tipos de sistemas y por qué lo más barato puede salirte caro." />
```

Insertar inmediatamente DESPUÉS de esa línea:

```html
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html" />
  <link rel="icon" type="image/png" href="/assets/LogoZavala.png" />
  <link rel="apple-touch-icon" href="/assets/LogoZavala.png" />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html" />
  <meta property="og:title" content="Precio impermeabilización terraza en Palma: guía honesta 2025" />
  <meta property="og:description" content="Precio real de impermeabilizar una terraza en Palma de Mallorca: 35-60€/m². Errores comunes, tipos de sistemas y por qué lo más barato puede salirte caro." />
  <meta property="og:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Impermeabilizaciones Zavala — Precios impermeabilización terraza Palma de Mallorca" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="Impermeabilizaciones Zavala" />
  <meta property="article:published_time" content="2025-01-01T00:00:00+01:00" />
  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Precio impermeabilización terraza en Palma: guía honesta 2025" />
  <meta name="twitter:description" content="Precio real: 35-60€/m². Errores comunes y por qué lo más barato puede salirte caro." />
  <meta name="twitter:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
```

- [ ] **Step 2: Añadir JSON-LD Article justo antes de </head> en el blog post 2**

Insertar antes de `</head>`:

```html
  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Precio impermeabilización terraza en Palma: guía honesta 2025",
      "description": "Precio real de impermeabilizar una terraza en Palma de Mallorca: 35-60€/m². Errores comunes, tipos de sistemas y por qué lo más barato puede salirte caro.",
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01",
      "author": {
        "@type": "Organization",
        "name": "Impermeabilizaciones Zavala",
        "url": "https://www.imperzavala.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Impermeabilizaciones Zavala",
        "url": "https://www.imperzavala.com"
      },
      "mainEntityOfPage": "https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html",
      "image": "https://www.imperzavala.com/assets/og-image.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.imperzavala.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.imperzavala.com/#blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Precio impermeabilización terraza en Palma",
          "item": "https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html"
        }
      ]
    }
  ]
  </script>
```

- [ ] **Step 3: Verificar JSON-LD válido**

```bash
python3 -c "
import json
with open('blog/precio-impermeabilizacion-terraza-palma.html') as f:
    content = f.read()
start = content.index('<script type=\"application/ld+json\">') + len('<script type=\"application/ld+json\">')
end = content.index('</script>', start)
data = json.loads(content[start:end].strip())
print(f'JSON-LD válido: {len(data)} schemas')
for item in data:
    print(f'  - {item[\"@type\"]}')
"
```

Resultado esperado:
```
JSON-LD válido: 2 schemas
  - Article
  - BreadcrumbList
```

- [ ] **Step 4: Commit final**

```bash
git add blog/impermeabilizar-tejado-mallorca.html blog/precio-impermeabilizacion-terraza-palma.html
git commit -m "feat: add meta tags and JSON-LD Article schema to both blog posts"
```

---

## Verificación final

Después de completar todas las tareas, ejecutar esta comprobación global:

```bash
echo "=== robots.txt ===" && head -3 robots.txt
echo "=== sitemap.xml ===" && grep "<loc>" sitemap.xml
echo "=== llms.txt ===" && head -5 llms.txt
echo "=== og-image ===" && sips -g pixelWidth -g pixelHeight assets/og-image.jpg
echo "=== index.html meta ===" && grep -c "og:\|twitter:\|canonical\|ld+json" index.html
echo "=== blog post 1 ===" && grep -c "og:\|twitter:\|canonical" blog/impermeabilizar-tejado-mallorca.html
echo "=== blog post 2 ===" && grep -c "og:\|twitter:\|canonical" blog/precio-impermeabilizacion-terraza-palma.html
```

Resultado esperado:
```
=== robots.txt ===
User-agent: *
Allow: /

=== sitemap.xml ===
    <loc>https://www.imperzavala.com/</loc>
    <loc>https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html</loc>
    <loc>https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html</loc>
=== llms.txt ===
# Impermeabilizaciones Zavala
...
=== og-image ===
pixelWidth: 1200
pixelHeight: 630
=== index.html meta ===
(número >= 15)
=== blog post 1 ===
(número >= 10)
=== blog post 2 ===
(número >= 10)
```
