import { observable, computed, action } from "mobx";

export class UtilityStore {
  @observable drawerVisible: boolean = false;

  @action setDrawerVisibilityState(state: boolean) {
    this.drawerVisible = state;
  }

  @computed get drawerState() {
    return this.drawerVisible;
  }
}
