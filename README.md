# [College Interaction Portal](https://college-portal-14f75.web.app)

A web application that allows college students to interact with each other and access resources provided by the college. Built with React, React Router and Firebase, and hosted on Firebase.

## Features
- Students can view and register for available courses.
- Faculty can post announcements and assignments.
- Staff can manage student and faculty accounts.
- Student can ask doubts/queries with other fellow students and teachers.
- Students and teachers can reply to other students' queries.

## Installation

1. Clone the repository: <code>git clone https://github.com/DeathRay99/minor.git</code>
2. Install the dependencies: <code>npm install</code>
3. Create a Firebase project and enable the following services:
   - Authentication (for student login)
   - Realtime Database (for storing student profiles and marketplace listings)
   - Cloud Functions (for server-side logic)
   - Hosting (for hosting the web app)
4. Set up the Firebase CLI by following the [official documentation](https://firebase.google.com/docs/cli)
5. Set up the project in your Firebase project by running the following command:  <code>firebase use --add</code>
6. Create a file called `.env` in the root of the project and add the following variables with your Firebase project's configuration:<pre>
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id</pre>
7. Build the React app for production by running the following command: <code>npm run build</code>
8. Deploy the Firebase functions, hosting, and the built React app by running the following command: <code>firebase deploy --only functions,hosting</code>
.The app will be available at the URL provided by Firebase Hosting.

## Technologies Used

- [React](https://reactjs.org/) for the frontend
- [Firebase](https://firebase.google.com/) for the backend, database, and hosting
- [React Router](https://reactrouter.com/) for routing

## Contributing

If you want to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes (`git checkout -b my-changes`)
3. Commit your changes (`git commit -am 'Added some features'`)
4. Push to the new branch (`git push origin my-changes`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
