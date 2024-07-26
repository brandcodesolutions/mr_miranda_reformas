// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
<script>
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var name = encodeURIComponent(document.getElementById('name').value);
    var phone = encodeURIComponent(document.getElementById('phone').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var whatsappNumber = '5518998037956'; // Número do WhatsApp no formato internacional
    var whatsappMessage = `Nome: ${name}%0ATelefone: ${phone}%0AE-mail: ${email}%0AMensagem: ${message}`;

    var whatsappURL = `https://wa.me/5518998037956`;

    window.open(whatsappURL, 'https://wa.me/5518998037956_blank'); // Abre o link do WhatsApp em uma nova aba
  });
</script>

