document.addEventListener('DOMContentLoaded', () => {
    fetchAndPopulateDropdownAuthor();
    fetchAndPopulateDropdownPublication();
    fetchAndPopulateDropdownCategory();
});

function fetchAndPopulateDropdownAuthor() {
    fetch(`/admin/author`)
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById(`author-select`);
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item._id; // Assuming your API returns an 'id' field
                option.textContent = item.authorName; // Adjust depending on API response
                selectElement.appendChild(option);
            });
        })
        .catch(error => {console.log(error)});
}

function fetchAndPopulateDropdownPublication() {
    fetch(`/admin/publication`)
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById(`publication-select`);
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item._id; // Assuming your API returns an 'id' field
                option.textContent = item.publicationName; // Adjust depending on API response
                selectElement.appendChild(option);
            });
        })
        .catch(error => {console.log(error)});
}

function fetchAndPopulateDropdownCategory() {
    fetch(`/admin/category`)
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById(`category-select`);
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item._id; // Assuming your API returns an 'id' field
                option.textContent = item.categoryName; // Adjust depending on API response
                selectElement.appendChild(option);
            });
        })
        .catch(error => {console.log(error)});
}
