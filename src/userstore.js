import { observable, action, computed } from 'mobx'
import 'whatwg-fetch';

class UserStore {
    //Observable values can be watched by Observers
    @observable users = [];
    @observable selectedUser = {};
    @computed get selectedId() { 
        return this.selectedUser.id;
    }

    constructor() {
        let _this = this 
        //Managing Async tasks like ajax calls with Mobx actions
        fetch('https://jsonplaceholder.typicode.com/users'). 
        then(function(response) { return response.json()}).
        then(function(json) { _this.setUsers(json); })        
    }

    //In strict mode, only actions can modify mobx state
    @action setUsers(users) {
        this.users = [...users];
    }

    @action selectUser(user) {
        this.selectedUser = user;
    }
}

export default UserStore;