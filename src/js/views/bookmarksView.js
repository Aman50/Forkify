import previewView from "./previewView.js";
import eventStore from '../pubSub.js';

class BookmarksView extends previewView {
  constructor() {
    super(
      document.querySelector(".bookmarks"),
      "Unable to load bookmarks, please try refreshing the page.",
      "No bookmarks yet. Find a nice recipe and bookmark it. ;)"
    );

    window.addEventListener('load', eventStore.publish.bind(eventStore, 'bookmark.load', null));
  }

  _constructHTML() {
    return this._data.map(this._constructHTMLPreview).join('');
  }
}

export default new BookmarksView();
