# 🌴💻 Devland Test 💻🌴

🌴💻 Devland, land of developers 😉

**Description:**

This project is a social application designed to connect developers with each other and introduce them to stakeholders, clients, and other interested parties. Users can explore and view the projects completed by Devland developers. They can learn about the developers’achievements, review detailed configurations, and even access live demos if available. Additionally, users can send messages to developers for potential collaborations, partnerships, or other professional engagements. It's clear that **Devland truly is the land of developers** 😉!

## Table of Contents

Not added yet ....

## Design

### **User Research**

### **Define Objectives**

### **Wireframing**

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

Till adding the developers screen general description.

### **Visual Design**

### **Prototyping**

## Development

This is the development section ....
