fetch("/api/projects")
.then(response => response.json())
.then(( projects ) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => { 
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("col-md-4")
        projectDiv.innerHTML = `
            <div class="card" style="width: 18rem; height: 30em;">
            <img src="../assets/enso-zen-circle.png" class="card-img-top" alt="...">
            <div class="card-body flex-column d-flex">
            <h5 class="card-title">${escapeHTML(project.title)}</h5>
              <h6 class="card-subtitle mb-2">${escapeHTML(project.category)}</h6>
            <p class="card-text">${escapeHTML(project.technologies)}</p>


             <a href="${project.links}" class="mt-auto text-center btn-block btn-primary btn-sm"> Github</a>

            </div>
            </div>
            </div>                  
            `;
        
        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});

{/* <img src="https://source.unsplash.com/cXHsWI3gBws.jpg" class="card-img-top" alt="Leaf picture"></img> */}