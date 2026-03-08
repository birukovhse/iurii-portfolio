# Руководство по размещению фото и видео

## Куда класть файлы

Все медиафайлы кладите в папку **`public/media/`** в корне проекта. Vite раздаёт их по пути `/media/...`.

### Структура папок

```
iurii-portfolio/
├── public/
│   └── media/
│       ├── ai-automation/      # AI Automation
│       │   ├── conjuring.jpg   # Multitool Conjuring
│       │   ├── text-tool.jpg   # Multitool Text tool
│       │   └── trendwatcher.jpg
│       ├── ad-creatives/       # AD Creatives
│       │   ├── sdg-1.mp4
│       │   ├── sdg-2.mp4
│       │   ├── sdg-3.mp4
│       │   ├── freelance.mp4
│       │   ├── glam-1.mp4
│       │   ├── glam-2.mp4
│       │   └── glam-3.mp4
│       └── design-events/     # Design and Events
│           └── odds-*.jpg     # постеры
```

## Как подключать в коде

### Изображения

```tsx
<img
  src="/media/ai-automation/conjuring.jpg"
  alt="Multitool Conjuring"
  className="w-full h-full object-cover"
/>
```

### Видео

```tsx
<video
  src="/media/ad-creatives/sdg-1.mp4"
  controls
  playsInline
  muted
  loop
  className="w-full h-full object-cover rounded-[4px]"
/>
```

## Карта размещения по разделам

### AI Automation (`/ai-automation`)

| Проект | Файл | Расположение |
|--------|------|--------------|
| Multitool Conjuring | conjuring.jpg | `public/media/ai-automation/conjuring.jpg` |
| Multitool Text tool | text-tool.jpg | `public/media/ai-automation/text-tool.jpg` |
| TrendWatcher | trendwatcher.jpg | `public/media/ai-automation/trendwatcher.jpg` |

### AD Creatives (`/ad-creatives`)

| Проект | Сетка | Файлы |
|--------|-------|-------|
| SDG | 3 вертикальных видео | sdg-1.mp4, sdg-2.mp4, sdg-3.mp4 |
| Freelance | 1 горизонтальное видео | freelance.mp4 |
| GLAM | 3 вертикальных видео | glam-1.mp4, glam-2.mp4, glam-3.mp4 |

### Design and Events (`/design-events`)

| Проект | Сетка | Файлы |
|--------|-------|-------|
| Odds & Ends | 12 постеров (3×4) | odds-01.jpg … odds-12.jpg |

## Рекомендации

- **Фото**: JPG или WebP, ширина 1200–1600px
- **Видео**: MP4 (H.264), вертикальные 9:16, горизонтальные 16:9
- Имена файлов: латиница, без пробелов, можно использовать дефисы

## Как подключить в проекте

После того как файлы лежат в `public/media/`, напиши мне, какие именно файлы добавил, и я заменю плейсхолдеры на реальные `<img>` и `<video>` в `AIAutomationPage.tsx`, `ADCreativesPage.tsx` и `DesignEventsPage.tsx`.
