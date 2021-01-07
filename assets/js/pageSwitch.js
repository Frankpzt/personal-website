// new fullpage('#fullpage', {
//     autoScrolling: true,
// })
const homeButton = document.getElementById('homeButton')
const resumeButton = document.getElementById('resumeButton')
const projectsButton = document.getElementById('projectsButton')
const blogButton = document.getElementById('blogButton')
const contactMeButton = document.getElementById('contactMeButton')


const home = document.getElementById("home")
const resume = document.getElementById("resume")
const projects = document.getElementById("projects")
const blog = document.getElementById("blog")
const contactMe = document.getElementById("contact-me")

homeButton.addEventListener('click', function() {
    home.style.display = 'block'
    resume.style.display = 'none'
    projects.style.display = 'none'
    blog.style.display = 'none'
    contactMe.style.display = 'none'
})

resumeButton.addEventListener('click', function() {
    resume.style.display = 'block'
    home.style.display = 'none'
    projects.style.display = 'none'
    blog.style.display = 'none'
    contactMe.style.display = 'none'
})

projectsButton.addEventListener('click', function() {
    resume.style.display = 'none'
    home.style.display = 'none'
    projects.style.display = 'block'
    blog.style.display = 'none'
    contactMe.style.display = 'none'
})

blogButton.addEventListener('click', function() {
    resume.style.display = 'none'
    home.style.display = 'none'
    projects.style.display = 'none'
    blog.style.display = 'block'
    contactMe.style.display = 'none'
})

contactMeButton.addEventListener('click', function() {
    resume.style.display = 'none'
    home.style.display = 'none'
    projects.style.display = 'none'
    blog.style.display = 'none'
    contactMe.style.display = 'block'
})

