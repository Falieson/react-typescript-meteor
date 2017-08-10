declare module "meteor/mdg:validated-method" {
  declare class ValidatedMethod<T> extends MeteorValidatedMethod.ValidatedMethod<T> { }

  declare module MeteorValidatedMethod {
    export class ValidatedMethod<T> {
      constructor(options: ValidatedMethodOptions<T>);
      call(options?: T, cb?: (err, res)=> void): void;
    }

    interface ValidatedMethodOptions<T> {
      name: string;
      mixins?: Function[];
      validate: any;
      applyOptions: any;
      run(opts: T);
    }
  }
}