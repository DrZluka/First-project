import React from "react";
import { Redirect } from "react-router-dom";
import AvataraItem from "./AvatarItem/AvatarItem";
import DialogItem from "./DialgItem/DialogsItam";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

// const maxLength50 = maxLengthCreator(50);

// const AddMessageForm = (props) => {
//     return(
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message"/>
//             </div>
//             <div><button>Send message</button></div>
//         </form>
//     )
// }
// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;