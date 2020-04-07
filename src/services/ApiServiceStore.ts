import { observable, action } from "mobx";
import axios from "axios";
import { Rocket } from "../interfaces/IRockets";

export default class ApiServiceStore {
  @observable rockets: Rocket.RootObject[] = [];

  @action getRockets() {
    axios.get("https://api.spacexdata.com/v3/rockets").then((res) => {
      this.rockets = res.data;
    });
  }
}
