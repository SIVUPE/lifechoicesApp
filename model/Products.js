import { connection as db } from "../config/index.js";

class Products {
    fetchUsers(req, res) {
      const qry = `
          SELECT prodID,
           prodName,
          prodQuantity,
          prodAmount,
          userID,
          FROM Products;
          `;
      db.query(qry, (err, results) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          results,
        })
      })
    }
    fetchUser(req, res) {
        const qry = `
        SELECT prodID,
        prodName,
        prodQuantity,
        prodAmount,
        userID
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
      addProducts(req, res) {
        const qry = `
        INSERT INTO Products 
        SET ?;
        `
        db.query(qry,(err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            })
        })
      }

}
export{
    Products
}