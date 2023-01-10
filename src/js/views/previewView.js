import View from './view.js';
import icons from 'url:../../img/icons.svg';

export default class PreviewClass extends View {
    constructor(parentEl, error, message) {
        super(parentEl, error, message);
    }

    _constructHTMLPreview(result) {
        const id = window.location.hash.slice(1);

        return `
            <li class="preview">
                <a href="#${result.id}" class="preview__link ${id === result.id ? "preview__link--active" : ""}">
                    <figure class="preview__fig">
                        <img src="${result.imageUrl}" alt="${result.title}">
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${result.title}</h4>
                        <div class="preview__info">
                        <p class="preview__publisher">${result.publisher}</p>
                        <div class="preview__user-generated ${result.key ? '' : 'hidden'}">
                            <svg>
                                <use href="${icons}#icon-user"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
                </a>
            </li>
        `;
    }
}