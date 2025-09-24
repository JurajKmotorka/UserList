import { useState } from "react"
import type {User} from "../types"
import UserItem from "./UserItem"
import { useQuery } from "@tanstack/react-query"

function UserList(){
    const {isLoading, error, data} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://fakerapi.it/api/v2/custom?_quantity=20&_locale=cs_CZ&uuid=uuid&first_name=firstName&last_name=lastName&email=email&avatar=image')
        .then(r => r.json())
        .then(r => r.data),
    })
    const [filterType, setFilterType] = useState<'first_name' | 'last_name' | 'email'>('first_name')
    const [filterValue, setFilterValue] = useState<string>('')
    
    const filteredData = data.filter((d:User) => d[filterType].toLowerCase().includes(filterValue))
    
    if(isLoading) return <span>Loading</span>
    if(error) return <span>error</span>

    function handleFilterType(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilterType(e.target.value as 'first_name' | 'last_name' | 'email')
    }
    function handleFilterValue(e: React.ChangeEvent<HTMLInputElement>) {
        setFilterValue(e.target.value.trim())
    }
    
    return (
        <>
            <div>
                <span>Fulter by</span>
                <select onChange={handleFilterType}>
                    <option value={'first_name'}>First Name</option>
                    <option value={'last_name'}>Last Name</option>
                    <option value={'email'}>Email</option>
                </select>
                <input onChange={handleFilterValue}/>
            </div>
            <div>{filteredData.map((u: User) => <UserItem key={u.uuid} props={u}/>)}</div>

        </>
        
    )
}
export default UserList;