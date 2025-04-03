// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const currentYear = document.getElementById('current-year');

// Skills Data
const skills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Node.js', icon: 'fab fa-node-js' }
];

// Projects Data
const projects = [
    {
        title: "Student Management System",
        description: "A comprehensive Java application for managing student records, grades, and attendance with admin dashboard.",
        image: "image.png",
        demo: "#",
        code: "https://github.com/megamind-pixel/StudentManagementSystem.git",
        technologies: ["Java", "JavaFX", "MySQL"]
    },
    {
        title: "Inventory Management System",
        description: "Java-based system with SQL database backend for tracking product inventory, sales, and supplier data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        demo: "#",
        code: "#",
        technologies: ["Java", "SQL", "Swing"]
    },
    {
        title: "E-Commerce Backend API",
        description: "RESTful API for online store with product catalog, user authentication, and order processing.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        demo: "#",
        code: "#",
        technologies: ["Java", "Spring Boot", "MySQL"]
    }
];

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Load skills
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <h3 class="skill-name">${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillCard);
    });
    
    // Load projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo !== '#' ? `<a href="${project.demo}" class="demo-link">Live Demo</a>` : ''}
                    <a href="${project.code}" class="code-link" target="_blank">View Code</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});