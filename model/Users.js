import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT userID,
        firstName,
        lastName,
        userAge,
        gender,
        emailAdd,
        userRole
        FROM Users;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  //to fetch  for single user
  fetchUser(req, res) {
    const qry = `
    SELECT userID,
    firstName,
    lastName,
    userAge,
    gender,
    emailAdd,
    userRole
    FROM Users;
    WHERE userID = ${req.params.id};
    `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // payload
    let data = req.body;
    data.userPwd = await hash(data?.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
    };
    const qry = `
    INSERT INTO Users
    SET ?;
    `;
    db.query(qry, [data], (error) => {
      if (error) {
        res.json({
          status: res.statusCode,
          msg: "please use another email address",
        });
      } else {
        // create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "you/'re registered",
        });
      }
    });
  }
}
export { Users };