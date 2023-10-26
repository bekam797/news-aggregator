# News Aggregator

## Running with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/bekam797/news-aggregator
   cd news-aggregator

   ```

2. Build the Docker image:

   ```bash
   docker-compose up --build

   ```

   Now, the application should be running at http://localhost:8080

   ## Running without Docker

1. Install the necessary dependencies:
   ```bash
   yarn install

   ```
2. Start the frontend application:
   ```bash
   yarn start
   ```
3. In a separate terminal, start the backend server:
   ```bash
   node server.ts
   ```
 
   Now, the application should be running at http://localhost:3000