import React from 'react';
import MyPosts from './My posts/MyPosts';
import MyPostsContainer from './My posts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
 
    return <div>
        <ProfileInfo saveProfile={props.saveProfile} 
        savePhoto={props.savePhoto} 
        isOwner={props.isOwner} 
        profile={props.profile} 
        status={props.status} 
        updataStatus={props.updataStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;