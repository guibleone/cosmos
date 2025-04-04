# Cosmos

A web application to explore the cosmos, built with **HTMX** and **Express.js**.

## Features

- Dynamic rendering of celestial objects (astros) using HTMX.  
- Modularized handlers and middlewares for better code organization.  
- Responsive design with consistent styling.  
- Integration with a PostgreSQL database for storing and retrieving data.  
- Support for filtering, searching, and displaying recommended celestial objects.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cosmos.git
   cd cosmos
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   DATABASE_URL=your_database_url
   PORT=3000
   ```

4. (Optional) Seed the database:

   ```bash
   pnpm seed
   ```

## Usage

Start the development server:

```bash
pnpm start:dev
```

Then open your browser and navigate to:

```
http://localhost:3000
```

## Technologies Used

- **HTMX**: For dynamic and interactive UI updates.  
- **Express.js**: Backend framework for handling HTTP requests.  
- **PostgreSQL**: Database for storing celestial object data.  
- **EJS**: Template engine for rendering HTML.  
- **TypeScript**: For type-safe JavaScript development.

## Scripts

- `pnpm build`: Compile TypeScript files.  
- `pnpm start`: Start the production server.  
- `pnpm start:dev`: Start the development server with hot reload.  
- `pnpm seed`: Seed the database with initial data.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

### Guilherme B. Leone

Feel free to contribute or report issues!
