function loadModals() {
    const request = new XMLHttpRequest();
    request.open('GET', 'modal.json', true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                try {
                    const modals = JSON.parse(request.responseText);
                    const modalContainer = document.querySelector('#modal-container');

                    modals.forEach(modal => {
                        const modalEl = document.createElement('div');

                        modalEl.innerHTML = `
                            <div id="middle-center-modal-${modal.id}" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden md:w-8/12 mx-auto" role="dialog" tabindex="-1">
                                <div class="modal-dialog overlay-open:opacity-100 overlay-open:duration-300 max-w-none shrink-0 my-auto">
                                    <div class="modal-content bg-[#161616] !rounded-3xl">
                                        <div class="modal-body p-0 overflow-y-hidden h-full" style="border-top-left-radius: 24px; border-top-right-radius: 24px;">
                                            <div class="relative flex flex-col">
                                                <img src="${modal.modalHeaderBg}}" width="100%" class="object-cover">
                                                <div class="absolute w-full h-full p-4">
                                                    <div class="p-4 absolute top-0 end-0">
                                                        <button type="button" class="btn btn-circle" aria-label="Close-${modal.id}" data-overlay="#middle-center-modal-${modal.id}">
                                                        <span class="text-sm">X</span>
                                                        </button>
                                                    </div>
                                                    <div class="p-4 absolute bottom-0">
                                                        <div class="${modal.modalLogo} py-2 h-10 bg-left bg-contain bg-no-repeat"></div>
                                                        <img src="${modal.modalTitle}" width="100%" class="w-8/12 py-2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 p-6">
                                                <div>
                                                    <ul class="cust-modal-list">
                                                        <li>${modal.year}</li>
                                                        <li>${modal.age}</li>
                                                        <li>${modal.type}</li>
                                                        ${modal.genre.map(g => `<li>${g}</li>`).join('')}
                                                    </ul>
                                                    <p>${modal.description}</p>
                                                </div>
                                                <div class="email-sign-up pb-6">
                                                    <label for="email-address-${modal.id}" class="sr-only">Email address</label>
                                                    <input type="email" name="email" id="email-address-${modal.id}" autocomplete="email" placeholder="Email address" />
                                                    <a href="#" class="mb-block">
                                                        <button class="btn-red btn-red-input">
                                                            Get started &gt;
                                                            <span class="icon-[fluent-emoji-flat--plus]"></span>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;

                        modalContainer.appendChild(modalEl);
                    });
                } catch (err) {
                    console.error('Error parsing modals JSON:', err);
                }
            } else {
                console.error('Error loading modal.json:', request.statusText);
            }
        }
    };
    request.send();
}

document.addEventListener('DOMContentLoaded', loadModals);
