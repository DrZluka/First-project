import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({ currentPage, onPageChangad, totalUsersCount, pageSize, users, ...props }) => {
    return <div>

        <Paginator currentPage={currentPage} onPageChangad={onPageChangad} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(users => <User user={users}
                    followingInProgress={props.followingInProgress}
                    key={users.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;
