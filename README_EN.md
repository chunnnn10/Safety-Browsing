# Employee Browsing Record Chrome Extension

[中文版本](README.md)

This project is a Chrome browser extension designed for managing employee browsing records. It aims to log and manage employees' web browsing activities, providing an admin backend system for managers to view and analyze these records. The project includes the following key features: login page, user management, browsing record management, and blacklist management.

## Table of Contents

- [Project Background](#project-background)
- [Features Overview](#features-overview)
- [Tech Stack](#tech-stack)
- [Installation Guide](#installation-guide)
- [Environment Setup](#environment-setup)
- [Detailed Features](#detailed-features)
- [API Endpoints](#api-endpoints)
- [Upcoming Updates](#upcoming-updates)
- [Contribution Guide](#contribution-guide)
- [Contact Information](#contact-information)

## Project Background

This project aims to help companies log and manage their employees' web browsing activities. Through the admin backend, managers can analyze employee browsing records to minimize potential security risks. This Chrome extension effectively logs user browsing activities and provides a blacklist feature to prevent employees from accessing unsafe websites.

## Features Overview

1. **User Login System**: Identifies and redirects users based on their roles (regular user, company IT admin, developer).
2. **Regular User Panel**: View their own browsing history and update personal passwords.
3. **Company IT Admin Panel**: View all employee browsing records and manage the company blacklist.
4. **Developer Panel**: Manage companies using the system and their databases.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Other Tools**: Replit (Development & Testing Environment)

## Installation Guide

1. **Clone the Project**:
   ```sh
   git clone https://github.com/chunnnn10/Safety-Browsing
   ```
2. **Install Dependencies**:
   ```sh
   cd project-repo
   npm install
   ```
3. **Set Environment Variables**:
   - Create a `.env` file in the root directory:
   ```env
   PORT=3000
   BASE_URL=https://dev.chunnnn10.com
   ```
4. **Start the Server**:
   ```sh
   node server.js
   ```
5. **Install Chrome Extension**:
   - Load the `Client` folder into Chrome extension developer mode.

## Environment Setup

- **Node.js**: Make sure Node.js and npm are installed.

## Detailed Features

### 1. User Login System

The system redirects users to the appropriate panel based on their role.

- **Developer**: Manage companies and databases.
- **IT Admin**: View employee browsing records and edit the blacklist.
- **Regular User**: View their own browsing records and update their password.

### 2. Browsing Record Management

- All employee browsing records are logged and available for IT admins or developers to view.

### 3. Blacklist Management

- IT admins can add or remove malicious websites from the blacklist to protect employee browsing safety.

## API Endpoints

- **POST /login**: User login, with redirection based on role.
- **GET /get-blacklist**: Retrieve the blacklist.
- **POST /log**: Log the user's visited URL.
- **GET /get-browsing-records**: Retrieve all browsing records.
- **POST /update-user**: Update user information (username, password).

## Upcoming Updates

- **Enhanced Security Mechanism**: Strengthen user data encryption and protection.
- **Database Integration**: Consider migrating data (e.g., user information, browsing records, blacklist) to MongoDB for improved persistence and reliability.

## Contribution Guide

1. Fork this repository.
2. Create your feature branch:
   ```sh
   git checkout -b feature/Safety-Browsing
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/Safety-Browsing
   ```
5. Open a Pull Request.

## Contact Information

If you have any questions or suggestions, feel free to contact us:

- **Email**: [chun@chunnnn10.com](mailto:chun@chunnnn10.com)
- **GitHub Issues**: Create an Issue in this repository

---

Thank you for your interest in our project! We hope our extension helps improve web management and security for your company.

