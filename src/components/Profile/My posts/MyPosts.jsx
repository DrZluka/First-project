import React, { Component } from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPosts= React.memo(props => {

    let postsElements = [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} like={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                 validate={[required, maxLength10]} />
            </div>
            <div><button>Add post</button></div>
        </form>;
}

let AddNewPostFormRedux = reduxForm ({form: "profileAddNewPostForm"})(AddNewPostForm);


export default MyPosts;