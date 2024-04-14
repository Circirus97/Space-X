//Selectores

const container = document.querySelector(".cardContainer");
const modalContainer = document.querySelector(".modalContainer");

//Eventos

document.addEventListener("DOMContentLoaded", async () => {
  const URL = `https://api.spacexdata.com/v3/launches`;
  const response = await fetch(URL);
  const data = await response.json();
  printImages(data);

});

//Funciones

function printImages(images) {

  images.forEach((image) => {
    container.innerHTML += `
    <div class="card" style="width: 18rem">
        <img
        src="${image.links.mission_patch}"
        class="card-img-top"
        alt="..."
        />
        <div class="card-body text-center">
            <h5 class="card-title">${image.mission_name}</h5>
            <p class="card-text">${image.launch_year}</p>

            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                See more about mission
            </button>
        </div>
    </div>

      
        `;
  });


}

function showModal(info){

    moreInfo.forEach((info)=>{
        modalContainer.innerHTML += `       
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  SpaceX
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Rocket</th>
                    <th scope="col">Type Rocket</th>
                    <th scope="col">Success Launch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${info.rocket.rocket_name}</td>
                    <td> ${info.rocket.rocket_type}</td>
                    <td>${info.launch_success}</td>
                  </tr>
                </tbody>
              </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
            `;
    })


}
