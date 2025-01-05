# 🤖 Assisti 🤖

Assisti is your assistant AI bot 😉🤖!

**Description:**

Assisti is a multidisciplinary professional project that seamlessly integrates UI design, front-end and back-end development, mobile app design, and advanced AI engineering. This ambitious initiative encompasses multiple sub-applications, each featuring a distinct AI model, designed for intuitive use through a user-friendly interface and robust backend architecture. The project leverages state-of-the-art techniques in deep learning, particularly cutting-edge Convolutional Neural Network (CNN) approaches, to address complex challenges in computer vision and machine learning. By blending these advanced technologies with practical design and development practices, Assisti exemplifies innovation in AI-driven application development.

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

#### Database Architecture

As Assisti is a multidisciplinary project that combines full-stack development and artificial intelligence engineering, its database schema includes several models with a common label field that should be predicted by the Assisti AI models. The following section shows the Assisti database schema:

![Assisti Simple View](../Assets/Database%20Schema/Assisti%20-%20Simple%20View.png)

![Assisti Database Schema](../Assets/Database%20Schema/Assisti.png)

The core Assisti database tables are categorized into the following sections:

* **Assisti Chat Models**
* **Users**
* **NLP Models**
* **Classifiers**
* **Self-Driving Automobile Models**

In the following, the sub-tables of each section will be explained:

* **Users** : This table is used to store general user information and to manage authentication and authorization processes.
  * *Tables:*
    * **Auth User:** This object model will primarily be used for authentication and authorization.
      * Database fields:
        * **Name:** This is the user's full name.
        * **Email:** This field is designated for the user's email.
        * **Username:** This field is designated for the user's username.
        * **Joined Date:** This field is designated for the user's join date and time.
        * **Is Active:** This field indicates whether the user account is active.
        * **Is Verified:** This field indicates whether the user account has a verified email address.
        * **Is Staff:** This field indicates whether this profile belongs to Assisit staff.
        * **ID:** This is the unique ID of this user object model.
    * **Profile:** This is model will be used for Authencticated and authorization user's profile.
      * Database fields:
        * **Profile Owner:** This is a one-to-one relationship with the Auth user model field.
        * **Name:** This is the profile model name.
        * **Email:** This is the profile model email, which is the same as the authentication email.
        * **Username:** This is the profile model username, which is the same as the authentication username.
        * **Biography:** This is the profile model biography.
        * **Creation Date and Time:** This is the profile model creation date and time.
        * **ID:** This is the profile model unique id.
* **Assisti Chat Models:** This section of the Assisti database is dedicated to the Assisti chatbot, which the end-user can interact with for various purposes, such as summarizing, grammar checking, practicing English or other languages, asking scientific questions, assisting with coding, and more.
  * *Tables:*
    * **Message:** This message table contains each message that will be sent to the Assisti chatbot.
      * Database fields:
        * **Owner:** This is the authenticated user who sends each message object model. Therefore, it has a many-to-one relationship with the Auth User model.
        * **Category:** This is the category to which this message is related. It has a many-to-one relationship with the Category model.
        * **Message:** This is the message body that the authenticated user sends to the Assisti chatbot.
        * **Answer:** This is the answer that the Assisti bot will provide in response to this message.
        * **Creation Date and Time:** This is the message model creation date and time.
        * **ID:** This is the message model unique id.
    * **Category:** This database table is dedicated to the message categories that Assisti end-users can use to ask the Assisti chatbot messages in different categories, or 'chatrooms.' This feature of Assisti is similar to ChatGPT by OpenAI.
      * Database fields:
        * **Owner:** This is the authenticated user who creates different message categories. It has a many-to-one relationship with the Auth User model.
        * **Name:** This is the category name text field for this table.
        * **Creation Date and Time:** This is the category model creation date and time.
        * **ID:** This is the category model unique id.
* **NLP Models:** This section of the Assisti Super Artificial Intelligence project is dedicated to designing the database tables used in artificial intelligence models, primarily focused on the field of natural language processing.
  * Tables:
    * **OCR Model:** This table is dedicated to the Optical Character Recognition (OCR) model in the Assisti.
      * Database fields:
        * **Owner:** This refers to the owner or creator of the object model, which is the Assisti Auth User. It has a many-to-one relationship with the Auth User model.
        * **Title:** This is the title of each created object model, provided by the user.
        * **Image:** This is the OCR image uploaded by the user, intended to be processed by the Assisti OCR application.
        * **Label:** This is the label associated with the image, predicted by the Assisti OCR application, with the extracted text saved in this field.
        * **Creation Date and Time:** This represents the date and time when the OCR model was created.
        * **ID:** This is the unique identifier for the OCR model.
* **Classifiers:** Till adding the classifiers description.

#### Technology Stack

Not added yet...

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
