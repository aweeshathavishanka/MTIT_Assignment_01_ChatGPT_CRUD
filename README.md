```markdown
# Next.js MongoDB CRUD Application

A production-ready full-stack CRUD (Create, Read, Update, Delete) web application built using Next.js App Router, TypeScript, and MongoDB Atlas. This project demonstrates modern software engineering practices including Clean Architecture, Repository Pattern, proper separation of concerns, and a scalable folder structure suitable for real-world production environments.

This application allows users to create, view, update, and delete Items through a clean and responsive user interface backed by a robust API and database layer.

---

# Features

- Create new items with title, description, and price
- View all items in a responsive card layout
- Edit existing items with pre-filled form data
- Delete items with confirmation
- MongoDB Atlas cloud database integration
- MongoDB Native Driver implementation (no ORM)
- Clean Architecture with proper separation of concerns
- Repository Pattern for database abstraction
- Fully typed TypeScript codebase
- Next.js App Router API routes
- Server Components for data fetching
- Client Components for interactivity
- Responsive UI using TailwindCSS
- Production-ready scalable structure

---

# Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Database | MongoDB Atlas |
| Database Driver | MongoDB Native Driver |
| Styling | TailwindCSS |
| Architecture | Clean Architecture |
| Pattern | Repository Pattern |
| Deployment | Vercel |

---

# Folder Structure

```

app/
├── api/
│   └── items/
│       ├── route.ts
│       └── [id]/
│           └── route.ts
├── items/
│   ├── page.tsx
│   ├── create/page.tsx
│   └── [id]/edit/page.tsx
├── layout.tsx
└── page.tsx

components/
├── ItemCard.tsx
└── ItemForm.tsx

lib/
├── mongodb.ts
└── repositories/
└── item.repository.ts

types/
└── item.ts

```

### Folder Responsibilities

**app/**  
Contains all application routes, pages, layouts, and API endpoints using Next.js App Router.

**components/**  
Reusable UI components such as cards and forms used across multiple pages.

**lib/**  
Core infrastructure logic including MongoDB connection and repository implementations.

**lib/repositories/**  
Implements the Repository Pattern. Handles all database operations and abstracts database access from the rest of the application.

**types/**  
Contains all TypeScript interfaces, DTOs, and type definitions for strong typing across the application.

---

# API Endpoints

### GET /api/items  
Fetch all items from the database.

### POST /api/items  
Create a new item.

Request body:
```

{
"title": "Item title",
"description": "Item description",
"price": 100
}

```

---

### GET /api/items/[id]  
Fetch a single item by its ID.

---

### PUT /api/items/[id]  
Update an existing item by its ID.

Request body:
```

{
"title": "Updated title",
"description": "Updated description",
"price": 200
}

```

---

### DELETE /api/items/[id]  
Delete an item by its ID.

---

# Environment Variables

Create a `.env.local` file in the project root:

```

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
MONGODB_DB=your_database_name

```

### Variable Explanation

**MONGODB_URI**  
MongoDB Atlas connection string.

**MONGODB_DB**  
Database name used by the application.

Never commit `.env.local` to GitHub.

---

# Installation Instructions

Clone the repository:

```

git clone [https://github.com/yourusername/your-repository-name.git](https://github.com/yourusername/your-repository-name.git)

```

Navigate into the project directory:

```

cd your-repository-name

```

Install dependencies:

```

npm install

```

---

# Run Development Server

Start the development server:

```

npm run dev

```

Application will run at:

```

[http://localhost:3000](http://localhost:3000)

```

---

# Build for Production

Create production build:

```

npm run build

```

Start production server:

```

npm start

```

---

# Deployment

This application is optimized for deployment on Vercel.

### Deploy using Vercel

1. Push project to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Add Environment Variables in Vercel dashboard:

```

MONGODB_URI
MONGODB_DB

```

5. Click Deploy

Vercel will automatically build and deploy your application.

---

# Architecture Explanation

### Repository Pattern
Database logic is abstracted into repository files. This improves maintainability, scalability, and testability.

Example:
```

lib/repositories/item.repository.ts

```

This ensures database logic is separated from UI and API layers.

---

### Separation of Concerns

Each layer has a clear responsibility:

- UI Layer → components/
- API Layer → app/api/
- Data Layer → repositories/
- Infrastructure Layer → lib/mongodb.ts

This makes the application easier to maintain and scale.

---

### Server Components

Used for:

- Fetching data
- Rendering pages
- Improving performance
- Reducing client-side JavaScript

Example:
```

app/items/page.tsx

```

---

### Client Components

Used for:

- Forms
- Button interactions
- User input handling

Example:
```

components/ItemForm.tsx

```

---

# Screenshots

(Add screenshots here)

Example suggestions:

- Items list page
- Create item form
- Edit item form
- MongoDB Atlas database view

---

# Future Improvements

Potential enhancements include:

- Pagination support
- Search functionality
- Authentication and authorization
- Role-based access control
- Server Actions implementation
- Form validation using Zod
- Toast notifications
- Optimistic UI updates
- Unit and integration tests
- Docker support

---

# Author

Aweesha Thavishanka  
GitHub: https://github.com/aweeshathavishanka
```
