BeuGram

BeuGram is a web-based platform designed to provide useful information and services for students of Bihar Engineering University (BEU) and its affiliated engineering colleges.

The goal of BeuGram is to bring important college-related information and student-focused features together in one easy-to-use website.

---

📌 About BeuGram

BeuGram is designed as a centralized student platform where users can access college-related information without having to search through multiple websites or sources.

The platform is intended to make it easier for students to find information such as:

- College information
- Affiliated college details
- Academic information
- Student-related resources
- Important university information
- College-specific information
- Useful links and resources
- AI-powered assistance through the integrated Google Gemini chatbot

The project is continuously being improved with new features and updated information.

---

🎯 Main Objectives

The main objectives of BeuGram are:

1. Provide useful BEU-related information in one place.
2. Make college information easier to find.
3. Provide a simple and user-friendly interface.
4. Help students find information quickly.
5. Provide AI-based assistance using Google Gemini.
6. Maintain and update information about different affiliated colleges.
7. Create a platform that can be expanded with additional student services in the future.

---

✨ Features

1. College Information

BeuGram contains information related to engineering colleges affiliated with Bihar Engineering University.

Users can select/search for a college and access the information available for that institution.

The college data can be updated as the project grows.

---

2. Multiple College Support

The website is designed to support information for multiple colleges rather than being limited to a single institution.

This allows the project to be expanded by adding additional colleges and their respective information.

---

3. Google Gemini AI Chatbot

BeuGram includes an AI chatbot powered by Google Gemini.

The chatbot is intended to act as an AI assistant for the website.

It can be configured to understand:

- What BeuGram is
- What the website provides
- Available features
- How different features work
- How users can navigate the website
- Information contained within the website

The Gemini chatbot can therefore provide users with conversational assistance instead of requiring them to manually search through the website.

---

4. Website-Aware AI Assistant

The Gemini chatbot is being configured with information about the BeuGram website so that it can answer questions specifically related to the platform.

For example, users can ask questions such as:

«What is BeuGram?»

«What features are available on BeuGram?»

«How can I find my college?»

«How does this website work?»

The AI assistant should provide answers based on the information and instructions provided to it.

---

5. Responsive User Interface

The website is designed to work across different screen sizes, including:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

The interface focuses on making important information easy to access.

---

6. College Data Management

The project contains structured information for colleges.

New colleges and information can be added as the database/data structure is expanded.

This makes the platform easier to maintain and update.

---

7. Search and Navigation

The website provides navigation mechanisms to help users reach different sections and find the information they need.

The exact search and navigation functionality may change as the project develops.

---

🤖 Gemini AI Integration

BeuGram uses the Google Gemini API to provide AI-powered chat functionality.

The general flow is:

User
  ↓
BeuGram Chatbox
  ↓
Gemini API
  ↓
Gemini AI
  ↓
AI Response
  ↓
BeuGram Chatbox
  ↓
User

The chatbot can be given a system instruction containing information about BeuGram.

This instruction can describe:
- The purpose of BeuGram
- Website features
- How each feature works
- Available college information
- Navigation instructions
- Rules for answering users

This allows Gemini to behave as a BeuGram-specific assistant rather than a completely generic chatbot.

---

🔐 API Key

The Gemini API key should never be committed to GitHub.

Do not write the real API key directly inside source code or "README.md".

Use an environment variable or another secure configuration method.

Example:

GEMINI_API_KEY=your_api_key_here

Add sensitive files such as ".env" to ".gitignore":

.env
.env.local
node_modules/

Important

Never upload:

- API keys
- Passwords
- Access tokens
- Private credentials
- Secret configuration files

to a public Git repository.

---

🛠️ Technologies

The project uses web technologies such as:

- HTML
- CSS
- JavaScript
- Node.js
- npm
- Google Gemini API

Additional libraries or frameworks may be added as development continues.

---

📂 Project Structure

A typical structure can look like:

BeuGram/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── data/
│   └── college-data
│
├── .env
├── .gitignore
├── package.json
└── README.md

The exact structure may differ depending on the current version of the project.

---

💻 Requirements

Before running the project, install:

- Git
- Node.js
- npm
- A modern web browser
- VS Code (recommended)

Check Node.js:

node -v

Check npm:

npm -v

Check Git:

git --version

---



2. Install dependencies

If the project contains "package.json", run:

npm install

This installs the required Node.js packages.

---

3. Configure environment variables

Create a ".env" file if the project requires environment variables.

Example:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Do not commit this file to GitHub.

---

4. Run the project

The exact command depends on the project's "package.json".

Common examples are:

npm start

or:

npm run dev

---

🌐 Running the Website

After starting the development server, the terminal will normally show a local address such as:

http://localhost:3000

Open the displayed address in your browser.

The exact port depends on the project's configuration.

---

🔄 How BeuGram Works

The basic user flow is:

Open BeuGram
      ↓
Explore the website
      ↓
Select/search required information
      ↓
View college or student-related information
      ↓
Use Gemini AI assistant when help is required
      ↓
Ask a question
      ↓
Gemini processes the request
      ↓
AI response is displayed

---

🧠 How the AI Assistant Works

The chatbot receives a user's question and sends the request to the Gemini API.

Gemini processes the request according to the instructions supplied by BeuGram.

The response is then displayed inside the BeuGram chatbox.

The AI should be instructed to:

1. Understand the BeuGram platform.
2. Answer questions about BeuGram features.
3. Explain how website features work.
4. Guide users through the website.
5. Avoid claiming that BeuGram has a feature when that feature does not exist.
6. Give clear and useful answers.
7. Stay focused on BeuGram-related information when appropriate.

---

📊 College Information

The project is designed so that information about different colleges can be maintained and expanded.

When adding a new college, the project may include information such as:

- College name
- College code
- Location
- Affiliation
- Courses
- Contact information
- Website
- Other relevant college information

The exact fields depend on the current implementation.

---

🔧 Development

Developers can work on the project using VS Code.

Recommended workflow:

git pull

Create a separate branch for your work:

git checkout -b your-branch-name

Make your changes and test them locally.

Check the changes:

git status

Add changes:

git add .

Commit:

git commit -m "Describe your changes"

Push the branch:

git push -u origin your-branch-name
After testing, the branch can be merged into the main project.

---

🌿 Git Branching

Developers should avoid directly making experimental changes to the "main" branch.

Recommended workflow:

main
 │
 ├── developer-branch-1
 │
 ├── developer-branch-2
 │
 └── feature-branch

Example:

git checkout -b samir-work

Work on the feature branch and push the changes there.

This reduces the risk of breaking the main version of the website.

---

⚠️ Common Problems

Node.js command not found

Check:

node -v

If Node.js is not recognized, install Node.js and make sure it is added to the system PATH.

---

npm command not found

Check:

npm -v

Reinstall Node.js if npm is unavailable.

---

Gemini API not responding

Check:

- API key is correct.
- API key is available to the application.
- API key has not expired or been restricted.
- Required Gemini API access is enabled.
- Network connection is working.
- Browser console/server logs for errors.

Never expose the API key in GitHub.

---

📈 Future Development

Possible future improvements include:

- More BEU affiliated colleges
- Better college search
- More student resources
- Improved AI assistant
- Better AI knowledge about BeuGram
- Student-focused tools
- Notifications
- Important announcements
- Academic resources
- Improved mobile experience
- Better performance
- More personalized user features

---

🤝 Contribution

Contributions and improvements are welcome.

A typical contribution process is:

Fork / Clone
     ↓
Create Branch
     ↓
Make Changes
     ↓
Test
     ↓
Commit
     ↓
Push
     ↓
Pull Request

Please test changes before creating a pull request.

---

👨‍💻 Development Team

Project: BeuGram

Purpose: Student-focused BEU information and services platform

AI Integration: Google Gemini

Development: BeuGram Development Team

---

📞 Support

For issues, bugs, feature requests, or improvements, create an issue in the project's Git repository.

---

⭐ Project Vision

BeuGram aims to become a useful digital platform for BEU students by combining university and college information with modern web technology and AI assistance.

The long-term goal is to make important student information easier to discover, understand, and access from a single platform.

---

BeuGram — One platform for BEU students.