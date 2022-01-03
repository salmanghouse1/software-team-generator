function generateIntern(data) {

    return `<!-- section containing cards of employees -->
    <section class="cards">
        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>Intern</h2>
            <!-- details -->
            <div class="details">
                <p>ID#:${data.id}</p>
                
                <p>${data.name}</p>
                <p>Description:${data.email}</p>
                <p>Phone Number:${data.school}</p>
            </div>
        </div></section>`


};

module.exports = generateIntern;