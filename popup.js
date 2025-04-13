document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    var id = ""
    var itemName = document.getElementById('ItemName').value;
    var image = document.getElementById('Image').value;
    var price = document.getElementById('Price').value;
    var type = document.getElementById('type').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const currentUrl = tabs[0].url; // URL de l'onglet actif
        // URL de votre script Google Apps
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            var url = data.dbAppLink; // Assuming your JSON has a field named 'url'

            // Créer l'URL avec les paramètres
            var requestUrl = `${url}?ID=${encodeURIComponent(id)}&Item%20Name=${encodeURIComponent(itemName)}&Image=${encodeURIComponent(image)}&Links=${encodeURIComponent(currentUrl)}&Price=${encodeURIComponent(price)}&Type=${encodeURIComponent(type)}`;
            
            // Envoyer la requête GET
            fetch(requestUrl)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('responseMessage').innerText = "Données envoyées avec succès !";
                })
                .catch(error => {
                    document.getElementById('responseMessage').innerText = "Erreur lors de l'envoi des données.";
                    console.error('Erreur:', error);
                });
        })
        
        
    });
});
