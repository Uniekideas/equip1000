// Get the button and filter container
const showFilterButton = document.getElementById('showFilter');
const filterContainer = document.getElementById('filterContainer');

// Add event listener for button click
showFilterButton.addEventListener('click', toggleFilter);

function toggleFilter() {
  // Toggle the display of the filter container
  filterContainer.style.display = filterContainer.style.display === 'none' ? 'block' : 'none';
}

// Get the filter dropdowns
const filterBrand = document.getElementById('filterBrand');
const filterPrice = document.getElementById('filterPrice');

// Add event listeners for filter change
filterBrand.addEventListener('change', filterItems);
filterPrice.addEventListener('change', filterItems);

function filterItems() {
    // Get selected values
    const brand = filterBrand.value;
    const priceRange = filterPrice.value;

    // Get all laptops to filter
    const laptops = document.querySelectorAll('.laptop');

    // Loop through laptops
    laptops.forEach(laptop => {
        const laptopBrand = laptop.dataset.brand;
        const laptopPrice = parseInt(laptop.dataset.price);

        // Check if laptop matches selected filters
        const brandMatch = brand === '' || laptopBrand === brand;
        const priceMatch = priceRange === '' || isPriceInRange(laptopPrice, priceRange);

        if (brandMatch && priceMatch) {
            laptop.style.display = ''; // Show laptop
        } else {
            laptop.style.display = 'none'; // Hide laptop
        }
    });

    // Show or hide no results message
    const noResultsMessage = document.getElementById('noResultsMessage');
    const hasResults = Array.from(laptops).some(laptop => laptop.style.display !== 'none');
    noResultsMessage.style.display = hasResults ? 'none' : 'block';
}

// Helper function to check if price is within a range
function isPriceInRange(price, range) {
    const [min, max] = range.split('-').map(val => parseInt(val));
    return price >= min && price <= max;
}