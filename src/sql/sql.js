module.exports={
    insert:'INSERT INTO userlist(userId,email,password) VALUES(?,?,?)',
    update:'UPDATE userlist SET email=?,password=? WHERE userId=?',
    delete: 'DELETE FROM userlist WHERE userId=?',
    queryById: 'SELECT * FROM userlist WHERE userId=?',
    queryAll: 'SELECT * FROM userlist'
}