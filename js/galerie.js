const galerieImage = document.getElementById("allImage");

// Définissez la variable monImage après la fonction getImage
let titre = "titre";
let imgSource = "../Images/bistro-2594762_1280.jpg";

let monImage = getImage(titre, imgSource);

// Définissez le innerHTML après que monImage soit défini
galerieImage.innerHTML = monImage;

function sanitizeHtml(text) {
    // Créez un élément HTML temporaire de type "div"
    const tempHtml = document.createElement('div');

    // Affectez le texte reçu en tant que contenu texte de l'élément "tempHtml"
    tempHtml.textContent = text;

    // Utilisez .innerHTML pour récupérer le contenu de "tempHtml"
    // Cela va "neutraliser" ou "échapper" tout code HTML potentiellement malveillant
    return tempHtml.innerHTML;
}

function getImage(titre, urlImage) {
    titre = sanitizeHtml(titre); // Correction de la faute de frappe ici
    urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}
