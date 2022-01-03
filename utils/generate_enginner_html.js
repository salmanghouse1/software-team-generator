function generateHTML(data) {

    return `<!-- section containing cards of employees -->
    <section class="cards">
        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>Engineer</h2>
            <!-- details -->
            <div class="details">
                <p>ID#:${data.name}</p>
                
                <p>${data.id}</p>
                <p>Description:${data.email}</p>
                <p>Phone Number:${data.github}</p>
            </div>
        </div></section>`


};

module.exports = generateHTML;