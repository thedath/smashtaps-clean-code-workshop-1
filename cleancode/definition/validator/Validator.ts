export type ValidatorResponse = {
  property: string;
  reason: string;
  data?: any;
}[];

export default abstract class Validator {
  constructor() {}
  abstract validate(...keys: string[]): ValidatorResponse;
}
