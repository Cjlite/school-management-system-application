const express = require('express');
const router = express.Router();

const user = require("../controllers/Librari_module/addUser");
const book = require('../controllers/Librari_module/addBook')
const student = require('../controllers/Librari_module/addStudent')
const issue = require("../controllers/Librari_module/issueBook")
const returned = require("../controllers/Librari_module/returnBook")

router.get("/adduser", user.adduser);
router.post("/addmoreuser", user.addMoreuser);
router.post("/login", user.login);
router.post("/addbook", book.addBook);
router.post("/addstudent", student.addStudent);
router.get("/getprevios/:editId", student.getPrevious);
router.put("/updatestudent/:editId", student.updateStudent);
router.get("/deletestudent/:id", student.deleteStudent);
router.get("/getstudent", student.getStudent);
router.get("/getbook", book.getBook);
router.post("/addissue", issue.addIssue);
router.get("/getissue/:id", issue.getIssue);
router.get("/getissueall", issue.getIssueAll);
router.post("/addreturned", returned.addReturned);

module.exports = router;
