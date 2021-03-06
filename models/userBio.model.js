module.exports = (sequelize, Sequelize) => {
    const UserBio = sequelize.define("userbio",{
        email: {
            type: Sequelize.STRING
        },
        password:  {
            type: Sequelize.STRING
        },
        accountActivated: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return UserBio;
};