document.getElementById('dataForm').addEventListener('submit', function(event) {
    var currentUrl = document.getElementById('ItemLink').value;
    var id = ""
    var itemName = document.getElementById('ItemName').value;
    var image = document.getElementById('Image').value;
    var price = document.getElementById('Price').value;
    var type = document.getElementById('type').value;
    event.preventDefault(); // Empêche le rechargement de la page
    var url = "https://script.google.com/macros/s/AKfycbzRf9Uc6QaSC-yGuO29S8s71mkim6LZs28feA_qIVtFBhdT3WYvq2vE1mEeFz9zZsl5Aw/exec"

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
});
