import axios from 'axios'
import { BaseDuct } from ".";

export default class HttpDuct extends BaseDuct {
    constructor (baseURL) {
        this.baseURL = baseURL
    }

    load (query, rows = 10) {
        this.loaded = false
        this.loading = true
        return this.$request(query, rows)
    }

    $request (query, rows) {
        return axios.get(this.baseURL, query)
            .then(data => this.$loaded(data))
            .catch(err => this.$error(err))
    }
}
