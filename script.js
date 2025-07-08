// Fonctionnalités JavaScript supplémentaires

// Détection du scroll pour l'en-tête
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Fonction pour simuler le téléchargement après paiement
function handlePayment(method) {
    // En production, vous intégreriez l'API de paiement correspondante
    alert(`Paiement via ${method} simulé. En production, cela déclencherait le processus de paiement réel.`);
    
    // Après confirmation de paiement, vous pourriez déclencher:
    // simulateDownload();
}

// Fonction pour le téléchargement automatique
function simulateDownload() {
    // En production, cela déclencherait le téléchargement du fichier
    alert('Téléchargement démarré!');
    // window.location.href = 'path/to/file.pdf';
}

// Gestion de la newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if(email) {
        alert(`Merci pour votre inscription avec l'email: ${email}`);
        this.reset();
        
        // En production, vous enverriez cette donnée à votre backend
        // fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
    }
});
