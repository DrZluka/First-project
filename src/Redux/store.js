import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./profile-reducer";
import SidebarReducer from "./Sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "I love eate!", likesCount: 9514 },
                { id: 2, message: "U hate it, becose u wont it, lol)))", likesCount: 7060 },
                { id: 3, message: "Take some food lads xD", likesCount: 8551 }
            ],
            newPostText: "Type your message"
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hey!" },
                { id: 2, message: "Whot progress do u have now?" },
                { id: 3, message: "Hello" },
                { id: 4, message: "Bruh..." },
                { id: 5, message: "For the motherland!" }
            ],
            dialogs: [
                { id: 1, name: "DrZluka", avatar: "https://memepedia.ru/wp-content/uploads/2019/06/kot-za-stolom-1-360x270.jpg" },
                { id: 2, name: "Vlad_Vadim", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
                { id: 3, name: "Tanya", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhBpT3pTdKc1X-gQd3uNg2p2u8HmJLOpQRA&usqp=CAU" },
                { id: 4, name: "Chelbix", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
                { id: 5, name: "Soviet_Ivan", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
                { id: 6, name: "Unnoune1", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" }
            ],
            newMessageBody: ""
        },
        sitebar: {}
    },
    _callSubscriber(){
        console.log("state was changed!");
    },

    getState() {
        return this._state;
    },
    subscribe (observer){
        this._callSubscriber = observer; // observer - наблюдатель - addEventListener
    },

    dispatch(action){ //{type: "ADD-POST"}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = SidebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;

// store - OOP