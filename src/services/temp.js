const resume = `
John Doe
Email: johndoe@gmail.com | Phone: +91-9876543210 | LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe | Location: Bangalore, India

EDUCATION
B.Tech in Computer Science | KIIT University | 2021 - 2025 | CGPA: 8.5

SKILLS
Languages:     JavaScript, TypeScript, Python
Frontend:      React.js, Next.js, HTML, CSS, Tailwind CSS
Backend:       Node.js, Express.js
Database:      MongoDB, PostgreSQL
Tools:         Git, GitHub, Postman, VS Code
Cloud:         AWS (basic), Firebase

EXPERIENCE
Full Stack Intern | TechCorp Pvt Ltd | June 2024 - Aug 2024
- Built REST APIs using Node.js and Express reducing response time by 30%
- Developed React dashboard for real-time data visualization
- Integrated JWT authentication and role-based access control

PROJECTS
AI Resume Analyzer
- Built an AI-powered resume analyzer using Node.js, React, and Gemini AI
- Generates ATS score, skill gaps, interview questions, and preparation plan
- Tech Stack: React, Node.js, Express, MongoDB, Gemini API

Chat Application
- Real-time chat app using Socket.io and React
- Supports group chats, file sharing, and notifications
- Tech Stack: React, Node.js, Socket.io, MongoDB

CERTIFICATIONS
- AWS Cloud Practitioner - 2024
- Meta Front-End Developer - Coursera - 2023


`
const selfDescription = `
I am a final year Computer Science student passionate about full stack development 
and AI-powered applications. I have hands-on experience building scalable REST APIs 
and responsive React frontends. During my internship at TechCorp, I worked on 
production-level code and collaborated with a team of 8 developers using Agile 
methodology. I am a quick learner, problem solver, and I enjoy building real-world 
projects that solve actual problems. I am actively looking for a full-time SDE role 
where I can contribute and grow.

`

const jobDescription =`
Company: Google
Role: Software Development Engineer (SDE-1)
Location: Bangalore, India
Experience: 0 - 2 years (Fresher)

About the Role:
We are looking for a passionate Software Development Engineer to join our team. 
You will work on building scalable backend systems and modern frontend interfaces 
that serve millions of users globally.

Responsibilities:
- Design and develop scalable REST APIs and microservices
- Build and maintain React-based frontend applications
- Write clean, testable, and efficient code
- Collaborate with cross-functional teams in an Agile environment
- Participate in code reviews and technical discussions
- Optimize applications for performance and scalability

Required Skills:
- Proficiency in JavaScript / TypeScript
- Strong knowledge of React.js and Node.js
- Experience with RESTful API design
- Familiarity with databases: MongoDB, PostgreSQL
- Understanding of Data Structures and Algorithms
- Knowledge of Git and version control

Good to Have:
- Experience with cloud platforms (AWS / GCP)
- Knowledge of Docker and Kubernetes
- Familiarity with CI/CD pipelines
- GraphQL experience

Salary: 18 - 25 LPA


`
module.exports = {
    resume,selfDescription,jobDescription
}