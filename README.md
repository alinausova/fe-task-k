# Kertos FE Interview

## React + TypeScript + Vite

To run this project, you need to have Node.js installed on your machine.

### Install dependencies

```bash
yarn install
```

### Run the project

```bash
yarn dev
```

## Interview task
Using Material UI, Formik and Yup implement the sign up form with the following fields:
- First name 
- Last name
- Password
- Confirm password

The form should have the following validations:
- First name, password, and confirm password are required fields
- Password should be at least 12 characters long
- Password and confirm password should match
- When a field is invalid, it should be highlighted red and the helper text should be shown
- When the form is invalid, the submit button should be disabled
- When the form is submitted, the data should be logged to the console

Follow the design in the screenshots below.
All necessary assets are provided in the `assets` folder. The MUI theme palette and typography should be used to match the design.

![Screenshot 2024-04-12 at 14.28.53.png](./docs/images/Screenshot%202024-04-12%20at%2014.28.53.png)
![Screenshot 2024-04-12 at 14.28.27.png](./docs/images/Screenshot%202024-04-12%20at%2014.28.27.png)

