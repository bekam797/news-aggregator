## Running with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/bekam797/news-aggregator
   cd news-aggregator

   ```

2. Build the Docker image:

   ```bash
   docker build -t news-aggregator .

   ```

3. Run the Docker container:
   ```bash
   docker run -p 8080:80 news-aggregator

   ```
