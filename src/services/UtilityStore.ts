import { observable, computed, action } from "mobx";
import { Rocket } from "../interfaces/IRockets";

export class UtilityStore {
  @observable drawerVisible: boolean = false;
  @observable selectedRocket: Rocket.RootObject = {} as any;

  @action setDrawerVisibilityState(state: boolean) {
    this.drawerVisible = state;
  }

  @computed get drawerState(): boolean {
    return this.drawerVisible;
  }

  @action setSelectedRocket(rocket: Rocket.RootObject) {
    this.selectedRocket = rocket;
  }

  @computed get getSelectedRocket(): Rocket.RootObject {
    return this.selectedRocket;
  }
}
