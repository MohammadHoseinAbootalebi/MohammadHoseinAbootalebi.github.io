# 🛒EShoppify 🛒

Shop it with EShoppify 😉🛒!

**Description:**

EShoppify stands out as one of the most ambitious projects in my portfolio, showcasing my expertise in both design and
development. This fully integrated e-commerce platform allows users to browse and purchase products seamlessly, manage
orders efficiently, and handle wallet transactions such as charging and transferring balances. With features tailored to
enhance the user experience, including product management, secure payments, and streamlined order tracking, EShoppify
exemplifies the potential of modern e-commerce technology. It’s a project I’m truly proud of and a testament to my
dedication to creating impactful digital solutions 😉.

## Table of Contents

<!-- TOC -->

- [🛒EShoppify 🛒](#eshoppify-)
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
        - [User Model and Interactions](#user-model-and-interactions)
        - [Order and Shipping](#order-and-shipping)
        - [Product-related Models](#product-related-models)
    - [Backend Development](#backend-development)
      - [Server Setup](#server-setup)
        - [Frameworks and Programming Languages](#frameworks-and-programming-languages)
          - [Backend Framework](#backend-framework)
          - [Python Programming Language](#python-programming-language)
          - [Web Frontend Design Programming Languages](#web-frontend-design-programming-languages)
          - [Mobile Framework](#mobile-framework)
          - [Dart Programming Language](#dart-programming-language)
        - [Backend Libraries](#backend-libraries)
        - [Frontend Libraries](#frontend-libraries)
        - [Cross Platform Libraries](#cross-platform-libraries)
      - [Database Design](#database-design)
      - [API Development](#api-development)
      - [EShoppify Authentication \& Authorization](#eshoppify-authentication--authorization)
        - [Overview](#overview)
        - [Web Walkthroughs](#web-walkthroughs)
          - [Landing Page Login and Signup Buttons](#landing-page-login-and-signup-buttons)
          - [Logging in](#logging-in)
          - [Signing up](#signing-up)
          - [Signing Out](#signing-out)
          - [Password Reset](#password-reset)
        - [📱 Native Mobile Application Walkthroughs](#-native-mobile-application-walkthroughs)
      - [Architecture](#architecture)
    - [Testing](#testing)
    - [Deployment](#deployment)

<!-- TOC -->

## 🎨 Design 🎨

### User Research

### Define Objectives

### Wireframing

### Visual Design

### Prototyping

## 💻 Development 💻

### Requirement Analysis & Architecture Planning

ChatGPT Note:

* Understand the functional and technical requirements.
* Plan the backend architecture (e.g., APIs, databases).
* Decide on the technology stack (e.g., frontend framework, backend language, database).

---

#### Database Architecture

As EShoppify is a kind of professional e-commerce platform, it has a complex database, which includes the following
tables:

* EShoppify Database Schema Concise View

![Database Schema Compact View](../Assets/Database%20Schema/EShoppify%20-%20Simple.png)

* EShoppify Database Schema Compact View

![Database Schema Beautiful View](../Assets/Database%20Schema/EShoppify%20-%20Beautiful%20View.png)

The EShoppify database schema is generally divided into three main parts:

* User Model and Interactions
* Order and Shipping
* Product-related Models

##### User Model and Interactions

This part mainly contains models that hold user-related information. The descriptions of its sub-database tables are
provided here.

* **Auth User**: This is the base model used for backend operations, specifically for authentication and authorization.
  * Database fields:
    * **First name**: This field is dedicated to the user's first name.
    * **Last name**: This field is dedicated to the user's last name.
    * **email**: This field is dedicated to the user's email.
    * **Username**: This field is dedicated to the user's username.
    * **Password**: This field is dedicated to the user's password.
    * **ID**: This field is dedicated to the user's unique id.
* **Profile**: This is the profile object model created for each authenticated user. It has a one-to-one relationship
  with the authenticated user.
  * Database fields:
    * **Auth User Owner:** The authenticated user to whom this profile is dedicated. It has a one-to-one
      relationship with the authenticated user.
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
* **Addresses:** This section of the database will be dedicated to the addresses provided by the user, which will be
  used to ship the purchased products.
  * Database fields:
    * **Address Owner:** This field represents a many-to-one relationship, indicating that each user can have
      multiple addresses and specifying who owns each address.
    * **Address:** This is the address information.
    * **Creation Date and Time of Address:** This field shows the date and time when this address object model was
      created.
    * **ID:** This field is the unique ID of the address object model.
* **Review:** This EShoppify database table is dedicated to EShoppify users who leave reviews on each product in
  EShoppify.
  * Database fields:
    * **Owner:** This field represents a many-to-one relationship with the Auth User model, indicating which user
      owns the review.
    * **Product:** This field is dedicated to the product with which each review is specifically coupled.
    * **Rating:** This field is for storing the stars given to the product on which this review is left by the end
      EShoppify user.
    * **Text:** This is the text of the review left by the user.
    * **Slug:** This is the user-friendly text URL used for URL routing.
    * **Purchased:** This boolean field is used to indicate whether the user leaving the review has purchased the
      product on which the review is left.
    * **Appropriate:** This field determines whether the review text is appropriate or not.
    * **Creation Date and Time of Address:** This is the creation date and time of each review object model.
    * **ID:** This is the unique ID of the review objects.

##### Order and Shipping

The **Order and Shipping** section of EShoppify primarily focuses on managing users' orders and processing those ready
for shipping. This section is crucial for all e-commerce platforms, including Amazon, Alibaba, EShoppify, and others.

* **Wallet:** This model is designed for each EShoppify user. It functions as an electronic wallet for users, primarily
  used for purchasing, recharging, transferring funds, and more.
  * Database fields:
    * **Owner:** Represents a one-to-one relationship with the Authentication User model of EShoppify.
    * **Balance:** Indicates the current amount of money or credit available in the user's wallet.
    * **Card Number:** A 16-digit number associated with the user's credit or debit card.
    * **CVV2:** A 3- or 4-digit security code associated with the credit card for additional verification.
    * **Expiry Date:** The date when the wallet's associated card or balance will expire.
    * **Last Updated:** The most recent date and time when the wallet information was modified.
    * **Created Date:** The date and time when the user's wallet model was initially created.
    * **ID:** A unique identifier for the user's wallet model.
* **Charge Wallet:** This database table is used for the Charging Wallet model, which manages the process of increasing
  the balance in an EShoppify user's wallet.
  * Database fields:
    * **Wallet Owner:** This is the Wallet object database model, which serves as the target for balance increases
      requested by the Charging Wallet model. It has a many-to-one relationship with the Charging Wallet database
      model.
    * **Amount:** This is the amount of money requested to be added to the wallet owner's balance.
    * **Verified:** This field is used to check whether the charging wallet request has been verified.
    * **Updated:** This field stores the last datetime when this object model was modified.
    * **Created:** This is the initial datetime when the wallet charge object database model was created.
    * **ID:** This is the unique identifier for each charging wallet object model.
* **Transfer:** The transfer database table is related to each object model used for transferring money from one
  EShoppify wallet to another.
  * Database fields:
    * **Wallet Owner:** This field represents a many-to-one relationship with the wallet from which the money
      originates. It identifies the wallet owned by the sender and is intended for transferring funds to another
      wallet.
    * **Wallet Destination:** This field represents a many-to-one relationship with the wallet object model that
      serves as the destination for the transferred money.
    * **Amount:** This field specifies the amount of money to be transferred.
    * **Verified:** This boolean field indicates whether the transfer has been verified.
    * **Created:** This field records the date and time when the wallet transfer object was initially created in the
      database.
    * **ID:** This is a unique identifier for each wallet transfer object in the database.
* **Order:** This database table schema corresponds to the order object model, which is used to plan purchased products
  and manage them for shipment to customers.
  * Database fields:
    * **Owner:** This field represents a many-to-one relationship with the authenticated user, indicating which user
      owns the created orders.
    * **Product:** This field represents a many-to-one relationship with the Product database model, specifying
      which product is included in the order.
    * **Address:** This field represents a many-to-one relationship with the EShoppify authenticated user's
      addresses, used for shipping purposes.
    * **Description:** This optional field allows the user to provide a short description for additional details, if
      needed.
    * **Quantity:** This integer field specifies the quantity of the product included in the order.
    * **Price:** This field represents the total price of the order, which the EShoppify customer is required to
      pay.
    * **Created:** This field records the date and time when the order object was created in the database.
    * **ID:** This field is a unique identifier for each order object in the database.

##### Product-related Models

This segment of EShoppify focuses on the management of product data within the database backend. It organizes products
into relevant categories, ensuring efficient classification—a standard practice for e-commerce platforms. This section
also centralizes essential product details, serving as the foundation for all product listings on EShoppify.

* **Category:** This database table plays a key role in organizing products into various categories for better structure
  and user experience.
  * Database fields:
    * **Owner:** Establishes a many-to-one relationship with EShoppify authenticated users, enabling sellers to
      define their categories and manage their products.
    * **Category:** The name of the category, stored as text for easy reference.
    * **Slug:** Converts the category name into a URL-friendly format to improve routing and SEO (**S**earch **E**
      ngine **O**ptimization).
    * **Created:** The timestamp indicating when the category object model was created.
    * **ID:** A unique identifier assigned to each category, ensuring distinct tracking and referencing in the
      database.
* **Brand:** This section of the database schema organizes products by the brands supplying them, allowing for
  brand-specific categorization following the product categorization process.
  * Database fields:
    * **Owner:** Establishes a many-to-one relationship with EShoppify sellers, enabling them to define and manage
      their own brand.
    * **Category:** The category that this brand is associated with.
    * **Logo:** The image representing the brand’s logo.
    * **Name:** The name of the brand.
    * **Slug:** Converts the brand name into a URL-friendly format to enhance routing and improve **S**earch **E**
      ngine **O**ptimization (SEO).
    * **Ratio:** A metric indicating how popular or favored each brand is within the platform.
    * **Created:** The timestamp when the brand object model was created in the database.
    * **ID:** A unique identifier assigned to each brand for accurate tracking and referencing in the database.
* **Product:** This EShoppify database table is dedicated to each product object defined in the EShoppify e-commerce
  website.
  * Database fields:
    * **Owner:** This field represents the owner or EShoppify seller user who defines each product object in the
      database model. It has a many-to-one foreign key relationship with the EShoppify user model.
    * **Name:** This field stores the name of the product.
    * **Brand:** This field represents the brand under which the product is licensed. It has a many-to-one
      relationship with the brand database model.
    * **Category:** This field specifies the category under which the product is classified. It has a many-to-one
      relationship with the category model.
    * **Description:** This field contains a description of the product to explain its details.
    * **Price:** This field represents the price of the product as a floating-point number.
    * **Ratio:** This field indicates how much the product is favored or liked.
    * **Slug:** This field is used to create a slug for the product, ensuring the URL routes appear user-friendly.
    * **Created Datetime:** This field records the creation date and time of the product object.
    * **ID:** This is the unique identifier for each product object in the database model.
* **Product Images:** This database table is used to store product images, allowing EShoppify customers to view them
  while shopping.
  * Database fields:
    * **Owner:** This field represents the owner or creator of the product object (EShoppify seller user). It has a
      many-to-one foreign key relationship with the EShoppify user model.
    * **Product:** This field links to the product that each product image object is associated with. It has a
      many-to-one relationship with the product model.
    * **File:** This field stores the image or any other file that showcases the product.
    * **Creation Datetime:** This field records the creation date and time of each product file.
    * **ID:** This is the unique identifier for each product image object in the database model.

### Backend Development

ChatGPT Notes:

* **Server Setup** : Set up a server environment (e.g., Node.js, Django, or any backend framework).
* **Database Design** : Create the database schema, relationships, and models.
* **API Development** : Design and implement RESTful or GraphQL APIs to handle CRUD operations.
* **Authentication & Authorization** : Implement user authentication (e.g., JWT, OAuth) and role-based access control.
* **Business Logic** : Write the core logic for application functionality (e.g., order processing, payment handling).

---

#### Server Setup

The server setup will be explained in the following subtopics:

##### Frameworks and Programming Languages

###### Backend Framework

Django is a robust and versatile backend framework that offers numerous advantages for developing e-commerce platforms
like EShoppify. Its "batteries-included" approach provides a comprehensive set of tools and libraries out of the box,
enabling rapid development and reducing the need for third-party solutions. This efficiency accelerates time-to-market,
allowing businesses to launch their products faster and maintain a competitive edge.

Security is paramount in e-commerce applications, and Django excels in this area by offering built-in protections
against common web vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (
CSRF). These features help safeguard sensitive customer data and ensure the integrity of online transactions, fostering
trust between the business and its customers.

Scalability is another significant advantage of Django, making it well-suited for e-commerce platforms that anticipate
growth and increased user traffic. Its architecture supports the efficient management of high volumes of data and user
interactions, ensuring that the application can seamlessly handle expansion. Additionally, Django's large and active
community provides a wealth of resources and support, facilitating continuous improvement and access to best practices
in web development.

###### Python Programming Language

Python is a high-level, interpreted programming language renowned for its simplicity and readability. Its syntax, which
closely resembles the English language, allows developers to write clear and concise code, facilitating easier
maintenance and debugging. This user-friendly design has contributed to Python's widespread adoption across various
domains, including web development, data analysis, artificial intelligence, and scientific computing.

One of Python's significant strengths is its versatility. It supports multiple programming paradigms, such as
procedural, object-oriented, and functional programming, providing developers with the flexibility to choose the most
suitable approach for their projects. Additionally, Python boasts a comprehensive standard library and a vast ecosystem
of third-party packages, enabling rapid development and integration with other technologies.

Python's cross-platform compatibility further enhances its appeal. It operates seamlessly on various operating systems,
including Windows, macOS, and Linux, ensuring that Python applications can run across different environments without
modification. This portability, combined with its extensive community support and continuous development, solidifies
Python's status as a leading programming language in both industry and academia.

###### Web Frontend Design Programming Languages

HTML, CSS, and JavaScript are the foundational technologies for web development, each serving a distinct purpose. HTML (
HyperText Markup Language) structures the content of web pages, providing a semantic foundation that enhances
accessibility and search engine optimization (SEO). CSS (Cascading Style Sheets) adds style and visual appeal, enabling
developers to design user-friendly interfaces with consistent branding across devices. JavaScript introduces
interactivity and dynamic features, transforming static web pages into engaging user experiences. Together, these
technologies enable the creation of responsive and high-performing web applications.

In the context of EShoppify, an e-commerce platform, the combination of HTML, CSS, and JavaScript enables the creation
of an intuitive and visually appealing frontend. HTML ensures the platform's content is well-organized and easy to
navigate, while CSS brings the design to life with customizable themes, layouts, and animations. JavaScript enhances
functionality by implementing features like product carousels, live search, and secure payment gateways. This synergy
ensures that EShoppify delivers a seamless shopping experience to its users, fostering customer satisfaction and
loyalty.

For modern frontend designs, these technologies provide unparalleled flexibility and adaptability. Advanced CSS
techniques, like grid and flexbox, allow for responsive designs that cater to various screen sizes, ensuring optimal
usability on desktops, tablets, and smartphones. JavaScript frameworks and libraries, such as React or Vue.js,
streamline the development of interactive components like filters, real-time updates, and personalized recommendations.
Utilizing HTML, CSS, and JavaScript in EShoppify allows for the development of a sophisticated, future-proof e-commerce
website that meets the demands of today’s tech-savvy consumers.

###### Mobile Framework

Flutter, developed by Google, is an open-source UI toolkit that enables developers to create natively compiled
applications for mobile, web, and desktop platforms from a single codebase. This cross-platform capability significantly
reduces development time and costs, as developers can write code once and deploy it across multiple platforms, ensuring
consistency and efficiency. Flutter's rich set of customizable widgets and its expressive UI framework empower
developers to craft visually appealing and highly interactive user interfaces, which is crucial for engaging users in
today's competitive market.

In the context of EShoppify, an e-commerce platform, Flutter's advantages are particularly impactful. The framework's
ability to deliver native-like performance ensures that users experience smooth and responsive interactions, which is
essential for retaining customers and reducing bounce rates. Additionally, Flutter's hot reload feature allows for rapid
iteration and testing, enabling developers to quickly implement and refine features such as product carousels, secure
payment gateways, and real-time inventory updates. This agility in development translates to a faster time-to-market,
allowing EShoppify to respond promptly to market demands and user feedback.

Furthermore, Flutter's growing ecosystem and active community provide a wealth of resources, plugins, and support,
facilitating the integration of various functionalities into EShoppify. The framework's open-source nature ensures that
it remains up-to-date with the latest technological advancements, allowing EShoppify to leverage new features and
maintain a competitive edge. By utilizing Flutter, EShoppify can offer a seamless and engaging shopping experience
across multiple platforms, enhancing user satisfaction and driving business growth.

###### Dart Programming Language

Dart is an open-source, object-oriented programming language developed by Google, designed to build high-performance,
cross-platform applications. It features a C-style syntax, making it familiar to developers with experience in languages
like JavaScript, Java, or C#. Dart supports both just-in-time (JIT) and ahead-of-time (AOT) compilation, enabling fast
development cycles and optimized performance for production environments.

One of Dart's standout features is its strong support for asynchronous programming, which is essential for developing
responsive applications. The language provides a rich set of libraries and tools that facilitate the development of
complex, high-performance applications. Dart's type system includes sound null safety, ensuring that variables cannot be
null unless explicitly allowed, thereby reducing runtime errors and enhancing code reliability.

In the context of EShoppify, Dart's capabilities are particularly beneficial. Its efficient performance and robust
asynchronous programming model ensure that the e-commerce platform can handle high volumes of user interactions and data
processing seamlessly. Dart's compatibility with Flutter allows for the development of a unified codebase that runs
across multiple platforms, including iOS, Android, web, and desktop, providing a consistent and high-quality user
experience. This cross-platform approach not only streamlines development but also reduces maintenance costs, enabling
EShoppify to deliver a reliable and engaging shopping experience to users across various devices.

##### Backend Libraries

The core libraries, which are the backbone of EShoppify, are as follows:

* `asgiref==3.8.1`
  * The `asgiref==3.8.1` library is a key utility for Python's asynchronous web development, supporting the ASGI (
    Asynchronous Server Gateway Interface) standard. It provides tools like sync-to-async and async-to-sync wrappers,
    making it easier to integrate synchronous and asynchronous code. Essential for high-performance web applications,
    `asgiref` enables concurrent request handling, improving scalability and responsiveness. This makes it an
    excellent choice for applications like EShoppify, where real-time features and efficient request management are
    crucial.
* `certifi==2024.8.30`
  * The `certifi==2024.8.30` library in Python provides a curated collection of trusted root certificates for
    verifying the SSL/TLS certificates of websites and APIs. By using `certifi`, developers ensure secure
    communication between applications and external servers, reducing the risk of man-in-the-middle attacks. This is
    especially important for e-commerce platforms like EShoppify, where safeguarding sensitive customer data, such as
    payment information, is a top priority. With `certifi`, EShoppify can maintain a secure and reliable connection to
    external services like payment gateways and APIs.
* `cffi==1.17.1`
  * CFFI, or C Foreign Function Interface, provides a way for Python programs to call and interact with C code
    directly, making it easier to extend Python with C libraries. It allows developers to define C data structures and
    functions in Python code, simplifying the integration of C-based functionality. CFFI is particularly useful in
    performance-critical applications where Python alone may not suffice, such as system-level programming or bindings
    to existing C libraries. It ensures safe interaction with C code through well-defined interfaces, offering both a
    high-level and low-level API. CFFI’s portability across platforms and its focus on simplicity make it a go-to
    choice for Python-C integration.
* `charset-normalizer==3.4.0`
  * Charset Normalizer is a library that helps detect and normalize the character encoding of text. It is particularly
    useful for handling different encodings in web scraping, data processing, or API integrations where the text may
    come in a variety of encodings. By normalizing the encoding, it ensures that text is readable and consistent
    across platforms, regardless of the original encoding format. Charset Normalizer is an alternative to libraries
    like `chardet` and is designed to be faster and more reliable. Its capabilities are essential for developers
    working with international or legacy data sources, ensuring smooth text handling across diverse systems.
* `cryptography==43.0.1`
  * Cryptography is a comprehensive library for cryptographic operations, including encryption, decryption, hashing,
    and key management. It provides high-level cryptographic recipes and primitives for developers who need secure
    data transmission, such as SSL/TLS or token-based authentication. The library supports a wide range of
    cryptographic algorithms, including AES, RSA, and SHA-2, enabling both symmetric and asymmetric encryption.
    Cryptography also provides tools for safely handling cryptographic keys and ensuring compliance with industry
    standards. Its extensive use in securing web applications, APIs, and data storage makes it a critical component
    for developers focused on security.
* `Django==5.1.1`
  * Django is a high-level web framework for Python that allows rapid development of secure and maintainable web
    applications. It follows the "batteries-included" philosophy, offering a wide range of built-in features such as
    an ORM, authentication system, and admin interface. Django emphasizes reusability, less code, and rapid
    prototyping, which accelerates development while maintaining flexibility. It is highly scalable and well-suited
    for both small and large applications, with robust support for security best practices, including protection
    against common vulnerabilities like SQL injection and cross-site scripting (XSS). With its active community and
    extensive documentation, Django remains one of the most popular web frameworks in the Python ecosystem.
* `django-admin-interface==0.29.0`
  * Django Admin Interface is an open-source Django app that enhances the appearance and usability of the default
    Django admin interface. It provides a modern and customizable UI with features such as color themes, improved
    navigation, and better user experience. This library makes the Django admin more visually appealing and easier to
    use, especially for non-technical users managing application content. It supports various customization options
    like changing colors, typography, and layout adjustments. By offering these enhancements, django-admin-interface
    helps developers create more user-friendly admin interfaces without modifying core Django code.
* `django-allauth==65.0.2`
  * Django Allauth is a Django package that provides a complete authentication system, including user login,
    registration, account management, and third-party authentication via OAuth, OpenID, and more. It simplifies the
    implementation of common authentication flows like social logins with providers such as Google, Facebook, or
    Twitter. With its extensible architecture, Django Allauth allows developers to easily integrate user
    authentication into any Django project while ensuring best practices for security. It also includes features like
    email verification, password reset, and account linking for a robust user management system. This makes it a go-to
    solution for applications that require complex authentication features without having to build them from scratch.
* `django-colorfield==0.11.0`
  * Django Colorfield is a Django model field that allows users to select and store color values in a standardized
    format. It integrates seamlessly with the Django admin interface, providing an intuitive color picker widget for
    managing color inputs. This field supports multiple color formats, including HEX, RGB, and HSL, making it
    versatile for various design-related tasks. Django Colorfield is often used in projects where color customization
    is a key feature, such as in theming, branding, or user profile customization. Its easy integration into Django
    models makes it an attractive choice for developers needing color support in their applications.
* `django-phonenumber-field==8.0.0`
  * Django Phonenumber Field is a Django app that simplifies the process of managing phone numbers within a Django
    model. It uses the `phonenumbers` library to ensure that phone numbers are stored in an international, valid, and
    standardized format. This field can automatically validate phone numbers, format them according to local
    conventions, and ensure their correctness based on global phone number rules. It integrates smoothly with Django’s
    admin and forms, providing users with an intuitive interface for input. By using Django Phonenumber Field,
    developers can ensure that phone number data is consistent, valid, and ready for integration with other services
    like SMS gateways or third-party authentication.
* `idna==3.10`
  * IDNA is a library that implements the Internationalized Domain Names (IDN) standard in Python. This allows Python
    programs to correctly handle domain names that include non-ASCII characters, such as those in different languages
    or scripts. It ensures compatibility with domain names that use Unicode characters beyond the typical Latin
    alphabet, making the global internet more accessible. IDNA converts these internationalized domain names into the
    ASCII-compatible encoding (ACE) that can be used in URLs. By supporting IDN, the library enables Python
    applications to resolve and handle domain names in any language or character set correctly.
* `oauthlib==3.2.2`
  * OAuthLib is a Python library that provides tools for working with OAuth1 and OAuth2 protocols. OAuth is a widely
    used authentication standard that allows third-party applications to access user data without requiring direct
    access to user credentials. OAuthLib simplifies the implementation of secure and scalable authentication systems,
    such as single sign-on (SSO) and token-based authentication. It supports both OAuth1 and OAuth2, enabling
    developers to easily integrate secure authorization mechanisms into their web applications. OAuthLib’s flexibility
    and robustness make it a key library for handling authentication and authorization in modern Python applications.
* `phonenumbers==8.13.50`
  * Phonenumbers is a Python library that provides tools for parsing, formatting, and validating phone numbers. It is
    based on Google's libphonenumber, which is a widely used library for phone number processing. The library allows
    developers to easily handle international phone numbers by parsing them into a standard format, validating their
    correctness, and formatting them according to the appropriate conventions. Phonenumbers is used in applications
    that require phone number storage, verification, or display, such as user registration forms, contact management
    systems, or SMS-based services. Its ability to validate phone numbers for different countries makes it a critical
    tool for any application dealing with phone number data.
* `pillow==10.4.0`
  * Pillow is a powerful image processing library for Python, built as a fork of the Python Imaging Library (PIL). It
    provides an easy-to-use interface for opening, manipulating, and saving various image formats, including PNG,
    JPEG, and GIF. Pillow supports a wide range of image processing operations, such as resizing, cropping, rotating,
    applying filters, and more. It also supports advanced image features like transparency handling, image annotation,
    and metadata manipulation. Pillow’s popularity among Python developers stems from its simplicity, versatility, and
    active community, making it the go-to choice for any image-related tasks.
* `pycparser==2.22`
  * Pycparser is a complete and lightweight C parser written in Python. It is capable of parsing and analyzing C
    source code into an abstract syntax tree (AST), enabling developers to manipulate and understand C code
    programmatically. Pycparser can be used for various applications, including static analysis, code generation, or
    building tools that interact with C codebases. It is fully compliant with the C99 standard, making it suitable for
    handling modern C code. Pycparser’s integration with Python allows developers to write powerful tools for working
    with C code without needing to leave the Python ecosystem.
* `PyJWT==2.9.0`
  * PyJWT is a Python library for creating and verifying JSON Web Tokens (JWTs). JWTs are commonly used in modern web
    applications for transmitting securely signed information between clients and servers, particularly for
    authentication and authorization purposes. PyJWT provides an easy way to encode and decode JWTs, using algorithms
    like HMAC, RSA, and ECDSA for secure signing. The library also supports token expiration, claims, and additional
    security features, making it suitable for a variety of use cases in user authentication systems. By simplifying
    the creation and validation of JWTs, PyJWT is a key tool for building secure and scalable web applications.
* `python-decouple==3.8`
  * Python Decouple is a library that helps separate configuration settings from code, making it easier to manage
    different environments (development, production, etc.) without hardcoding values. It reads configuration from
    environment variables or `.env` files, ensuring that sensitive data like API keys or database credentials are not
    exposed in source code. This is especially important for deploying applications to different environments where
    configurations may change, like in continuous integration (CI) or cloud platforms. Python Decouple’s simplicity
    and ease of use have made it a popular choice for managing settings in a secure and scalable way. By isolating
    configuration, it helps keep Python projects clean and portable across environments.
* `python-slugify==8.0.4`
  * Python Slugify is a simple utility for generating URL-friendly slugs from strings. It takes an input string,
    removes special characters, converts the text to lowercase, and replaces spaces with hyphens, making it suitable
    for use in SEO-friendly URLs. Slugify is commonly used in content management systems, blogs, and e-commerce
    applications to create clean, readable URLs that are both user-friendly and search engine optimized. It supports
    various languages and character sets, ensuring that slugs are generated correctly across different locales. By
    automating the slug creation process, Python Slugify saves developers time and effort when creating user-friendly
    web addresses.
* `requests==2.32.3`
  * Requests is a simple and intuitive HTTP library for Python, making it easy to send HTTP requests and handle
    responses. It abstracts the complexities of working with HTTP, enabling developers to focus on interacting with
    APIs, web services, or other HTTP-based protocols. Requests support various HTTP methods like GET, POST, PUT,
    DELETE, and more, while also handling cookies, sessions, and redirection automatically. The library also provides
    convenient features for handling headers, parameters, timeouts, and responses, making it a go-to choice for web
    scraping, data retrieval, or building web clients. Requests is widely praised for its simplicity and ease of use,
    making it a popular library in the Python ecosystem.
* `requests-oauthlib==2.0.0`
  * Requests-OAuthlib is an extension of the popular `requests` library that adds OAuth authentication support. OAuth
    is a widely used protocol for allowing third-party applications to access user data securely, without requiring
    users to share their credentials. With Requests-OAuthlib, developers can integrate OAuth1 and OAuth2
    authentication flows seamlessly into their applications. The library simplifies the process of obtaining access
    tokens and making authenticated API requests, streamlining the integration of external services like Google,
    Facebook, or Twitter. It is an essential tool for building secure and scalable applications that require
    OAuth-based authentication.
* `sqlparse==0.5.1`
  * SQLParse is a non-validating SQL parser for Python, designed to handle the parsing and formatting of SQL
    statements. It can break down SQL queries into components, making it useful for tasks like query analysis, code
    generation, and formatting SQL for readability. SQLParse is particularly beneficial for tools that need to
    interact with SQL databases in a programmatic way, such as database migration systems or SQL injection detection.
    The library can also reformat SQL queries into a consistent style, improving the readability and maintainability
    of complex queries. Its simplicity and focus on parsing make it a useful library for developers working with SQL
    in Python.
* `text-unidecode==1.3`
  * Text-Unidecode is a Python library that converts Unicode text into its closest ASCII representation. It is useful
    for removing accents, diacritical marks, and other special characters from text, which is helpful in tasks like
    generating SEO-friendly URLs or normalizing text for search engines. The library ensures that non-ASCII characters
    are safely removed, resulting in clean, standardized text without losing the meaning or pronunciation of the
    original content. Text-Unidecode is commonly used in applications that need to generate readable and accessible
    text from international or special-character-based input. Its simple interface and functionality make it a
    valuable tool for normalizing text in Python.
* `typing_extensions==4.12.2`
  * Typing Extensions is a backport of the latest features from Python’s typing module, enabling developers to use new
    type hints and static analysis tools even in older Python versions. It provides additional features like
    `TypedDict`, `Literal`, and `Final`, which are part of Python’s gradual adoption of static typing. Typing
    Extensions helps developers improve the clarity and maintainability of their code by enforcing stronger type
    checks, leading to fewer runtime errors and better code quality. It is especially useful in projects that use
    older versions of Python but still want to take advantage of the latest typing features. The library contributes
    to better documentation, code quality, and tooling for Python developers working with complex applications.
* `tzdata==2024.1`
  * TZData is a package that contains the IANA Time Zone Database, which provides accurate and up-to-date information
    about time zones worldwide. This database is used to manage time zone conversions, daylight saving time
    adjustments, and the handling of timestamps across different regions. By using TZData, Python applications can
    accurately handle time-related calculations in different parts of the world, ensuring that times are correctly
    displayed for users in various time zones. TZData is frequently updated to reflect changes in local timekeeping
    rules and practices, such as changes in daylight saving time. This package is an essential tool for any Python
    application that deals with date, time, and time zone manipulation.
* `urllib3==2.2.3`
  * urllib3 is a powerful HTTP library for Python, designed to provide advanced features for handling HTTP requests.
    It includes features such as connection pooling, retry logic, and handling of SSL/TLS connections, making it ideal
    for high-performance, production-grade web applications. urllib3 simplifies the management of HTTP connections,
    automatically handling redirects, cookies, and response parsing. It also integrates seamlessly with libraries like
    `requests`, providing an underlying connection management layer. With its focus on performance and reliability,
    urllib3 is commonly used in applications that require efficient and secure HTTP communication, such as web
    scraping, API interaction, and microservices.

##### Frontend Libraries

Libraries of HTML, CSS, and Javascript.

##### Cross Platform Libraries

Libraries of Flutter and Dart.

#### Database Design

EShoppify backend database explanations.

#### API Development

EShoppify API documentation.

#### EShoppify Authentication & Authorization

##### Overview

📌 **Understanding the Role of Pre-Built Packages**

One of the essential skills for a senior software engineer or full-stack developer is the ability to effectively utilize
pre-built and pre-existing packages in their chosen programming language or framework. These packages not only
streamline development but also ensure reliability and scalability. When building an e-commerce project like
“EShoppify,” leveraging such packages can save considerable development time while maintaining high standards of
security and functionality. For example, Django, known for its robust ecosystem, provides various packages that address
common development challenges. This approach demonstrates expertise and resourcefulness, two qualities that clients or
employers highly value in a developer.

📌 **Importance of Authentication in Software Development**

Authentication plays a vital role in any software project, especially in e-commerce applications where user data
security is paramount. It ensures that only legitimate users gain access to specific resources or functionalities within
the application. A secure authentication system not only protects sensitive user data but also builds trust with clients
and end-users. In the context of “EShoppify,” the authentication system will be a cornerstone of the platform’s
functionality. This underscores the need to choose a robust solution, such as Django’s django-allauth, to handle this
critical aspect of the project.

📌 **Differentiating Authentication and Authorization**

While often used interchangeably, authentication and authorization are distinct concepts in software development.
Authentication verifies the identity of a user, ensuring they are who they claim to be. In contrast, authorization
determines the permissions or access rights of an authenticated user within the system. For “EShoppify,” implementing
these features accurately is critical to providing a seamless and secure user experience. Django, as a web framework,
simplifies the implementation of these concepts through packages like django-allauth, making it a preferred choice for
developers.

📌 **Django-**Allauth**: A Comprehensive Authentication Package**

Django-allauth is a versatile package that simplifies the integration of authentication features in Django-based
projects. It supports user registration, login, logout, password management, and social account integration. Its modular
design allows developers to customize and extend its functionality to meet specific project requirements. For
“EShoppify,” this package will be used to implement a secure and user-friendly authentication system, enhancing the
platform’s overall reliability and scalability. Clients will appreciate the robustness of django-allauth and its ability
to meet industry standards.

📌 **Social Authentication with Django-**Allauth****

One standout feature of django-allauth is its seamless support for social authentication. It allows users to log in or
register using their existing accounts on platforms like Google, Facebook, and Twitter. This feature is particularly
valuable for e-commerce projects like “EShoppify,” as it simplifies the onboarding process and improves user retention.
By integrating social authentication, the platform can cater to a broader audience, enhancing its appeal and usability.
Such thoughtful design choices resonate with clients who value user-centered development.

📌 **Customization and Flexibility in Django-**Allauth****

Django-allauth is highly customizable, enabling developers to tailor it to the specific needs of their projects. Whether
it’s customizing the registration form, modifying the user model, or adding additional security features, the package
offers flexibility without compromising simplicity. For “EShoppify,” this adaptability ensures that the authentication
system aligns perfectly with the platform’s branding and functional requirements. Clients will appreciate the attention
to detail and the ability to offer a personalized experience to end-users.

📌 **Security Features in Django-**Allauth****

Security is a top priority in any authentication system, and django-allauth excels in this area. It incorporates best
practices such as password hashing, email verification, and two-factor authentication. For “EShoppify,” these features
will ensure the protection of user data, enhancing the platform’s credibility and trustworthiness. Clients and employers
will recognize the value of these measures, especially in a domain where user trust is critical to success.

📌 **The Role of Django in E-Commerce Development**

Django, as a web framework, is known for its scalability, security, and rapid development capabilities. Its integration
with Python makes it a powerful choice for building complex applications like “EShoppify.” The framework’s extensive
library of pre-built packages, including django-allauth, reduces development time while maintaining high-quality
standards. For clients, this means quicker delivery of a reliable and feature-rich product. The use of Django reflects a
commitment to leveraging cutting-edge tools to achieve project goals efficiently.

📌 **Why Django-**Allauth** for **“**EShoppify**”**?**

The decision to use django-allauth for “EShoppify” is rooted in its proven track record and community support. It is
widely adopted in Django development for its reliability and ease of use. By implementing this package, “EShoppify” will
benefit from a tried-and-tested solution that meets the highest standards of authentication. This decision showcases the
developer’s ability to make informed choices that align with project requirements, a quality highly regarded by clients
and employers.

📌 **Delivering Value Through Expertise**

By incorporating django-allauth into “EShoppify,” the project exemplifies the importance of leveraging expertise and the
right tools to deliver value. The ability to integrate and customize advanced features like authentication showcases
technical proficiency and a client-focused approach. Employers and clients will recognize the strategic use of Django
and its ecosystem as a testament to the developer’s dedication to creating secure, scalable, and user-friendly
solutions. This commitment sets the stage for long-term success and collaboration.

##### Web Walkthroughs

This section provides an explanation of the authentication and authorization process across various platforms of
EShoppify, a cutting-edge e-commerce project.

###### Landing Page Login and Signup Buttons

The EShoppify landing page appears as shown. On this page, users without an existing account can create one by clicking
the "Sign Up" button, which initiates the registration process, explained further below. For users with a prior
EShoppify account, clicking the "Login" button begins the authorization process. This involves verifying user
credentials through the backend authentication system, sending a two-factor authentication code via email, and then
redirecting the user to their profile screen.

* Landing page on large screens

![Landing Page](../Assets/Backend%20Development/Authentication/Images/Landing%20Page.png)

The functionality of the web platform mirrors that of the mobile web view, ensuring a consistent user experience across
devices. By tapping the menu toggle button located in the top navigation bar, users can access the menu, which contains
two primary options. The first button is for existing EShoppify users, allowing them to complete the authentication
process to log in. The second button facilitates account creation for new users, enabling them to undergo the
authorization process.

During either the authentication or authorization process, users are required to provide their email as part of the
necessary credentials. Once the email is entered, a two-factor authentication code is sent to the provided email
address. The user must then input this code into the platform, and upon successful verification, they are redirected to
their EShoppify profile. This enhanced process ensures both security and a seamless transition into the platform for all
users.

* Landing page on small screens | Closed top navigation bar

![Landing Page - Mobile - Web - Navbar - Closed](../Assets/Backend%20Development/Authentication/Images/Landing%20Page%20-%20Mobile%20-%20Navbar%20-%20Closed.png)

* Landing page on small screens | Opened top navigation bar

![Landing Page - Mobile - Web - Navbar - Closed](../Assets/Backend%20Development/Authentication/Images/Landing%20Page%20-%20Mobile%20-%20Navbar%20-%20Opened.png)

To showcase my backend development skills, I will provide an in-depth explanation of the backend functionality behind the EShoppify landing page, highlighting the processes and logic that power its operations.

The first thing to address is the root URL at the project level, which looks like this:

```python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

# - > Libraries

## -- >> Import django admin
from django.contrib import admin

## -- >> Import path method
from django.urls import path, include

## -- >> Import website settings
from django.conf import settings

## -- >> Import static from urls
from django.conf.urls.static import static

urlpatterns = [

	...

	## -- >> Products URLs
        path("", include("products.urls")),

	...
]

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
```

The above code connects the `products` app-level URL patterns to the main project-level URL patterns. Additionally, to fully integrate the `products` app into the EShoppify project, the following code was added to the `eshoppify/settings.py` file, which contains the core backend configuration settings.

```python
...

# Application definition
INSTALLED_APPS = [

  ...

  ### --- >>> Products
  "products.apps.ProductsConfig",

  ...

]

...
```

The `products` app URL patterns then connect to the following URL, which is primarily used for the landing page and its related view.

```python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

# - > Libraries

## -- >> Import Path
from django.urls import path

...

# - > Modules

## -- >> Import Products Views
from . import views

...

# - > URL Patterns
urlpatterns = [

    ...  

    ## -- >> EShoppify Landing Page
    path(
        route = "",
        view = views.home_landing_page,
        name = "home_landing_page",
    ),

    ...
  
]

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
```

The view, which is a function-based view offering extensive customization in Django (though class-based views are another good option but with limited flexibility), is responsible for rendering the EShoppify landing page and will be called to perform its task.

```python
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #

...

# - > Libraries

...

## -- >> Import Django Render Method 
from django.shortcuts import render

...

# - > Home Page Render
def home_landing_page(request):
  
    ## -- >> Render the Index Page
    return render(
        request = request,
        template_name = "index.html",
    )

...

# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
# ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© #
```

The `return render()` function in Django is used to generate an HTTP response by combining a template with a context. In this specific example:

* The `request` parameter represents the HTTP request object passed to the view. It carries metadata about the current request and is essential for rendering the appropriate response.
* The `template_name` parameter specifies the name of the HTML template, `"index.html"`, which serves as the user interface for the EShoppify landing page.

When this function is called, Django processes the specified template, applies any associated context (not shown here but can be passed as an additional parameter), and returns the resulting HTML to the user's browser. This ensures that the page is dynamically rendered while keeping the codebase modular and maintainable.

Since the template HTML file may contain a large amount of code, I will include only relevant chunks below to keep this documentation concise and readable.

```html
{% raw %}

{% extends 'navbar.html' %}

{% load static %}

{% block content %}

    <div class="carousel slide" data-bs-ride="carousel" data-bs-interval="8000" id="carousel-1" style="height: 90vh;">
        ...
    </div>
    <div class="my-4 p-4 d-flex flex-column justify-content-center align-items-center">
        ...
    </div>
    <div class="carousel slide MuhammadHusainAbootalebi-carousel-main-div py-4 my-4" data-bs-ride="carousel" id="carousel-2">
        ...
    </div>
    <div class="my-4 p-4 d-flex flex-column justify-content-center align-items-center">
        ...
    </div>
    <div class="carousel slide MuhammadHusainAbootalebi-carousel-main-div py-4 my-4" data-bs-ride="carousel" id="carousel-5">
        ...
    </div>
    <div class="my-4 p-4 d-flex flex-column justify-content-center align-items-center">
        ...
    </div>
    <div class="carousel slide MuhammadHusainAbootalebi-carousel-main-div py-4 my-4" data-bs-ride="carousel" id="carousel-3">
        ...
    </div>

    <script src="{% static 'assets/js/carousels.js' %}"></script>
    <script src="{% static 'assets/js/Services/Books.js' %}"></script>
    <script src="{% static 'assets/js/Services/Clothing.js' %}"></script>
    <script src="{% static 'assets/js/Services/Office.js' %}"></script>

{% endblock content %}

{% endraw %}
```

The landing page primarily extends a `navbar.html` file, which defines the main appearance of EShoppify. It contains various elements designed to make the landing page more intuitive and engaging, leveraging the functionality of the developed JavaScript files.

###### Logging in

The login page for PC or desktop platforms provides a clear and user-friendly interface for authentication. Users are
required to enter their email address and password to proceed to the two-factor authentication step. Key features of the
login page include:

* **Email and Password Fields**
  * The email field is for entering the registered email address.
  * The password field includes an eye icon button that allows users to toggle between hiding and revealing the
    entered password for convenience.
* **Forgot Password Option**
  * Below the password field, there is a "Forgot Password" link that users can click to reset their password if
    needed.
* **Stay Logged In Option**
  * A checkbox is provided for users who want to stay logged in on the device.
* **Login Button**
  * The "Login" button submits the entered credentials to proceed to the next step of the authentication process,
    which is two-factor authentication.
* **Sign-Up Link**
  * Below the login button, there is a "Sign Up" link for new users to create an account.

This streamlined layout ensures a smooth login experience while emphasizing security and convenience.

![Login screen | Web PC](../Assets/Backend%20Development/Authentication/Images/Login%20Screen%20-%20Web%20-%20PC%20and%20Desktop.webp)

The login page for mobile devices is the same as that for desktop platforms. This view can be seen here:

![Login screen | Mobile Web View](../Assets/Backend%20Development/Authentication/Images/Login%20Screen%20-%20Mobile%20-%20Web%20View.png)

After providing the required login credentials, which include an email address and password, a webpage tailored for PC,
desktop, or mobile platforms will appear. On this page, a notification will indicate that a sign-in code has been sent
to the provided email. Upon checking the email, the sign-in code can be found.

![Two-Factor Authentication Form | Web View](../Assets/Backend%20Development/Authentication/Images/Entering%20Two%20Factor%20Authentication%20-%20Form%20-%20PC.png)

On mobile devices using the web view, the sign-in code page is identical to the version displayed on PC platforms. It
appears as shown below.

![Two-Factor Authentication Form | Mobile View](../Assets/Backend%20Development/Authentication/Images/Entering%20Two%20Factor%20Authentication%20-%20Form%20-%20Mobile.png)

The email containing the sign-in code is designed to include a customizable text introduction, the sign-in code itself,
and a closing greeting. Since the development is currently in a local environment, the website URL is configured as
eshoppify.com:7000, reflecting its default running port.

![Two-Factor Authentication Sent Code](../Assets/Backend%20Development/Authentication/Images/Two-Factor%20Authentication%20Code%20-%20Gmail.png)

After entering the sign-in code, the EShoppify user is redirected to the profile page, displayed as shown below on PC or
desktop platforms. A message confirming successful login is also displayed, as illustrated.

![Profile Page | PC and Desktop View](../Assets/Backend%20Development/Authentication/Images/Profile%20-%20Page%20-%20Web%20and%20PC%20View.png)

The process described is the same for mobile devices in web view, as shown below.

![Profile Page | Mobile View](../Assets/Backend%20Development/Authentication/Images/Profile%20-%20Page%20-%20Mobile%20View.png)

To explain the login process, first, by clicking (on desktop and PC platforms) or tapping (on mobile platforms) the "Login" button, the `account_login` URL is requested through this template tag:

```html
{% raw %}

...

    <a 
        class=
        "
            btn 
            pt-2 
            pb-2 
            pe-4 
            ps-4 
            rounded-3 
            me-5 
            my-2 
            border-2 
            btn-dark 
            cta-navbar-button 
            MuhammadHusainAbootalebi-Navbar-login-button
        "
        type="button"
        style=
        "
            background: rgba(255,255,255,0);
            font-family: 'Baloo Bhaijaan 2', serif;
            color: rgb(0,0,0);
        "
        href="{% url 'account_login' %}">
  
        Login
  
    </a>

...

{% endraw %}
```

In the code above, by clicking or tapping the "Login" button, the `account_login` URL is requested using the `url` method.

After that, the URL corresponding to the `account_login` URL name is as follows:

```python
from django.conf import settings
from django.urls import path, re_path

from allauth import app_settings as allauth_app_settings
from allauth.account import app_settings

from . import views

urlpatterns = [

	path("login/", views.login, name="account_login"),

	...

]
```

In the code above, the `account_login` URL name is mapped to the `views.login` view. The `views.login` view looks like this:

📌 1. **Class Definition and Mixin Inheritance**

```python
class LoginView(
    NextRedirectMixin,
    RedirectAuthenticatedUserMixin,
    AjaxCapableProcessFormViewMixin,
    FormView,
):
```

The `LoginView` class inherits from multiple mixins and Django's `FormView`, combining functionalities:

- **`NextRedirectMixin`**: Handles redirection to the next page after login.
- **`RedirectAuthenticatedUserMixin`**: Redirects already authenticated users to avoid re-login.
- **`AjaxCapableProcessFormViewMixin`**: Adds support for AJAX-based form submissions.
- **`FormView`**: Provides the base for rendering and processing forms.

📌 2. **Key Attributes**

```python
form_class = LoginForm
template_name = "account/login." + app_settings.TEMPLATE_EXTENSION
success_url = None
```

- **`form_class`**: Specifies the form class used for login, defaulting to `LoginForm`.
- **`template_name`**: Defines the template file for rendering the login page, dynamically appending the extension from `app_settings`.
- **`success_url`**: Placeholder for the URL to redirect after successful login. This is often determined dynamically.

📌 3. **`dispatch` Method**

```python
@method_decorator(rate_limit(action="login"))
@method_decorator(login_not_required)
@sensitive_post_parameters_m
@method_decorator(never_cache)
def dispatch(self, request, *args, **kwargs):
    if allauth_app_settings.SOCIALACCOUNT_ONLY and request.method != "GET":
        raise PermissionDenied()
    return super().dispatch(request, *args, **kwargs)
```

The `dispatch` method processes requests and applies these decorators:

- **`rate_limit`**: Limits login attempts to prevent brute force attacks.
- **`login_not_required`**: Allows unauthenticated users to access this view.
- **`sensitive_post_parameters_m`**: Ensures sensitive data in POST requests is protected.
- **`never_cache`**: Disables caching for security reasons.

If `SOCIALACCOUNT_ONLY` is enabled and the request method isn't `GET`, the method raises a `PermissionDenied` error.

📌 4. **`get_form_kwargs` Method**

```python
def get_form_kwargs(self):
    kwargs = super().get_form_kwargs()
    kwargs["request"] = self.request
    return kwargs
```

This method adds the `request` object to the form's keyword arguments, allowing the form to access the current request for additional processing.

📌 5. **`get_form_class` Method**

```python
def get_form_class(self):
    return get_form_class(app_settings.FORMS, "login", self.form_class)
```

Returns the form class to be used for login. It retrieves the form class dynamically from the `app_settings.FORMS` configuration.

📌 6. **`form_valid` Method**

```python
def form_valid(self, form):
    redirect_url = self.get_success_url()
    try:
        return form.login(self.request, redirect_url=redirect_url)
    except ImmediateHttpResponse as e:
        return e.response
```

When the form is valid:

- Calls `form.login()` to authenticate the user and manage redirection.
- Catches `ImmediateHttpResponse` exceptions to handle scenarios like multi-factor authentication or custom responses.

📌 7. **`get_context_data` Method**

```python
def get_context_data(self, **kwargs):
    passkey_login_enabled = False
    if allauth_app_settings.MFA_ENABLED:
        from allauth.mfa import app_settings as mfa_settings
        passkey_login_enabled = mfa_settings.PASSKEY_LOGIN_ENABLED

    ret = super().get_context_data(**kwargs)
    signup_url = None
    if not allauth_app_settings.SOCIALACCOUNT_ONLY:
        signup_url = self.passthrough_next_url(reverse("account_signup"))
    site = get_current_site(self.request)

    ret.update(
        {
            "signup_url": signup_url,
            "site": site,
            "SOCIALACCOUNT_ENABLED": allauth_app_settings.SOCIALACCOUNT_ENABLED,
            "SOCIALACCOUNT_ONLY": allauth_app_settings.SOCIALACCOUNT_ONLY,
            "LOGIN_BY_CODE_ENABLED": app_settings.LOGIN_BY_CODE_ENABLED,
            "PASSKEY_LOGIN_ENABLED": passkey_login_enabled,
        }
    )
    if app_settings.LOGIN_BY_CODE_ENABLED:
        request_login_code_url = self.passthrough_next_url(
            reverse("account_request_login_code")
        )
        ret["request_login_code_url"] = request_login_code_url
    return ret
```

This method populates the context dictionary with additional data for the template:

- Enables or disables **passkey login** based on MFA settings.
- Adds the signup URL and site information.
- Updates context with social account settings, login-by-code functionality, and other features.

📌 8. **Final `as_view` Method**

```python
login = LoginView.as_view()
```

The `LoginView.as_view()` function transforms the class-based view into a callable function that Django can use in URL patterns.

📌 **Final Insights**

The `LoginView` class in `django-allauth` is a robust implementation for handling user login. It combines flexibility, security, and extensibility by leveraging Django's features and its own configuration options. This design ensures that authentication can adapt to various project needs while maintaining a seamless user experience.

###### Signing up

The account creation process on EShoppify can be broken down into two key steps: account creation and account
validation, which is similar to the login process. To create a new account, EShoppify users need to click the "Signup"
button located in the top navigation bar. On desktop or PC, this button is easily accessible, and on mobile devices,
users can tap the button in the mobile web view, as shown for the desktop version.

* Desktop and PC Web View

![Landing Page](../Assets/Backend%20Development/Authentication/Images/Landing%20Page.png)

* Mobile Web View | Navbar Closed

![Landing Page - Mobile - Web - Navbar - Closed](../Assets/Backend%20Development/Authentication/Images/Landing%20Page%20-%20Mobile%20-%20Navbar%20-%20Closed.png)

* Mobile Web View | Navbar opened by tapping the '+' button.

![Landing Page - Mobile - Web - Navbar - Closed](../Assets/Backend%20Development/Authentication/Images/Landing%20Page%20-%20Mobile%20-%20Navbar%20-%20Opened.png)

When the "Signup" button is clicked, users are directed to the signup screen, which is designed to gather essential
account information. On this page, users are required to provide a valid email address and create a password. The
password must be entered twice: once to set it and again for confirmation. To enhance user convenience, an eye icon is
available next to each password field, allowing users to toggle password visibility.

Below the first password field, helpful tips are displayed to guide users in selecting a strong and valid password. Once
all fields are completed correctly, users can finalize the process by clicking the "Signup" button. Additionally, a link
below the button redirects users to the login page, enabling them to access an existing account or the newly created
one. This clear and user-friendly layout ensures a smooth account creation process for all EShoppify users.

* Desktop and PC Signup Page Web View

![Signup Page | Web | Desktop | PC](../Assets/Backend%20Development/Authentication/Images/Signup%20Screen%20-%20Desktop%20PC%20Web%20View.png)

* Mobile Signup Page Web View

![Signup Page | Web | Mobile](../Assets/Backend%20Development/Authentication/Images/Signup%20Screen%20-%20Mobile%20Web%20View.png)

After successfully submitting the required information on the signup screen, the user is redirected to the sign-in code
page, which is part of EShoppify's two-factor authentication process. This step ensures account security and follows the
same procedure as the login process, which will be reviewed in detail.

* Two-Factor Authentication Process on Desktop and PC Web View

![Two-Factor Authentication Form | Web View](../Assets/Backend%20Development/Authentication/Images/Entering%20Two%20Factor%20Authentication%20-%20Form%20-%20PC.png)

* Two-Factor Authentication Process on Mobile Web View

![Two-Factor Authentication Form | Mobile View](../Assets/Backend%20Development/Authentication/Images/Entering%20Two%20Factor%20Authentication%20-%20Form%20-%20Mobile.png)

After completing the account creation process, two emails are sent to the user. The first email, shown below, contains
the sign-in code required for authentication. Please note that this code will expire shortly.

![Two-Factor Authentication Sent Code](../Assets/Backend%20Development/Authentication/Images/Two-Factor%20Authentication%20Code%20-%20Gmail.png)

The second email is a welcome message sent to new EShoppify users, as illustrated below.

![Welcome Email EShoppify](../Assets/Backend%20Development/Authentication/Images/Welcome%20Email%20-%20EShoppify.png)

In order to explain the backend side responsible for handling account creation, first, by clicking or tapping on the 'Signup' button, it requests the following URL in this template tag:

```html
...

<a class=
    "
        btn 
        btn-primary 
        pt-2 
        pb-2 
        pe-4 
        ps-4 
        rounded-3 
        my-2 
        cta-navbar-button 
        MuhammadHusainAbootalebi-navbar-signup-button
    "
    type="button"
    style=
    "
        background: #000000;border-style: none;
        font-family: 'Baloo Bhaijaan 2', serif;
    "
    href="{% url 'account_signup' %}"
  >
  
  Signup
  
</a>

...
```

In the above template tag, after clicking or tapping on the 'Signup' button, the `account_signup` URL name is requested using the `url` method. After that, the mentioned URL name, `account_signup`, is mapped to the following URL pattern:

```python
...

        urlpatterns.extend(
            [
      
                ...

                path("signup/", views.signup, name="account_signup"),

                ...

            ]
        )

...
```

The above code maps the `account_signup` URL name to the `views.signup` view, which is explained below:

📌 **1. Class Declaration and Inheritance**

```python
class SignupView(
    RedirectAuthenticatedUserMixin,
    CloseableSignupMixin,
    NextRedirectMixin,
    AjaxCapableProcessFormViewMixin,
    FormView,
):
```

This class inherits from several mixins and the `FormView` class, each serving specific purposes:

- `RedirectAuthenticatedUserMixin`: Redirects users who are already authenticated, preventing them from accessing the signup page.
- `CloseableSignupMixin`: Likely handles the ability to close or disable the signup functionality (e.g., in cases where registration is temporarily disabled).
- `NextRedirectMixin`: Handles redirection after the signup process, ensuring users are redirected to the desired page after successfully signing up.
- `AjaxCapableProcessFormViewMixin`: Facilitates AJAX handling, allowing the form submission to be processed asynchronously.
- `FormView`: The base view class used for displaying and processing forms in Django.

📌 **2. Template and Form Class**

```python
template_name = "account/signup." + app_settings.TEMPLATE_EXTENSION
form_class = SignupForm
```

- `template_name`: Specifies the template that will be used to render the signup form. It dynamically appends the file extension defined in `app_settings.TEMPLATE_EXTENSION` to the template name.
- `form_class`: Defines the form class that will be used for user signup. In this case, it is `SignupForm`, a form class typically responsible for validating and handling user data input during signup.

📌 **3. Dispatch Method (Request Handling)**

```python
@method_decorator(rate_limit(action="signup"))
@method_decorator(login_not_required)
@sensitive_post_parameters_m
@method_decorator(never_cache)
def dispatch(self, request, *args, **kwargs):
    return super().dispatch(request, *args, **kwargs)
```

- `@method_decorator(rate_limit(action="signup"))`: This decorator applies a rate limit to the signup process, helping to prevent abuse by limiting the number of signups from a single source.
- `@method_decorator(login_not_required)`: Ensures that the view is accessible only by users who are not logged in, so that logged-in users cannot sign up again.
- `@sensitive_post_parameters_m`: Marks sensitive POST parameters to avoid logging or displaying them in error messages.
- `@method_decorator(never_cache)`: Prevents caching of the signup page, ensuring users always see the latest version and security settings.
- The `dispatch` method is responsible for handling the request and passing it to the appropriate method to process it.

📌 **4. Form Class Retrieval**

```python
def get_form_class(self):
    return get_form_class(app_settings.FORMS, "signup", self.form_class)
```

- This method dynamically retrieves the form class to be used for signup. It combines settings from the application's `app_settings.FORMS` and ensures that the correct form class (`SignupForm`) is used.

📌 **5. Form Handling and Validation**

```python
def form_valid(self, form):
    self.user, resp = form.try_save(self.request)
    if resp:
        return resp
    try:
        redirect_url = self.get_success_url()
        return flows.signup.complete_signup(
            self.request,
            user=self.user,
            redirect_url=redirect_url,
            by_passkey=form.by_passkey,
        )
    except ImmediateHttpResponse as e:
        return e.response
```

- `form_valid`: This method is called when the form is valid. It attempts to save the user data and performs the signup process.
  - The `try_save` method saves the user data and returns a response if needed.
  - After saving, it tries to complete the signup by calling `complete_signup`. If successful, it redirects the user to the appropriate page.
  - If there’s an immediate HTTP response (such as a redirect or error), the response is returned directly.

📌 **6. Context Data**

```python
def get_context_data(self, **kwargs):
    ret = super().get_context_data(**kwargs)
    passkey_signup_enabled = False
    if allauth_app_settings.MFA_ENABLED:
        from allauth.mfa import app_settings as mfa_settings

        passkey_signup_enabled = mfa_settings.PASSKEY_SIGNUP_ENABLED
    form = ret["form"]
    email = self.request.session.get("account_verified_email")
    if email:
        email_keys = ["email"]
        if app_settings.SIGNUP_EMAIL_ENTER_TWICE:
            email_keys.append("email2")
        for email_key in email_keys:
            form.fields[email_key].initial = email
    login_url = self.passthrough_next_url(reverse("account_login"))
    signup_url = self.passthrough_next_url(reverse("account_signup"))
    signup_by_passkey_url = None
    if passkey_signup_enabled:
        signup_by_passkey_url = self.passthrough_next_url(
            reverse("account_signup_by_passkey")
        )
    site = get_current_site(self.request)
    ret.update(
        {
            "login_url": login_url,
            "signup_url": signup_url,
            "signup_by_passkey_url": signup_by_passkey_url,
            "site": site,
            "SOCIALACCOUNT_ENABLED": allauth_app_settings.SOCIALACCOUNT_ENABLED,
            "SOCIALACCOUNT_ONLY": allauth_app_settings.SOCIALACCOUNT_ONLY,
            "PASSKEY_SIGNUP_ENABLED": passkey_signup_enabled,
        }
    )
    return ret
```

- `get_context_data`: This method gathers and returns all the necessary context data for rendering the signup page.
  - It checks if Multi-Factor Authentication (MFA) is enabled and whether passkey signup is available.
  - If an email has been verified previously in the session, it pre-fills the email fields in the form.
  - It adds URLs for login, signup, and passkey signup to the context, so they can be used in the template.
  - It also includes site-specific information, such as the site name, social account settings, and passkey signup availability.

📌 **7. Initial Data for Form**

```python
def get_initial(self):
    initial = super().get_initial()
    email = self.request.GET.get("email")
    if email:
        try:
            validate_email(email)
        except ValidationError:
            return initial
        initial["email"] = email
        if app_settings.SIGNUP_EMAIL_ENTER_TWICE:
            initial["email2"] = email
    return initial
```

- `get_initial`: This method sets up the initial data for the form. If an email is passed via GET parameters (e.g., pre-filled email from a previous form), it validates and adds it to the form’s initial data.
  - If the `SIGNUP_EMAIL_ENTER_TWICE` setting is enabled, it also populates a second email field for confirmation.

📌  **8. Final View Instantiation**

```python
signup = SignupView.as_view()
```

- This line instantiates the `SignupView` class as a view callable that can be used in Django’s URL routing system.

📌 **Final Insights**

The `SignupView` class in the `django-allauth` package is responsible for handling the signup process. It integrates multiple features like rate limiting, preventing login for authenticated users, multi-factor authentication, and conditional form population. The view manages various user actions during signup, including displaying forms, handling validation, and redirecting users upon successful account creation. The comprehensive context data handling and dynamic form initialization ensure a smooth, customized signup experience for users. The `views.signup` view will be explained here at a glance:

```Python
...

# Inheriting from multiple mixins and FormView to add additional functionality
class SignupView(
    RedirectAuthenticatedUserMixin,  # Prevents authenticated users from accessing signup
    CloseableSignupMixin,  # Allows disabling of signup process
    NextRedirectMixin,  # Handles redirection after signup
    AjaxCapableProcessFormViewMixin,  # Supports AJAX form submission
    FormView,  # Basic view for rendering and handling form submissions
):
    # Specify the template to be used for rendering the signup page
    template_name = "account/signup." + app_settings.TEMPLATE_EXTENSION
  
    # Define the form class to be used for handling user signup
    form_class = SignupForm

    # Define the dispatch method to add various decorators and control the request flow
    @method_decorator(rate_limit(action="signup"))  # Apply rate limiting to prevent signup abuse
    @method_decorator(login_not_required)  # Ensure only unauthenticated users can access this view
    @sensitive_post_parameters_m  # Mark sensitive POST data to avoid logging it
    @method_decorator(never_cache)  # Prevent caching of the signup page
    def dispatch(self, request, *args, **kwargs):
        # Call the parent dispatch method after applying the decorators
        return super().dispatch(request, *args, **kwargs)

    # Dynamically get the form class based on application settings
    def get_form_class(self):
        # Retrieve the correct form class from the app settings
        return get_form_class(app_settings.FORMS, "signup", self.form_class)

    # Handle form submission when the form is valid
    def form_valid(self, form):
        # Try to save the user with the provided form data
        self.user, resp = form.try_save(self.request)
    
        if resp:  # If there's a response (e.g., a redirect or error), return it
            return resp

        try:
            # Get the URL to redirect to upon successful signup
            redirect_url = self.get_success_url()
            # Complete the signup flow and redirect the user
            return flows.signup.complete_signup(
                self.request,
                user=self.user,
                redirect_url=redirect_url,
                by_passkey=form.by_passkey,  # Handle passkey (MFA) if enabled
            )
        except ImmediateHttpResponse as e:  # If there's an immediate response (e.g., redirect), return it
            return e.response

    # Populate the context data for rendering the signup page
    def get_context_data(self, **kwargs):
        # Call the parent method to get the initial context data
        ret = super().get_context_data(**kwargs)
    
        passkey_signup_enabled = False
        if allauth_app_settings.MFA_ENABLED:  # Check if MFA is enabled
            from allauth.mfa import app_settings as mfa_settings
            # Check if passkey signup is enabled in MFA settings
            passkey_signup_enabled = mfa_settings.PASSKEY_SIGNUP_ENABLED
    
        # Get the form from context and pre-fill email if it exists in the session
        form = ret["form"]
        email = self.request.session.get("account_verified_email")
        if email:  # If email is in session, pre-fill the email fields in the form
            email_keys = ["email"]
            if app_settings.SIGNUP_EMAIL_ENTER_TWICE:
                email_keys.append("email2")
            for email_key in email_keys:
                form.fields[email_key].initial = email

        # Prepare the URLs for login and signup pages
        login_url = self.passthrough_next_url(reverse("account_login"))
        signup_url = self.passthrough_next_url(reverse("account_signup"))
    
        signup_by_passkey_url = None
        if passkey_signup_enabled:  # If passkey signup is enabled, provide the URL
            signup_by_passkey_url = self.passthrough_next_url(
                reverse("account_signup_by_passkey")
            )

        # Get the current site to include in the context
        site = get_current_site(self.request)

        # Update the context with additional data for the template
        ret.update(
            {
                "login_url": login_url,
                "signup_url": signup_url,
                "signup_by_passkey_url": signup_by_passkey_url,
                "site": site,
                "SOCIALACCOUNT_ENABLED": allauth_app_settings.SOCIALACCOUNT_ENABLED,
                "SOCIALACCOUNT_ONLY": allauth_app_settings.SOCIALACCOUNT_ONLY,
                "PASSKEY_SIGNUP_ENABLED": passkey_signup_enabled,
            }
        )
        return ret

    # Get the initial data for the form, such as pre-filling the email
    def get_initial(self):
        # Call the parent method to get the initial data
        initial = super().get_initial()
    
        email = self.request.GET.get("email")
        if email:  # If an email is passed in the GET parameters, validate and pre-fill it
            try:
                validate_email(email)  # Validate the email format
            except ValidationError:
                return initial  # If validation fails, return the initial data
        
            initial["email"] = email
            if app_settings.SIGNUP_EMAIL_ENTER_TWICE:  # If the email confirmation field is enabled
                initial["email2"] = email
        return initial

# Instantiate the SignupView class to use as a view in Django's URL routing system
signup = SignupView.as_view()

...
```

###### Signing Out

The final step in the EShoppify authentication and authorization process is signing out, which is easily done by clicking or tapping the logout button in the navigation menu. Once selected, the user is directed to the sign-out page, as shown below. From this page, clicking the "Sign Out" button, available across desktop, PC, and mobile platforms in web view, redirects the user to the EShoppify landing page. Alternatively, if the user chooses to stay logged in, they can click or tap the "Stay Logged In" button to seamlessly return to their account profile.

* Signing out on desktop platforms

![Signing Out | Web | Desktop & PC](../Assets/Backend%20Development/Authentication/Images/Signing%20Out%20-%20Desktop%20PC.png)

* Logout button displayed after the top navigation bar is opened | Mobile Web View

![Signing Out | Web | Mobile | Navbar Opened](../Assets/Backend%20Development/Authentication/Images/Signing%20Out%20-%20Mobile%20Web%20View%20-%20Navbar%20Opened.png)

* Signing out on mobile platforms | Web View | Collapsed Top Navigation Bar

![Signing Out | Web | Mobile | Navbar Closed](../Assets/Backend%20Development/Authentication/Images/Signing%20Out%20-%20Mobile%20Web%20View%20-%20Navbar%20Closed.png)

In order to explain the backend functionality responsible for logging out, first, after the 'Logout' button is clicked or tapped, the following button is pressed, and the related template tag is as follows:

```html
...

<a class=
        "
            text-white 
            btn 
            btn-primary 
            pt-2 
            pb-2 
            pe-4 
            ps-4 
            rounded-3 
            my-2 
            cta-navbar-button 
            MuhammadHusainAbootalebi-navbar-signup-button
        "
        type="button"
        style=
        "
            background: #000000;border-style: none;
            font-family: 'Baloo Bhaijaan 2', serif;
        "
        href="{% url 'account_logout' %}">
      
    Logout
  
</a>

...
```

In the above code, the 'Logout' anchor link refers to the `account_logout` URL name, and its URL pattern is as follows:

```python
from django.conf import settings
from django.urls import path, re_path

from allauth import app_settings as allauth_app_settings
from allauth.account import app_settings

from . import views

urlpatterns = [

	...

	path("logout/", views.logout, name="account_logout"),

	...

]

...
```

In the above code, the `account_logout` URL name is mapped to the `views.logout` view, which is explained here:

📌 **1. Class Definition and Inheritance:**

```Python
class LogoutView(NextRedirectMixin, LogoutFunctionalityMixin, TemplateView):
    template_name = "account/logout." + app_settings.TEMPLATE_EXTENSION
```

This class, `LogoutView`, is responsible for handling the logout functionality of a user in a Django application. It inherits from several mixins, namely `NextRedirectMixin`, `LogoutFunctionalityMixin`, and `TemplateView`.

- `NextRedirectMixin` helps redirect users to a page after they log out.
- `LogoutFunctionalityMixin` provides the logout logic.
- `TemplateView` allows for rendering a template, which in this case, is the logout template (`account/logout.html`), dynamically determined by `app_settings.TEMPLATE_EXTENSION`.

📌 **2. `get` Method - Handles GET Requests:**

```Python
def get(self, *args, **kwargs):
    if app_settings.LOGOUT_ON_GET:
        return self.post(*args, **kwargs)
    if not self.request.user.is_authenticated:
        response = redirect(self.get_redirect_url())
        return _ajax_response(self.request, response)
    ctx = self.get_context_data()
    response = self.render_to_response(ctx)
    return _ajax_response(self.request, response)
```

- The `get` method handles GET requests for the logout view.
- If `app_settings.LOGOUT_ON_GET` is enabled, the method will call the `post` method to handle the logout process, even for GET requests.
- If the user is not authenticated (`self.request.user.is_authenticated`), the method will redirect them to the specified URL (obtained from `get_redirect_url()`).
- If the user is authenticated, it gathers the context data using `get_context_data()`, renders the logout template (`render_to_response()`), and returns an AJAX response with the rendered template.

📌 **3. `post` Method - Handles POST Requests:**

```Python
def post(self, *args, **kwargs):
    url = self.get_redirect_url()
    self.logout()
    response = redirect(url)
    return _ajax_response(self.request, response)
```

- The `post` method handles POST requests for logging out.
- First, it retrieves the URL where the user should be redirected after logging out using `get_redirect_url()`.
- It then calls the `logout()` method to log the user out.
- After logging out, the method redirects the user to the retrieved URL.
- An AJAX response is returned with the redirection.

📌 **4. `get_redirect_url` Method - Determines the Redirect URL:**

```Python
def get_redirect_url(self):
    return self.get_next_url() or get_adapter(self.request).get_logout_redirect_url(self.request)
```

- The `get_redirect_url()` method determines the URL the user will be redirected to after logging out.
- It first checks if a "next" URL is available using `get_next_url()`.
- If no "next" URL is available, it uses `get_adapter(self.request).get_logout_redirect_url(self.request)` to retrieve the logout redirect URL from the adapter.
  
📌 **5. Final LogoutView Initialization:**

```Python
logout = LogoutView.as_view()
```

- This line initializes the `LogoutView` class as a view, making it ready for use in URL routing.

📌 **Final Insights**

```Python
# Class definition inheriting from necessary mixins and TemplateView
class LogoutView(NextRedirectMixin, LogoutFunctionalityMixin, TemplateView):
    # Specifying the template to render upon logout
    template_name = "account/logout." + app_settings.TEMPLATE_EXTENSION

    # Handles GET requests for logging out
    def get(self, *args, **kwargs):
        # If LOGOUT_ON_GET is set to True, perform the logout action with a POST request logic
        if app_settings.LOGOUT_ON_GET:
            return self.post(*args, **kwargs)
        
        # If the user is not authenticated, redirect them to the specified URL
        if not self.request.user.is_authenticated:
            response = redirect(self.get_redirect_url())
            return _ajax_response(self.request, response)
        
        # Render the context data for the logout template
        ctx = self.get_context_data()
        response = self.render_to_response(ctx)
        return _ajax_response(self.request, response)

    # Handles POST requests for logging out
    def post(self, *args, **kwargs):
        # Get the redirect URL after logout
        url = self.get_redirect_url()
        
        # Perform the logout operation
        self.logout()
        
        # Redirect the user to the URL
        response = redirect(url)
        return _ajax_response(self.request, response)

    # Determines the redirect URL after logout
    def get_redirect_url(self):
        # First check if a "next" URL exists; if not, use the adapter's default logout URL
        return self.get_next_url() or get_adapter(self.request).get_logout_redirect_url(self.request)

# Initialize the LogoutView as a view to be used in the URL routing
logout = LogoutView.as_view()
```

This class enables a clean, flexible logout system for users, utilizing various mixins to handle different aspects of the process, such as redirection after logout and AJAX support for enhanced user experience.

###### Password Reset

TODO: Till explaining and if need, designing and developing the reset password process.

##### 📱 Native Mobile Application Walkthroughs

Not added yet.

#### Architecture

Not added yet.

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
