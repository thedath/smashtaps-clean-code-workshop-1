import { MealPreparation, MealSize, MealType } from "../../@types";
import Entity from "../../definition/entity/Entity";

export default class Meal extends Entity {
  private _date?: string | undefined;
  public get date(): string | undefined {
    return this._date;
  }
  public set date(value: string | undefined) {
    this._date = value;
  }

  private _sortKey?: string | undefined;
  public get sortKey(): string | undefined {
    return this._sortKey;
  }
  public set sortKey(value: string | undefined) {
    this._sortKey = value;
  }

  private _userName?: string | undefined;
  public get userName(): string | undefined {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
    this.updateSortKey();
  }

  private _type?: MealType | undefined;
  public get type(): MealType | undefined {
    return this._type;
  }
  public set type(value: MealType | undefined) {
    this._type = value;
    this.updateSortKey();
  }

  private _preparation?: MealPreparation | undefined;
  public get preparation(): MealPreparation | undefined {
    return this._preparation;
  }
  public set preparation(value: MealPreparation | undefined) {
    this._preparation = value;
  }

  private _size?: MealSize | undefined;
  public get size(): MealSize | undefined {
    return this._size;
  }
  public set size(value: MealSize | undefined) {
    this._size = value;
  }

  private _refNo?: number | undefined;
  public get refNo(): number | undefined {
    return this._refNo;
  }
  public set refNo(value: number | undefined) {
    this._refNo = value;
    this.updateSortKey();
  }

  private updateSortKey() {
    this._sortKey = `${this.userName!.replace(" ", "")}#${this.type}#${
      this.refNo
    }`;
  }

  toObject(): Object {
    return {
      date: this.date,
      sortKey: this.sortKey,
      userName: this.userName,
      type: this.type,
      preparation: this.preparation,
      size: this.size,
      refNo: this.refNo,
    };
  }
}
