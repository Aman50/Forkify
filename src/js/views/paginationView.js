import View from './view.js';
import * as config from '../config.js';
import eventStore from '../pubSub.js';
import icons from 'url:../../img/icons.svg';

export class PaginationView extends View {

    constructor() {
        super(document.querySelector('.pagination'),
        'Unable to load controls for the result, please refresh the page and try again!',
        '');

        this._parentEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--inline');

            if (!btn) return;

            let { newPage } = btn.dataset;
            newPage = +newPage;

            // Using Publisher-Subscriber communication pattern
            eventStore.publish('paginationView.click', newPage);
        });
    }

    _constructHTML() {
        const currPage = this._data.search.currentPage;
        const totalPages= Math.round(this._data.search.results.length / config.RESULTS_PER_PAGE);

        let markup = ``;
        // Rendering previous button
        if (currPage > 1) {
            markup += `
            <button class="btn--inline pagination__btn--prev" data-new-page="${currPage - 1}">
                <svg class="pagination__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
            `
        }

        if (currPage < totalPages) {
            markup += `
            <button class="btn--inline pagination__btn--next" data-new-page="${currPage + 1}">
                <span>Page ${currPage + 1}</span>
                <svg class="pagination__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
            </button>
            `;
        }
        return markup;
    }
};

export default new PaginationView();

