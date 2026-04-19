# lost-and-found-board
Lost & Found Board
Project Description

Lost & Found Board is a simple web application that helps people report and recover lost items within a community. Users can post details about items they have lost or found, browse the board to view reported items, and contact the person who reported the item.

The goal of the platform is to create a central place where community members can quickly report lost belongings and help return found items to their rightful owners.

Features
Report lost or found items using a form
View reported items on a shared board
Search for items using a search bar
Store reported items using browser Local Storage
Display external API data as example items
Mark items as claimed
Remove items from the board
Responsive layout for different screen sizes
Technologies Used
HTML5
CSS3
JavaScript
Local Storage
GitHub Actions
GitHub Pages
API Used

This project uses the JSONPlaceholder API to simulate external data.

API endpoint used:
https://jsonplaceholder.typicode.com/posts?_limit=2

The API provides sample post data which is displayed as example items on the board.

How It Works
Reporting an Item

Users fill in the report form with:

Item name
Type (Lost or Found)
Description
Location
Contact information

The item is saved to Local Storage and displayed on the board page.

Viewing the Board

The board page displays:

Items stored in Local Storage
Sample items fetched from the API

Users can:

Search items using the search bar
Mark items as claimed
Remove items from the board
Search Function

The search bar filters items by matching the entered text with the content inside each item card.

Deployment

This project is deployed using GitHub Pages with GitHub Actions.

Deployment workflow:

Code is pushed to the main branch.
GitHub Actions runs the deployment workflow.
The site is automatically deployed to GitHub Pages.
Running the Project Locally
Clone the repository
Open the project folder
Open index.html in a web browser

No additional installation is required.

Author

Gladwel Birika

License

This project is created for educational purposes.