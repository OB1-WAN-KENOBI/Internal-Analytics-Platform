# Инструкция по деплою

## Подготовка

1. Убедитесь, что оба проекта инициализированы как Git репозитории:
   ```bash
   # В каждом проекте
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Создайте репозитории на GitHub:
   - Для платформы: `internal-tools` (или другое имя)
   - Для лендинга: `internal-analytics-platform` (или другое имя)

3. Добавьте remote:
   ```bash
   # В проекте платформы
   git remote add origin https://github.com/YOUR_USERNAME/internal-tools.git
   
   # В проекте лендинга
   git remote add origin https://github.com/YOUR_USERNAME/internal-analytics-platform.git
   ```

## Деплой платформы

1. Перейдите в директорию платформы:
   ```bash
   cd "/home/obi-wan/pets/Internal Tools"
   ```

2. Запустите деплой:
   ```bash
   npm run deploy
   ```

   Это создаст ветку `gh-pages` и задеплоит проект на GitHub Pages.

3. Настройте GitHub Pages в настройках репозитория:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`

4. URL платформы будет: `https://YOUR_USERNAME.github.io/internal-tools/`

## Деплой лендинга

1. Перейдите в директорию лендинга:
   ```bash
   cd "/home/obi-wan/Рабочий стол/Internal Analytics Platform"
   ```

2. Установите переменную окружения с URL платформы перед деплоем:
   ```bash
   export VITE_PLATFORM_URL=https://YOUR_USERNAME.github.io/internal-tools
   npm run deploy
   ```
   
   Или создайте файл `.env.production`:
   ```env
   VITE_PLATFORM_URL=https://YOUR_USERNAME.github.io/internal-tools
   ```
   
   И затем запустите:
   ```bash
   npm run deploy
   ```

3. Альтернативно, можно установить переменную прямо в команде:
   ```bash
   VITE_PLATFORM_URL=https://YOUR_USERNAME.github.io/internal-tools npm run deploy
   ```

4. Настройте GitHub Pages аналогично платформе.

5. URL лендинга будет: `https://YOUR_USERNAME.github.io/internal-analytics-platform/`

## Если репозитории в подпапках

Если вы используете один репозиторий с подпапками, настройте `VITE_BASE_PATH`:

```bash
# Для платформы
VITE_BASE_PATH=/internal-tools npm run deploy

# Для лендинга
VITE_BASE_PATH=/internal-analytics-platform npm run deploy
```

И обновите `.env.production` в лендинге:
```env
VITE_PLATFORM_URL=https://YOUR_USERNAME.github.io/internal-tools
VITE_BASE_PATH=/internal-analytics-platform
```

## Проверка

После деплоя проверьте:
1. Лендинг открывается по своему URL
2. Платформа открывается по своему URL
3. Кнопки на лендинге ведут на платформу
4. Все ссылки работают корректно

## Обновление после изменений

После любых изменений просто запустите:
```bash
npm run deploy
```

в соответствующем проекте.
