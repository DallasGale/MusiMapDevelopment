import { makeObservable, observable, action } from "mobx";

class AnalysedStore {
  analysed: boolean = false;

  constructor() {
    makeObservable(this, {
      analysed: observable,
      setAnalysed: action,
    });
  }

  setAnalysed(analysed: boolean) {
    this.analysed = analysed;
    return this.analysed;
  }
}

const analysedStore = new AnalysedStore();
export default analysedStore;
