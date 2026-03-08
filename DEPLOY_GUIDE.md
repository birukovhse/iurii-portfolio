# 🚀 Инструкция по деплою на Vercel

## Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на [GitHub](https://github.com)
2. Нажмите "New repository"
3. Название: `iurii-portfolio` (или любое другое)
4. Сделайте публичным или приватным
5. НЕ добавляйте README, .gitignore (они уже есть)
6. Нажмите "Create repository"

## Шаг 2: Подключите локальный репозиторий к GitHub

Выполните команды (замените `YOUR-USERNAME` на ваш GitHub username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/iurii-portfolio.git
git branch -M main
git push -u origin main
```

## Шаг 3: Деплой на Vercel

1. Откройте https://vercel.com
2. Войдите с аккаунтом `birukovhse@gmail.com`
3. Нажмите **"Add New..."** → **"Project"**
4. Нажмите **"Import Git Repository"**
5. Выберите ваш репозиторий `iurii-portfolio`
6. Нажмите **"Import"**
7. Настройки определятся автоматически из `vercel.json`:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Нажмите **"Deploy"**

## Шаг 4: Готово! 🎉

Через 1-2 минуты ваш сайт будет доступен по адресу:
- `https://iurii-portfolio.vercel.app` (или другой домен)

## 📝 Custom Domain (опционально)

В настройках проекта на Vercel можете добавить свой домен:
1. Project Settings → Domains
2. Добавьте ваш домен (например, `iuriibirukov.com`)
3. Следуйте инструкциям для настройки DNS

---

## 🛠️ Команды для разработки

```bash
# Запустить локально
npm run dev

# Собрать для продакшна
npm run build

# Предпросмотр продакшн сборки
npm run preview
```

## 📂 Структура проекта

```
iurii-portfolio/
├── src/
│   ├── App.tsx          # Главный компонент с портфолио
│   ├── index.css        # Tailwind стили
│   └── main.tsx         # Entry point
├── public/              # Статические файлы
├── index.html           # HTML шаблон
├── vercel.json          # Конфигурация Vercel
└── package.json         # Зависимости
```

## ✅ Что включено

- ✨ Современный дизайн в стиле вашего макета
- 📱 Адаптивная верстка (мобильные, планшеты, десктоп)
- 🎨 Плавные анимации и переходы
- 🚀 Оптимизирована производительность
- 🔍 SEO-оптимизация (meta теги)
- 🎯 Секции: Hero, Projects, Skills, Contact

---

**Важно:** Этот проект полностью отдельный и НЕ связан с `con-iurii-ng_v3_final_itog`



