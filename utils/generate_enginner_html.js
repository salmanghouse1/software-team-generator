function generateHTML(data) {

    return `<!-- section containing cards of employees -->
    <section class="cards">
        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>${data.getRole()}</h2>
            <!-- details -->
            <div class="details">
                <p>ID#:${data.name}</p>
                
                <p>${data.id}</p>
                <p>Description:${data.email}</p>
                <p>Github:${data.getGithub()}</p>
                <p>office Number:${data.getOfficePhone()}</p>
            </div>
        </div></section>`


};

module.exports = generateHTML;