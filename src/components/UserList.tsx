import { useQuery } from "@tanstack/react-query"
function UserList(){
    const {isLoading, error, data} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://fakerapi.it/api/v2/custom?_quantity=20&_locale=cs_CZ&uuid=uuid&first_name=firstName&last_name=lastName&email=email&avatar=image')
        .then(r => r.json())
        .then(r => r.data),
    })
    if(isLoading) return <span>Loading</span>
    if(error) return <span>error</span>
    
    return (
        <div>{data.map(u => <div key={u.uuid}>{u.first_name}</div>)}</div>
        
    )
}
export default UserList;