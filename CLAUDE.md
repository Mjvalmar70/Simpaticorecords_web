# Simpático Records — Project Specs

## Stack
- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity v3 (project ID: `zjswviqf`, dataset: `production`)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (títulos) + DM Sans (cuerpo, labels, botones)
- **Repo:** https://github.com/Mjvalmar70/Simpaticorecords_web
- **Deploy:** Vercel (en proceso — env vars pendientes de configurar)

---

## Design System

### Colores
```
Background:  #0A0A0A
Text:        #F5F4F0
Accent gold: #C8A96E
```

### Tipografía
| Uso | Fuente | Clase Tailwind |
|-----|--------|----------------|
| Títulos principales | Playfair Display | `font-playfair` |
| Cuerpo, labels, botones | DM Sans | `font-dm font-light` |
| Labels uppercase | DM Sans | `font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E]` |

### Principios visuales
- Oscuro, editorial, minimalista
- Sin bordes decorativos innecesarios
- Espaciado generoso (`py-24` entre secciones, `py-32` en secciones grandes)
- Hover states: `text-[#C8A96E]`, `border-[#C8A96E]`
- Transiciones: `transition-all duration-300`

---

## Arquitectura de rutas

```
/                          → Home (hero + featured collection + grid 6 colecciones)
/collections               → Grid completo de colecciones (desde Sanity)
/collections/[slug]        → Detalle de colección con embed Spotify
/moods                     → Grid de moods (desde Sanity)
/moods/[slug]              → Detalle de mood con embed Spotify
/styles                    → Grid de 18 estilos (desde Sanity) ✓
/styles/[slug]             → Detalle de estilo con embed Spotify ✓
/tapes                     → Placeholder (contenido futuro)
/about                     → About page
/studio                    → Sanity Studio
```

---

## Sanity — Schemas

### collection
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | "The best of 2025 by simpaticorecords" |
| slug | slug | "archive-2025" |
| year | number | |
| shortDescription | text | |
| spotifyUrl | url | URL directa de Spotify |
| embedCode | text | Embed URL (generada desde spotifyUrl con toEmbedUrl()) |
| featured | boolean | Solo 2020 = true |

### mood
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | |
| slug | slug | |
| shortDescription | text | |
| spotifyUrl | url | **Pendiente de añadir en Sanity** |
| embedCode | text | |

### style
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | |
| slug | slug | |
| shortDescription | text | |
| spotifyUrl | url | ✓ Añadido en todos |
| embedCode | text | |

---

## Contenido en Sanity

### Collections (18) ✓ Completo
2025, 2024, 2023, 2022, 2021, 2020 (featured), 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2008, 2007, 2005

### Moods (7) ✓ Completo
| Slug | Título | Spotify URL |
|------|--------|-------------|
| electronic-winter | Electronic Winter Mood | https://open.spotify.com/playlist/049Jod6fjgM4N4Gv3tbLCo |
| electronic-autumn | Electronic Autumn Mood | https://open.spotify.com/playlist/4MNVLphofZqfDA0RfMRTT9 |
| electronic-spring | Electronic Spring Mood | https://open.spotify.com/playlist/7jLSrdFFiBImHjbb5mvZjN |
| electronic-uptempo-winter | Electronic Uptempo Winter Mood | https://open.spotify.com/playlist/02T9JxWBG4eVXwiIgVEwGi |
| lazy-electronic-summer | Lazy Electronic Summer Mood | https://open.spotify.com/playlist/1AFwFfcgnYEqIkEs2DlYsX |
| running | Running | https://open.spotify.com/playlist/26h2BSQWp0G3PBXN1KEWZC |
| runningmal | Runningmal | https://open.spotify.com/playlist/60nhzjcgzs02LA5dD4Moav |

### Styles (18) ✓ Completo
| Slug | Título | Spotify URL |
|------|--------|-------------|
| acid-jazz | Acid Jazz | https://open.spotify.com/playlist/1L0DtnYAMtf5xSVLhOZxXK |
| beautiful-songs | Beautiful Songs | https://open.spotify.com/playlist/0Si3npQeqyBK2BRcFlYQmr |
| blues | Blues | https://open.spotify.com/playlist/6C4KiurHW67bipsYe2gIKj |
| classic-indie-folk | Classic Indie Folk | https://open.spotify.com/playlist/7uEp0AaGmRDxGKiX0tNHG1 |
| classics | Classics | https://open.spotify.com/playlist/2idfxwCcyfjmLszvmRXGB9 |
| cool | Cool | https://open.spotify.com/playlist/3LVXDnF0vFWvxBzUqDWqGa |
| covers-and-rarities | Covers and Rarities | https://open.spotify.com/playlist/5MmlyUOKEPcFj9t0yXRVxU |
| en-espanol | En Español | https://open.spotify.com/playlist/6QGYKNGENvonXzMwE2SsZi |
| funky | Funky | https://open.spotify.com/playlist/6dGSmYhouNTwFiHk01YxBQ |
| happy-indie-songs | Happy Indie Songs | https://open.spotify.com/playlist/1gpVlyONJLGOL4AfzYKtbM |
| hip-hop | Hip Hop | https://open.spotify.com/playlist/1dSKAbwOVS1t5ug4OU661p |
| house | House | https://open.spotify.com/playlist/1ta3eSjjBTf6P921o5s6c0 |
| jazz | Jazz | https://open.spotify.com/playlist/3I02AQyELrEYgg87r2j1T7 |
| modern-classical-music | Modern Classical Music | https://open.spotify.com/playlist/34A7Y0k8R6HJRRWdTtOKuM |
| reggae | Reggae | https://open.spotify.com/playlist/1AN3Bp7JILiv5NNKxafBTa |
| soul | Soul | https://open.spotify.com/playlist/0upv1JWNX43xQOyb7crdU3 |
| uplifting-songs | Uplifting Songs | https://open.spotify.com/playlist/21sm6GjFXFfxa7lwWUbR36 |
| weird-songs | Weird Songs | https://open.spotify.com/playlist/7DVwVDgTzksQEpoBOVoyUV |

---

## Imágenes

Todas las imágenes son locales en `/public/images/`:

```
/public/images/collections/   → {year}.png  (2005–2025)
/public/images/moods/         → {slug}.png  (7 moods)
/public/images/styles/        → {slug}.png  (18 estilos)
```

Las imágenes se asignan en código por slug/año — no se suben a Sanity.

---

## Componentes clave

### `HeroCursorTrail`
- Hero fullscreen con efecto trail al mover el cursor
- Imágenes del trail: mezcla de collections + moods + styles (25 imágenes en rotación)
- Throttle: 320ms, max 4 imágenes en pantalla, fade 1600ms
- Título y botones se desvanecen al hacer scroll (`useScroll` + `useTransform`)
- Mobile: grid estático de 3 imágenes

### `CollectionCard`
- Muestra imagen de portada + año + hover con "Listen on Spotify"
- El título visible es solo el año (`displayTitle = String(collection.year)`)

### `MoodCard`
- Misma estructura que CollectionCard
- Imagen desde `/public/images/moods/{slug}.png`

### `SpotifyEmbed`
- Recibe `embedUrl` generada con `toEmbedUrl()` desde `src/lib/data.ts`
- Convierte `open.spotify.com/playlist/` → `open.spotify.com/embed/playlist/`
- Soporta también URLs de álbum (`/album/`)
- Muestra iframe + botón "Open on Spotify ↗"

---

## Utilidades — `src/lib/data.ts`

- `toEmbedUrl(url)` — convierte URL de Spotify a embed URL
- `gradientBySlug` — mapa de gradientes oscuros por slug de colección
- Interfaces: `Collection`, `Mood`, `Style`
- Constantes: `SPOTIFY_PLACEHOLDER`, `SPOTIFY_EMBED_PLACEHOLDER`, `MANIFESTO`

---

## Pendiente

- [x] Añadir Spotify URLs a los 7 **Moods** en Sanity ✓
- [x] Añadir Spotify URLs a las 18 **Collections** en Sanity ✓
- [ ] Terminar deploy en **Vercel** (configurar env vars: PROJECT_ID, DATASET, API_VERSION)
- [ ] Contenido para **Tapes** (cassettes y CDs históricos)
- [ ] **Merch** (cuando haya contenido)
- [ ] Página **About**

---

## Comandos útiles

```bash
# Dev
npm run dev

# Build
npm run build

# Limpiar caché y reiniciar (cuando hay errores de módulo)
rm -rf .next && npm run dev

# Deploy manual a Vercel
vercel --prod
```

## Git
- Repo: https://github.com/Mjvalmar70/Simpaticorecords_web
- Branch principal: `main`
- Checkpoint pre-refactor UX: `ed0d414`

## Vercel — Variables de entorno necesarias
```
NEXT_PUBLIC_SANITY_PROJECT_ID = zjswviqf
NEXT_PUBLIC_SANITY_DATASET    = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
```
