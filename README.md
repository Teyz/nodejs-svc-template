# Node.js TypeScript Microservice Template

## Overview

This repository provides a template for building microservices using Node.js and TypeScript, with Docker support for easy containerization and deployment. It is designed to help you quickly set up a scalable, maintainable microservice architecture.

## Features

- **Node.js**: Asynchronous, event-driven JavaScript runtime.
- **TypeScript**: Static typing for better development experience and error checking.
- **Docker**: Containerization for consistent environments across different stages of development and deployment.
- **Express**: Lightweight web framework for building RESTful APIs.
- **PostgreSQL**: Reliable and powerful open-source relational database.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [Docker](https://www.docker.com/products/docker-desktop) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/) (optional, for managing multi-container Docker applications)
- [PostgreSQL](https://www.postgresql.org/) (for local development)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Teyz/nodejs-svc-template.git
```

### Update environments variables

Update environments variables in **docker-compose.yml**

### Run the project

```bash
docker compose up
```