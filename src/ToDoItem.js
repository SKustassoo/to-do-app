export class ToDoItem {

    constructor(id, title, description, dueDate, priority, project, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.status = status;
        this.id = id;
    };

    get id() {return this.id};
    get title() {return this._title};
    get description() {return this._description};
    get dueDate() {return this._dueDate};
    get priority() {return this._priority};
    get project() {return this._project};
    get status() {return this._status};

    set id(value) {this._id = value};
    set title(value) {this._title = value};
    set description(value) {this._description = value};
    set dueDate(value) {this._dueDate = value};
    set priority(value) {this._priority = value};
    set project(value) {this._project = value};
    set status(value) {this._status = value};

};