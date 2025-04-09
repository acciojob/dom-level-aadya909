window.onload = function () {
    const element = document.getElementById("level");

    if (!element) {
        alert("Element with id 'level' not found.");
        return;
    }

    let level = 1;
    let current = element;

    // Traverse up through all parent elements until reaching <html> (no parentElement)
    while (current.parentElement) {
        current = current.parentElement;
        level++;
    }

    alert("The level of the element is: " + level);
};

