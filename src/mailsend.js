import nodemailer from "nodemailer/lib/nodemailer"

let email = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anastasiya.shtunder@gmail.com",
        pass: "101bimepe101"
    }
});
let mailOptions = {
    from: "anastasiya.shtunder@gmail.com",
    to: "anastasiya.shtunder+1@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
};

send = email.sendMail(mailOptions);
export default class send {

}