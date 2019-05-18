class Store {
    keyList = ['selectedGif'];
    constructor() {
        this.state = {
            
        }
    }
    getState(key) {
        return this.state.key
    }
    setState(key, value) {
        if(keyList.indexOf(key) === -1) throw new Error('store에 등록된 key값만 사용해주세요.');
        this.state.key = value;
    }
}

export default Store;
