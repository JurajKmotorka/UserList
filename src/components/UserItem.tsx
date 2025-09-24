import type {User} from '../types'

function UserItem({props}:{props: User}){
    return (
        <div>
            <h2>{props.first_name}{' '}{props.last_name}</h2>
            <p>{props.email}</p>
            <img src={props.avatar.url} alt={props.avatar.title}/>
        </div>
    )
}

export default UserItem;