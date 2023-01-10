import View from "../views/view.js";

class BookmarksView extends View {
  constructor() {
    super(
      document.querySelector(".bookmarks"),
      "Unable to load bookmarks, please try refreshing the page.",
      "No bookmarks yet. Find a nice recipe and bookmark it. ;)"
    );
  }

  _constructHTML() {
    return this._data.map(this._constructHTMLPreview).join('');
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
                </div>
            </div>
        </a>
    </li>
  `;
  }
}

export default new BookmarksView();
