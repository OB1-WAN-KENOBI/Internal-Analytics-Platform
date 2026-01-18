# Связь с платформой

Лендинг настроен для работы с отдельным проектом платформы.

## Конфигурация

URL платформы настраивается через переменную окружения `VITE_PLATFORM_URL` или использует значение по умолчанию `http://localhost:5173`.

## Порты

- **Лендинг**: `http://localhost:5174` (порт 5174)
- **Платформа**: `http://localhost:5173` (порт 5173)

## Настройка URL платформы

Создайте файл `.env` в корне проекта лендинга:

```env
VITE_PLATFORM_URL=http://localhost:5173
```

Для продакшена укажите реальный URL платформы:

```env
VITE_PLATFORM_URL=https://platform.example.com
```

## Запуск

1. Запустите платформу:
   ```bash
   cd "/home/obi-wan/pets/Internal Tools"
   npm run dev:all
   ```

2. Запустите лендинг:
   ```bash
   cd "/home/obi-wan/Рабочий стол/Internal Analytics Platform"
   npm run dev
   ```

3. Откройте в браузере:
   - Лендинг: http://localhost:5174
   - Платформа: http://localhost:5173

Кнопки "Get Started" и "View Dashboard" на лендинге ведут на платформу.
