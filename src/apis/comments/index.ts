import { GetCommentsResponseBody } from './types';

export namespace CommentsApi {
  export const get = {
    comments: () => {
      return new Promise<GetCommentsResponseBody>((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: 0,
              comment: '안녕하세요~',
              nickname: 'chanuk',
              profileImage: 'https://avatars.githubusercontent.com/u/70367265?s=400&v=4',
              reply: [],
            },
            {
              id: 1,
              comment:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda vel similique nihil! Natus qui reprehenderit illum animi? Similique mollitia sint et libero dolor, eos nisi quasi excepturi voluptas nemo.',
              nickname: 'gosu',
              profileImage: 'https://avatars.githubusercontent.com/u/70367265?s=400&v=4',
              reply: [],
            },
            {
              id: 2,
              comment:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda vel similique nihil! Natus qui reprehenderit illum animi? Similique mollitia sint et libero dolor, eos nisi quasi excepturi voluptas nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda vel similique nihil! Natus qui reprehenderit illum animi? Similique mollitia sint et libero dolor, eos nisi quasi excepturi voluptas nemo.',
              nickname: 'seaea',
              profileImage: 'https://avatars.githubusercontent.com/u/70367265?s=400&v=4',
              reply: [],
            },
            {
              id: 3,
              comment: 'hi',
              nickname: 'ccf',
              profileImage: 'https://avatars.githubusercontent.com/u/70367265?s=400&v=4',
              reply: [],
            },
          ]);
        }, 500);
      });
    },
  };
}
