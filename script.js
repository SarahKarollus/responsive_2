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
// ------------------> SECTION 1 <---------------------

document.querySelector('#sec1Socke').addEventListener('click', function(event) {
  event.preventDefault();
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


// Fügen Sie die Event-Listener zu den Kreisen hinzu, nachdem das DOM geladen wurde
document.addEventListener('DOMContentLoaded', function() {
  addEventListenersToCircles();
});


// ------------------> SECTION 3 & 4 Modale <---------------------

// Variablen für die Buttons und Modals
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("readMore3");
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("readMore4");
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// Öffnen Sie das Modal 3
btn3.onclick = function() {
  modal3.style.display = "block";
  btn3.style.display = "none"; 
  btn4.style.display = "none"; 
}

// Schließen Sie das Modal 3
span3.onclick = function() {
  modal3.style.display = "none";
  btn3.style.display = "block"; 
  btn4.style.display = "block"; 
}

// Öffnen Sie das Modal 4
btn4.onclick = function() {
  modal4.style.display = "block";
  btn4.style.display = "none"; 
  btn3.style.display = "none"; 
}

// Schließen Sie das Modal 4
span4.onclick = function() {
  modal4.style.display = "none";
  btn4.style.display = "block"; 
  btn3.style.display = "block"; 
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
    btn3.style.display = "block"; 
    btn4.style.display = "block"; 
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
    btn4.style.display = "block"; 
    btn3.style.display = "block"; 
  }
}
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





// ------------------> SECTION 5 <---------------------

document.querySelectorAll('#section5 h2').forEach((h2) => {
  h2.addEventListener('click', (event) => {
    document.querySelectorAll('#section5 h2').forEach((h) => h.classList.remove('underline'));
    event.target.classList.add('underline');
  });
});

document.querySelectorAll('#section5 h2').forEach((h2, index) => {
  h2.addEventListener('click', () => {
    document.querySelectorAll('#section5 p').forEach((p, pIndex) => {
      p.style.display = pIndex === index ? 'block' : 'none';
    });
  });
});

// Wählen Sie das p-2-Element und das Bild aus
var p2Element = document.getElementById('p-2');
var image = document.querySelector('.blend[src="sec5/stoff_2.jpeg"]');

// Fügen Sie einen Scroll-Event-Listener hinzu
window.addEventListener('scroll', function() {
  // Überprüfen Sie, ob das p-2-Element im Viewport sichtbar ist
  var rect = p2Element.getBoundingClientRect();
  var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  // Fügen Sie die 'visible'-Klasse zum Bild hinzu, wenn das p-2-Element sichtbar ist
  if (isVisible) {
    image.classList.add('visible');
  }
});






// Wählen Sie alle Bilder mit der Klasse 'blend' aus
var images = document.querySelectorAll('.blend');

// Fügen Sie jedem Bild einen Scroll-Event-Listener hinzu
window.addEventListener('scroll', function() {
  images.forEach(function(image) {
    // Überprüfen Sie, ob das Bild im Viewport sichtbar ist
    var rect = image.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Fügen Sie die 'visible'-Klasse hinzu, wenn das Bild sichtbar ist, und entfernen Sie sie, wenn es nicht sichtbar ist
    if (isVisible) {
      image.classList.add('visible');
    } else {
      image.classList.remove('visible');
    }
  });
});



// Wählen Sie alle Elemente mit der Klasse 'scroll-reveal-right' aus
var elements = document.querySelectorAll('.scroll-reveal-right');

// Fügen Sie jedem Element einen Scroll-Event-Listener hinzu
window.addEventListener('scroll', function() {
  elements.forEach(function(element) {
    // Überprüfen Sie, ob das Element im Viewport sichtbar ist
    var rect = element.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Fügen Sie die 'visible'-Klasse hinzu, wenn das Element sichtbar ist, und entfernen Sie sie, wenn es nicht sichtbar ist
    if (isVisible) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.scroll-reveal');

  for(var i = 0; i < reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('visible');
    }
    else{
      reveals[i].classList.remove('visible');
    }
  }
}

