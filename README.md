# ZeBrands

This project was meticulously developed as part of the application process for the Senior Front-End Engineer position at ZeBrands.

## Project Description

This application interacts with the GitHub API to search for users and repositories, displaying the results in a user-friendly interface. The application features two primary routes: **User Search** and **Repository Search**, each with its own navigation. Both routes include a search bar where users can input their queries, and the search results are displayed on the same page without the need for additional navigation.

### Key Features

- **User Search Route:** Allows users to search for GitHub users by username. Results are displayed with user details such as avatar, name, and a link to their GitHub profile.
- **Repository Search Route:** Enables users to search for repositories on GitHub. Results include repository details like name, description, stars, forks, and a link to the repository.
- **Responsive Design:** The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Efficient API Handling:** Uses Axios for efficient data fetching from the GitHub API, with error handling to manage API request failures.
- **Navigation:** Simple and intuitive navigation between the User Search and Repository Search routes.

### Setup and Deployment

To run the project locally, follow these steps:

1. Clone this repository.
2. Install the necessary dependencies by running:
   ```bash
   npm install
   npm run dev

### Deployment 
You can view a live demo of the application at: https://mbcorvalan.github.io/zebrands/
The application is deployed using GitHub Actions, ensuring continuous integration and delivery.
 
