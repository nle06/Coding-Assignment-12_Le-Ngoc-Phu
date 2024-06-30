# React App Deployment

This guide covers the steps to containerize and run the React application using Docker.

## Prerequisites

- Docker installed on your machine. To install Docker, follow the instructions on [Docker's website](https://docs.docker.com/get-docker/).

## Building the Docker Image

To build the Docker image, run the following command in the directory containing the Dockerfile:

```bash

docker build -t le_ngoc_phu_coding_assignment12 .

docker run -p 8083:8083 le_ngoc_phu_coding_assignment12

docker ps



Last step: docker run -p 8083:8083 le_ngoc_phu_coding_assignment12

