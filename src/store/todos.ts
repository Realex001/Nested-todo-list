import { makeAutoObservable } from "mobx";
import { TodoType } from "../types/todo-type";
import { v4 as uuidv4 } from "uuid";
import {
  recursionCompleteToggler,
  recursionFilter,
  recursionSearch,
  subTaskAdding,
} from "../utils/utils";

class Todos {
  todoArray: TodoType[] = localStorage.todos
    ? JSON.parse(localStorage.todos)
    : [];
  activeTask: TodoType | null = null;
  todoTitle = "";
  todoText = "";
  completedID: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  titleHendler = (str: string) => {
    this.todoTitle = str;
  };

  textHandler = (str: string) => {
    this.todoText = str;
  };

  addTask = () => {
    if (this.todoTitle.trim().length) {
      this.todoArray.push({
        id: uuidv4(),
        title: this.todoTitle,
        text: this.todoText,
        isCompleted: false,
        subTasks: [],
      });

      localStorage.setItem("todos", JSON.stringify(this.todoArray));
      this.todoTitle = "";
      this.todoText = "";
    }
  };

  addSubtask = (id: string) => {
    if (this.todoTitle.trim().length) {
      const task = {
        id: uuidv4(),
        title: this.todoTitle,
        text: this.todoText,
        isCompleted: false,
        subTasks: [],
      };

      this.todoArray = subTaskAdding(id, this.todoArray, task);
      localStorage.setItem("todos", JSON.stringify(this.todoArray));
      this.todoTitle = "";
      this.todoText = "";
    }
  };

  removeTask = (id: string) => {
    this.todoArray = recursionFilter(id, this.todoArray);
    localStorage.setItem("todos", JSON.stringify(this.todoArray));

    if (!this.todoArray.length) {
      this.activeTask = null;
      localStorage.removeItem("todos");
    }
  };

  completeID = (array: TodoType[]) => {
    array.forEach((item) => {
      if (!item.subTasks) {
        return;
      }
      if (item.isCompleted) {
        this.completedID.push(item.id);
      }

      this.completeID(item.subTasks);
    });
  };

  completeToggler = (id: string) => {
    this.todoArray = recursionCompleteToggler(id, this.todoArray);

    this.completedID = [];
    this.completeID(this.todoArray); // Массив ID активных чекбоксов

    localStorage.setItem("todos", JSON.stringify(this.todoArray));
  };

  chooseTask = (id: string) => {
    this.activeTask = recursionSearch(id, this.todoArray);
  };
}

export default new Todos();
