# Umbrella 

## Background & Overview

### Hello and Welcome!

Umbrella is a mobile application that facilitates communication between teachers and parents. This was inspired by an app that Lily uses for her son's preschool, but found it to have limitations, and overall the design left much to be desired. Through Umbrella, each child will have a profile page, which will have the child's picture, and list their name, class, teacher, contact information, and milestones. Teachers can also post messages specific to certain children, or to the whole class, and parents can see those in a feed. As bonuses, our plan is to implement direct chat functionality, and integrate Google's calendar API so the parents can see the school's schedule.
---

## MVPs & Functionality

For our minimum viable product, we will implement the following: 
### Integrate Google OAuth for user sign in 
  * Users can sign in to Umbrella using their Google credentials 
### Profile Show View 
  * Parents can see their child's information, including any developmental milestones they reach 
### Teacher Posted Message Feed 
  * Teachers can create, view, edit, and delete posts 
  * Button for adding post will only be available for teachers, but the feed will look the same for parents and teachers, except for an "+" button 
  * Teachers can choose who sees their post (private to a particular family, to a slected group, or public to the class)
### Use Native Camera
  * Integrate the use of the user's native camera for taking and uploading images
---

## Technologies Used 

For this project, we are going to be writing the backend in Ruby, and use Rails on the backend to facilitate getting the project up and running quickly. We will be using Google's OAuth to integrate signing in with Google credentials, and will be using React Native for rendering on the frontend. We will utilize PostgreSQL for our database.

## Potential Challenges 

Since we are learning React Native and building our app in one week, we are expecting to see most of our challenges show up when it comes to navigation within our app. Since React Native doesn't use routes, learning how React-Navigation works will be one initial hurdle. Also, OAuth is new to all of us, so we are expecting that integrating Google OAuth in our login screen will be our first major challenge to overcome.
---

## Weekend 0

### Lily
  * Create React Native project 
  * Initially used create-react-native, but discovered limitations with that configuration 
  * Create React Native project using the `init` command, configure project 
  
### Mitch 
  * Create Rails backend for user authentication 
  * Create and register Umbrella app with Google for OAuth 
  * Create database schema
  
### Guy
  * Create dummy login & profile pages to test navigation within React Native 
  * Read style documentation, experiment with styling in React Native 
  * Work on integrating Google OAuth into the frontend
---

## Wireframes 

![Wireframes](https://github.com/Rainmire/umbrella/blob/master/docs/UmbrellaApp.png)


---
