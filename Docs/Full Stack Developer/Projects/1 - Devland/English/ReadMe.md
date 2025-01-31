# 🌴💻 Devland Test 💻🌴

🌴💻 Devland, land of developers 😉

**Description:**

This project is a social application designed to connect developers with each other and introduce them to stakeholders, clients, and other interested parties. Users can explore and view the projects completed by Devland developers. They can learn about the developers’achievements, review detailed configurations, and even access live demos if available. Additionally, users can send messages to developers for potential collaborations, partnerships, or other professional engagements. It's clear that **Devland truly is the land of developers** 😉!

## Table of Contents

- [🌴💻 Devland Test 💻🌴](#-devland-test-)
  - [Table of Contents](#table-of-contents)
  - [Design](#design)
    - [User Research](#user-research)
    - [Define Objectives](#define-objectives)
    - [Wireframing](#wireframing)
      - [Big Picture](#big-picture)
      - [Introduction](#introduction)
      - [Authentication and Authorization](#authentication-and-authorization)
      - [Account Preferences](#account-preferences)
      - [Profile](#profile)
      - [Devlopers](#devlopers)
      - [Projects](#projects)
      - [Messages](#messages)
      - [Options](#options)
    - [Visual Design](#visual-design)
      - [💻 Web](#-web)
      - [📱 Native Mobile Device](#-native-mobile-device)
        - [Splash Screen](#splash-screen)
        - [Authentication Screens](#authentication-screens)
        - [Account Preferences Screen](#account-preferences-screen)
        - [Profile Screen](#profile-screen)
        - [Developers Screen](#developers-screen)
        - [Projects Screen](#projects-screen)
        - [Messages Screen](#messages-screen)
        - [Options Screen](#options-screen)
    - [Prototyping](#prototyping)
  - [Development](#development)

## Design

### User Research

### Define Objectives

### Wireframing

Wireframing, or low-level design, plays a crucial role in project development by serving as the foundational blueprint of the final product. This process focuses on visualizing the overall structure of the project in its simplest form, providing clarity on how various components interconnect. By starting with a broad overview, wireframing allows for a comprehensive understanding of the project's scope and functionality. Each section is subsequently broken down into smaller, clearly defined design elements, ensuring that even complex systems are presented in an intuitive and easily comprehensible manner. The low-level design of the Devand project demonstrates this approach, offering a streamlined representation of its structure that facilitates both analysis and implementation.

#### Big Picture

In the following diagram, the big picture and the screens on which this project depends can be seen.

![Devland Wireframing Big Picture](../Assets/Wireframing/Devland%20Big%20Picture%20Diagram.png)

As seen, the overall Devland project can be divided into the following sections:

- Introduction
- Authentication and Authorization
- Account Preferences
- Profile
- Developers
- Projects
- Messages
- Options

#### Introduction

This section may include the splash screen for the project on mobile devices or the landing page on the web platform. The goal of this section is to provide an intuitive and engaging view of the project for end-users. Below, the introduction screens for the mobile and web platforms are displayed.

- Mobile

![Mobile Splash Screen Wireframing](../Assets/Wireframing/1%20-%201%20-%20Mobile%20-%20Splash%20Screen.png)

As a minimalist design, the splash screen will feature the project logo at the center. It may or may not include the project name, copyright text, or any user-engaging text beneath it.

- Web

![Web Landing Page Wireframing](../Assets/Wireframing/Placeholder%20Image.png)

Not added yet.

#### Authentication and Authorization

Authentication and authorization are fundamental components in software development, each serving distinct purposes to ensure system security. **Authentication** is the process of verifying the identity of a user or device. It typically involves presenting credentials such as usernames and passwords, biometrics, or digital certificates to confirm that the entity is who it claims to be. This step is crucial for establishing trust and ensuring that only legitimate users gain access to the system. **Authorization** , on the other hand, determines the access rights and permissions granted to an authenticated user or device. Once identity is confirmed, authorization dictates what actions the user is permitted to perform and which resources they can access within the system. This ensures that users operate within their designated privileges, maintaining the integrity and security of the application. In the context of software development, implementing robust authentication and authorization mechanisms is vital. Authentication methods may include password-based logins, multi-factor authentication, or biometric verification, each adding layers of security to verify user identity. Authorization is often managed through role-based access control (RBAC) or permission-based access control (PBAC), defining user roles and associated permissions to enforce security policies effectively. In the following, the wireframing of the final user authentication and authorization process for the mobile and web platforms will be presented.

- Mobile

![User authentication Mobile wireframe](../Assets/Wireframing/1%20-%202%20-%201%20-%20Login%20Screen.png)

As shown in the above image, the final mobile platform UI contains the project logo, two fields for entering credentials to log in, and a submit button that should be pressed after entering the user credentials. Additionally, there are two helpful links: one for resetting the password if the user has forgotten it, and another for navigating to the signup or account creation process if the user does not already have an account.

![Account Creation Mobile wireframe](../Assets/Wireframing/1%20-%202%20-%202%20-%20Signup%20Screen.png)

Similar to the login process, the signup screen includes the project logo in the UI and features the necessary fields required for user registration, along with a submit button to be pressed after the credentials are entered. Additionally, there is a link to the login page for users who already have an account, allowing them to access the login screen and complete the login process.

- Web

![Web Landing Page Wireframing](../Assets/Wireframing/Placeholder%20Image.png)

Not added yet.

#### Account Preferences

In this section, various aspects of Devland user accounts can be configured or modified. These aspects include:

- **Password Change**: Users can update their passwords to enhance security. Regular password changes are recommended to protect against unauthorized access.
- **Email Change**: Users can change their registered email address. This is useful for keeping contact information up-to-date or switching to a more secure email provider.
- **New Email Verification**: When users change their email address, a verification process ensures the new email is valid and belongs to the user. This step is crucial for maintaining account security.
- **Username Editing**: Users can modify their usernames. This feature allows for personalization and can help users maintain a consistent online identity.
- **Account Deletion**: Users can permanently delete their accounts. This process ensures that all personal data is removed from the system, complying with privacy regulations and user preferences.

These processes are fundamental to any professional project, and Devland implements them with precision and security.

In the following section, the wireframes or low-level designs of the final UI for both mobile and web platforms will be presented.

- Mobile

![Account Preferences](../Assets/Wireframing/1%20-%203%20-%202%20-%20Account%20Preferences.png)

As can be seen, for the account preferences user interface on the mobile platform, a user interface like the image above is desired. An app bar is at the top, allowing users to navigate to other sections of the Devland mobile app. Below it, there are fields dedicated to changing specific information, such as username, password, and email. At the bottom of the screen, there is a section for user account deletion.

Each of the fields will have a button to change that field, after that button is pressed a dialog will be shown like the below image.

![Dialog Account Preferences](../Assets/Wireframing/1%20-%203%20-%203%20-%20Account%20Field%20Change%20Dialog.png)

As can be seen, the dialog contains a dialog title and the necessary form fields, which depend on the process. It will be different depending on which process is being done. The dialog will contain two buttons: one for dismissing the dialog and a submit button for sending REST API requests.

- Web

![web Account Preferences](../Assets/Wireframing/Placeholder%20Image.png)

Not added yet.

#### Profile

The **Profile** section of Devland will be used for accessing user profile information. In this section, users will be able to change their profile information. This information will include the profile name, short description, email, username, location, biography, profile image, and contact information. Contact information may include links to their GitHub, Twitter, LinkedIn, YouTube, or personal website. Devland profiles are a showcase of developers' or designers' profiles. In the profile section, users can add their skills or software expertise. They can also showcase projects they have completed. Additionally, this section allows users to edit or add new skills or projects directly from their profile.

The following section will display the wireframes of the profile section for both mobile and web platforms.

- Mobile

![Profile Image Overview](../Assets/Wireframing/1%20-%203%20-%201%20-%20Profile%20Screen.png)

On the mobile platform, the profile screen is generally designed to have three sections. At the top of the screen, an app bar is used to navigate between different sections of Devland. Below that, the profile information section allows users to change or edit their profile information through a REST API. There is also a section for adding, editing, or deleting skills related to the profile. Similarly, another section is used to manage projects completed by the authenticated profile.

In the profile screen, different aspects of the user profile can be changed. These different aspects will be shown here:

![Profile Image Dialog Change Mobile](../Assets/Wireframing/1%20-%203%20-%204%20-%20Profile%20Image%20Dialog.png)

One aspect is changing the user profile. The final user interface for this process is shown in the image above. As the image illustrates, it is a dialog box that pops up, allowing the user to upload their new profile image. The necessary permissions for this operation will be requested from the user on a real device, enabling them to browse their images and upload a new one.

![Profile Information Text Dialog](../Assets/Wireframing/1%20-%203%20-%203%20-%20Account%20Field%20Change%20Dialog.png)

Changing profile information, such as the name and short introduction texts, will be done through a dialog similar to the one shown in the image above. In the final UI design, a dialog is expected to include a form field where the user can enter their new information using the device keyboard. By pressing 'OK', a REST API request will be sent to perform the update. Once the operation is completed, the dialog will close.

![Project and Skill CRUD Screen](../Assets/Wireframing/1%20-%203%20-%205%20-%20Skill%20or%20Project%20CRUD%20Screen.png)

Creating or editing project or skill instances will be done using a screen similar to the image above. After a tapping event occurs on the mobile platform, a screen like the one shown above will pop up. The screen will contain a top AppBar with the screen title and a back button to close the screen. Below that, an optional description can be added, followed by the necessary form fields or inputs.

In the wireframing phase, each form field is expected to have a label indicating what input is required. Below the label, an input field will be provided, allowing users to enter the necessary data via the device keyboard. At the bottom of the screen, a submit button will be added for submitting the information via REST API calls to the backend. Once the operation is successfully completed, the pop-up screen will close.

- Web

![Profile Web Overview](../Assets/Wireframing/Placeholder%20Image.png)

#### Devlopers

The **Developers section** of the super project **Devland** is dedicated to exploring different developers based on their skills or projects. As a wireframing view, this section should include an effective search feature for efficiently finding Devland's developers. This section is particularly beneficial for stakeholders or employers looking to hire developers with specific skill sets. Each profile will provide detailed information, including contact details, software skills, and previously completed projects.

The wireframing for this section on both mobile and web platforms is presented below.

- Mobile

![Mobile Developers Section](../Assets/Wireframing/1%20-%203%20-%204%20-%20Developers%20Screen.png)

The Developers Screen is designed with user-friendly navigation and efficient search capabilities to enhance the Devland app experience. At the top, a streamlined app bar facilitates seamless navigation across various sections of the platform. Below it, a powerful search field allows users to query the developer database effortlessly. Search inputs are processed via a REST API, delivering precise, real-time results of matched profiles displayed directly below the search field.

Each profile is interactive, enabling users to view detailed information and initiate collaboration by sending messages directly from this screen. This feature-rich interface ensures an intuitive and effective way to connect with skilled developers, making it ideal for clients seeking talent and developers exploring new opportunities.

- Web

![Mobile Developers Section](../Assets/Wireframing/Placeholder%20Image.png)

#### Projects

**Project Section for Devland Platform**
Developed a dedicated project section within the Devland platform, enabling developers with Devland profiles to explore and interact with projects created by other developers. Features include:

1. Viewing project details, including live demos where available.
2. Sharing feedback on projects to foster collaboration and enhance project visibility.
3. Increasing engagement and interest in showcased projects through a user-friendly interface.

Presented below are the wireframe designs for the project section, showcasing layouts for both mobile and web platforms.

- Mobile

![Projects Search Screen Mobile](../Assets/Wireframing/1%20-%205%20-%201%20-%20Projects%20Screen.png)

As can be seen from the above image, in terms of wireframe user interface design, it contains an app bar at the top, primarily used for navigating between different sections of the Devland app. Below that, there is a search form field, which can be used to search Devland projects, with the results displayed beneath the search form field. For each project record under the search field, a summary of that project is shown. At the bottom of the user interface, in the wireframe view, there is a bottom navigation bar that allows users to navigate between other screens of the Devland app.

![Project detail screen](../Assets/Wireframing/1%20-%205%20-%202%20-%20Project%20Detail%20Screen.png)

In the projects screen, each project record will be tappable. By "tappable," it means that the end-user can tap on a project in the mobile platform, which will open a detailed screen like the one shown in the image above.

To explain this screen further:

- **App Bar** : Located at the top, it includes a back button to return to the projects screen.
- **Project Image** : Displayed below the app bar to visually represent the project.
- **Project Information** : Below the image, various aspects of the project are presented with attribute labels and icons to enhance user-friendliness.
- **Feedback Section** : This section showcases reviews or opinions from other users about the project.
- **Action Button** : At the bottom of the screen, an action button allows users to leave a review, making the review submission process straightforward.

Next, the wireframe user interface for the projects section on the web platform will be presented.

- Web

![alt](../Assets/Wireframing/Placeholder%20Image.png)

#### Messages

The next interesting section in Devland is the Messages section. In this section, each Devland user can manage their messages, including marking messages as unread, deleting them, and more.

- Mobile

![Mobile Messages Screen](../Assets/Wireframing/1%20-%206%20-%201%20-%20Messages%20Screen.png)

In the wireframe view design, the above user interface is expected to represent the Messages screen. Similar to the previous user interface, there is an app bar at the top, primarily used for navigating to other sections of Devland. Below the app bar is a list of messages. Each message record is expected to include the sender's image on the left, sender information next to it, a short snippet of the message body beneath that, and a 'more' menu button on the right for additional optional actions.

![Message Detail Dialog](../Assets/Wireframing/1%20-%206%20-%202%20-%20Message%20Detail%20Dialog.png)

Each message is expected to be tappable. This means that users can tap on a message to open a detailed dialog, similar to the image above. The detailed message dialog is expected to display the sender's image, sender information, the message body, and action buttons.

- Web

![alt](../Assets/Wireframing/Placeholder%20Image.png)

#### Options

This section is dedicated to providing additional operational options. Here, users can navigate to various Devland-related sections.

- Mobile

![Mobile Options Drawer](../Assets/Wireframing/1%20-%207%20-%201%20-%20Options%20Drawer.png)

On the mobile platform, the options section is represented by the drawer, which users can use to navigate to different sections of Devland. This drawer should be accessible through the top app bar of Devland. The user's profile image is expected to appear at the top of the drawer, with other options listed below it. At the bottom of the drawer, a button is expected to allow users to exit the Devland app.

- Web

![alt](../Assets/Wireframing/Placeholder%20Image.png)

### Visual Design

#### 💻 Web

This section is under preparation.

#### 📱 Native Mobile Device

In this section, the visual designs for native mobile devices will be presented, emphasizing their role in improving end-user experience. These designs cater to various sections within Devland, ensuring that each part of the app is visually engaging and user-friendly. I will provide detailed explanations of the design elements, from layout choices to color schemes, showcasing how each design enhances functionality. These designs are carefully crafted to provide a seamless and intuitive interaction for the user. Not only will these visual designs be a key feature in my portfolio and presentations, but they will also be included in my resume, illustrating my proficiency in mobile interface design.

This section focuses on the visual designs developed for native mobile applications, aimed at optimizing the user experience for various Devland sections. Each design is thoughtfully created with end users in mind, prioritizing both aesthetic appeal and usability. I will explain how each design aligns with Devland’s goals, demonstrating my ability to craft effective and attractive mobile interfaces. The designs are tailored to provide clarity, ease of use, and engagement for users across different sections of the platform. These visual design examples will be included not only in my visual design presentations but also in my resume, providing clear evidence of my expertise in mobile design.

In this part, I will present the visual designs for native mobile devices, highlighting their focus on the end-user journey. The designs will cover different sections of Devland, showcasing my ability to create visually cohesive and functional layouts. I will detail the thought process behind each design choice, including the use of color, typography, and interactive elements to enhance the user experience. These mobile designs are tailored to ensure an engaging and smooth interaction for users within the app. Both my resume and visual design presentations will feature these designs, serving as key examples of my skills in mobile user interface design.

The complete visual design screens can be seen at a glance in the image below:

![Visual Design Big Picture](../Assets/Visual%20Design/Native%20Mobile/Big%20Picture.png)

The above design is based on the wireframing process and is organized into the following sections:

- Splash Screens
- Authentication Screens
- Profile Screens
- Developers Screens
- Projects Screens
- Messages Screens
- Account Screens

##### Splash Screen

The splash screen in a native mobile device is the initial screen that appears when an app is launched, typically displaying the app's logo or branding elements. Its primary purpose is to provide a visually engaging introduction to the app, while also allowing the necessary resources and data to load in the background. The splash screen sets the tone for the app’s overall aesthetic and user experience, creating a smooth transition from the app icon to the main interface. While it should be brief, it serves as a moment for users to familiarize themselves with the app’s identity. A well-designed splash screen can contribute to the overall impression of an app, helping to establish a polished and professional first impression. This can be seen in the following showcase images:

- Splash screen with an orange background and a white logo

![Mobile Device | Splash Screen | Orange Background](../Assets/Visual%20Design/Native%20Mobile/Splash%20Screen%20-%20Orange%20BG.png)

- Splash screen with an white background and a orange logo

![Mobile Device | Splash Screen | White Background](../Assets/Visual%20Design/Native%20Mobile/Splash%20Screen%20-%20Whtie%20BG.png)

##### Authentication Screens

The login screen of the application showcases a clean and professional design tailored to meet the expectations of modern users. The central feature of the screen is the bold yellow logo positioned at the top, instantly drawing attention and establishing a strong brand identity. Accompanied by the tagline, “Devland, land of Developers!”, the interface makes its purpose and target audience clear—a platform dedicated to developers and tech professionals. This branding communicates a sense of professionalism and aligns with the expectations of the target demographic.

The interface is user-friendly, with an intuitive layout that ensures a seamless login experience. The input fields for "Username" and "Password" are sleek, with a rounded design and subtle shadows that give the interface a modern and polished aesthetic. The password field includes a visibility toggle, enhancing usability by allowing users to confirm their input effortlessly. Below the input fields, users are provided with a clear "Reset" option for password recovery, presented in an accessible yellow text that aligns with the app’s color scheme.

The black "Login" button serves as a prominent call-to-action, standing out against the white background and ensuring users can quickly identify their next step. For new users, the screen includes a "Register" option, also highlighted in yellow to ensure visibility and continuity with the branding. Overall, the design combines functionality with a visually appealing layout, creating an excellent first impression. This login screen effectively reflects the app’s professionalism and commitment to delivering a user-centric experience, ensuring both ease of use and alignment with modern design principles.

- Login Screen Visual Design (Targeted for Native Mobile Devices)

![Login Screen | Native Mobile Device | Visual Design](../Assets/Visual%20Design/Native%20Mobile/Login%20Screen.png)

The registration screen of the application provides a well-designed and user-centric interface, ensuring a seamless onboarding experience for new users. At the top of the screen, the bold yellow logo establishes the brand identity, while the tagline, “Devland, land of Developers!”, highlights the app’s focus on catering to developers and tech enthusiasts. This creates an immediate connection with the target audience and sets the tone for the app’s purpose.

The registration form is neatly organized and intuitive, featuring input fields for “Name,” “Email,” “Username,” “Password,” and “Password Confirmation.” Each field has a rounded, minimalistic design with subtle shadows, which not only enhances the aesthetic appeal but also improves focus and usability. Password and confirmation fields include visibility toggles, making it easier for users to verify their input and avoid errors. This attention to detail reflects the app’s commitment to delivering a frustration-free user experience.

The black "Register" button is prominently displayed, serving as a clear call-to-action. Its bold color ensures it stands out while aligning with the overall design theme. Beneath the button, users are provided with a link to log in if they already have an account. The “Login” option is styled in yellow to maintain consistency with the app’s branding while ensuring it remains noticeable.

Overall, the registration screen embodies a balance between functionality and design. It simplifies the account creation process while presenting a polished and professional interface that reflects the app’s quality and focus on user satisfaction. This screen is designed to leave a positive impression on new users, encouraging them to join the platform with confidence.

- Signup Screen Visual Design (Targeted for Native Mobile Devices)

![Signup Screen | Native Mobile Device | Visual Design](../Assets/Visual%20Design/Native%20Mobile/Signup%20Screen.png)

##### Account Preferences Screen

The account preferences screen is primarily used for setting or changing account options, such as updating the user’s email, password, or deleting the account, as showcased in the visual design below.

![Account Preferences Screen](../Assets/Visual%20Design/Native%20Mobile/Account%20Preferences%20Screen.png)

##### Profile Screen

The visual design of the profile screen on a mobile device is as follows:

![Profile Screen](../Assets/Visual%20Design/Native%20Mobile/Profile%20Screen.png)

##### Developers Screen

The visual design of the developers' screen is shown in the image below:

![Developers Screen](../Assets/Visual%20Design/Native%20Mobile/Developers%20Screen.png)

##### Projects Screen

The visual design of the Projects Screen, which showcases Devland's developers' projects, is shown in the image below:

![Projects](../Assets/Visual%20Design/Native%20Mobile/Projects%20Screen.png)

##### Messages Screen

The visual design of the Messages Screen, dedicated to developers' messages and professionally designed, is shown in the image below:

![Messages Screen](../Assets/Visual%20Design/Native%20Mobile/Messages%20Screen.png)

##### Options Screen

The options screen, which appears as a drawer on native mobile devices, is designed as shown below and is primarily used to navigate through various sections of Devland.

![Options Screen](../Assets/Visual%20Design/Native%20Mobile/Options%20Screen.png)

The above messages highlight my expertise in user interface (UI) and user experience (UX) design. My skillset spans the entire design process, from wireframing to crafting intuitive and visually appealing UI components. These designs not only incorporate programming principles, thanks to my background in full-stack development and software engineering, but also focus on creating user-friendly and aesthetically pleasing interfaces tailored to meet the needs of both clients and software users.

### Prototyping

TODO : Till preparing other prototype videos and including them in the documentation.

- Splash Screen

https://github.com/user-attachments/assets/cabc921c-cba8-4c23-ac37-2dae0b8917fc

Not added yet.

## Development

This section is under preparation.
