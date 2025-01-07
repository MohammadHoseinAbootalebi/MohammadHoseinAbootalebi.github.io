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
* **Classifiers:** The classifier section of the Assisti database is dedicated to the artificial intelligence models that are highly focused on classifying objects.
  * Tables:
    * **Animal Classifier:** This model database table is dedicated to Assisti's animal classifier application.
      * Database fields:
        * **Owner:** This refers to the owner or creator of the object model, which is the Assisti Auth User. It has a many-to-one relationship with the Auth User model.
        * **Title:** This is the title of each created object model, provided by the user.
        * **Image:** This field is dedicated to the image file that Assisti's user will upload for prediction.
        * **Label:** This label represents the prediction result after the uploaded image is processed by Assisti's animal classifier artificial intelligence model.
        * **Creation Date and Time:** This represents the date and time when animal classifier model was created.
        * **ID:** This is the unique identifier for the animal classifier models.
* **Self-Driving Automobile Models:** This section of Assisti's database is dedicated to artificial intelligence models that are highly focused on developing models used in automation, robotics, and self-driving automobiles.
  * Tables:
    * **Road Sign:** This database table forms the backbone of the road sign detection schema in the road sign detection section of the Assisti project.
      * Database fields:
        * **Owner:** This refers to the owner or creator of the object model, which is the Assisti Auth User. It has a many-to-one relationship with the Auth User model.
        * **Title:** This is the title of each created object model, provided by the user.
        * **Image:** This field is dedicated to the image file that Assisti's user will upload for prediction.
        * **Label:** This label represents the prediction result after the uploaded image is processed by Assisti's road sign detection artificial intelligence model.
        * **Creation Date and Time:** This represents the date and time when road sign model was created.
        * **ID:** This is the unique identifier for the road sign models.

#### Technology Stack

**The Power of Django for Assisti's Backend**
Assisti is built on the Django framework, celebrated as one of the most cutting-edge tools in software development. Known for its scalability, security, and rapid development capabilities, Django ensures Assisti’s backend is robust and future-ready, delivering seamless and secure AI-powered experiences.

**Python: The Heart of AI Innovation**
At the core of Assisti lies Python, the pioneer language of artificial intelligence. Trusted by leading tech giants, Python powers everything from natural language processing to machine learning, making it the perfect choice for Assisti to stay ahead in the AI revolution.

**Flutter and Dart: Cross-Platform Brilliance**
For Assisti’s mobile interface, I leverage Flutter and Dart—a game-changing duo in cross-platform development. With Flutter’s expressive UI capabilities and Dart’s fast performance, Assisti delivers consistent, visually stunning, and responsive experiences on both Android and iOS devices.

### **Backend Development**

ChatGPT Notes:

* **Server Setup** : Set up a server environment (e.g., Node.js, Django, or any backend framework).
* **Database Design** : Create the database schema, relationships, and models.
* **API Development** : Design and implement RESTful or GraphQL APIs to handle CRUD operations.
* **Authentication & Authorization** : Implement user authentication (e.g., JWT, OAuth) and role-based access control.
* **Business Logic** : Write the core logic for application functionality (e.g., order processing, payment handling).
* **Artificial Intelligence Development** : Explaining the AI models used in the Assisti.

---

#### Server Setup

#### Database Design

#### API Development

#### Authentication & Authorization

To create a robust and scalable backend with a focus on extensibility and security, the Assisti backend was developed using the powerful Django framework and Python programming language. Django’s versatility allows for rapid development, while its built-in security features ensure data protection and minimize vulnerabilities. Python's simplicity and efficiency further enhance the backend's performance, making it easier to maintain and expand as the application grows. This combination of technologies ensures that the backend can handle increased user traffic and new feature integrations seamlessly. Additionally, the flexible architecture supports continuous improvements, positioning the Assisti backend for long-term success and adaptability.

To ensure extensibility, a key characteristic envisioned for Assisti, the development of the backend user models was carefully designed with scalability and flexibility in mind. The following base code serves as the foundation for the Assisti user model, allowing for seamless customization and integration of additional features as needed. By implementing a modular architecture, the user model can accommodate future enhancements without disrupting the core functionality. This approach not only simplifies maintenance but also aligns with the project's goal of supporting evolving user requirements. The base code exemplifies this commitment to adaptability and forward-thinking design.

```Python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

# - > Libraries

## -- >> Django Auth Models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
)

## -- >> Importing django settings
from django.conf import settings

## -- >> Getting the auth user model
User = settings.AUTH_USER_MODEL

## -- >> Django Models
from django.db import models

## -- > Django Utils Translations
from django.utils.translation import gettext as _

## -- >> Import UUID
import uuid

## -- >> Import Random Package
import random

## -- >> Import string
import string

## -- >> Import Slugify
from django.utils.text import slugify

# - > Modules

## -- >> Import Managers
from .managers import AssistIUserManager


def generate_random_username(max_length=80):
    """
        Generate a random username based on a base name with a random suffix.
        Ensures it's alphanumeric, lowercased, and within max_length.
    """

    # Use base_name or default to a generic prefix
    base_name = "user"
    base_name = slugify(base_name)[:max_length - 8]  # Limit base name length

    # Generate a random alphanumeric suffix
    suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))

    # Combine base name and suffix
    username = f"{base_name}_{suffix}"

    # Truncate if necessary
    return username[:max_length]


class AssistIUser(AbstractBaseUser, PermissionsMixin):
    """ Assisti User Model """

    ## -- >> User email
    email = models.EmailField(_('email address'), unique=True)

    ## -- >> User username
    username = models.CharField(max_length=150, blank=True, null=True, unique=True, default=generate_random_username)

    ## -- >> User full name
    name = models.CharField(max_length=100, null=True, blank=True)

    ## -- >> Created Account date time
    date_joined = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    ## -- >> Whether this user has an active account with purchased product or not
    is_active = models.BooleanField(default=False)

    ## -- >> Whether this account is verified
    is_verified = models.BooleanField(default=False)

    ## -- >> Whether this user is Assisti employer or not
    is_staff = models.BooleanField(default=False)

    ## -- >> Two-factor code field
    two_factor_code = models.CharField(max_length=6, blank=True, null=True)

    ## -- >> User Unique ID
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    ## -- >> Assisti User Manager
    objects = AssistIUserManager()

    ## -- >> Override the required to be logged in parameter to assisti email
    USERNAME_FIELD = 'email'

    ## -- >> Assisti Required Fields
    REQUIRED_FIELDS = [
        "name",
    ]

    ## -- >> Assisti Base User Meta Options
    class Meta:
        ### --- >>> Single Object Name
        verbose_name = 'Assisti User'

        ### --- >>> Plural Object Names
        verbose_name_plural = 'Assisti Users'

    ## -- >> Show object name with the User email
    def __str__(self):
        return self.email

    ## -- >> Method to generate and save a 2FA code
    def generate_two_factor_code(self):
        ### --- >>> Generate 6-digit code
        self.two_factor_code = str(

            #### ---- >>>> Return random integer in range [a, b], including both end points.
            random.randint(
                100000, 999999,
            ),

        )

        ### --- >>> Save the User object model with new assigned TFC (Two-Factor Code)
        self.save()


# - > Create Profile object model
class Profile(models.Model):
    ## -- >> One-to-One relationship with the Authentication user
    owner = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)

    ## -- >> Name
    name = models.CharField(max_length=500, blank=True, null=True)

    ## -- >> email
    email = models.EmailField(null=True, blank=True)

    ## -- >> Username
    username = models.CharField(max_length=300, blank=True, null=True)

    ## -- >> Profile biography
    bio = models.TextField(blank=True, null=True)

    ## -- >> Profile creation data time
    created = models.DateTimeField(auto_now_add=True)

    ## -- >> Profile Unique ID
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    ## -- >> Class Meta
    class Meta:
        ### --- >>> Indexes for index searching in the database
        indexes = [
            models.Index(
                fields=[
                    'name',
                    'id',
                ],
            ),
        ]

    ## -- >> Change the name of object name in administrator | Show the object models based on profile name
    def __str__(self):
        return self.name

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

```

📌 One of my core strengths is writing clean, well-structured, and fully documented code, ensuring readability and ease of understanding for seamless collaboration and future maintenance.

In Django development, extending the user authentication model is best achieved by creating custom user models that inherit from `AbstractBaseUser`. This approach provides greater flexibility for future enhancements and customizations. I have implemented this key feature, ensuring the user model is robust, scalable, and adaptable to evolving project needs. By following this best practice, the backend is better positioned for seamless integration of advanced functionalities. This implementation highlights my focus on building maintainable and forward-thinking solutions.

As demonstrated in the Assisti code above, the `AssistIUser`, a customized Django backend user model, includes the following attributes designed to enhance functionality and adaptability.

* **Email:** This field stores the email addresses of Assisti users, serving as a cornerstone for authentication and authorization processes. Recognized as the "email address" in the admin panel, it is designed to be unique, ensuring every user has an exclusive identifier. Beyond authentication, this email is integral to various platform functionalities, including subscription services, successful payment confirmations, and other critical notifications. Most importantly, it supports secure login through cutting-edge two-factor authentication, where verification codes are sent via email—a widely adopted standard in modern authentication systems across platforms.
* **Username:** Till adding the username AssistiUser description.
* **Name:** wwwwwwwwwwwwwwwwwww
* **Date Joined:** wwwwwwwwwwwwwwwwwww
* **Is Active:** wwwwwwwwwwwwwwwwwww
* **Is Verified:** wwwwwwwwwwwwwwwwwww
* **Is Staff:** wwwwwwwwwwwwwwwwwww
* **Two Factor Code:** wwwwwwwwwwwwwwwwwww
* **ID:** wwwwwwwwwwwwwwwwwww
* **Objects:** wwwwwwwwwwwwwwwwwww
* **Username Field:** wwwwwwwwwwwwwwwwwww
* **Required :** wwwwwwwwwwwwwwwwwww

#### Business Logic

#### Artificial Intelligence Development

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
