declare module "minimatch" {
  interface IOptions {
    [key: string]: any;
  }

  interface IMinimatch {
    match(path: string): boolean;
    negate: boolean;
    set: string[][];
    options: IOptions;
    [key: string]: any;
  }

  function minimatch(path: string, pattern: string, options?: IOptions): boolean;

  namespace minimatch {
    export { IOptions, IMinimatch };
  }

  export = minimatch;
}
