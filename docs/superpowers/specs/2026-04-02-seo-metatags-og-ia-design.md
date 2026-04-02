# SEO Completo + Meta Tags + OG Images + SEO para IA — Diseño

**Fecha:** 2026-04-02  
**Proyecto:** Impermeabilizaciones Zavala — www.imperzavala.com  
**Alcance:** index.html, 2 blog posts, nuevos ficheros de assets y configuración

---

## Objetivo

Implementar meta tags perfectos, imagen OG para WhatsApp/iMessage/redes sociales, SEO técnico completo y optimización para IA (ChatGPT, Perplexity, Google AI Overviews).

---

## 1. Meta Tags

### index.html

Reemplazar el bloque `<head>` actual por el siguiente conjunto completo:

**Básicos (ya existen, se refinan):**
- `<title>` — sin cambios
- `<meta name="description">` — sin cambios
- `<meta name="keywords">` — sin cambios

**Nuevos:**
```html
<link rel="canonical" href="https://www.imperzavala.com/" />
<meta name="robots" content="index, follow" />
```

**Open Graph (WhatsApp, iMessage, Facebook, LinkedIn):**
```html
<meta property="og:title" content="Impermeabilizaciones Zavala | Tejados, Terrazas y Fachadas en Mallorca" />
<meta property="og:description" content="Empresa local mallorquina especializada en impermeabilización de tejados, terrazas y fachadas. Presupuesto gratis, garantía escrita, desde 2010." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.imperzavala.com/" />
<meta property="og:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Impermeabilizaciones Zavala — Tejados y terrazas en Mallorca sin filtraciones" />
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Impermeabilizaciones Zavala" />
```

**Twitter/X Card:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Impermeabilizaciones Zavala | Mallorca" />
<meta name="twitter:description" content="Sin filtraciones, garantizado. Tejados, terrazas y fachadas en Mallorca." />
<meta name="twitter:image" content="https://www.imperzavala.com/assets/og-image.jpg" />
```

**Favicon:**
```html
<link rel="icon" type="image/png" href="/assets/LogoZavala.png" />
<link rel="apple-touch-icon" href="/assets/LogoZavala.png" />
```

### Blog posts (ambos)

Añadir en cada `<head>`:
- `og:title` = título del artículo
- `og:description` = meta description ya existente
- `og:type` = `article`
- `og:url` = URL absoluta del artículo
- `og:image` = `https://www.imperzavala.com/assets/og-image.jpg` (compartida)
- `og:image:width/height/alt` — igual que en index
- `og:locale` = `es_ES`
- `og:site_name` = `Impermeabilizaciones Zavala`
- `article:published_time` = fecha estimada 2025-01-01
- `twitter:card/title/description/image`
- `<link rel="canonical">` con URL absoluta del artículo
- `<meta name="robots" content="index, follow">`
- `<link rel="icon">` y `<link rel="apple-touch-icon">`

---

## 2. OG Image (`assets/og-image.jpg`)

**Diseño: Split horizontal (foto izquierda / texto derecha)**

Proceso:
1. Crear `assets/og-image-template.html` — página HTML de 1200×630px exactos
2. Capturar con Chrome automation a 1200×630 → guardar como `assets/og-image.jpg`
3. El template HTML se conserva para regenerar la imagen si cambia el diseño

**Layout del template:**
- **Izquierda (48%)**: foto real de `fotos_seleccion/` (tejado/terraza), con overlay gradiente azul oscuro de derecha a izquierda
- **Derecha (52%)**: fondo crema `#F5F0E8`
  - Label superior: `IMPERMEABILIZACIONES` en `#C9A84C`, 9px, letter-spacing 3px
  - Título: `Zavala` bold `#1B3A5C` 32px + `· Mallorca` regular 18px
  - Línea dorada `#C9A84C` 30px de ancho
  - Texto: "Sin filtraciones, garantizado. / Tejados · Terrazas · Fachadas" 13px `#333`
  - Badge CTA: fondo `#1B3A5C`, texto `PRESUPUESTO GRATIS` crema, padding 10px
  - URL footer: `imperzavala.com` 11px `#C9A84C`
- Fuente: DM Sans (Google Fonts) o system sans-serif como fallback

**Favicon:**
`LogoZavala.png` ya es un PNG — los navegadores lo aceptan directamente como favicon e apple-touch-icon. No se necesita redimensionar ni herramientas externas.

```html
<link rel="icon" type="image/png" href="/assets/LogoZavala.png" />
<link rel="apple-touch-icon" href="/assets/LogoZavala.png" />
```

---

## 3. Structured Data JSON-LD (`index.html`)

Un único bloque `<script type="application/ld+json">` con array de schemas:

### 3a. LocalBusiness
```json
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
    "addressLocality": "Mallorca",
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
}
```

### 3b. FAQPage
4 preguntas/respuestas:
1. ¿Cuánto cuesta impermeabilizar un tejado en Mallorca? → "El precio varía entre 25€ y 45€/m² según el tipo de tejado y material. Ofrecemos presupuesto gratuito con visita en obra."
2. ¿Qué garantía ofrecéis? → "Garantía escrita en cada trabajo. El plazo varía según el sistema aplicado, habitualmente entre 5 y 10 años."
3. ¿Dónde trabajáis? → "Trabajamos en toda Mallorca: Palma, Alcúdia, Manacor, Llucmajor, Calvià y municipios cercanos."
4. ¿Cuándo es necesario impermeabilizar? → "Cuando aparecen manchas de humedad, goteras, burbujas en la pintura o tras más de 10 años sin mantenimiento del tejado o terraza."

### 3c. Service (×3)
Un schema `Service` para tejados, terrazas y fachadas, cada uno con `name`, `description`, `provider` (referencia al LocalBusiness), `areaServed`.

### Blog posts — Article schema
Cada blog post recibe su propio bloque JSON-LD con:
- `@type: Article`
- `headline`, `description`, `datePublished`, `dateModified`
- `author`: `{ "@type": "Organization", "name": "Impermeabilizaciones Zavala" }`
- `publisher`: misma organización
- `mainEntityOfPage`: URL del artículo
- `breadcrumb`: Home → Blog → Artículo

---

## 4. `sitemap.xml`

Fichero en raíz. Formato standard:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.imperzavala.com/</loc>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
    <changefreq>yearly</changefreq>
  </url>
</urlset>
```

---

## 5. `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://www.imperzavala.com/sitemap.xml
```

---

## 6. `llms.txt`

Fichero en raíz. Formato estándar llms.txt (llmstxt.org):

```markdown
# Impermeabilizaciones Zavala

> Empresa de impermeabilización en Mallorca desde 2010. Especialistas en tejados, terrazas y fachadas. 100% local. Garantía escrita en cada trabajo. Presupuesto gratuito con visita en obra.

## Servicios
- Impermeabilización de tejados (planos e inclinados)
- Impermeabilización de terrazas y azoteas
- Impermeabilización de fachadas y muros
- Trabajos en sector industrial y hotelero

## Zona de trabajo
Mallorca: Palma, Alcúdia, Manacor, Llucmajor, Calvià y toda la isla.

## Contacto
- WhatsApp: +34 650 589 899
- Teléfono: +34 650 589 899
- Web: https://www.imperzavala.com

## Precios orientativos
- Tejados: 25–45 €/m²
- Terrazas: precio según superficie y sistema
- Presupuesto gratuito siempre

## Garantía
Garantía escrita en cada trabajo. Entre 5 y 10 años según sistema aplicado.

## Blog
- [¿Cuánto cuesta impermeabilizar un tejado en Mallorca?](https://www.imperzavala.com/blog/impermeabilizar-tejado-mallorca.html)
- [Precio impermeabilización terraza en Palma](https://www.imperzavala.com/blog/precio-impermeabilizacion-terraza-palma.html)
```

---

## Ficheros afectados

| Fichero | Acción |
|---|---|
| `index.html` | Editar `<head>`: meta tags + JSON-LD |
| `blog/impermeabilizar-tejado-mallorca.html` | Editar `<head>`: meta tags + JSON-LD Article |
| `blog/precio-impermeabilizacion-terraza-palma.html` | Editar `<head>`: meta tags + JSON-LD Article |
| `assets/og-image-template.html` | Crear — template HTML 1200×630 |
| `assets/og-image.jpg` | Crear — captura de Chrome |
| `assets/LogoZavala.png` | Sin cambios — se referencia como favicon e apple-touch-icon |
| `sitemap.xml` | Crear |
| `robots.txt` | Crear |
| `llms.txt` | Crear |

---

## Decisiones de diseño

- **og:image compartida entre blog posts** — sencillo y suficiente para el nivel de tráfico actual. Si en el futuro hay más artículos, se puede hacer una imagen por post.
- **JSON-LD en un solo bloque** (array) para index.html — menos `<script>` tags, mismo efecto.
- **llms.txt en raíz** — compatible con el estándar emergente; rastreado por Perplexity, ChatGPT y otros crawlers.
- **favicon generado desde LogoZavala.png** — sin herramientas externas, Chrome automation o Canvas.
