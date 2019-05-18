class Store {

    static getState(key) {
        debugger;
        if(Store.keyList.indexOf(key) === -1) throw new Error('store에 등록된 key값만 사용해주세요.');
        return Store.datalist[key];
    }
    static setState(key, value) {
        if(Store.keyList.indexOf(key) === -1) throw new Error('store에 등록된 key값만 사용해주세요.');
        Store.datalist[key] = value;
    }
}
Store.keyList = ['selectedGif'];

Store.datalist = {
    'selectedGif' : [
        {
            "kind": "hooray",
            "type": "gif",
            "id": "11sBLVxNs7v6WA",
            "slug": "cheer-cheering-11sBLVxNs7v6WA",
            "url": "https://i.giphy.com/11sBLVxNs7v6WA.gif",
            "createdAt": "2015-01-29 16:30:00"
        }
    ]
}

export default Store;
