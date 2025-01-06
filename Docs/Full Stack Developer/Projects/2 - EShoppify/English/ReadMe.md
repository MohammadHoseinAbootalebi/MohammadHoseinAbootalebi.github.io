# 🛒EShoppify 🛒

Shop it with EShoppify 😉🛒!

**Description:**

EShoppify stands out as one of the most ambitious projects in my portfolio, showcasing my expertise in both design and development. This fully integrated e-commerce platform allows users to browse and purchase products seamlessly, manage orders efficiently, and handle wallet transactions such as charging and transferring balances. With features tailored to enhance the user experience, including product management, secure payments, and streamlined order tracking, EShoppify exemplifies the potential of modern e-commerce technology. It’s a project I’m truly proud of and a testament to my dedication to creating impactful digital solutions 😉.

## Table of Contents

Not added yet ....

## 🎨 Design 🎨

### **User Research**

### **Define Objectives**

### **Wireframing**

### **Visual Design**

### **Prototyping**

## 💻 Development 💻

### **Requirement Analysis & Architecture Planning**

ChatGPT Note:

* Understand the functional and technical requirements.
* Plan the backend architecture (e.g., APIs, databases).
* Decide on the technology stack (e.g., frontend framework, backend language, database).

---

#### Database Architecture

As EShoppify is a kind of professional e-commerce platform, it has a complex database, which includes the following tables:

* EShoppify Database Schema Concise View

![Database Schema Compact View](../Assets/Database%20Schema/EShoppify%20-%20Simple.png)

* EShoppify Database Schema Compact View

![Database Schema Beautiful View](../Assets/Database%20Schema/EShoppify%20-%20Beautiful%20View.png)

The EShoppify database schema is generally divided into three main parts:

* User Model and Interactions
* Order and Shipping
* Product-related Models

##### User Model and Interactions

This part mainly contains models that hold user-related information. The descriptions of its sub-database tables are provided here.

* **Auth User**: This is the base model used for backend operations, specifically for authentication and authorization.
  * Database fields:
    * **First name**: This field is dedicated to the user's first name.
    * **Last name**: This field is dedicated to the user's last name.
    * **email**: This field is dedicated to the user's email.
    * **Username**: This field is dedicated to the user's username.
    * **Password**: This field is dedicated to the user's password.
    * **ID**: This field is dedicated to the user's unique id.
* **Profile**: This is the profile object model created for each authenticated user. It has a one-to-one relationship with the authenticated user.
  * Database fields:
    * **Auth User Owner:** The authenticated user to whom this profile is dedicated. It has a one-to-one relationship with the authenticated user.
    * **First Name:** Profile first name, which is the same as the authenticated user's first name.
    * **Last Name:** Profile last name, which is the same as the authenticated user's last name.
    * **Bio:** Profile biography, which is filled in to provide a brief description.
    * **Image:** Profile image, which serves as a showcase of the profile.
    * **Phone:** User phone number
    * **Email:** Profile email, which is the same as the authenticated user's email.
    * **Username:** Profile username, which is the same as the authenticated user's username.
    * **Updated:** Last updated profile object model date and time.
    * **Created:** Profile creation date and time.
    * **ID:** This field is dedicated to the profile's unique id.
* **Addresses:** This section of the database will be dedicated to the addresses provided by the user, which will be used to ship the purchased products.
  * Database fields:
    * **Address Owner:** This field represents a many-to-one relationship, indicating that each user can have multiple addresses and specifying who owns each address.
    * **Address:** This is the address information.
    * **Creation Date and Time of Address:** This field shows the date and time when this address object model was created.
    * **ID:** This field is the unique ID of the address object model.
* **Review:** This EShoppify database table is dedicated to EShoppify users who leave reviews on each product in EShoppify.
  * Database fields:
    * **Owner:** This field represents a many-to-one relationship with the Auth User model, indicating which user owns the review.
    * **Product:** This field is dedicated to the product with which each review is specifically coupled.
    * **Rating:** This field is for storing the stars given to the product on which this review is left by the end EShoppify user.
    * **Text:** This is the text of the review left by the user.
    * **Slug:** This is the user-friendly text URL used for URL routing.
    * **Purchased:** This boolean field is used to indicate whether the user leaving the review has purchased the product on which the review is left.
    * **Appropriate:** This field determines whether the review text is appropriate or not.
    * **Creation Date and Time of Address:** This is the creation date and time of each review object model.
    * **ID:** This is the unique ID of the review objects.

##### Order and Shipping

The **Order and Shipping** section of EShoppify primarily focuses on managing users' orders and processing those ready for shipping. This section is crucial for all e-commerce platforms, including Amazon, Alibaba, EShoppify, and others.

* **Wallet:** This model is designed for each EShoppify user. It functions as an electronic wallet for users, primarily used for purchasing, recharging, transferring funds, and more.
  * Database fields:
    * **Owner:** Represents a one-to-one relationship with the Authentication User model of EShoppify.
    * **Balance:** Indicates the current amount of money or credit available in the user's wallet.
    * **Card Number:** A 16-digit number associated with the user's credit or debit card.
    * **CVV2:** A 3- or 4-digit security code associated with the credit card for additional verification.
    * **Expiry Date:** The date when the wallet's associated card or balance will expire.
    * **Last Updated:** The most recent date and time when the wallet information was modified.
    * **Created Date:** The date and time when the user's wallet model was initially created.
    * **ID:** A unique identifier for the user's wallet model.
* **Charge Wallet:** This database table is used for the Charging Wallet model, which manages the process of increasing the balance in an EShoppify user's wallet.
  * Database fields:
    * **Wallet Owner:** This is the Wallet object database model, which serves as the target for balance increases requested by the Charging Wallet model. It has a many-to-one relationship with the Charging Wallet database model.
    * **Amount:** This is the amount of money requested to be added to the wallet owner's balance.
    * **Verified:** This field is used to check whether the charging wallet request has been verified.
    * **Updated:** This field stores the last datetime when this object model was modified.
    * **Created:** This is the initial datetime when the wallet charge object database model was created.
    * **ID:** This is the unique identifier for each charging wallet object model.
* **Transfer:** Till Adding the transfer model description.
* **Order:** Not added yet.

##### Product-related Models

Not added yet.

### **Backend Development**

ChatGPT Notes:

* **Server Setup** : Set up a server environment (e.g., Node.js, Django, or any backend framework).
* **Database Design** : Create the database schema, relationships, and models.
* **API Development** : Design and implement RESTful or GraphQL APIs to handle CRUD operations.
* **Authentication & Authorization** : Implement user authentication (e.g., JWT, OAuth) and role-based access control.
* **Business Logic** : Write the core logic for application functionality (e.g., order processing, payment handling).

---

Not added yet.

### **Frontend Development**

ChatGPT Notes:

* **Component Development** : Build reusable UI components using a framework (e.g., React, Angular, or Vue.js).
* **State Management** : Implement state management (e.g., Redux, Vuex) for data consistency.
* **API Integration** : Connect the frontend with backend APIs for dynamic data.
* **Routing** : Set up client-side routing for seamless navigation (e.g., React Router).
* **Responsive Design Implementation** : Ensure the application is responsive across devices.

---

Not added yet.

### **Integration**

ChatGPT Notes:

* **Full Stack Integration** : Combine the frontend with the backend to create a cohesive application.
* **Third-Party Service Integration** : Integrate external services like payment gateways (e.g., Stripe, PayPal), analytics, or cloud storage (e.g., AWS S3).

---

Not added yet.

### **Testing**

ChatGPT Notes:

* **Unit Testing** : Test individual units or components of the application.
* **Integration Testing** : Ensure the frontend and backend work seamlessly together.
* **End-to-End Testing** : Simulate user journeys to test the full application flow (e.g., Selenium, Cypress).
* **Performance Testing** : Evaluate application speed and scalability under load.

---

Not added yet.

### **Optimization**

ChatGPT Notes:

* **Code Optimization** : Refactor code for readability, performance, and scalability.
* **Database Optimization** : Index databases and optimize queries.
* **Frontend Optimization** : Minify assets, lazy-load resources, and optimize rendering.

---

Not added yet.

### **Deployment**

ChatGPT Notes:

* **Environment Setup** : Prepare production environments (e.g., cloud services like AWS, Google Cloud, or Heroku).
* **CI/CD Implementation** : Set up Continuous Integration/Continuous Deployment pipelines.
* **Monitoring Tools** : Integrate monitoring tools for error tracking and performance (e.g., Sentry, New Relic).

---

Not added yet.

### **Maintenance & Iteration**

ChatGPT Notes:

* **Bug Fixing** : Address any issues or bugs reported by users.
* **Feature Updates** : Add new features or improve existing ones.
* **Security Updates** : Regularly patch vulnerabilities and update dependencies.

---

Not added yet.
