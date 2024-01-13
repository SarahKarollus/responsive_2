// Farbkreise und Farben definieren
const circles = document.querySelectorAll('.color-circle');
const colors = ['TAU GRÜN', 'VESUVIO SCHWARZ', 'GELATO WEISS', 'PASSIONE ROT', 'DIPINTO DI BLU BLAU', 'SICILIA ORANGE'];

// Definieren Sie ein Array mit den Pfaden zu den Sockenbildern
var sockImages = [
    'sec2/blaueSocketransparent.png',
    'sec2/sec1_socke_schwarz.png',
    'sec2/sec1_socke_weiß.png',
    'sec2/sec1_socke_rot.png',
    'sec2/sec1_socke_blau.png',
    'sec2/sec1_socke_orange.png', 
]

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
document.querySelector('.burger-menu').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

// ------------------> SECTION 2 <---------------------

// Funktion zum Hinzufügen von Event-Listenern zu Kreisen
function addEventListenersToCircles() {

    // Wählen Sie das Sockenbild aus
    var sockImage = document.querySelector('#sec2Image');

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

            // Ändern Sie das Bild der Socke, wenn der Kreis angeklickt wird
            sockImage.src = sockImages[index];
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



// ------------------> SECTION 4 <---------------------

// Funktion für ein Form um das Angebot in Section 4 anzufordern
function showForm4() {
    document.getElementById("offerForm4").style.display = "block";
}

// Event-Listener hinzufügen, um das Formular zu öffnen, wenn der Button in Section 4 geklickt wird
document.getElementById("button4").addEventListener("click", function(event) {
    event.stopPropagation(); // Verhindert, dass das Formular sofort wieder geschlossen wird
    showForm4();
});
// Event-Listener hinzufügen, um das Formular zu schließen, wenn außerhalb geklickt wird
document.addEventListener("click", function(event) {
    var form = document.getElementById("offerForm4");
    if (form.style.display === "block" && !form.contains(event.target)) {
        form.style.display = "none";
    }
});




// Holt das Modal
var modal = document.getElementById("myModal");

// Holt den Button, der das Modal öffnet
var btn = document.getElementById("readMore4");

// Holt das <span> Element, das das Modal schließt
var span = document.getElementsByClassName("close")[0];

// Wenn der Benutzer auf den Button klickt, öffnet sich das Modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Wenn der Benutzer auf <span> (x) klickt, schließt sich das Modal
span.onclick = function() {
  modal.style.display = "none";
}

// Wenn der Benutzer irgendwo außerhalb des Modals klickt, schließt sich dieses
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}