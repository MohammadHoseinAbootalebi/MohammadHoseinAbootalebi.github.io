# 🤖 Assisti 🤖

Assisti is your assistant AI bot 😉🤖!

**Description:**

Assisti is a multidisciplinary professional project that seamlessly integrates UI design, front-end and back-end development, mobile app design, and advanced AI engineering. This ambitious initiative encompasses multiple sub-applications, each featuring a distinct AI model, designed for intuitive use through a user-friendly interface and robust backend architecture. The project leverages state-of-the-art techniques in deep learning, particularly cutting-edge Convolutional Neural Network (CNN) approaches, to address complex challenges in computer vision and machine learning. By blending these advanced technologies with practical design and development practices, Assisti exemplifies innovation in AI-driven application development.

## Table of Contents

- [🤖 Assisti 🤖](#-assisti-)
  - [Table of Contents](#table-of-contents)
  - [🎨 Design 🎨](#-design-)
    - [User Research](#user-research)
    - [Define Objectives](#define-objectives)
    - [Wireframing](#wireframing)
    - [Visual Design](#visual-design)
    - [Prototyping](#prototyping)
  - [💻 Development 💻](#-development-)
    - [Requirement Analysis \& Architecture Planning](#requirement-analysis--architecture-planning)
      - [Database Architecture](#database-architecture)
      - [Technology Stack](#technology-stack)
    - [Backend Development](#backend-development)
      - [Server Setup](#server-setup)
        - [Frameworks and Programming Languages](#frameworks-and-programming-languages)
          - [Backend Framework](#backend-framework)
          - [Python Programming Language](#python-programming-language)
          - [Web Frontend Design Programming Languages](#web-frontend-design-programming-languages)
          - [Mobile Framework](#mobile-framework)
          - [Dart Programming Language](#dart-programming-language)
        - [Backend Libraries](#backend-libraries)
      - [Database Design](#database-design)
        - [Assisti Auth User](#assisti-auth-user)
        - [Profile](#profile)
      - [API Development](#api-development)
      - [Authentication \& Authorization](#authentication--authorization)
        - [Assisti Auth User Database Model](#assisti-auth-user-database-model)
        - [Two-Factor Authentication System](#two-factor-authentication-system)
      - [Artificial Intelligence Development \& Architecture](#artificial-intelligence-development--architecture)
        - [Overview Workflow](#overview-workflow)
          - [Landing](#landing)
        - [OCR](#ocr)
          - [Overview](#overview)
          - [EasyOCR Overview](#easyocr-overview)
          - [`easyocr` Backbone](#easyocr-backbone)
          - [Assisti `ocr/utils.py`](#assisti-ocrutilspy)
          - [Assisti `ocr/models.py`](#assisti-ocrmodelspy)
          - [Assisti `ocr/signals.py`](#assisti-ocrsignalspy)
          - [Assisti `ocr/forms.py`](#assisti-ocrformspy)
          - [Understanding Assisti's Routing (`urls.py`) and Logic (`views.py`) in the OCR Module](#understanding-assistis-routing-urlspy-and-logic-viewspy-in-the-ocr-module)
    - [Testing](#testing)
    - [Deployment](#deployment)

## 🎨 Design 🎨

### User Research

### Define Objectives

### Wireframing

### Visual Design

### Prototyping

## 💻 Development 💻

### Requirement Analysis & Architecture Planning

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

### Backend Development

ChatGPT Notes:

* **Server Setup** : Set up a server environment (e.g., Node.js, Django, or any backend framework).
* **Database Design** : Create the database schema, relationships, and models.
* **API Development** : Design and implement RESTful or GraphQL APIs to handle CRUD operations.
* **Authentication & Authorization** : Implement user authentication (e.g., JWT, OAuth) and role-based access control.
* **Business Logic** : Write the core logic for application functionality (e.g., order processing, payment handling).
* **Artificial Intelligence Development** : Explaining the AI models used in the Assisti.

---

#### Server Setup

The server setup will be explained in the following subtopics:

##### Frameworks and Programming Languages

###### Backend Framework

Django serves as a powerful and flexible backend framework, making it an excellent choice for developing advanced systems like Assisti, an AI-powered project. Its "batteries-included" philosophy provides a wide range of built-in tools and libraries, enabling developers to streamline the development process without relying heavily on external dependencies. This approach not only accelerates the development cycle but also helps bring innovative solutions like Assisti to users more quickly, maintaining a competitive edge in the AI landscape.

Security is a critical aspect of any AI-driven platform, and Django excels by offering built-in defenses against common web vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). These features ensure that sensitive data and AI-driven operations remain secure, reinforcing user trust and maintaining the platform's integrity.

Django's scalability further solidifies its suitability for projects like Assisti, which may need to handle a growing user base and increasing data complexity. Its architecture is designed to efficiently manage high volumes of data and interactions, ensuring the system remains responsive as it expands. Moreover, Django's extensive and active developer community provides a wealth of resources and continuous support, ensuring that Assisti can evolve and stay at the forefront of AI technology.

###### Python Programming Language

Python is a high-level, interpreted programming language celebrated for its simplicity and readability, making it an ideal choice for projects like Assisti. Its clean and intuitive syntax, resembling natural English, enables developers to write clear and maintainable code, simplifying debugging and fostering efficient development. These qualities have made Python a go-to language across diverse fields, including artificial intelligence, web development, data analysis, and scientific computing.

A key advantage of Python is its versatility. Supporting multiple programming paradigms—such as procedural, object-oriented, and functional programming—it allows developers to adopt the approach best suited to their needs. Python also features an extensive standard library and a vast ecosystem of third-party libraries, which accelerate development and simplify the integration of AI algorithms and other technologies into Assisti.

Python's cross-platform compatibility further strengthens its role in powering Assisti. It runs effortlessly on major operating systems like Windows, macOS, and Linux, ensuring that the platform remains accessible and functional across various environments. Combined with its vibrant community support and continuous evolution, Python provides a robust foundation for building and scaling innovative AI solutions like Assisti.

###### Web Frontend Design Programming Languages

HTML, CSS, and JavaScript form the backbone of web development, each fulfilling a unique role in creating dynamic and responsive user interfaces. HTML (HyperText Markup Language) structures web content, providing a semantic foundation that improves accessibility and enhances search engine optimization (SEO). CSS (Cascading Style Sheets) adds style and visual elements, enabling developers to craft user-friendly designs with consistent branding across devices. JavaScript introduces interactivity and dynamic functionality, transforming static pages into immersive and engaging experiences. Together, these technologies are essential for building responsive, high-performance web applications.

In the context of Assisti, an AI-powered project, the combination of HTML, CSS, and JavaScript is crucial for designing a frontend that is both intuitive and visually appealing. HTML ensures that content is well-structured and accessible, while CSS brings the design to life with themes, layouts, and animations tailored to Assisti's brand. JavaScript enhances the user experience by enabling features such as real-time updates, interactive dashboards, and seamless integration with AI-driven components. This synergy ensures Assisti delivers a modern, engaging, and efficient interface that meets user expectations.

For contemporary frontend designs, these technologies provide unmatched flexibility and scalability. Advanced CSS techniques, such as grid and flexbox, facilitate responsive designs that adapt to different screen sizes, ensuring usability on desktops, tablets, and smartphones. JavaScript frameworks and libraries, like React or Vue.js, streamline the creation of interactive components, such as live feedback systems, personalized recommendations, and real-time visualizations of AI outputs. By leveraging HTML, CSS, and JavaScript, Assisti achieves a cutting-edge, future-ready web interface that effectively showcases its AI capabilities.

###### Mobile Framework

Flutter, developed by Google, is an open-source UI toolkit that allows developers to build natively compiled applications for mobile, web, and desktop platforms from a single codebase. This cross-platform approach greatly reduces development time and costs by enabling developers to write code once and deploy it across multiple platforms, ensuring consistency and efficiency. Flutter’s rich library of customizable widgets and its expressive UI framework make it ideal for creating visually appealing and highly interactive interfaces, which are essential for engaging users in today’s competitive environment.

In the context of Assisti, an AI-driven project, Flutter offers significant benefits. Its ability to deliver native-like performance ensures smooth and responsive interactions, which is critical for providing a seamless user experience. Flutter's hot reload feature further enhances the development process, allowing developers to quickly iterate and test features like interactive dashboards, real-time visualizations of AI outputs, and personalized recommendations. This agility accelerates the deployment of new functionalities, enabling Assisti to respond swiftly to user needs and market trends.

Additionally, Flutter’s expanding ecosystem and active developer community provide a wealth of resources, plugins, and ongoing support, facilitating the integration of advanced functionalities into Assisti. Its open-source nature ensures that the framework evolves alongside technological advancements, enabling Assisti to incorporate new features and maintain a competitive edge. By leveraging Flutter, Assisti can deliver a seamless, engaging, and consistent user experience across multiple platforms, driving user satisfaction and showcasing the project’s AI capabilities effectively.

###### Dart Programming Language

Dart is an open-source, object-oriented programming language developed by Google, specifically designed to create high-performance, cross-platform applications. With its C-style syntax, Dart is familiar to developers experienced in languages like JavaScript, Java, or C#. It supports both just-in-time (JIT) and ahead-of-time (AOT) compilation, ensuring fast development cycles during testing and optimized performance in production environments.

A key strength of Dart is its robust support for asynchronous programming, making it ideal for building responsive applications. The language offers a comprehensive set of libraries and tools, enabling the development of complex and high-performance systems. Dart's type system includes sound null safety, which prevents null-related errors unless explicitly permitted, thereby enhancing code reliability and reducing runtime issues.

In the context of Assisti, an AI-powered project, Dart provides significant advantages. Its strong performance and asynchronous programming capabilities ensure smooth handling of real-time data processing and user interactions, which are essential for an AI-driven platform. Dart's seamless compatibility with Flutter allows Assisti to leverage a unified codebase that runs efficiently on multiple platforms, including iOS, Android, web, and desktop. This cross-platform approach simplifies development and maintenance, enabling Assisti to deliver a consistent, high-quality user experience across diverse devices while maintaining optimal performance and reliability.

##### Backend Libraries

The core libraries, which form the foundation of Assisti, are as follows:

* `asgiref==3.8.1`
  * The `asgiref==3.8.1` library is a vital utility for Python's asynchronous web development, supporting the ASGI (Asynchronous Server Gateway Interface) standard. It provides tools such as sync-to-async and async-to-sync wrappers, simplifying the integration of synchronous and asynchronous code. Ideal for high-performance web applications, `asgiref` enables concurrent request handling, enhancing scalability and responsiveness. This makes it an excellent choice for applications like Assisti, where efficient request management and real-time capabilities are essential for delivering a seamless user experience.
* `Django==5.1`
  * Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Version 5.1 continues to enhance its robust features for building web applications, including ORM, templating, form handling, and security. It supports both traditional synchronous and modern asynchronous programming, making it versatile for various web development needs. Its scalability, built-in admin interface, and comprehensive documentation make it an excellent choice for developers. Django’s focus on simplicity and productivity enables developers to focus on writing their apps without reinventing the wheel.
* `django-phonenumber-field==8.0.0`
  * The `django-phonenumber-field` library provides a Django model field and form field for validating and storing international phone numbers. It integrates with the `phonenumbers` library to ensure accurate parsing, validation, and formatting of phone numbers. This library is particularly useful in applications where global phone number support is required. Its flexibility allows for custom formats and easy integration into Django models and forms. It simplifies handling user-entered phone numbers, ensuring consistent and reliable data storage.
* `django-phonenumbers==1.0.1`
  * `django-phonenumbers` bridges the `phonenumbers` library with Django applications, enabling advanced phone number validation and formatting features. This library offers additional support for integrating phone number functionalities directly into Django forms, templates, and views. It ensures consistency in handling phone number data across various components of a Django application. With its reliance on the `phonenumbers` library, it supports global phone number standards. It is particularly suited for projects requiring accurate and uniform phone number processing.
* `phonenumbers==8.13.44`
  * The `phonenumbers` library is a comprehensive Python port of Google’s libphonenumber. It provides functionalities for parsing, validating, and formatting phone numbers in various international formats. The library supports advanced features such as geocoding, carrier detection, and timezone determination for phone numbers. It is an essential tool for applications that involve international communication or phone number data. With robust support for a wide range of phone number formats, it ensures consistency and accuracy.
* `sqlparse==0.5.1`
  * `sqlparse` is a non-validating SQL parser and formatter for Python. It is designed to break down SQL statements into their component parts, making it useful for applications that analyze or process SQL queries. The library includes features for formatting SQL code, ensuring readability and consistency. While it does not validate SQL syntax, it is a powerful tool for enhancing SQL workflows. Its lightweight and dependency-free design make it easy to integrate into Python projects.
* `typing_extensions==4.12.2`
  * The `typing_extensions` library provides backported and experimental type hints for Python’s typing module. It ensures compatibility with older Python versions while offering access to newer typing features. The library is essential for developers aiming to maintain modern type-checked codebases across different Python versions. It includes utilities like `TypedDict`, `Literal`, and `Protocol` that enhance the functionality of Python’s type system. With its compatibility-focused approach, it bridges the gap between Python versions, ensuring consistent typing features.
* `tzdata==2024.1`
  * The `tzdata` library provides a Python package containing timezone database information. It is a critical dependency for libraries and applications that need up-to-date timezone data. This library ensures accurate timezone conversions and calculations, especially for applications dealing with international dates and times. It serves as an alternative to relying on system-installed timezone databases, offering a lightweight and consistent solution. Regular updates ensure the data remains current with global timezone changes.
* `openai`
  * The `openai` library allows developers to integrate OpenAI’s powerful language models and APIs into their Python applications. It supports functionalities such as generating text, answering questions, summarizing content, and more. The library provides a user-friendly interface for interacting with OpenAI’s state-of-the-art AI models. It is widely used in projects involving natural language processing, AI assistants, and creative content generation. Its robust design and documentation make it accessible to developers of all skill levels.
* `djangorestframework-simplejwt~=5.3.1`
  * The `djangorestframework-simplejwt` library is a JSON Web Token (JWT) authentication package for Django REST Framework. It simplifies adding JWT-based authentication to APIs, offering secure and scalable token generation and verification. The library supports advanced features such as token blacklisting, sliding tokens, and custom claims. Its compatibility with Django REST Framework ensures seamless integration into existing APIs. This makes it an ideal choice for applications requiring secure, token-based authentication.
* `djangorestframework~=3.15.2`
  * Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. It provides features like serializers, viewsets, and a browsable API interface, making API development efficient and intuitive. DRF supports advanced functionalities such as authentication, permissions, and throttling. Its flexibility and extensibility make it suitable for projects ranging from simple APIs to complex, enterprise-grade systems. With its robust design and extensive community support, DRF is a cornerstone of API development in Django.
* `easyocr~=1.7.2`
  * `easyocr` is a Python library for Optical Character Recognition (OCR) that supports multiple languages. It uses deep learning models to recognize and extract text from images with high accuracy. The library is simple to use, offering out-of-the-box support for over 80 languages. It is particularly useful for tasks involving document digitization, image-to-text conversion, and multilingual OCR processing. With its lightweight design and extensive functionality, it is a popular choice for developers working on OCR projects.

#### Database Design

##### Assisti Auth User

The Assisti backend user model is designed for extensibility, scalability, and flexibility. It can be customized and expanded easily to accommodate future needs. The provided base code illustrates the user model's foundational structure, allowing seamless addition of features and ensuring smooth integration with evolving requirements. By adopting a modular architecture, the user model can be updated without disrupting core functionality, supporting the project’s vision of growth and adaptability.

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

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
```

As previously explained in the Assisti database schema section, the Auth User backend database model contains following attributes:

* **Email**
  * `email = models.EmailField(_('email address'), unique=True)`
  * Stores the email address of the user, ensuring uniqueness in the system.
* **Username**
  * `username = models.CharField(max_length=150, blank=True, null=True, unique=True, default=generate_random_username)`
  * Stores the username of the user, with a maximum length of 150 characters. It is unique and defaults to a randomly generated value if not provided.
* **Name**
  * `name = models.CharField(max_length=100, null=True, blank=True)`
  * Stores the user's name, with a maximum length of 100 characters. This field is optional.
* **Date Joined**
  * `date_joined = models.DateTimeField(auto_now_add=True, null=True, blank=True)`
  * Automatically records the date and time when the user account was created.
* **Is Active**
  * `is_active = models.BooleanField(default=False)`
  * Indicates whether the user account is active. Default is `False`.
* **Is Verified**
  * `is_verified = models.BooleanField(default=False)`
  * Indicates whether the user's email address has been verified. Default is `False`.
* **Is Staff**
  * `is_staff = models.BooleanField(default=False)`
  * Determines whether the user has staff privileges. Default is `False`.
* **Two-Factor Code**
  * `two_factor_code = models.CharField(max_length=6, blank=True, null=True)`
  * Stores the user's two-factor authentication code, if applicable, with a maximum length of 6 characters.
* **ID**
  * `id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)`
  * Serves as the unique identifier for the user, using a UUID (Universally Unique Identifier).

##### Profile

Upon successfully creating an Assisti user account, a unique profile object is automatically generated. This profile serves various purposes, including frontend display, email notifications, participation in Assisti chatrooms, and more. The backend structure of the profile object model is as follows:

```Python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

# - > Libraries

## -- >> Importing django settings
from django.conf import settings

## -- >> Getting the auth user model
User = settings.AUTH_USER_MODEL

## -- >> Django Models
from django.db import models

## -- >> Import UUID
import uuid

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

As previously explained in the Assisti database schema section, the profile backend database model contains following attributes:

* **Owner**
  * `owner = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)`
  * Links the profile to a specific user account, ensuring a one-to-one relationship. If the user is deleted, the profile is also removed.
* **Name**
  * `name = models.CharField(max_length=500, blank=True, null=True)`
  * Stores the name of the profile owner, with a maximum length of 500 characters. This field is optional.
* **Email**
  * `email = models.EmailField(null=True, blank=True)`
  * Stores the email address associated with the profile. This field is optional and validates email formats.
* **Username**
  * `username = models.CharField(max_length=300, blank=True, null=True)`
  * Stores the username for the profile, with a maximum length of 300 characters. This field is optional.
* **Biography**
  * `bio = models.TextField(blank=True, null=True)`
  * Contains a textual biography or description for the profile. This field is optional and can hold long text.
* **Creation Datetime**
  * `created = models.DateTimeField(auto_now_add=True)`
  * Automatically records the date and time when the profile is created.
* **ID**
  * `id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)`
  * Serves as the unique identifier for the profile, using a universally unique identifier (UUID).

#### API Development

Not added yet.

#### Authentication & Authorization

To create a robust and scalable backend with a focus on extensibility and security, the Assisti backend was developed using the powerful Django framework and Python programming language. Django’s versatility allows for rapid development, while its built-in security features ensure data protection and minimize vulnerabilities. Python's simplicity and efficiency further enhance the backend's performance, making it easier to maintain and expand as the application grows. This combination of technologies ensures that the backend can handle increased user traffic and new feature integrations seamlessly. Additionally, the flexible architecture supports continuous improvements, positioning the Assisti backend for long-term success and adaptability.

##### Assisti Auth User Database Model

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
* **Username:** This field is used to store the username, which increases the uniqueness of Assisti users and allows for potential future use cases.
* **Name:** This field displays the names of Assisti users.
* **Date Joined:** This field records the date and time when each Assisti user joined the platform.
* **Is Active:** This field indicates whether an Assisti user's account is active or not.
* **Is Verified:** This field indicates whether an Assisti user has verified their email address.
* **Is Staff:** This field checks whether an Assisti user is a staff member or an employee of Assisti.
* **Two-Factor Code:** This field stores the two-factor authentication code, which enhances Assisti's authentication and authorization system.
* **ID:** This field serves as the unique identifier for each Assisti user.
* **Objects:** This field specifies the customized Assisti manager responsible for user creation and superuser creation processes.
* **Username Field:** This field determines which attribute of the Assisti Auth User model should be used in authentication processes.
* **Required:** This field specifies which attributes of Assisti users are mandatory.

##### Two-Factor Authentication System

To enhance the security of user authentication in the Assisti project, an optional two-factor authentication (2FA) method has been implemented. This approach involves generating a fixed-length random code, which is sent to the user's email address. During the login process, after the user enters his/her email, they are prompted to provide the two-factor authentication code received in their inbox. This additional step ensures that only the rightful owner of the email account can access the system, adding a significant layer of protection to the login process.

#### Artificial Intelligence Development & Architecture

##### Overview Workflow

In this section, I will provide an overview of the backend development for the Assisti project, focusing on its views, URL routing, and template integration. The views in Django serve as the logic layer, processing user requests and returning appropriate responses, while the URL routing connects these views to specific endpoints, enabling seamless navigation across the application. Additionally, the templates form the bridge between the backend and frontend, rendering dynamic content for the user interface. Each component plays a critical role in ensuring the functionality and responsiveness of the Assisti AI-driven system. This explanation aims to offer insight into how these elements collaborate to create a cohesive and efficient backend architecture for the project.

###### Landing

The landing page is a vital component of any major project, serving as the first point of interaction for users and shaping their initial impressions. For a sophisticated AI-driven project like Assisti, the landing page acts as the gateway to its advanced features, offering a clear and engaging introduction. It not only highlights the project’s purpose and capabilities but also establishes trust and encourages user engagement. A well-designed landing page ensures visitors understand the value of the project and are guided seamlessly to explore further. This crucial section sets the tone for the user experience and reflects the quality and innovation behind Assisti.

In Assisti, the landing page has been meticulously crafted to provide a comprehensive yet intuitive overview of the project’s offerings. Its design prioritizes clarity, user-friendliness, and visual appeal, making it an effective tool for conveying the project’s unique AI-driven solutions. From compelling headlines to strategically placed call-to-actions, every element has been optimized to capture user attention and drive engagement. This section not only showcases Assisti’s core features but also emphasizes its practical applications, ensuring visitors see its relevance to their needs. The following description delves deeper into the design and functionality of this pivotal aspect of Assisti.

The landing page of Project Assisti is designed with a user-friendly interface, featuring a top navigation bar that provides quick access to essential functionalities. It includes a login button, primarily used for authentication, and a signup option for creating new user accounts, enabling seamless authentication and authorization processes within the platform. The page layout is optimized for large screens, ensuring a visually appealing and intuitive user experience. Below is a preview of how the landing page appears on larger devices:

![Landing Page](../Assets/Architecture/Landing/Images/Landing%20Page.png)

To demonstrate my expertise in responsive design and development—a critical skill for a senior full-stack developer—I present my work on the super AI project, Assisti, optimized for both large screens (desktops and PCs) and small screens (mobile platforms). This showcases my ability to create user interfaces that seamlessly adapt across devices, ensuring an exceptional user experience.

It’s important to note that while a Customer Experience (CX) specialist might excel at planning a project's overall strategy, they may lack the ability to design client-centric user interfaces. Similarly, a UI designer might craft visually appealing and intuitive designs but may not fully understand the software development process, potentially leading to conflicts between design and development teams. As a senior full-stack developer, I bridge this gap by combining my skills in design, development, and strategic planning to create cohesive, user-focused products that meet and exceed client expectations.

Below, I highlight the landing page of Assisti, demonstrating its functionality with both the top navigation bar closed and opened, reflecting my commitment to detail and responsiveness in design.

* Landing page when navigation bar is in its closed state

![Landing Page | Mobile Web View | Navbar Closed](../Assets/Architecture/Landing/Images/Landing%20Page%20-%20Mobile%20Web%20View%20-%20Navbar%20Closed.png)

* Landing page when navigation bar is in its opened state

![Landing Page | Mobile Web View | Navbar Opened](../Assets/Architecture/Landing/Images/Landing%20Page%20-%20Mobile%20Web%20View%20-%20Navbar%20Opened.png)

Not added yet.

##### OCR

###### Overview

Optical Character Recognition (OCR) is a technology that converts images of text—such as scanned documents, photos of signs, or handwritten notes—into machine-readable text data. This process enables computers to interpret and manipulate text that was previously locked within physical or digital images, facilitating tasks like editing, searching, and indexing. By transforming visual text into digital formats, OCR serves as a bridge between analog information and digital processing systems.

The primary purpose of OCR is to digitize printed or handwritten text, making it accessible for electronic editing, storage, and analysis. This digitization is crucial for automating data entry processes, reducing the need for manual transcription, and minimizing errors associated with human input. In various industries, OCR streamlines workflows by enabling quick extraction of information from physical documents, thereby enhancing efficiency and productivity.

In the realm of artificial intelligence (AI), OCR plays a significant role by providing the means to process and analyze textual information from diverse sources. AI-powered OCR systems leverage machine learning algorithms to improve accuracy in text recognition, especially in complex scenarios involving varied fonts, languages, and layouts. This integration allows for more sophisticated data analysis and extraction, supporting applications such as automated document classification and information retrieval.

Modern AI-driven OCR systems utilize deep learning techniques to enhance their capabilities. By training neural networks on vast datasets of text images, these systems learn to recognize patterns and features associated with different characters and handwriting styles. This approach significantly improves the accuracy of text extraction, even in challenging conditions like low-quality images or unconventional fonts.

One of the key advancements in AI-based OCR is the ability to handle multilingual text recognition. Traditional OCR systems often struggled with non-Latin scripts or documents containing multiple languages. AI models, however, can be trained on diverse linguistic datasets, enabling them to accurately process text in various languages and scripts, thus broadening the applicability of OCR technology globally.

The applications of AI-enhanced OCR are vast and span multiple industries. In the financial sector, for instance, OCR is used to digitize checks and invoices, facilitating automated processing and reducing manual workload. In healthcare, patient records and prescriptions can be digitized for better data management and accessibility. Moreover, in the legal field, OCR assists in managing large volumes of documents by making them searchable and easier to organize.

AI-powered OCR systems also contribute to accessibility improvements. By converting printed materials into digital formats, these systems enable screen readers to vocalize text for visually impaired individuals. This functionality promotes inclusivity and ensures that information is available to a broader audience, aligning with universal design principles.

The integration of OCR with AI has led to the development of intelligent document processing solutions. These systems not only extract text but also understand the context and structure of documents, allowing for tasks like data validation, extraction of specific information fields, and integration with other business processes. Such capabilities are essential for automating complex workflows and enhancing decision-making processes.

Despite significant advancements, challenges remain in OCR technology, particularly concerning handwritten text recognition. Variations in individual handwriting styles, coupled with issues like poor image quality, can affect accuracy. However, ongoing research in AI and machine learning continues to address these challenges, with newer models showing improved performance in recognizing and interpreting handwritten content.

Looking ahead, the future of OCR is closely tied to developments in AI. As machine learning models become more sophisticated, we can expect OCR systems to achieve higher accuracy rates and handle increasingly complex documents. The continuous evolution of AI will likely expand the capabilities of OCR, making it an even more integral tool in data processing and information management across various sectors.

###### EasyOCR Overview

EasyOCR is an open-source Python library developed by Jaided AI, designed to facilitate Optical Character Recognition (OCR) with minimal effort. Leveraging the PyTorch deep learning framework, EasyOCR provides a robust platform for extracting textual information from images. Its architecture supports both CPU and GPU processing, allowing for efficient performance across various hardware configurations. The library's design emphasizes ease of use, enabling developers to implement OCR functionalities with just a few lines of code.

One of the standout features of EasyOCR is its extensive language support, accommodating over 80 languages, including those with complex scripts such as Chinese, Arabic, and Devanagari. This broad language compatibility makes it a versatile tool for global applications, allowing users to process multilingual documents seamlessly. The library's ability to handle diverse character sets and writing systems sets it apart from many other OCR solutions.

Implementing EasyOCR in a project is straightforward. After installing the library via pip, developers can initialize the OCR reader by specifying the desired languages. The `readtext` function then processes the input image and returns the detected text along with its bounding box coordinates and confidence scores. This simplicity in integration allows for rapid development and deployment of OCR capabilities in various applications.

EasyOCR's versatility extends to its application across different domains. In document digitization, it enables the conversion of scanned papers into editable and searchable formats, streamlining data management processes. For real-time text detection, such as extracting information from videos or live camera feeds, EasyOCR provides reliable performance. Its adaptability makes it suitable for tasks ranging from automated data entry to assisting visually impaired individuals through text recognition.

The library's development is active, with continuous updates and improvements being made. The maintainers have plans to introduce handwriting recognition models, further expanding its capabilities. This ongoing development ensures that EasyOCR remains a relevant and powerful tool in the rapidly evolving field of OCR technologies.

###### `easyocr` Backbone

EasyOCR consists of three components, The three main components of EasyOCR, are feature extraction, sequence labeling, and decoding. In order to extract useful features from the input image, deep learning models such as ResNet and VGG are used in feature extraction. These characteristics are essential for text recognition in pictures. Sequence labeling, the next step, uses Long Short-Term Memory (LSTM) networks to interpret the extracted features’ sequential context. Text pattern recognition and structuring are crucial tasks for LSTM networks. Finally, the decoding part decodes and transcribes the labeled sequences into the actual recognized text using the  =Connectionist Temporal Classification (CTC) algorithm= . These three elements function as a unit to allow EasyOCR to reliably and effectively extract text from images.The training pipeline is based on the deep-text-recognition-benchmark framework, which enhances text recognition in images and offers a strong basis for OCR execution.

**1. Feature Extraction (Resnet and VGG):**

The recognition model’s first step is feature extraction. In order to create a set of features that can be utilized for additional analysis, the input data must be converted. With EasyOCR, VGG and Resnet are used for this.

Resnet, also known as Residual Networks, is a kind of convolutional neural network (CNN) that bypasses certain layers by using shortcuts or skip connections. This makes it possible for the network to be deeper and still be trainable by resolving the issue of vanishing gradients. Learning the residual representation functions rather than the signal representation directly is the fundamental tenet of the Resnet architecture. This lowers the model’s complexity and facilitates the network’s learning process.

An additional kind of CNN is called Visual Geometry Group, or VGG. Its uniform architecture and simplicity are well-known. Its homogeneous architecture consists of very small (3x3) convolution filters stacked deeper and deeper on top of one another. This simplifies the network’s understanding and modification by lowering the number of computation and parameters.

**2. Sequence Labeling (LSTM):**

Sequence labeling comes next after feature extraction. Long Short-Term Memory (LSTM) networks are used for this.

Recurrent neural networks (RNNs) of the long-sequence learning and memory type, or LSTMs, are able to model the temporal dependencies of multiple time steps. The distinct design of LSTM, in contrast to conventional RNNs, aids in preventing the vanishing gradient issue. The memory cell and the three different kinds of gates — input, forget, and output — allow it to accomplish this. These elements give LSTM great efficacy for sequence labeling tasks by enabling it to add or remove information from the cell state over extended sequences.

**3. Decoding (CTC):**

Decodering is the last step in the recognition model, and Connectionist Temporal Classification (CTC) is used to do this.

A kind of loss function called CTC is applied to sequence issues in which time is uncertain. It is applied in situations where we are unsure of the alignment between the labels and the input data, which frequently occurs in speech and handwriting recognition. In order to provide a prediction with a variable length, CTC appends a blank label in addition to existing labels. It is then perfect for OCR decoding tasks because it computes loss by adding up all possible alignments of the input to the target sequences.

An altered version of the deep-text-recognition-benchmark architecture serves as the training pipeline for EasyOCR’s recognition execution. With the use of this framework, text recognition models can be trained on a variety of datasets, making EasyOCR incredibly versatile and effective.

###### Assisti `ocr/utils.py`

The provided code defines a utility class, `EasyOCRReader`, which acts as a wrapper for managing an instance of the EasyOCR model. This design ensures that the OCR model is instantiated only once (singleton pattern), optimizing resource usage and avoiding redundant model loading.

📌 **1. Importing the Required Library**

```python
import easyocr
```

This line imports the `easyocr` library, which is an open-source OCR tool capable of recognizing text in various languages. This library is the backbone of the OCR functionality in the project.

* **Purpose**: Load and utilize the OCR model for text recognition tasks.
* **Significance**: EasyOCR supports over 80 languages and is highly efficient for text extraction from images.

📌 **2. Defining the `EasyOCRReader` Class**

```python
class EasyOCRReader:
    _instance = None
```

Here, the class `EasyOCRReader` is declared with a class-level attribute `_instance`. This attribute is used to store the single instance of the class.

* **Singleton Pattern**: The singleton design pattern ensures that only one instance of the class is created throughout the application's lifecycle.
* **Why Singleton**: Loading the OCR model is computationally expensive, and redundant loading can waste resources. By using a singleton, the model is initialized only once.

📌 **3. Implementing the `get_instance` Method**

```python
@staticmethod
def get_instance():
    if EasyOCRReader._instance is None:
        EasyOCRReader()
    return EasyOCRReader._instance
```

This static method provides a way to access the singleton instance of the `EasyOCRReader` class.

* **Steps**:
  1. Check if `_instance` is `None`.
  2. If it is `None`, create a new instance of `EasyOCRReader`.
  3. Return the `_instance` of the class.
* **Why Static Method**: Since the method does not rely on an instance of the class (it’s responsible for creating one), it's declared as `@staticmethod`.

📌 **4. Initializing the `EasyOCRReader` Class**

```python
def __init__(self):
    if EasyOCRReader._instance is not None:
        raise Exception("This class is a singleton!")
    else:
        print("Initializing EasyOCR model...")
        EasyOCRReader._instance = easyocr.Reader(['ch_sim', 'en'])  # Load the OCR model
        print("EasyOCR model loaded.")
```

This is the constructor method responsible for initializing the OCR model.

* **Key Points**:
  * Checks if `_instance` is already initialized. If it is, raises an exception to prevent multiple instantiations.
  * If `_instance` is `None`, it initializes the EasyOCR model using `easyocr.Reader` with support for simplified Chinese (`ch_sim`) and English (`en`).
  * Prints messages to indicate the initialization and successful loading of the model.
* **Languages**:
  * `ch_sim`: Simplified Chinese
  * `en`: English
* **Why Print Statements**: These statements provide feedback during runtime, indicating the status of the model initialization.

📌 **Code in One Glance**

Below is the code provided, annotated and formatted for readability:

```python
# utils.py

# Import the EasyOCR library
import easyocr

# Define a class to manage the EasyOCR model as a singleton
class EasyOCRReader:
    # Class-level attribute to store the singleton instance
    _instance = None

    # Static method to get the singleton instance of EasyOCRReader
    @staticmethod
    def get_instance():
        # If no instance exists, create one
        if EasyOCRReader._instance is None:
            EasyOCRReader()
        # Return the existing or newly created instance
        return EasyOCRReader._instance

    # Constructor method
    def __init__(self):
        # If an instance already exists, raise an exception
        if EasyOCRReader._instance is not None:
            raise Exception("This class is a singleton!")
        else:
            # Initialize the EasyOCR model and store it in _instance
            print("Initializing EasyOCR model...")
            EasyOCRReader._instance = easyocr.Reader(['ch_sim', 'en'])  # Load the OCR model
            print("EasyOCR model loaded.")
```

📌 *How It Works in the Project*

* **Purpose**: The `EasyOCRReader` class encapsulates the OCR model initialization and provides a globally accessible instance to avoid redundant loads.
* **Usage**:
  * To access the OCR model:

    ```python
    ocr_reader = EasyOCRReader.get_instance()
    ```
  * This ensures that the model is loaded only once and reused across the application.
* **Advantages**:
  * **Performance Optimization**: Reduces resource overhead by avoiding multiple initializations of the OCR model.
  * **Ease of Use**: Provides a centralized way to manage the OCR model, simplifying integration into other project modules.
  * **Scalability**: Can be extended to support more languages or additional configurations if needed.

###### Assisti `ocr/models.py`

Here’s the explanation of `ocr/models.py` based on the note that the `DigitPic` model represents OCR detection within the Assisti project, not just digit recognition:

📌 **1. Importing Required Modules**

The first section imports necessary modules from Django and Python libraries:

* `models` from `django.db`: Provides classes for defining database models.
* `settings` from `django.conf`: Imports project-wide settings, including `AUTH_USER_MODEL`.
* `uuid`: A Python module to generate universally unique identifiers (UUIDs).

These imports are essential for defining and configuring the `DigitPic` model, enabling secure user associations, automatic creation of IDs, and handling of images.

```python
from django.db import models
from django.conf import settings
import uuid
```

📌 **2. Defining the `DigitPic` Model**

This model represents an entity for OCR detection, linking image files and metadata with specific users in the Assisti project. The `DigitPic` class inherits from `models.Model`, which is the base class for all Django models.

📌 **3. Model Fields**

The fields of the `DigitPic` model define the attributes and relationships stored in the database:

* **`owner`**: A foreign key linking each instance to a user from the `AUTH_USER_MODEL`.
  * `on_delete=models.CASCADE`: Ensures that when a user is deleted, their related `DigitPic` entries are also removed.
  * `null=True` and `blank=True`: Make the field optional.
* **`title`**: A `CharField` for storing the name or title of the OCR entry.
  * `max_length=100`: Limits the character length to 100.
  * `null=True` and `blank=True`: Make the field optional.
* **`whatDigit`**: A `CharField` to store additional predictions or metadata related to the detected text or image content. It is also optional.
* **`digitImage`**: An `ImageField` to store uploaded images for OCR processing.
  * `blank=True` and `null=True`: Make the field optional.
  * `default`: Specifies a default placeholder image.
  * `upload_to`: Defines the directory structure for storing uploaded images.
* **`created`**: A `DateTimeField` with `auto_now_add=True` to automatically record when an OCR detection instance is created.
* **`id`**: A primary key field that uses `UUID` for unique, unguessable identifiers.
  * `primary_key=True`: Designates this field as the primary key.
  * `editable=False` and `unique=True`: Ensure the ID is immutable and unique.

```python
class DigitPic(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    whatDigit = models.CharField(max_length=1000, blank=True, null=True)
    digitImage = models.ImageField(
        blank=True, null=True, default="aiEngineering/digitDetector/Default.png", upload_to="aiEngineering/digitDetector/")
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4,
                          primary_key=True, editable=False, unique=True)
```

📌 **4. String Representation**

The `__str__` method defines how the model instance is represented as a string. In this case, the file name of the uploaded `digitImage` is returned, making debugging and logs more readable.

```python
    def __str__(self):
        return self.digitImage.name
```

📌 **5. Meta Class**

The `Meta` inner class customizes the model's behavior:

* **`verbose_name`**: Defines a user-friendly name for the model in singular form.
* **`verbose_name_plural`**: Specifies the plural form for the model name in admin interfaces.

```python
    class Meta:
        verbose_name = "OCR Detector"
        verbose_name_plural = "OCR Detectors"
```

📌 **Complete Code**

Here’s the complete code block with all sections explained:

```python
from django.db import models
from django.conf import settings
import uuid


class DigitPic(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    whatDigit = models.CharField(max_length=1000, blank=True, null=True)
    digitImage = models.ImageField(
        blank=True, null=True, default="aiEngineering/digitDetector/Default.png", upload_to="aiEngineering/digitDetector/")
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4,
                          primary_key=True, editable=False, unique=True)

    def __str__(self):
        return self.digitImage.name

    class Meta:
        verbose_name = "OCR Detector"
        verbose_name_plural = "OCR Detectors"
```

📌 **Use Case**
In the Assisti project, this model is used for managing OCR detection records. It:

1. Links OCR detection entries to specific users.
2. Stores images uploaded for OCR processing.
3. Tracks metadata related to OCR detections (such as predicted text, creation timestamp, and titles).

By utilizing Django’s Object-Relational Mapping (ORM) capabilities, this code simplifies database management and ensures the efficient storage and retrieval of OCR-related data for Assisti.

###### Assisti `ocr/signals.py`

This code snippet demonstrates an automated OCR-based digit detection system using Django's `post_save` signal. The implementation seamlessly integrates with the `DigitPic` model, allowing for real-time image detection and classification. The primary objective of this setup is to ensure that uploaded or updated images are immediately processed, and their detected content is stored in the database for efficient handling and retrieval.

📌 **1. Importing Required Libraries and Modules**

The first section imports the necessary modules and signals:

```python
# Libraries
from django.dispatch import receiver
from django.db.models.signals import post_save

# Modules
from AiEngineering.digitDetector.models import DigitPic
```

* **`receiver` and `post_save`**: These are Django utilities for signal handling. The `receiver` decorator connects a function to a signal, while `post_save` triggers actions after a model instance is saved.
* **`DigitPic`**: This is the model representing the uploaded images and their detected values.

📌 **2. Signal to Detect and Process Images**

The core functionality resides in the `detect_digit_pic` function, which acts as a listener for `post_save` events on the `DigitPic` model.

```python
@receiver(post_save, sender=DigitPic)
def detect_digit_pic(sender, instance, created, **kwargs):
    """ Re-detecting the digit image on save method call. """
```

- **Purpose**: Listens for any save operation on the `DigitPic` model. Whether a new instance is created or an existing one is updated, this function ensures the image is processed promptly.

📌 **3. Loading the EasyOCR Reader**

```python
    from .utils import EasyOCRReader
    reader = EasyOCRReader.get_instance()
```

- **`EasyOCRReader`**: A utility class providing a singleton instance of the EasyOCR model, ensuring efficient resource usage.
- **`get_instance()`**: Retrieves the OCR reader instance, initializing it only once per application lifecycle.

📌 **4. Extracting Image Path and Running OCR**

```python
    image_path = instance.digitImage.path
    detected_digit = reader.readtext(image_path, detail=0)[0]
```

- **`image_path`**: Fetches the full path to the saved image file.
- **`readtext()`**: Processes the image to detect and extract the content. The `detail=0` parameter ensures only the detected text is returned, without additional metadata.
- **`[0]`**: Accesses the first result, as only one digit is expected in the image.

📌 **5. Updating the Model if Needed**

```python
    if instance.digitImage and (instance.whatDigit != detected_digit):
        instance.whatDigit = detected_digit
        print(f"\nDetected Digit: {detected_digit}\n")
        instance.save()
```

- **Condition Check**: Ensures that the `whatDigit` field is updated only if the detected digit is different from the existing value. This avoids unnecessary database writes.
- **Logging**: Prints the detected digit for debugging or monitoring purposes.
- **Save Operation**: Updates the model instance with the new digit value.

📌 **Key Features of the Code**

1. **Automated Image Processing**: Every save operation on the `DigitPic` model triggers an OCR detection process, ensuring immediate updates.
2. **Efficient Singleton Design**: The EasyOCR reader instance is reused across the application, optimizing memory and processing time.
3. **Error-Free Updates**: By checking the existing `whatDigit` value before updating, the system minimizes redundant operations.
4. **Real-time Monitoring**: The detected digit is logged in the console, allowing developers to verify the system's functionality during runtime.

📌 **Code Implementation**

```python
# Libraries
from django.dispatch import receiver
from django.db.models.signals import post_save

# Modules
from AiEngineering.digitDetector.models import DigitPic


# Detect the image on save method call
@receiver(post_save, sender=DigitPic)
def detect_digit_pic(sender, instance, created, **kwargs):
    """ Re-detecting the digit image on save method call. """

    # Import the Easy OCR Reader
    from .utils import EasyOCRReader

    # Get the OCR reader instance
    reader = EasyOCRReader.get_instance()

    # Get the image path
    image_path = instance.digitImage.path

    # Detect the saved image digit with classifier
    detected_digit = reader.readtext(image_path, detail=0)[0]

    # Check two conditions: 1. digitImage isn't Empty, 2. this object's whatDigit is not equal to detected_digit
    if instance.digitImage and (instance.whatDigit != detected_digit):
        # Save the detected digit to this object
        instance.whatDigit = detected_digit

        # Show the saved detected digit in Command
        print(f"\nDetected Digit: {detected_digit}\n")

        # Finally, save this digit image object model
        instance.save()
```

This approach demonstrates a professional, efficient backend workflow for handling OCR-based image detection and classification. The implementation can be expanded to include additional preprocessing steps, multi-language support, or error handling, making it suitable for various AI-driven applications.

###### Assisti `ocr/forms.py`

To create an OCR object model, a form is required to facilitate the creation of the OCR object and predict its label. The following section will explain the OCR model forms used for this purpose. Below is a comprehensive explanation of this section:

📌 **1. Importing Necessary Modules**

```python
from django import forms
from .models import DigitPic
```

* `from django import forms`: This imports the `forms` module from Django, which provides tools for creating and handling web forms.
* `from .models import DigitPic`: This imports the `DigitPic` model from the same app (`.` refers to the current directory), which is used to define the structure of the model and interact with the database.

📌 **2. Defining the `DigitPicForm` Class**

```python
class DigitPicForm(forms.ModelForm):
```

* `DigitPicForm` is a subclass of `forms.ModelForm`, which is a special form class in Django that automatically generates a form based on a model. This form will be used to interact with the `DigitPic` model.

📌 **3. Meta Class for Model and Fields**

```python
class Meta:
    model = DigitPic
    fields = ['title', 'digitImage']  # Only include the title and digitImage fields
```

* The `Meta` class is used to provide additional configuration for the form. Here, it specifies:
  * `model = DigitPic`: The form is associated with the `DigitPic` model.
  * `fields = ['title', 'digitImage']`: Only the `title` and `digitImage` fields will be included in the form, meaning the form will not handle other model fields such as `whatDigit` or `created`.

📌 **4. Customizing the Form Fields**

```python
def __init__(self, *args, **kwargs):
    super(DigitPicForm, self).__init__(*args, **kwargs)
```

* This is the form's `__init__` method, which is called when an instance of the form is created. The `super(DigitPicForm, self).__init__(*args, **kwargs)` call ensures that the parent class (`forms.ModelForm`) initialization is run first, allowing the form to function correctly.

📌 **5. Customizing the `title` Field**

```python
self.fields['title'].widget.attrs.update({
    'class': 'form-control',
    'placeholder': 'Your image title ...',  # You can change this placeholder
})
```

* `self.fields['title']`: This refers to the `title` field from the model.
* `widget.attrs.update(...)`: This allows customization of the field's HTML attributes. Specifically:
  * `'class': 'form-control'`: This adds the `form-control` class to the `title` input field, which applies Bootstrap's styling to the form input.
  * `'placeholder': 'Your image title ...'`: This sets a placeholder text inside the input field, providing a hint to the user about what to enter in the field.

📌 **6. Customizing the `digitImage` Field**

```python
self.fields['digitImage'].widget.attrs.update({
    'class': 'form-control',
    'placeholder': 'Choose an image',  # Placeholder for image input is not standard but can be used for styling
})
```

* `self.fields['digitImage']`: This refers to the `digitImage` field from the model.
* `widget.attrs.update(...)`: Similar to the `title` field, this customizes the `digitImage` field:
  * `'class': 'form-control'`: Adds the `form-control` class for Bootstrap styling.
  * `'placeholder': 'Choose an image'`: While placeholders are not typically used for file input fields, this provides a placeholder for visual consistency or can be styled accordingly.

📌 **Final Insights**

This form is designed to handle two main pieces of information:

1. **Title**: A textual field for the user to provide a name or title for the image.
2. **Digit Image**: A file upload field where the user selects an image (typically a digit image for recognition purposes).

The custom styling using Bootstrap's `form-control` ensures that both fields are visually consistent with a modern web application. The placeholders give further guidance to users for interacting with the form fields.

Below the entire `ocr/forms.py` will come in one glance:

```Python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©© All Rights are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

from django import forms
from .models import DigitPic

class DigitPicForm(forms.ModelForm):
    class Meta:
        model = DigitPic
        fields = ['title', 'digitImage']  # Only include the title and digitImage fields

    def __init__(self, *args, **kwargs):
        super(DigitPicForm, self).__init__(*args, **kwargs)
  
        # Customize the form fields
        self.fields['title'].widget.attrs.update({
            'class': 'form-control',
            'placeholder': 'Your image title ...',  # You can change this placeholder
        })
  
        self.fields['digitImage'].widget.attrs.update({
            'class': 'form-control',
            'placeholder': 'Choose an image',  # Placeholder for image input is not standard but can be used for styling
        })

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©© All Rights are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
```

This form (`DigitPicForm`) is designed for creating and updating `DigitPic` model instances in Django. It allows users to provide a title and upload an image. By using `ModelForm`, it automatically handles form validation and persistence to the database. The form also includes custom styling via Bootstrap classes, making it easy to integrate into a web application with a modern look and feel. The placeholders guide users and improve the user experience when interacting with the form.

###### Understanding Assisti's Routing (`urls.py`) and Logic (`views.py`) in the OCR Module

📌 **Overview**

This section demonstrates the navigation process to access the OCR feature in Assisti. The user flow and actions required to reach the OCR section are outlined below for clarity.

To access the OCR feature in Assisti, users first log in to their account. From the landing page, they can scroll down to the carousel highlighting Assisti's various applications. By simply clicking or tapping the 'See More' button within the carousel, they will seamlessly navigate to the OCR section.

- Landing Page After User Login (Desktop and PC View)

![Web Landing Page | Web | Large Screen | Desktop and PCs](../Assets/Artificial%20Intelligence/OCR/Landing%20Page%20After%20Login%20-%20Web%20-%20PCs%20and%20Desktop.png)

- Landing Page After User Login (Mobile View)

![Web Landing Page | Web | Small Screen | Mobile](../Assets/Artificial%20Intelligence/OCR/Landing%20Page%20After%20Login%20-%20Web%20-%20Mobile.png)

The images displayed after scrolling down slightly are shown here.

- Link to the OCR Zone of Assisti (Desktop and PC View)

![Most Used App | Web | Desktops and PCs](../Assets/Artificial%20Intelligence/OCR/Most%20Used%20App%20-%20Web%20-%20Desktop%20and%20PCs.png)

- Link to the OCR Zone of Assisti (Mobile View)

![Most Used App | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/Most%20Used%20App%20-%20Web%20-%20Mobile.png)

To keep this documentation concise, I will focus on explaining the key sections and omit the front-end code responsible for the professional design of Assisti's landing page, as shown in the images above.

The front-end code responsible for the OCR card shown above is as follows:

```html
{% raw %}

        <div class="carousel-item h-auto my-5">
            <div class="container d-flex justify-content-center h-auto my-5">
                <div class="row mx-5 my-5 h-auto">
                    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
                      <img class="w-75 rounded-5" src="{% static 'assets/img/Services/Digit Detector.webp' %}" style="height: auto;" />
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center my-2">
                        <div style="max-width: 350px;">
                            <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md" style="background: #000814;">
                              <svg class="bi bi-robot" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z">
                                    </path>
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5">
                                    </path>
                              </svg>
                            </div>
                            <h1 class="fw-bold text-white" style="font-family: 'Protest Guerrilla', serif;">
                              <span style="font-weight: normal !important;">Optical Character Recognition</span>
                            </h1>
                            <p class="my-3 text-white-50">
                              This section of Assisti focuses on Optical Character Recognition, designed to seamlessly extract and read text from images for a smooth and user-friendly experience.
                            </p>
                            <a class="d-xxl-inline-flex align-items-xxl-center btn rounded-2 pt-2 pb-2 ps-4 pe-4 MuhammadHusainAbootalebi-Services-Link-to-The-App" href="{% url 'digit-detector-welcome' %}" style="background: #ffd60a;">
                              See More 
                              <svg class="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8">
                                    </path>
                              </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{% endraw %}
```

After clicking the 'See More' button, the URL associated with the `digit-detector-welcome` pattern is requested via HTTP using the `url` tag.

The mentioned URL is connected to the following URL pattern:

```python
...
  
    ## -- >> Digit Detector Introduction
    path("", views.digit_detector_welcome, name="digit-detector-welcome"),

...
```

As shown above, this URL pattern is associated with the `views.digit_detector_welcome` view, which will be explained in the following section.

📌 `@login_required(login_url="login-view")`

This line is a decorator that ensures the user must be authenticated (logged in) to access the view. If the user is not logged in, they will be redirected to the specified login page, which in this case is mapped by the URL name `"login-view"`.

📌 `def digit_detector_welcome(request):`

This line defines the function `digit_detector_welcome`, which is the view function that will be called when the corresponding URL pattern is matched. The function takes the `request` object as an argument, which contains information about the HTTP request made by the client.

📌 `digits = DigitPic.objects.filter(owner=request.user,)`

This line queries the `DigitPic` model to retrieve all the `DigitPic` objects associated with the currently logged-in user. The `filter()` method is used to retrieve records where the `owner` field matches `request.user`, which refers to the authenticated user making the request. This ensures that only the digit pictures that belong to the current user are retrieved.

📌 `context = { "digits": digits, }`

This line creates a context dictionary to pass data to the template. The `digits` variable, which contains the queryset of digit pictures, is included in the context. The context is then passed to the template to be rendered dynamically.

📌 `return render(request, "digitDetector/digits-intro.html", context)`

This line returns an HTTP response generated by rendering the `"digitDetector/digits-intro.html"` template. The `render()` function combines the `request` object, the path to the template, and the context data (`digits`) to generate the final HTML page that will be sent back to the client.

📌 Summary

- This view is accessible only to authenticated users (via `@login_required`).
- It retrieves the digit images (`DigitPic` objects) that belong to the current logged-in user.
- It passes these images to the `digits-intro.html` template, which will use this data to display the relevant information to the user.

The final view code at a glance is as follows:

```Python
...

@login_required(login_url="login-view")
def digit_detector_welcome(request):
  
    digits = DigitPic.objects.filter(
        owner = request.user,
    )
  
    context = {
        "digits": digits,
    }
  
    return render(request, "digitDetector/digits-intro.html", context)

...
```

Another way to access the Assisti OCR zone section is by using the services offered by Assisti. After logging in, users can click on the Services option in the top navigation bar on large screens or expand the top navigation bar on smaller screens, such as mobile devices, and tap on the Services option. This section is illustrated in the images below.

- Services option in the top navigation bar after logging in (Desktop and PC view)

![Web Landing Page | Web | Large Screen | Desktop and PCs](../Assets/Artificial%20Intelligence/OCR/Landing%20Page%20After%20Login%20-%20Web%20-%20PCs%20and%20Desktop.png)

- Top navigation bar in its closed state on small screens (Mobile view)

![Landing Page | Mobile Web View | Navbar Closed](../Assets/Architecture/Landing/Images/Landing%20Page%20-%20Mobile%20Web%20View%20-%20Navbar%20Closed.png)

- Top navigation bar in its opened state on small screens (Mobile view)

![Landing Page | Mobile Web View | Navbar Opened](../Assets/Architecture/Landing/Images/Landing%20Page%20-%20Mobile%20Web%20View%20-%20Navbar%20Opened.png)

- Services webpage (Desktop view)

![Services | Desktop and PC | Web | OCR](../Assets/Artificial%20Intelligence/OCR/Services%20-%20OCR%20-%20Desktops%20and%20PCs.png)

- Services webpage (Mobile view)

![Services | Mobile | Web | OCR](../Assets/Artificial%20Intelligence/OCR/Services%20-%20OCR%20-%20Mobile.png)

To explain the backend process of accessing services through the Services option, the Services menu item is linked to the following template:

```html
{% raw %}

...

<li class="nav-item d-xxl-flex justify-content-xxl-center align-items-xxl-center mt-2 mb-2">
  
  <a class="nav-link me-5 MuhammadHusainAbootalebi-Navbar-NavItem-Link" id="MuhammadHusainAbootalebi-NavItem-Services-link" href="{% url 'all-services' %}" style="color: #000814;font-family: Roboto, sans-serif;">
  
    <i class="bi bi-x-diamond-fill MuhammadHusainAbootalebi-Navbar-NavItem-Link-Icon active"></i>
  
    Services
  
  </a>
</li>

...

{% endraw %}
```

As seen above, the Services option is linked to the `all-services` URL pattern, which is defined as follows:

```python
...
  
    # All Services
    path("services/", services, name="all-services"),

...
```

The above URL pattern is linked to the `services` view, which is defined as follows:

```Python
...

def services(request):
    return render(request, "Services.html")

...
```

As seen above, the `services` view simply uses the `render` method with the passed request to render the `Services.html` template. In the `Services.html` template, the process of clicking on the 'See More' button is similar to the previous process of navigating to the `digit_detector_welcome` view, which was explained earlier.

In each scenario, the user will navigate to a page that looks like the one below. The process of creating, editing, reading, and deleting OCR models is explained next.

- Optical Charactrer Recognition (Large Screens Web View)

![OCR Zone | Web | Desktop](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Desktop.png)

- Optical Charactrer Recognition (Small Screens Web View)

![OCR Zone | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Mobile.png)

📌 **Creating OCR Models**

To interact with the Assisti OCR detector in real time, users can access the OCR introduction page, as shown below. On desktop web views, the 'OCR Detection' button can be clicked, while on mobile web views, it can be tapped to initiate the detection process.

- Optical Character Recognition (Large Screens Web View)

![OCR Zone | Web | Desktop](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Desktop.png)

- Optical Character Recognition (Small Screens Web View)

![OCR Zone | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Mobile.png)

To illustrate the background process leading to the OCR detection page, the following front-end code is triggered when the 'OCR Detection' button is clicked or tapped.

```html
{% raw %}

...

<a
  class="btn btn-primary btn-lg d-xxl-flex justify-content-xxl-center align-items-xxl-center me-2 ps-5 pe-5 w-100"
  role="button" href="{% url 'digit-create' %}"
  style="background: rgb(0,0,0); color: rgb(255,214,10);font-family: Roboto, sans-serif;font-weight: bold;border-style: none;">
    OCR Detection 
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1em" 
      height="1em"
      fill="currentColor" 
      viewBox="0 0 16 16" 
      class="bi bi-caret-right-fill">
        <path 
          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z">
        </path>
    </svg>
</a>

...

{% endraw %}
```

In the code above, the anchor link references the `digit-create` URL pattern name, which is mapped to the following URL pattern:

```python
...

  path("digit-create/", views.digit_create, name="digit-create"),

...
```

As seen in the code above, the `digit-create` URL name is mapped to `views.digit_create` via an HTTP request, facilitating the rendering of the OCR detection form web page, which appears as follows:

- Optical Character Recognition Creation Form (Large Screens Web View)

![OCR Creation Form | Web | Desktop](../Assets/Artificial%20Intelligence/OCR/OCR%20Detection%20Form%20Creation%20-%20Desktop%20Web%20View.png)

- Optical Character Recognition Creation Form (Small Screens Web View)

![OCR Creation Form | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/OCR%20Detection%20Form%20Creation%20-%20Mobile%20Web%20View.png)

As seen above, the front-end implementation of the OCR creation form is developed professionally, highlighting my expertise in front-end programming. To keep the documentation concise, the backend implementation of the OCR model creation view will be explained below.

```python
@login_required(login_url="login-view")
```

- This decorator ensures that only authenticated users can access this view.
- If an unauthenticated user tries to access this view, they will be redirected to the login page (`login-view`).

```python
def digit_create(request):
```

- This function defines the `digit_create` view, which handles the creation of new OCR digit recognition objects.

```python
    forms = DigitPicForm()
```

- An empty instance of the `DigitPicForm` is created to be displayed in the template for user input.

```python
    if request.method == "POST":
```

- Checks if the request method is **POST**, indicating that the form has been submitted.

```python
        forms = DigitPicForm(request.POST, request.FILES)
```

- If the request is **POST**, the form is re-initialized with the submitted data (`request.POST`) and uploaded files (`request.FILES`).

```python
        if forms.is_valid():
```

- Validates the form to ensure all required fields are properly filled and the uploaded file meets the expected format.

```python
            digit = forms.save(commit=False)
```

- The form is temporarily saved without committing to the database.
- This allows setting additional attributes (like assigning an owner) before finalizing the save.

```python
            digit.owner = request.user
```

- The authenticated user who submitted the form is assigned as the `owner` of the digit object.

```python
            digit.save()
```

- The `digit` object is now fully saved in the database. The OCR signal will be triggered to detect the characters in the uploaded image, as explained earlier.

```python
            messages.success(request, "Digit was successfully predicted.")
```

- A success message is displayed to inform the user that the digit has been successfully processed.

```python
            return redirect("digit-read-detail", digit.id)
```

- After saving, the user is redirected to the **digit detail page** (`digit-read-detail`), where they can see the predicted results.

```python
    context = {
        "forms": forms,
    }
```

- A context dictionary is created containing the form instance, which will be passed to the template.

```python
    return render(request, "digitDetector/digit-create.html", context)
```

- The `digit-create.html` template is rendered, displaying the form for the user.

Summary of Functionality:

- Ensures that only authenticated users can create OCR digit recognition objects.
- Displays a form for uploading an image and providing a title.
- Handles form submission and validation.
- Associates the uploaded digit image with the logged-in user.
- Saves the digit object and redirects to its detail page upon successful submission.
- Displays a success message to the user.
- Renders the **digit creation form** for GET requests.

This structured approach ensures a smooth and user-friendly process for creating OCR objects while maintaining security and proper validation. 🚀

The complete code for this view can be seen at a glance below:

```Python
...

@login_required(login_url="login-view")
def digit_create(request):
  
    forms = DigitPicForm()
  
    if request.method == "POST":
        forms = DigitPicForm(request.POST, request.FILES)
        if forms.is_valid():
            digit = forms.save(commit=False)
            digit.owner = request.user
            digit.save()
            messages.success(request, "Digit was successfully predicted.")
            return redirect("digit-read-detail", digit.id)
  
    context = {
        "forms": forms,
    }
  
    return render(request, "digitDetector/digit-create.html", context)

...
```

📌 **Editing OCR Models**

TODO : Till explaining the editing process of the editing the OCR model.

- Not added yet.

![OCR Zone First View | Web | Desktop](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Desktop.png)

- Not added yet.

![OCR Zone First View | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/OCR%20-%20Introduction%20--%20Mobile.png)

Not added yet.

- Not added yet.

![OCR Zone Second View | Web | Desktop](../Assets/Artificial%20Intelligence/OCR/OCR%20Prediction%20Models%20Showcases%20-%20Desktop%20Web%20View.png)

- Not added yet.

![OCR Zone Second View | Web | Mobile](../Assets/Artificial%20Intelligence/OCR/OCR%20Prediction%20Models%20Showcases%20-%20Mobile%20Web%20View.png)

Not added yet.

📌 **Reading OCR Models**

📌 **Deleting OCR Models**

### Testing

ChatGPT Notes:

* **Unit Testing** : Test individual units or components of the application.
* **Integration Testing** : Ensure the frontend and backend work seamlessly together.
* **End-to-End Testing** : Simulate user journeys to test the full application flow (e.g., Selenium, Cypress).
* **Performance Testing** : Evaluate application speed and scalability under load.

---

Not added yet.

### Deployment

ChatGPT Notes:

* **Environment Setup** : Prepare production environments (e.g., cloud services like AWS, Google Cloud, or Heroku).
* **CI/CD Implementation** : Set up Continuous Integration/Continuous Deployment pipelines.
* **Monitoring Tools** : Integrate monitoring tools for error tracking and performance (e.g., Sentry, New Relic).

---

Not added yet.
