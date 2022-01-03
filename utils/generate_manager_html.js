function generateManager(data) {

    return `<!-- section containing cards of employees -->
    <section class="cards">
        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>Manager</h2>
            <!-- details -->
            <div class="details">
                <p>ID#:${data.id}</p>
                
                <p>${data.name}</p>
                <p>Description:${data.email}</p>
                <p>Phone Number:${data.officeNumber}</p>
            </div>
        </div></section>`


};

module.exports = generateManager;