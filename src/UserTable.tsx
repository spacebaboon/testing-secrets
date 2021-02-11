export const UserTable = () => { 
    
    const users = [
        {id: 1, name: 'Mr A', isSuspicious: false },
        {id: 1, name: 'Mr B', isSuspicious: false },
        {id: 1, name: 'Mr C', isSuspicious: true },
        {id: 1, name: 'Mr D', isSuspicious: false },
    ]
    return (
    <>
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Suspcious?</td>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                <tr>
                    <td>{user.name}</td>    
                    <td>{user.isSuspicious ? 'totally' : 'no'}</td>    
                </tr>
                )}
            </tbody>
        </table>
    </>
)
};