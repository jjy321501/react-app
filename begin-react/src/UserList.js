import React, { useEffect } from 'react';
//useEffect 라는 Hook 사용하여 컴포넌트가 mount, unmount, update(props 가 변경 시) 될 때 처리방법 
const User = React.memo(function User({ user ,onRemove,onToggle }){

    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('usser 가 바뀌기 전');
            console.log(user);
        };
    },[user]);
    //useEffect 사용 시 첫 파라미터는 함수, 두번째는 의존값이 들어있는 배열 (deps) 를 넣는다
    //만약 비운다면 컴포넌트가 처음 나타날때만 useEffect 에 등록한 함수가 호출된다.
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({users,onRemove,onToggle}){
    
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {users.map(user => ( //자바스크립트 배열의 내장함수 map 을 사용
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />//react에서 배열을 렌더링시 key props를 설정해야함(없다면 index)
            ))}
        </div>
    );
}
export default UserList;