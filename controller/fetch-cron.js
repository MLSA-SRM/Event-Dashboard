const axios = require("axios").default;
const cron = require("node-cron");

const { allEvent, singleFormData } = require("../controller/db");

const fetch = async () => {
  let data = await allEvent();
  cron.schedule("*/5 * * * *", () => {
    // TODO date hardcoded
    // console.log(data);
    data.forEach((item) => {
      axios
        .get(item)
        .then((res) => {
          res.data.forEach((result) => {
            //   console.log(result);
            let date = new Date();
            result.people.forEach((res) => {
              let earlyDate = date.setMinutes(date.getMinutes() + 10);
              let partDate = new Date(res.time).getTime();
              // console.log(partDate);
              let lateDate = date.setMinutes(date.getMinutes() - 11);
              console.log(earlyDate, partDate, lateDate);
              if (earlyDate > partDate && partDate > lateDate) {
                let finalData = {
                  eventName: result.eventName,
                  res,
                };
                //   console.log(finalData);
                singleFormData(finalData);
              }
            });
          });
        })
        .catch((err) => console.log(err));
    });
  });
};
module.exports = fetch;
