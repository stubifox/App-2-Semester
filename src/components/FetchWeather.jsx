import { Component } from "react";

export default class FetchWeather extends Component {
    static getWeather = async () => {
        const APIURL = '';
        const res = await fetch(APIURL)
        const data = await res.json();
        return { data }
    }
}