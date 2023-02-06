// 모든 유저 조회
async function selectUser(connection) {
  const selectUserListQuery = `
                SELECT email, nickname 
                FROM UserInfo;
                `;
  const [userRows] = await connection.query(selectUserListQuery);
  return userRows;
}

// 이메일로 회원 조회
async function selectUserEmail(connection, email) {
  const selectUserEmailQuery = `
                SELECT email, nickname 
                FROM UserInfo 
                WHERE email = ?;
                `;
  const [emailRows] = await connection.query(selectUserEmailQuery, email);
  return emailRows;
}

// userId 회원 조회
async function selectUserId(connection, userId) {
  const selectUserIdQuery = `
                 SELECT id, email, nickname 
                 FROM UserInfo 
                 WHERE id = ?;
                 `;
  const [userRow] = await connection.query(selectUserIdQuery, userId);
  return userRow;
}

// 유저 생성
async function insertUserInfo(connection, insertUserInfoParams) {
  const insertUserInfoQuery = `
        INSERT INTO UserInfo(email, password, nickname)
        VALUES (?, ?, ?);
    `;
  const insertUserInfoRow = await connection.query(
    insertUserInfoQuery,
    insertUserInfoParams
  );

  return insertUserInfoRow;
}

// 패스워드 체크
async function selectUserPassword(connection, selectUserPasswordParams) {
  const selectUserPasswordQuery = `
        SELECT email, nickname, password
        FROM UserInfo 
        WHERE email = ? AND password = ?;`;
  const selectUserPasswordRow = await connection.query(
      selectUserPasswordQuery,
      selectUserPasswordParams
  );

  return selectUserPasswordRow;
}

// 유저 계정 상태 체크
async function selectUserAccount(connection, email) {
  const selectUserAccountQuery = `
        SELECT status, id
        FROM UserInfo 
        WHERE email = ?;`;
  const selectUserAccountRow = await connection.query(
      selectUserAccountQuery,
      email
  );
  return selectUserAccountRow[0];
}

async function updateUserInfo(connection, id, nickname) {
  const updateUserQuery = `
  UPDATE UserInfo 
  SET nickname = ?
  WHERE id = ?;`;
  const updateUserRow = await connection.query(updateUserQuery, [nickname, id]);
  return updateUserRow[0];
}


const insetTodo=async (connection,name )=>{
  const insetQuery= `
    insert into Todos(name) value(?)
    `;
  const insetTodoRow = await connection.query(insetQuery,name);
  return insetTodoRow;
}


const getTodoList=async (connection)=>{
  const getQuery='select id, name, status from Todos';
  const [todoRows]=await connection.query(getQuery);
  return todoRows;
}

const getTodo=async (connection, id)=>{

  return todoRows;
}

const updateTodo=async (connection,id)=>{
  const getQuery='select status from Todos where id=?';
  const [todoRows]=await connection.query(getQuery, id);
  const status = (todoRows[0].status ?  0 : 1);
  const updateUserQuery = `
  UPDATE Todos 
  SET status = ?
  WHERE id = ?`;
  const updateUserRow = await connection.query(updateUserQuery, [status, id]);
  return updateUserRow[0];
}

const deleteTodo=async (connection, id) =>{
  const deleteQuery='delete from Todos where id=?';
  const deleteTodoRow= await connection.query(deleteQuery,id);
  return deleteTodoRow[0];
}

module.exports = {
  getTodo,
  updateTodo,
  deleteTodo,
  getTodoList,
  insetTodo,
  selectUser,
  selectUserEmail,
  selectUserId,
  insertUserInfo,
  selectUserPassword,
  selectUserAccount,
  updateUserInfo,
};
