import type {User} from '../types'

function UserItem({props}:{props: User}){
    return (
        <div>
            <h2>{props.first_name}{' '}{props.last_name}</h2>
            <p>{props.email}</p>
             <img src={`${props.avatar.url}?t=${Date.now()}>`} alt={props.avatar.title}/>  {/* Avatar did not refresh on refetch - probably using cached value - thus the date.now() */}
        </div>
    )
}

export default UserItem;