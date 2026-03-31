# Simpático Records — Project Specs

## Stack
- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity v3 (project ID: `zjswviqf`, dataset: `production`)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (títulos) + DM Sans (cuerpo, labels, botones)
- **Deploy:** Vercel (pendiente)

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
/                          → Home
/collections               → Grid de todas las colecciones (desde Sanity)
/collections/[slug]        → Detalle de colección con embed Spotify
/moods                     → Grid de todos los moods (desde Sanity)
/moods/[slug]              → Detalle de mood con embed Spotify
/styles                    → Grid de todos los styles (desde Sanity)
/tapes                     → Placeholder (contenido futuro)
/about                     → About page
/merch                     → Placeholder (coming soon)
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
| embedCode | text | Embed URL (se genera automáticamente desde spotifyUrl) |
| featured | boolean | Solo 2020 = true |

### mood
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | |
| slug | slug | |
| shortDescription | text | |
| spotifyUrl | url | Pendiente de añadir |
| embedCode | text | |

### style
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | |
| slug | slug | |
| shortDescription | text | |
| spotifyUrl | url | Pendiente de añadir |
| embedCode | text | |

---

## Contenido en Sanity

### Collections (18)
2025, 2024, 2023, 2022, 2021, 2020 (featured), 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2008, 2007, 2005

### Moods (7)
| Slug | Título |
|------|--------|
| electronic-winter | Electronic Winter Mood |
| electronic-autumn | Electronic Autumn Mood |
| electronic-spring | Electronic Spring Mood |
| electronic-uptempo-winter | Electronic Uptempo Winter Mood |
| lazy-electronic-summer | Lazy Electronic Summer Mood |
| running | Running |
| runningmal | Runningmal |

### Styles (18) — Spotify URLs añadidas
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
/public/images/moods/         → {slug}.png
/public/images/styles/        → {slug}.png
```

Las imágenes se asignan en código por slug/año — no se suben a Sanity.

---

## Componentes clave

### `HeroCursorTrail`
- Hero fullscreen con efecto trail al mover el cursor
- Imágenes del trail: mezcla de collections + moods + styles
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
- Recibe `embedUrl` (generada automáticamente desde `spotifyUrl`)
- Función `toEmbedUrl`: reemplaza `open.spotify.com/playlist/` por `open.spotify.com/embed/playlist/`
- Muestra iframe + botón "Open on Spotify ↗"

---

## Gradientes por colección

Definidos en `src/lib/data.ts` → `gradientBySlug`. Cada año tiene un gradiente oscuro único asignado manualmente.

---

## Pendiente

- [ ] Añadir Spotify URLs a los 7 **Moods** en Sanity
- [ ] Añadir Spotify URLs a los 12 **Styles** en Sanity
- [ ] Página de detalle para Styles (`/styles/[slug]`)
- [ ] Contenido para **Tapes** (cassettes y CDs históricos)
- [ ] Deploy en Vercel
- [ ] Merch (cuando haya contenido)
- [ ] Página de detalle para Moods — revisar embed con URLs reales

---

## Comandos útiles

```bash
# Dev
npm run dev

# Build
npm run build

# Limpiar caché y reiniciar (cuando hay errores de módulo)
rm -rf .next && npm run dev
```

## Git
- Checkpoint pre-refactor UX: `ed0d414`
- Para volver: `git checkout ed0d414`
