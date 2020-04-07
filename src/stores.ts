import ApiServiceStore from "./services/ApiServiceStore";
import GlobalStore from "./services/GlobalStore";
import { UtilityStore } from "./services/UtilityStore";

export default {
    apiServiceStore: new ApiServiceStore(),
    globalStore: new GlobalStore(),
    utilityStore: new UtilityStore()
};