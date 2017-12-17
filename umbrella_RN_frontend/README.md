# Umbrella

## Background & Overview

Hello and Welcome! Umbrella is a mobile application that facilitates communication between teachers and parents. This was inspired by an app that Lily uses for her son's preschool, but found it to have limitations, and overall the design left much to be desired. Through Umbrella, each child will have a profile page, which will have the child's picture, and list their name, class, teacher, contact information, and milestones. Teachers can also post messages specific to certain children, or to the whole class, and parents can see those in a feed. As bonuses, our plan is to implement direct chat functionality, and integrate Google's calendar API so the parents can see the school's schedule.

## Wireframes
![app-wireframe](https://github.com/Rainmire/umbrella/blob/master/docs/UmbrellaApp.png)

## MVPs & Functionality

For our minimum viable product, we will implement the following:

* Integrate Google OAuth for user sign in

    Users can sign in to Umbrella using their Google credentials

* Profile Show View

    Parents can see their child's information, including any developmental milestones they reach
* Teacher Posted Message Feed

    Teachers can create, view, edit, and delete posts
    Button for adding post will only be available for teachers, but the feed will look the same for parents and teachers, except for an "+" button
    Teachers can choose who sees their post (private to a particular family, to a selected group, or public to the class)
* Use Native Camera

    Integrate the use of the user's native camera for taking and uploading images
* Realtime chatting

    Parents and teachers can message with each other for any realtime communication
* School calendar

    Teacher can import school schedule using google calendar

## Technologies Used

Backend: Ruby | Ruby on rails | PostgreSQL  
Frontend: JavaScript | React-native | Socket.io

For this project, we are going to be writing the backend in Ruby, and use Rails on the backend to facilitate getting the project up and running quickly. We will be using Google's OAuth to integrate signing in with Google credentials. Socket.io for realtime chatting and will be using React Native for rendering on the frontend. We will utilize PostgreSQL for our database.

## Schedule and Timeline
### Weekend 0

Divided and conquered to kick off the project.

Lily

* Tested different React Native project configuration using the `init` command and `create` command
* Created frontend React Native project
* implemented the in-app safari pop up

Mitch

* Created Rails backend for user authentication
* Created and registered Umbrella app with Google for OAuth
* Created database schema

Guy

* Created dummy login & profile pages to test navigation within React Native
* Read style documentation, experimented with styling in React Native
* Worked on integrating Google OAuth into the frontend
### Week 1 Day 1

Tackle the redirect and navigation problem from the weekend, Scope out the project before moving into detailed MVPs

Lily & Guy

* Figure out how the redirect work in react-native
* Start the profile frontend component

Mitch

* Test the possibility of handling Google OAuth in frontend
* Start the user backend
### Week 1 Day 2,3

Work on Feed MVP

Mitch

* Work on Feed backend

Guy

* Implement Native Camera

Lily

* Work on Feed component difference between teacher and parents

### Week 1 Day 4,5

Work on Realtime Chatting MVP

Mitch

* Give a brief tutorial about Socket
* Work on backend

Lily
* Work on switch chatting component

Guy
* Work on chatting interface component

### Week 1 Day 6

Working on Google calendar

### Week 1 Day 7

Work on optional feathers: like, comment, normal login form
