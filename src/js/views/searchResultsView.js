import previewView from "./previewView.js";

class SearchResultsView extends previewView {
    constructor() {
        super(
            document.querySelector('.results'),
            'No recipes found for your query! Please try again ;)',
            'Search a query to get the results here :)'
        );
    }

    _constructHTML() {
        const id = window.location.hash.slice(1);
        
        return this._data.map(this._constructHTMLPreview).join('');
    }
}

export default new SearchResultsView();