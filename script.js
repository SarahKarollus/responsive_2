// Farbkreise und Farben definieren
const circles = document.querySelectorAll('.color-circle');
const colors = ['TAUGRÜN', 'VESUVIO SCHWARZ', 'GELATO WEISS', 'PASSIONE ROT', 'DIPINTO DI BLU', 'SICILIA ORANGE'];


// ------------------> NAVIGATION <---------------------

// Burger-Menü-Element auswählen
const burgerMenu = document.querySelector('.burger-menu');

// Funktion zum Umschalten des Menüs
function toggleBurgerMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const section1 = document.getElementById("section1");
    
    // Überprüfen, ob das Menü sichtbar ist
    const MenuIsVisible = dropdownMenu.style.display === "block";
    
    // Menü ein- oder ausblenden
    dropdownMenu.style.display = MenuIsVisible ? "none" : "block"; 
    
    // Den oberen Rand von section1 anpassen
    section1.style.marginTop = MenuIsVisible ? "0px" : "150px";
}

// Event-Listener hinzufügen
burgerMenu.addEventListener('click', toggleBurgerMenu);

// ------------------> SECTION 2 <---------------------

// Funktion zum Hinzufügen von Event-Listenern zu Kreisen
function addEventListenersToCircles() {
    circles.forEach(function(circle, index) {
        circle.addEventListener('click', function() {
            // Alle aktiven Klassen entfernen
            circles.forEach(function(otherCircle) {
                otherCircle.classList.remove('active');
            });

            // Aktive Klasse zum angeklickten Kreis hinzufügen
            this.classList.add('active');

            // Text einsetzen
            let text = colors[index] || 'TAUGRÜN';
            document.getElementById('colorText').textContent = text;
        });
    });
}

// Funktion für ein Form um das Angebot anzufordern
function showForm() {
    document.getElementById("offerForm").style.display = "block";
}

// Event-Listener hinzufügen, um das Formular zu schließen, wenn außerhalb geklickt wird
document.addEventListener("click", function(event) {
    var form = document.getElementById("offerForm");
    if (form.style.display === "block" && !form.contains(event.target)) {
        form.style.display = "none";
    }
});

// Event-Listener hinzufügen, um das Formular zu öffnen, wenn der Button geklickt wird
document.getElementById("button").addEventListener("click", function(event) {
    event.stopPropagation(); // Verhindert, dass das Formular sofort wieder geschlossen wird
    showForm();
});


// Event-Listener zu Kreisen hinzufügen
addEventListenersToCircles();