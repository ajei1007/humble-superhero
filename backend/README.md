# Humble Superhero API

## 📌 Overview
The Humble Superhero API is a simple API using NestJS that allows users to:
- Add superheroes with their **name, superpower, and humility score**.
- Retrieve a **sorted list of superheroes** based on humility score.

To complement this API, I also built a **React TypeScript frontend** where users can interact with the superheroes.

## 🚀 Features
- **NestJS Backend:**
  - `POST /superheroes`: Add a superhero
  - `GET /superheroes`: Retrieve sorted superheroes list
- **React TypeScript Frontend:**
  - Add superheroes via a form
  - See superheroes sorted in real-time

## 🛠️ Installation & Setup

#### Steps
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the NestJS server:
   ```sh
   npm run start
   ```
4. API will be available at `http://localhost:3000/superheros`

### Frontend

#### Steps
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in the browser.

## 🔍 Testing
### Running Jest Tests
```sh
npm run test
```
- **Controller Tests** ensure endpoints work correctly.

## 🤝 Collaboration
- Collaborative Database Design: I would work closely with the team to design and implement a relational database (e.g., PostgreSQL) for persistence. This would involve creating proper table structures for superheroes, validating data integrity (e.g., uniqueness of superhero names), and ensuring efficient querying and indexing. We would set up data validation mechanisms to ensure there are no duplicates and enforce a consistent schema across the application.

- Real-time Features: To enhance the user experience, I would implement real-time updates using WebSockets or Server-Sent Events (SSE). This would allow the frontend to reflect the latest superhero data as soon as it’s added, without requiring the user to manually refresh the page. This is especially important when multiple users might be interacting with the system simultaneously.

- Role-Based Access Control (RBAC): I would help the team integrate authentication and authorization mechanisms to ensure that only admin users can add, update, or delete superhero data. Using JWT tokens and passport strategies, we could restrict actions like adding or deleting superheroes based on user roles. This would also involve creating a secure login process and ensuring data security across endpoints.

- Code Quality and Best Practices: As part of the team, I would advocate for pair programming, code reviews, and continuous integration (CI). We would enforce strict code quality standards, adopt tools like ESLint, Prettier, and Swagger for documentation, and ensure robust unit and integration testing with Jest to minimize regressions.

## 🚀 If I Had More Time...

- Implement a Database (PostgreSQL): This would be essential for scalability and persistence. I would design an efficient database schema to handle superhero records, ensuring data consistency and adding validations such as checking for existing superheroes with the same name before inserting new entries. I’d also implement database migrations with TypeORM or Prisma to ensure smooth schema updates.

- Integrate Authentication & Authorization: To secure the app, I’d implement JWT-based authentication and role-based access control (RBAC). Admins would be able to manage superhero data, while regular users would only have read access. I’d also explore OAuth2 to allow third-party logins for easy user management.

- Implement Rate Limiting and Caching: I’d introduce rate limiting (e.g., using NestJS’s ThrottlerModule) to prevent abuse of the API, and implement caching strategies (e.g., Redis) for frequently requested superhero data. This would reduce database load and improve response times for users.

- Advanced Sorting and Filtering: Besides sorting superheroes by humility score, I’d introduce filtering by superpower, name, or other attributes, allowing users to find superheroes more easily. A search feature would enhance this further, making the app more user-friendly.

- Swagger Documentation: To ensure that the API is easy to consume by developers, I would implement Swagger for API documentation. This would allow us to auto-generate the API docs and help frontend and backend teams collaborate more efficiently.

- Deployment on Cloud Services: I would deploy the API and frontend on cloud platforms like AWS, Google Cloud, or Vercel. For the backend, I would explore Docker for containerization, ensuring that the app is easily portable and scalable. Additionally, I would configure CI/CD pipelines for smooth deployment and automated testing.

- UI/UX Enhancements: I’d refine the frontend with animations, progress indicators, and responsive design for better user experience. I would focus on creating a polished UI with modern design patterns, possibly using TailwindCSS or Material-UI to accelerate development.

- Write More Comprehensive Tests: To ensure the robustness of the application, I would write extensive unit, integration, and e2e tests. The API would be tested for edge cases (e.g., invalid input), and the frontend would be thoroughly tested for usability, performance, and accessibility.