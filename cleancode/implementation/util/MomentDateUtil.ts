import DateUtil from "../../definition/util/DateUtil";
import * as moment from "moment";
// const moment = require("moment");

export default class MomentDateUtil implements DateUtil {
  private readonly m: typeof moment;

  constructor() {
    this.m = moment;
  }

  isYYYY_MM_DD(date: string): Boolean {
    return this.m(date, "YYYY-MM-DD").isValid();
  }
}
