import type {User} from '../types'
import './UserItem.css'

function UserItem({props}:{props: User}){
    return (
        <div className='item-wrapper'>
             <img src={props.avatar.url} alt={props.avatar.title}/> 
            <h2>{props.first_name}{' '}{props.last_name}</h2>
            <p>{props.email}</p>
             
        </div>
    )
}

export default UserItem;