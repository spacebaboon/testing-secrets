export const UserTable = () => {

    const users = [
        { id: 1, name: 'Samuli', isAssassinRobot: false },
        { id: 2, name: 'Kimmo', isAssassinRobot: false },
        { id: 3, name: 'Tiina', isAssassinRobot: false },
        { id: 4, name: 'Roope', isAssassinRobot: false },
        { id: 5, name: 'Ville', isAssassinRobot: true },
        { id: 6, name: 'Ben', isAssassinRobot: false },
        { id: 7, name: 'Jan', isAssassinRobot: false },
        { id: 8, name: 'AP', isAssassinRobot: false },
        { id: 9, name: 'Ivan', isAssassinRobot: false },
    ]
    return (
        <>
            <h1>SpAcE InVaDeRs MeMbErS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Replaced by evil robot?</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.isAssassinRobot ? 'totally' : 'no'}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
};