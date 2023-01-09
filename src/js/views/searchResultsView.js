import View from "./view";
import icons from "url:../../img/icons.svg";

class SearchResultsView extends View {
    constructor() {
        super(
            document.querySelector('.results'),
            'No recipes found for your query! Please try again ;)',
            'Search a query to get the results here :)'
        );
    }

    _constructHTML() {
        return this._data.map(result => `
            <li class="preview">
                <a href="#${result.id}" class="preview__link ">
                    <figure class="preview__fig">
                        <img src="${result.imageUrl}" alt="${result.title}">
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${result.title}</h4>
                        <div class="preview__info">
                        <p class="preview__publisher">${result.publisher}</p>
                        <div class="preview__user-generated">
                            <svg>
                                <use href="${icons}#icon-user"></use>
                            </svg>
                        </div>
                        </div>
                    </div>
                </a>
            </li>
        `).join('');
    }
}

export default new SearchResultsView();