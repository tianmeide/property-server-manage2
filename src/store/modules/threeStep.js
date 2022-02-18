const threeStep = {
    state: {
        cellMessage: [],
        estateCode: ''
    },
    mutations: {
        SET_TITLE(state, payload) {
            console.log('payload:' + payload.cellMessage)
            state.cellMessage = payload.cellMessage
            state.estateCode = payload.estateCode
            // this.state.unitMessage = payload.unitMessage
        }
    },
    actions: {

    },
    getters: {

    }
}

export default threeStep
