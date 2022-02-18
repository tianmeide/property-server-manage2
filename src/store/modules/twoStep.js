const twoStep = {
    state: {
        unitMessage: [],
        estateCode: ''
    },
    mutations: {
        SET_TITLE(state, payload) {
            console.log('payload:' + payload.unitMessage)
            state.unitMessage = payload.unitMessage
            state.estateCode = payload.estateCode
            // this.state.unitMessage = payload.unitMessage
        }
    },
    actions: {

    },
    getters: {

    }
}

export default twoStep
