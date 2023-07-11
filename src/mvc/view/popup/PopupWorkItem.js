class PopupWorkItem {
    #title;
    #tags;
    #confirmText;
    #processDataCallback;
    #closeCallback;
  
    constructor(title, tags, confirmText, confirmCallback, closeCallback) {
      this.#title = title;
      this.#tags = tags;
      this.#confirmText = confirmText;
      this.#processDataCallback = confirmCallback;
      this.#closeCallback = closeCallback;
    }
  
    #taskTitle = '';
  
    set taskTitle(value) {
      console.log('taskTitle', value);
      this.#taskTitle = value;
    }
  
    render() {
      const div = document.createElement('div');
      div.innerHTML = `
        <section class="absolute top-0 h-full w-full" id="popupWorkItemContainer">
              <div class="absolute top-0 h-full w-full bg-gray-500/60" id="overlayWorkItemPopup"></div>
              <div class="relative h-104 bg-white px-12 py-6 flex flex-col" id="popupWorkItemContainerForm">
                  <header class="flex flex-row justify-between">
                      <button class="text-red enabled:hover:font-bold disabled:text-gray-300" id="btnDeleteWorkItemPopup">
                          Delete
                      </button>
                      <button class="text-gray hover:text-black" id="btnCloseWorkItemPopup">close</button>
                  </header>
                  <main class="flex flex-row justify-between mt-8">
                      <h1 class="text-4xl font-bold" id="titleWorkItemContainer">Add</h1>
                      <div class="font-bold self-end">
                          <label for="inputWorkItemQty">Qty: </label>
                          <input class="w-16 input-percentage" id="inputWorkItemQty" pattern="[0-9]{2}" required
                                 type="text"
                                 value=""/>
                      </div>
                      <div class="font-bold self-end">
                          <label for="inputWorkItemCost">Cost: $</label>
                          <input class="w-16 input-percentage" id="inputWorkItemCost" pattern="[0-9]{2}" required
                                 type="text"
                                 value=""/>
                      </div>
                      <div class="font-bold self-end">
                          Total: <span class="text-lg" id="workItemTotalContainer">0</span>
                      </div>
                      <button class="px-4 bg-dark-200 text-white rounded-2 enabled:hover:bg-dark-900 disabled:opacity-30 disabled:text-gray"
                              disabled id="btnCreateWorkItem">
                          Create
                      </button>
                  </main>
                  <footer class="flex flex-row mt-6 w-full">
                      <div class="flex-col w-full">
                          <div class="flex-row">
                              <div class="flex-col">
                                  <div class="font-bold text-xs text-gray-600">
                                      <label for="inputWorkItemTitle">Work item:</label>
                                  </div>
                                  <div class="w-full mt-1">
                                      <input class="bg-gray-100 border-1 w-full h-full p-2" id="inputWorkItemTitle"
                                             placeholder="Enter title of the work item"/>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-row mt-6">
                              <div class="flex-col">
                                  <div class="font-bold text-xs text-gray-600">
                                      <label for="inputWorkItemDescription">Description:</label>
                                  </div>
                                  <div class="w-full mt-1 h-32">
                        <textarea class="bg-gray-100 border-1 w-full h-full p-2" id="inputWorkItemDescription"
                                  placeholder="Write what this work item about" style="resize: none;"></textarea>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </footer>
              </div>
          </section>
      `;
      console.log('div.firstChild', div.children);
  
      const popup = div.children[0];
  
      const domBtnClose = popup.querySelector('[data-id="btnClose"]');
      const domBtnConfirm = popup.querySelector('[data-id="btnConfirm"]');
      const domImpTitle = popup.querySelector('[data-id="inpTitle"]');
  
      domBtnClose.onclick = () => {
        domBtnClose.onclick = null;
        domBtnConfirm.onclick = null;
        this.#closeCallback();
      };
  
      domBtnConfirm.onclick = () => {
        const taskTitle = domImpTitle.value;
        const taskDate = Date.now();
        const taskTags = this.#tags[0];
        this.#processDataCallback(taskTitle, taskDate, taskTags);
      };
  
      return div.children[0];
    }
  }
  
  export default PopupWorkItem;