import Global from "./Global";

class Logout {
  logout() {
    Global.elements.logOutButton().filter(":visible").click();
  }
}

export default new Logout();
