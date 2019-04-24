import { Component } from "react";

export default class FetchData extends Component {
  render() {
    return NaN;
  }
  /**
   * @url to fetch from 
   * @method method to call e.g json() or text()
   * @CORSMETHODS object with cors messages ({mode: 'no-cors'})
   */
  fetchData = async (url, method, {...CORSMETHODS}) => {
    const res = await fetch(url, {CORSMETHODS});
    const data = await res.eval(method)();
    return { data };
  };
}
