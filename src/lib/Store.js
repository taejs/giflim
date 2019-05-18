import React from 'react'
import index from '../index'
import Timeline from '../components/Timeline'
class Store {
    static getState(key) {
        debugger;
        if(Store.keyList.indexOf(key) === -1) throw new Error('store에 등록된 key값만 사용해주세요.');
        if(!localStorage[key]) localStorage.setItem(key, JSON.stringify([]));
        return JSON.parse(localStorage[key]) || [];
    }
    static setState(key, value) {
        if(Store.keyList.indexOf(key) === -1) throw new Error('store에 등록된 key값만 사용해주세요.');
        localStorage.setItem(key, JSON.stringify(value));
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
