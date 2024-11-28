fetch('parc_informatique.json')
  .then(response => response.json())
  .then(data => {
    // Récupérer l'ID du Mac depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const macId = parseInt(urlParams.get('id')) || 0;

    // Vérifier si l'ID existe dans le JSON
    if (macId >= 0 && macId < data.length) {
      const mac = data[macId];

      // Afficher les informations du Mac sélectionné
      document.getElementById('mac-name').textContent = mac.nom;
      document.getElementById('mac-nom').textContent = mac.nom;
      document.getElementById('mac-processeur').textContent = mac.processeur;
      document.getElementById('mac-ram').textContent = mac.ram;
      document.getElementById('mac-stockage').textContent = mac.stockage;
      document.getElementById('mac-macos').textContent = mac.macos;
      document.getElementById('mac-ip').textContent = mac.ip;
    } else {
      document.getElementById('mac-name').textContent = "Mac non trouvé";
    }
  });