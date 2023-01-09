import icons from "url:../../img/icons.svg";

export default class View {
    _parentEl;
    _data;
    _error;
    _message;

    constructor(parentEl, error, message) {
        this._parentEl = parentEl;
        this._error = error;
        this._message = message;
    }

    render(data) {
        this._data = data;

        if (!data || (Array.isArray(this._data) && this._data.length === 0)) return this.renderError();

        const dataEl = this._constructHTML();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", dataEl);
      }


      update(data) {
        this._data = data;
        
        const dataEl = this._constructHTML();
    
        this._compareAndUpdateDOM(dataEl);
      }
    
    
      _compareAndUpdateDOM(newHTMLString) {
        const newVirtualDOM = document.createRange().createContextualFragment(newHTMLString);

        const newElements = newVirtualDOM.querySelectorAll('*');
        const currentElements = this._parentEl.querySelectorAll('*');

        newElements.forEach((newElement, index) => {
          const currentElement = currentElements[index];
          
          // Checking for difference in textContent
          if (!newElement.isEqualNode(currentElement) && newElement.firstChild.nodeValue.trim() !== '') {
            currentElement.textContent = newElement.textContent;
          }

          // Checking for difference in attributes
          if (!newElement.isEqualNode(currentElement)) {
            Array.from(newElement.attributes).forEach(attr => currentElement.setAttribute(attr.name, attr.value));
          }
        });
      }
    
      _clear() {
        this._parentEl.innerHTML = "";
      }
    
      renderSpinner() {
        const spinnerEl = `
                <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
                </div>
            `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", spinnerEl);
      }
    
      renderMessage(message = this._message) {
        const messageEl = `
            <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
            `;
    
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", messageEl);
      }
    
      renderError(error = this._error) {
        const errorEl = `
          <div class="error">
            <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${error.status === 400 ? 'Please check the data.' : error}</p>
          </div>
        `;
    
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", errorEl);
      }
}