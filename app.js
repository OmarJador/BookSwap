async function retrieveBookExchanges() {
    let response = await fetch("http://127.0.0.1:8000/api/v1/exchange-requests");
    let json = await response.json();
    let echanges = json.data;
    localStorage.setItem("echanges", JSON.stringify(echanges));
}



retrieveBookExchanges();


let echanges = JSON.parse(localStorage.getItem("echanges"));
let catalogue = document.getElementById("container__echanges");

console.log(echanges);  

function afficherEchanges(echanges) {
    echanges.forEach((echange) => {

        let carteEchange = `
            <div class="col-12 col-xl-6">
                <div class="card shadow-sm p-3">

                    <!-- Request status and date -->
                    <div class="d-flex justify-content-between mb-3">
                        <span class="badge bg-success">${echange.exchange_type}</span>
                        <small class="text-muted">${echange.status}</small>
                    </div>

                    <!-- Main book -->
                    <div class="bg-light rounded p-3">

                        <h6 class="fw-bold mb-3">Livre proposé</h6>

                        <div class="d-flex align-items-center gap-3">
                            <img src="http://127.0.0.1:8000${echange.book.image_url}" width="80" alt="Book">

                            <div>
                                <h6 class="fw-bold mb-1">${echange.book.title}</h6>
                                <small class="text-muted">${echange.book.author}</small>
                                <span class="badge bg-primary d-block mt-2">
                                    ${echange.book.category.name}
                                </span>
                            </div>
                        </div>

                    </div>

                    <!-- Arrow and offers count -->
                    <div class="text-center py-3">
                        <i class="bi bi-arrow-down fs-3"></i>
                        <p class="small fw-bold mb-0">${echange.offers_count} propositions reçues</p>
                    </div>

                    <!-- Offers -->
                    ${!echange.offers_count == 0 
                        ?`<div class="border rounded p-3">

                        <h6 class="fw-bold mb-3">Offres des apprenants</h6>

                        <!-- Offer 1 -->
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <img src="offered-book.jpg" width="65" alt="Offered book">

                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-1">Grokking Algorithms</h6>
                                <small class="text-muted d-block">Aditya Bhargava</small>
                                <small>Rayan F.</small>
                                <span class="badge bg-success">Acceptée</span>
                            </div>
                        </div>

                        <hr>

                        <!-- Offer 2 -->
                        <div class="d-flex align-items-center gap-3">
                            <img src="offered-book.jpg" width="65" alt="Offered book">

                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-1">You Don't Know JS Yet</h6>
                                <small class="text-muted d-block">Kyle Simpson</small>
                                <small>Mehdi B.</small>
                                <span class="badge bg-warning text-dark">En attente</span>
                            </div>
                        </div>

                    </div>`:``}

                    <!-- Footer -->
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <small class="text-muted">Salma B.</small>
                        <button class="btn btn-primary btn-sm">
                            Voir les détails
                        </button>
                    </div>

                </div>
            </div>
        `;

        catalogue.innerHTML += carteEchange;
    });
}

afficherEchanges(echanges);
