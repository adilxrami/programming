document.getElementById('toggleButton').addEventListener('click', function() {
    const coffee = document.getElementById('coffee');
    // Check the height of the coffee div to determine if it's full or empty
    if (coffee.style.height === '0px') {
        coffee.style.height = '160px'; // Set to full
    } else {
        coffee.style.height = '0px'; // Set to empty
    }
});
