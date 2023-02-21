import DateUtil from "../../definition/util/DateUtil";

import { Moment } from "moment";

export default class MomentDateUtil implements DateUtil {
  private readonly moment: any;

  constructor() {
    this.moment = require("moment");
  }

  isYYYY_MM_DD(date: string): Boolean {
    const m: Moment = this.moment(date, "YYYY-MM-DD");
    return m.isValid();
  }

  toYYYY_MM_DD() {
    return (this.moment() as Moment).format("YYYY-MM-DD");
  }
}
