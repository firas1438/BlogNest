## BlogNest
This project is a modern blog platform for sharing articles, tutorials, and insights on web development, design, AI, DevOps, and more.

![App Preview](https://i.postimg.cc/RhpVfdQ2/posterurl.png)

## Usage
Users can explore all posts via the `/blogs` page or dive into individual articles at `/blogs/:id`, rendered with rich Markdown content. Authenticated users can access the `/dashboard` to create new blog posts, easily uploading Markdown files for quick content creation.

## Live Demo
Access the live application [here](https://theblognest.vercel.app).

## Tech Stack

| Technology         | Description                                   |
|--------------------|-----------------------------------------------|
| Next.js            | React framework for SSR and API routes        |
| Tailwind CSS       | Responsive styling                            |
| shadcn/ui          | UI library                                    |
| Spline 3D          | Interactive 3D animation                      |
| NextAuth.js        | Secure user authentication                    |
| Mongoose           | Object-Document Mapping                       |
| MongoDB            | Database for blog posts                       |
| Zod                | Schema validation                             |
| Tanstack Query     | Efficient data fetching and caching           |
| React Markdown     | Markdown rendering for blog content           |


## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/firas1438/BlogNest.git
   cd BlogNest
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   AUTH_SECRET=your_nextauth_secret
   ```
   - Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas).
   - Generate a `AUTH_SECRET` using `openssl rand -base64 32`.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

