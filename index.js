document.addEventListener('DOMContentLoaded', function() {
    const dateElements = document.querySelectorAll('p.date');

    dateElements.forEach(function(elem) {
        elem.textContent = `Date: ${new Date().toLocaleDateString()}`;
    });
});
