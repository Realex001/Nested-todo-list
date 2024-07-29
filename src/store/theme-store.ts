import { makeAutoObservable } from "mobx";

type themes = "light" | "dark";

class ThemeStore {
  theme: themes = localStorage.theme ? JSON.parse(localStorage.theme) : "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", JSON.stringify(this.theme));
  };
}

export default new ThemeStore();
