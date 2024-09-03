# Project Management App

## Overview

This project management application is built using Laravel, React, and Inertia.js. It allows users to manage projects and tasks, with features for creating, reading, editing, and deleting both projects and tasks. Users can also manage their own accounts through login, registration, and logout functionalities. The application supports image uploads for both tasks and projects.

## Features

### User Authentication

- **Login**: Users can log into their accounts to access the application.
- **Register**: New users can create an account to start using the application.
- **Logout**: Users can log out of their accounts to secure their session.

### Project Management

- **Create Projects**: Users can create new projects by filling out a form, including uploading an image.
- **Read Projects**: Users can view a list of projects and details of individual projects.
- **Edit Projects**: Users can edit the details of existing projects and update the associated image.
- **Delete Projects**: Users can delete projects, with images being removed from the storage.

### Task Management

- **Create Tasks**: Users can create tasks associated with specific projects, including uploading an image.
- **Read Tasks**: Users can view a list of tasks and details of individual tasks.
- **Edit Tasks**: Users can edit the details of existing tasks and update the associated image.
- **Delete Tasks**: Users can delete tasks, with images being removed from the storage.

### Dashboard

- **Task Overview**: Users see an overview of their tasks, including counts of pending, in-progress, and completed tasks.
- **Active Tasks**: Displays the most recent active tasks assigned to the user.

### Image Uploads

- **Project Image**: Users can upload images when creating or updating projects.
- **Task Image**: Users can upload images when creating or updating tasks.

## Technologies Used

- **Laravel**
- **React**
- **Inertia.js**
- **Storage**

## Controllers and Resources

### Controllers

1. **ProjectController**: Manages CRUD operations for projects.
2. **TaskController**: Manages CRUD operations for tasks.
3. **UserController**: Manages CRUD operations for users.
4. **DashboardController**: Provides task and project metrics on the dashboard.
5. **ProfileController**: Manages user profile updates and account deletion.

### Resources

1. **ProjectResource**: Formats project data for API responses.
2. **TaskResource**: Formats task data for API responses.
3. **UserResource**: Formats user data for API responses.
4. **UserCRUDResource**: Provides detailed user data including creation date.

## Usage

1. **Setup**: Clone the repository and install dependencies using Composer and npm.
2. **Configuration**: Set up environment variables and database configuration.
3. **Running the App**: Use Laravel’s built-in server or a local development server to run the application.
4. **Accessing the App**: Navigate to the application URL in your browser to interact with the app.

## Conclusion

This project management application provides a comprehensive suite of features for managing projects and tasks, with robust user authentication and image upload capabilities. It leverages the power of Laravel, React, and Inertia.js to offer a modern and efficient user experience.
