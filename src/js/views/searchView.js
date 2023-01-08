import eventStore from '../pubSub.js';

class SearchView {
    #parentEl = document.querySelector('.search');

    constructor() {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            eventStore.publish('searchView.submit', '');
        });
    }

    getQuery() {
        return this.#parentEl.querySelector('.search__input').value;
    }
}

export default new SearchView();