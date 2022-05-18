const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
        { id: 3, name: "Andrey", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
        { id: 4, name: "Chelbix", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
        { id: 5, name: "Soviet_Ivan", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
        { id: 6, name: "Unnoune1", avatar: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]

            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;