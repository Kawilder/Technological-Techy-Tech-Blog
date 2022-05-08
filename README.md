# Online-Shopping-Back-End
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. and you can post on this blog site.

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Table of Contents 
1. [About the Project](#About-The-Project)
1. [Project Links](#Project-Links)
1. [Installation](#Installation)
1. [Project Team](#Project-Team)
1. [Questions](#Questions)

## About The Project
GIVEN a CMS-style blog site
- WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option <br>
THEN I am taken to the homepage
- WHEN I click on any other links in the navigation <br>
THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up <br>
THEN I am prompted to create a username and password
- WHEN I click on the sign-up button <br>
THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in <br>
THEN I am prompted to enter my username and password
- WHEN I am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation <br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post <br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation <br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post <br>
THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard <br>
THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation <br>
THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time <br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Project Links
[Repo Link](https://github.com/Kawilder/Technological-Techy-Tech-Blog) <br>

## Installation
git clone https://github.com/Kawilder/Technological-Techy-Tech-Blog <br>
Populate your own .env file <br>
open up the terminal and run these commands. <br>
`npm i` <br>
`mysql -u root -p` <br>
`source db/schema.sql` <br>
`npm run seed` <br>
`npm start`

## Project Team
[Kevin Wilder](https://github.com/Kawilder) <br>

## Questions
<details>
    <summary>Contact</summary>
    kevin_wilde564@yahoo.com
</details>