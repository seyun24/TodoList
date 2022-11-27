// const jwtMiddleware = require("../../../config/jwtMiddleware");
// const boardProvider = require("../../app/Board/boardProvider");
// const boardService = require("../../app/Board/boardService");
// const baseResponse = require("../../../config/baseResponseStatus");
// const {response, errResponse} = require("../../../config/response");
//
// const regexEmail = require("regex-email");
// const {emit} = require("nodemon");
//
// /**
//  * API No. 0
//  * API Name : 테스트 API
//  * [GET] /app/test
//  */
// exports.getTest = async function (req, res) {
//     return res.send(response(baseResponse.SUCCESS))
// }
//
// exports.getTestProduct = async function (req, res) {
//
//     /**
//      * Path Variable: userId
//      */
//     const id = req.params.id;
//
//     const test = await boardProvider.getUserTest(id);
//     return res.send(response(baseResponse.SUCCESS, test));
// };