export namespace Validate {
  export const email = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  export const password = (password: string): boolean => {
    const regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
    return regex.test(password);
  };

  export const passwordCheck = (password: string, passwordCheck: string): boolean => {
    return password === passwordCheck;
  };

  export const nill = (param: any): boolean => {
    // if (typeof param === ``)
    if (typeof param === 'string') {
      return param === undefined || param === null || param.length === 0;
    }
    return false;
  };
}
