export default abstract class UseCase {
  abstract execute(command: string, ...args: string[]): void;
}
