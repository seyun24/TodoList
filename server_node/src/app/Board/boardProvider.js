const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const boardDao = require("./boardDao");

exports.getUserTest = async function (id) {
    const connection = await pool.getConnection(async (conn) => conn);
    const testResult = await boardDao.testGet(connection, id);

    connection.release();

    return testResult[0];
};

