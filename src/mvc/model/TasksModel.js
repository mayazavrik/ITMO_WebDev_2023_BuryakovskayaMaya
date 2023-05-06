class TasksModel {
    #tasks = [];
    #updateCallbacks = [];
    constructor() {}

    set tasks(value) {
        this.#tasks = value;
        this.#updateCallbacks.forEach(c => c(this.#tasks));
    }

    addUpdateCallback(updateCallback) {
        if(!updateCallback || !(updateCallback instanceof Function)) {
        throw new Error(`Wrong callback: ${updateCallback}`);
        }
        this.#updateCallbacks.push(updateCallback);

    }
}

export default TasksModel;