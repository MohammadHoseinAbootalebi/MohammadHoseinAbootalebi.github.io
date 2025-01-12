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

The server setup will be explained in the following subtopics:

##### Frameworks and Programming Languages

###### **Backend Framework:**

Django serves as a powerful and flexible backend framework, making it an excellent choice for developing advanced systems like Assisti, an AI-powered project. Its "batteries-included" philosophy provides a wide range of built-in tools and libraries, enabling developers to streamline the development process without relying heavily on external dependencies. This approach not only accelerates the development cycle but also helps bring innovative solutions like Assisti to users more quickly, maintaining a competitive edge in the AI landscape.

Security is a critical aspect of any AI-driven platform, and Django excels by offering built-in defenses against common web vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). These features ensure that sensitive data and AI-driven operations remain secure, reinforcing user trust and maintaining the platform's integrity.

Django's scalability further solidifies its suitability for projects like Assisti, which may need to handle a growing user base and increasing data complexity. Its architecture is designed to efficiently manage high volumes of data and interactions, ensuring the system remains responsive as it expands. Moreover, Django's extensive and active developer community provides a wealth of resources and continuous support, ensuring that Assisti can evolve and stay at the forefront of AI technology.

###### **Python Programming Language:**

Python is a high-level, interpreted programming language celebrated for its simplicity and readability, making it an ideal choice for projects like Assisti. Its clean and intuitive syntax, resembling natural English, enables developers to write clear and maintainable code, simplifying debugging and fostering efficient development. These qualities have made Python a go-to language across diverse fields, including artificial intelligence, web development, data analysis, and scientific computing.

A key advantage of Python is its versatility. Supporting multiple programming paradigms—such as procedural, object-oriented, and functional programming—it allows developers to adopt the approach best suited to their needs. Python also features an extensive standard library and a vast ecosystem of third-party libraries, which accelerate development and simplify the integration of AI algorithms and other technologies into Assisti.

Python's cross-platform compatibility further strengthens its role in powering Assisti. It runs effortlessly on major operating systems like Windows, macOS, and Linux, ensuring that the platform remains accessible and functional across various environments. Combined with its vibrant community support and continuous evolution, Python provides a robust foundation for building and scaling innovative AI solutions like Assisti.

###### **Web Frontend Design Programming Languages:**

HTML, CSS, and JavaScript form the backbone of web development, each fulfilling a unique role in creating dynamic and responsive user interfaces. HTML (HyperText Markup Language) structures web content, providing a semantic foundation that improves accessibility and enhances search engine optimization (SEO). CSS (Cascading Style Sheets) adds style and visual elements, enabling developers to craft user-friendly designs with consistent branding across devices. JavaScript introduces interactivity and dynamic functionality, transforming static pages into immersive and engaging experiences. Together, these technologies are essential for building responsive, high-performance web applications.

In the context of Assisti, an AI-powered project, the combination of HTML, CSS, and JavaScript is crucial for designing a frontend that is both intuitive and visually appealing. HTML ensures that content is well-structured and accessible, while CSS brings the design to life with themes, layouts, and animations tailored to Assisti's brand. JavaScript enhances the user experience by enabling features such as real-time updates, interactive dashboards, and seamless integration with AI-driven components. This synergy ensures Assisti delivers a modern, engaging, and efficient interface that meets user expectations.

For contemporary frontend designs, these technologies provide unmatched flexibility and scalability. Advanced CSS techniques, such as grid and flexbox, facilitate responsive designs that adapt to different screen sizes, ensuring usability on desktops, tablets, and smartphones. JavaScript frameworks and libraries, like React or Vue.js, streamline the creation of interactive components, such as live feedback systems, personalized recommendations, and real-time visualizations of AI outputs. By leveraging HTML, CSS, and JavaScript, Assisti achieves a cutting-edge, future-ready web interface that effectively showcases its AI capabilities.

###### **Mobile Framework:**

Flutter, developed by Google, is an open-source UI toolkit that allows developers to build natively compiled applications for mobile, web, and desktop platforms from a single codebase. This cross-platform approach greatly reduces development time and costs by enabling developers to write code once and deploy it across multiple platforms, ensuring consistency and efficiency. Flutter’s rich library of customizable widgets and its expressive UI framework make it ideal for creating visually appealing and highly interactive interfaces, which are essential for engaging users in today’s competitive environment.

In the context of Assisti, an AI-driven project, Flutter offers significant benefits. Its ability to deliver native-like performance ensures smooth and responsive interactions, which is critical for providing a seamless user experience. Flutter's hot reload feature further enhances the development process, allowing developers to quickly iterate and test features like interactive dashboards, real-time visualizations of AI outputs, and personalized recommendations. This agility accelerates the deployment of new functionalities, enabling Assisti to respond swiftly to user needs and market trends.

Additionally, Flutter’s expanding ecosystem and active developer community provide a wealth of resources, plugins, and ongoing support, facilitating the integration of advanced functionalities into Assisti. Its open-source nature ensures that the framework evolves alongside technological advancements, enabling Assisti to incorporate new features and maintain a competitive edge. By leveraging Flutter, Assisti can deliver a seamless, engaging, and consistent user experience across multiple platforms, driving user satisfaction and showcasing the project’s AI capabilities effectively.

###### **Dart Programming Language:**

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

#### Architecture

In this section, I will provide an overview of the backend development for the Assisti project, focusing on its views, URL routing, and template integration. The views in Django serve as the logic layer, processing user requests and returning appropriate responses, while the URL routing connects these views to specific endpoints, enabling seamless navigation across the application. Additionally, the templates form the bridge between the backend and frontend, rendering dynamic content for the user interface. Each component plays a critical role in ensuring the functionality and responsiveness of the Assisti AI-driven system. This explanation aims to offer insight into how these elements collaborate to create a cohesive and efficient backend architecture for the project.

##### Landing

The landing page is a vital component of any major project, serving as the first point of interaction for users and shaping their initial impressions. For a sophisticated AI-driven project like Assisti, the landing page acts as the gateway to its advanced features, offering a clear and engaging introduction. It not only highlights the project’s purpose and capabilities but also establishes trust and encourages user engagement. A well-designed landing page ensures visitors understand the value of the project and are guided seamlessly to explore further. This crucial section sets the tone for the user experience and reflects the quality and innovation behind Assisti.

In Assisti, the landing page has been meticulously crafted to provide a comprehensive yet intuitive overview of the project’s offerings. Its design prioritizes clarity, user-friendliness, and visual appeal, making it an effective tool for conveying the project’s unique AI-driven solutions. From compelling headlines to strategically placed call-to-actions, every element has been optimized to capture user attention and drive engagement. This section not only showcases Assisti’s core features but also emphasizes its practical applications, ensuring visitors see its relevance to their needs. The following description delves deeper into the design and functionality of this pivotal aspect of Assisti.

Till explanation of the following image is landing page and more.

![Landing Page](../Assets/Architecture/Landing/Images/Landing%20Page.png)

Not added yet.

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

#### Artificial Intelligence Development

##### Natural Language Processing Models

###### OCR

### **Testing**

ChatGPT Notes:

* **Unit Testing** : Test individual units or components of the application.
* **Integration Testing** : Ensure the frontend and backend work seamlessly together.
* **End-to-End Testing** : Simulate user journeys to test the full application flow (e.g., Selenium, Cypress).
* **Performance Testing** : Evaluate application speed and scalability under load.

---

Not added yet.

### **Deployment**

ChatGPT Notes:

* **Environment Setup** : Prepare production environments (e.g., cloud services like AWS, Google Cloud, or Heroku).
* **CI/CD Implementation** : Set up Continuous Integration/Continuous Deployment pipelines.
* **Monitoring Tools** : Integrate monitoring tools for error tracking and performance (e.g., Sentry, New Relic).

---

Not added yet.
