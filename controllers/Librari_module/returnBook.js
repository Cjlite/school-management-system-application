const returned = require("../../models/Librari_module/returnBook");
const issue = require("../../models/Librari_module/issueBook");


const addReturned = async (req, res) => {
  try {
    console.log(req.body);
    const data = new returned({
      isbn: req.body.isbn,
      libraryid: req.body.libraryid,
      issueddate: req.body.issueddate,
      returndate: req.body.returndate,
    });
    const result = await data.save();
    if (result) {
      const deleteIssue = await issue.deleteOne({ isbn: data.isbn })
      if (deleteIssue) {
        res.send({ msg: "Book Returned" });
      }
    } else {
      res.send({ error: "Book not Returned" });
    }
  } catch (error) {
    res.send({ error: "Something Went Wrong" });
  }
};

module.exports = { addReturned };
