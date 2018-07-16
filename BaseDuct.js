// Um Duct funciona como um service
// Entretanto, além de carregar os dados ele também os encapsula e emite as hooks de erro e loading.
// Ou seja, um Duct é a representação de um Model e Service ao mesmo tempo.
export default class BaseDuct {
    constructor () {
        this.loaded = false
        this.error = false
        this._onLoadCallback = _ => 0
    }

    load (rows) {
        this.loaded = false
        this.loading = true
        return this.$request(rows)
    }

    onLoad (callback) {
        this._onLoadCallback = callback
        return this
    }

    $error (err) {
        this.error = err
    }

    $request (rows) {
        throw new Error('Request not supported')
    }

    $loaded (payload) {
        this.data = payload
        this.loaded = true
        this.loading = false
        this._onLoadCallback()

        return this
    }
}
