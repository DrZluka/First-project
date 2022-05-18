import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        { id: 1, message: "I love eate!", likesCount: 9514 },
        { id: 2, message: "U hate it, becose u wont it, lol)))", likesCount: 7060 },
        { id: 3, message: "Take some food lads xD", likesCount: 8551 }
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("some text");
    
    // 2. action
    let newState = profileReducer(state, {action});

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('Message of post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("some text");
    // 2. action
    let newState = profileReducer(state, {action});

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, {action});

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
