# Vite + Firebase CRUD App

This repository showcases a CRUD (Create, Read, Update, Delete) application built with **Vite**, **Firebase**, and **dotenv**. This application allows users to manage data seamlessly using Firebase as the backend, with Vite providing a fast and efficient development experience.

## Table of Contents


- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Setup Environment Variables](#2-setup-environment-variables)
  - [3. Install Dependencies](#3-install-dependencies)
  - [4. Run the Application](#4-run-the-application)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

Open your terminal and run the following command:


git clone https://github.com/satyam-is-pro/firebase-crud-env.git
cd firebase-crud-env
### 2. Setup Environment Variables
Create a file named .env in the root of your project directory. This file will store your Firebase API keys and other configuration settings. Add the following lines to the .env file:

VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
Replace each placeholder (your_api_key, etc.) with the actual values from your Firebase project settings.

### 3. Install Dependencies
To install the required dependencies, run the following command in your terminal:
npm install

### 4. Start the development server
 To start run this in your command terminal:
 npm run dev

### 5. Deploy
 If you want to deploy on github then on any hosting like netlify or vercel then make a public folder and put src and pages folder in it and edit the path in the code easy.
 I didnt deploy because my firebase will get filled .
 Thanks for reading...
