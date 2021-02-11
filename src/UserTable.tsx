export const UserTable = () => { 
    
    const users = [
        {id: 1, name: 'Samuli', onAssassinationMission: false },
        {id: 2, name: 'Kimmo', onAssassinationMission: false },
        {id: 3, name: 'Tiina', onAssassinationMission: false },
        {id: 4, name: 'Roope', onAssassinationMission: false },
        {id: 5, name: 'Ville', onAssassinationMission: true },
        {id: 6, name: 'Ben', onAssassinationMission: false },
        {id: 7, name: 'Jan', onAssassinationMission: false },
        {id: 8, name: 'AP', onAssassinationMission: false },
        {id: 9, name: 'Ivan', onAssassinationMission: false },
    ]
    return (
    <>
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>On active mission?</td>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                <tr>
                    <td>{user.name}</td>    
                    <td>{user.onAssassinationMission ? 'totally' : 'no'}</td>    
                </tr>
                )}
            </tbody>
        </table>
    </>
)
};