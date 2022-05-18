import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://memepedia.ru/wp-content/uploads/2019/06/kot-za-stolom-1-360x270.jpg' />
            {props.message}
            <div>
                {props.like}
                <span> like</span>
            </div>
        </div>
    )
}

export default Post;