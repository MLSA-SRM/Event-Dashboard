const Transporter = require('../config/mailConfig');
var QRCode = require('qrcode');

const mailer = (data) => {
	for (let a in data) {
		let test = '';
		QRCode.toDataURL(data[a].regno, function(err, img) {
			// console.log(data[a].name);
			let mailDetails = {
				from: 'yoman@helo.in',
				to: data[a].email,
				subject: 'Test mail',
				attachDataUrls: true,
				html: `<span style='font-size: 2em;'>Hello</span><span style='color: #ec0101'>${data[a]
					.name}</span><p>Thank You for choosing to attend our event on something. I would be an absolute honour to have you with us. Looking forward to seeing you there. Below you can find detils of your involvement in the event.</p><br><pre><img src="${img}"></pre>`
			};
			(async () => {
				let info = await Transporter.sendMail(mailDetails);
				console.log('Message sent: %s', info.messageId);
			})();
		});
	}
};
module.exports = mailer;
