# 🎓 Веб-приложение "Помощь"

Он состоит из двух частей:

- **Сервер** на [NestJS](https://nestjs.com/)
- **Клиент** на [Next.js](https://nextjs.org/)

---

## 💡 Основные технологии

### 🚀 Сервер (NestJS)

| Технология                                                                                   | Назначение            |
| -------------------------------------------------------------------------------------------- | --------------------- |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" /> | Язык программирования |
| <img src="https://img.shields.io/badge/NodeJs-5FA04E?logo=nodedotjs&logoColor=white" />      | Backend runtime       |
| <img src="https://img.shields.io/badge/NestJs-black?logo=nestjs&logoColor=E0234E" />         | Фреймворк для Node.js |
| <img src="https://img.shields.io/badge/Prisma ORM-white?logo=prisma&logoColor=2D3748" />     | ORM для работы с БД   |
| <img src="https://img.shields.io/badge/SQLite-white?logo=sqlite&logoColor=003B57" />         | Локальная база данных |
| <img src="https://img.shields.io/badge/Socket.io-010101?logo=socket.io&logoColor=white" />   | WebSocket реализация  |

### 🌐 Клиент (Next.js)

| Технология                                                                                           | Версия / Назначение   |
| ---------------------------------------------------------------------------------------------------- | --------------------- |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />         | Язык программирования |
| <img src="https://img.shields.io/badge/NextJs-white?logo=nextdotjs&logoColor=000000" />              | Фреймворк для React   |
| <img src="https://img.shields.io/badge/React_Query-white?logo=reactquery&logoColor=FF4154" />        | Управление состоянием |
| <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white" /> | Валидация форм        |
| <img src="https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white" />       | CSS-фреймворк         |
| <img src="https://img.shields.io/badge/Sonner-black?logo=sonner&logoColor=white" />                  | Уведомления           |
| <img src="https://img.shields.io/badge/Js_Cookie-F7DF1E?logo=jscookie&logoColor=F7DF1E" />           | Работа с cookies      |
| <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" />                   | HTTP-клиент           |
| <img src="https://img.shields.io/badge/Lucide_React-000000?logo=lucide&logoColor=white" />           | Иконки                |
| <img src="https://img.shields.io/badge/Motion-0055FF?logo=framer&logoColor=white" />                 | Анимации              |
| <img src="https://img.shields.io/badge/Zustand-000000?logo=zustand&logoColor=white" />               | Управление состоянием |

---

## 🧰 Инструменты разработки

| Инструмент                                                                                    | Назначение             |
| --------------------------------------------------------------------------------------------- | ---------------------- |
| <img src="https://img.shields.io/badge/VS code-blue?logo=visualstudiocode&logoColor=white" /> | Основная IDE           |
| <img src="https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white" />      | Тестирование REST API  |
| <img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white" />        | Тестирование WebSocket |

---

## 🧪 Установка и запуск

### 1. Установите Nest CLI (если не установлен)

```bash
npm i -g @nestjs/cli
```

### 2. Запуск проекта

## 2.1. Запуск сервера

```bash
cd ./server
```

```bash
npm i
```

```bash
npx prisma db push
```

```bash
npx prisma generate
```

```bash
npm run start:dev
```

адрес сервера: http://localhost:5555

адрес веб-сокета: ws://localhost:5555

## 2.2. Запуск клиента

```bash
cd ./client
```

```bash
npm i
```

```bash
npm run dev
```

адрес клиента: http://localhost:3000
