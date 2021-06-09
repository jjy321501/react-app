import React from 'react';

function User({ user }) {

    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}){
    
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {users.map(user => ( //자바스크립트 배열의 내장함수 map 을 사용
                <User user={user} key={user.id}/>//react에서 배열을 렌더링시 key props를 설정해야함(없다면 index)
            ))}
        </div>
    );
}
export default UserList;