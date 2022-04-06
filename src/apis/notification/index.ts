export namespace NotificationApi {
  export const get = {
    notifications: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([]);
        }, 500);
      });
    },
  };
}
