# Быстрый деплой

## Первый раз

1. Инициализируйте Git репозиторий (если еще не сделано):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/internal-analytics-platform.git
   git push -u origin main
   ```

2. Установите URL платформы и задеплойте:
   ```bash
   VITE_PLATFORM_URL=https://OB1-WAN-KENOBI.github.io/Internal-Tools VITE_BASE_PATH=/Internal-Analytics-Platform/ npm run deploy
   ```

3. Настройте GitHub Pages:
   - Settings → Pages → Source: `gh-pages` branch

## Обновление

Просто запустите:
```bash
VITE_PLATFORM_URL=https://OB1-WAN-KENOBI.github.io/Internal-Tools npm run deploy
```

Или создайте `.env.production` файл с `VITE_PLATFORM_URL=...` и просто:
```bash
npm run deploy
```

## Важно

- URL платформы: `https://OB1-WAN-KENOBI.github.io/Internal-Tools`
- URL лендинга: `https://OB1-WAN-KENOBI.github.io/Internal-Analytics-Platform`
- URL платформы должен быть доступен до деплоя лендинга
