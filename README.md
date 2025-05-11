# 🔐 GraphQL API Performance Benchmark for Cryptographic TLS Evaluation

This project is a **GraphQL API powered by Node.js and MySQL**, developed specifically for academic research. It is used to evaluate how different **TLS encryption configurations (AES-128 vs AES-256)** impact GraphQL performance in terms of **response latency, throughput, and load handling**.

---

## 📚 Research Objective

This project complements a REST-based study by evaluating **GraphQL protocol performance** under TLS encryption. The goals are:

- To compare GraphQL performance under AES-128 vs AES-256 cipher suites
- To measure latency and concurrency behavior for different payload sizes
- To contrast GraphQL with REST API performance under identical cryptographic conditions

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **GraphQL**
- **express-graphql**
- **MySQL**
- **MySQL2** – async DB access
- **Faker.js** – fake data generation
- **dotenv** – environment config
- **k6**, **wrk**, **curl**, **OpenSSL** – testing & TLS analysis
