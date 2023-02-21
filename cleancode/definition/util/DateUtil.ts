export default abstract class DateUtil {
  constructor() {}
  abstract isYYYY_MM_DD(date: string): Boolean;
  abstract toYYYY_MM_DD(): string;
}
