const fs = require('fs');

const helpFunction = (id, status, users) => {
    const userFilter = users.filter((user) => user.id !== parseInt(id));

    let userStatus= [];
    users.forEach((user) => {
        if (user.id === parseInt(id)) {
            userStatus = [...userFilter,
                { id: user.id, user: user.user, IsActive: status }
            ];
        }        
    });
    

    fs.writeFileSync('./data/users.json', JSON.stringify(userStatus.sort(
        (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
    );

    return userStatus
}

module.exports = helpFunction;
