# Alpha Service (basic flow)

## Project description

This project was part of a job application. It is a service for ordering and scheduling motorcycle repair services. In this project I used:

- **recoil** - state management library for React
- **react-router** - routing library for the React
- **Formik** - open source form library for React
- **yup** - schema builder for runtime value parsing and validation
- **Day.js** - JavaScript library for parsing, validating, manipulating and displaying dates and times
- **MUI** - component library for customization of components and features

## Project result

> User should be able to log in with his email. If he has already made some orders, a table with his order details will be displayed on "My Orders" page. If there are no previous orders, the user is presented with a component that contains a button to create a new order. On the "New order" page, user can select a brand and a model of the motorcycle, enter it's model year and milage, select repair service's date and time etc. By clicking on the "Create order" button, user gets redirected to the "My orders" page where the table with his order details will be displayed. If the user logs out, his data won't be lost because his orders are stored in local storage, so when the user logs in again, his previously created orders will be there.

![alpha_service_basic_flow](/src/assets/alpha_service_basic_flow_.gif)

## Project background

This is one of the first projects that I made from scratch. I made the first version couple of months prior to thi one, but I wasn't pleased with the result so I recently decided to do it again properly. I learned a lot of new stuff in this process (well, I imagine I ought to, as from time to time I had a feeling my brain is going to explode! But it didn't, so, hopefully, it made me smarter 😊). Many things were new to me, like file structuring, arhitecture of a project, the whole logic for fetching and displaying data from CSV files, creating and using custom hook in React, responsiveness and some smaller things like writing a (hopefully) useful README file etc. I really dedicated my time and mind into finishing this project the best I could. If I wrote it again, I know it would be even better, but I guess that's how the learning process goes, and, honestly, I'm looking forward for more.

## Install and Run the Project

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.
