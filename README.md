[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://github.com/AlexandroOkunev/blog-customizer)

# Blog Customizer 🎨

Интерактивный кастомизатор оформления статьи блога с сайдбаром настроек, применяющим стили через CSS-переменные. Проект на React + TypeScript с акцентом на инфраструктуру качества кода и переиспользуемый UI-кит.

## 🛠 Стек

- **Core:** React, TypeScript
- **Сборка:** Webpack (dev/prod конфиги)
- **Стили:** SCSS, CSS-модули, CSS-переменные
- **Инфраструктура:** Storybook, ESLint, Stylelint, Prettier, Husky + lint-staged + commitizen

## ✨ Что реализовано

1. **UI-кит компонентов** — переиспользуемые атомарные компоненты с документацией в Storybook:
   - `Button` (варианты `apply` / `clear`)
   - `ArrowButton` (кнопка открытия/закрытия сайдбара с ARIA-атрибутами)
   - `RadioGroup`, `Select`, `Text`, `Separator`
2. **Механика открытия/закрытия панели настроек** — локальное состояние `isOpen` + CSS-трансформ `translate(-616px)` для плавного выезда сайдбара слева.
3. **Инфраструктура качества кода:**
   - ESLint + Stylelint + Prettier с едиными правилами
   - Pre-commit хуки через Husky + lint-staged (стили → линтер → форматтер)
   - Конвенциональные коммиты через commitizen
   - Storybook для изолированной разработки и документирования компонентов

## ⚙️ Запуск проекта локально

**Требования:** Node.js 18+

1.  Установка:

        git clone https://github.com/AlexandroOkunev/blog-customizer.git
        cd blog-customizer
        npm install

2.  Режим разработки (Webpack dev server):

        npm run start

3.  Storybook (документация компонентов):

        npm run storybook

4.  Проверка кода:

        npm run test   # stylelint:fix → lint → format
