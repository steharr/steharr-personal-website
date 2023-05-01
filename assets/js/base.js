import data from '../json/projects.json' assert { type: 'json' };
const container = document.getElementById("projectsList");

const projects = data.sort((a,b)=>{
    return (a.order > b.order) ? 1 : -1;
})

projects.forEach(project =>{
    const div = document.createElement("div");
    div.className = "col-sm-12 col-md-6 col-lg-4"
    div.innerHTML = generateHtml(project);
    container.appendChild(div);
})

function generateHtml(project){
    let html = `
    <!-- ******Project Card Start****** -->
    <div class="card project-card">
        <div class="project-card-image">
            <img src="${project.pictureUrl}" class="card-img-top"
                alt="screenshot of the steharr portfolio website project">
        </div>
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">
                ${project.description}
            </p>
            <p class="card-tags">
            Technologies:`
        
            if (Array.from(project.languages).includes('html')){
                html = html + `<span class="programming-lang-tag color-html-orange ml-1">HTML</span>`
            }
                    
            if (Array.from(project.languages).includes('css')){
                html = html + `<span class="programming-lang-tag color-css-blue ml-1">CSS</span>`
            }
                    
            if (Array.from(project.languages).includes('javascript')){
                html = html + `<span class="programming-lang-tag color-javascript-yellow ml-1">Javascript</span>`
            }
                    
            if (Array.from(project.languages).includes('java')){
                html = html + `<span class="programming-lang-tag color-java-green ml-1">Java</span>`
            }
                    
            if (Array.from(project.languages).includes('python')){
                html = html + `<span class="programming-lang-tag color-python-blue ml-1">Python</span>`
            }
                    
            if (Array.from(project.languages).includes('postgres')){
                html = html + `<span class="programming-lang-tag color-postgres ml-1">PostgreSql</span>`
            }
                    
            if (Array.from(project.languages).includes('spring')){
                html = html + `<span class="programming-lang-tag color-spring ml-1">Spring</span>`
            }
                    
            if (Array.from(project.languages).includes('mongodb')){
                html = html + `<span class="programming-lang-tag color-mongodb ml-1">MongoDB</span>`
            }
                    
            if (Array.from(project.languages).includes('flask')){
                html = html + `<span class="programming-lang-tag color-flask ml-1">Flask</span>`
            }
html = html + `</p>
        </div>
        <div class="container-card-link-github">
            <a href="${project.githubUrl}"
                class="btn btn-steharr-standard card-link-github" target="_blank" rel="noopener">
                Github <i class="fab fa-github"></i>
            </a>
            <a href="${project.liveSite}"
                class="btn btn-steharr-standard card-link-github" target="_blank" rel="noopener">
                Live Site <i class="fas fa-link"></i>
            </a>
        </div>
    </div>
    <!-- ******Project Card End****** -->
    `
    return html;
}
