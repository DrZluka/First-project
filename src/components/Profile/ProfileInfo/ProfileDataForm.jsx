import React from "react";
import s from './ProfileInfo.module.css';
import { reduxForm } from "redux-form";
import { createFiald, Input, Textarea } from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({  handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createFiald("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createFiald("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>: {createFiald("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>: {createFiald("About me", "aboutMe", [], Textarea )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createFiald(key, "contacts." + key, [], Input)}</b>
                </div>

            })} 
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;