import { IGetProductsResponseBody } from './types';

export namespace ProductsApi {
  export const get = {
    products: () => {
      return new Promise<IGetProductsResponseBody[]>((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: 0,
              image:
                'https://www.soriaudio.com/files/attach/images/203/043/912/052/1cc15e3938920e1cfc0819ef49c7ed1f.JPG',
              title: '본조비 정규 2집',
              price: 50000000,
              updatedAt: 3000,
            },
            {
              id: 1,
              image:
                'https://img.discogs.com/dkeN32foQ0oHYH2SjJFsAdBqDyc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2210412-1270036580.jpeg.jpg',
              title: '너바나 네버마인드',
              price: 10008900,
              updatedAt: 3000,
            },
            {
              id: 2,
              image: 'http://m.drgroove.co.kr/web/product/big/20200107/057464b61f5a3cbcb7a09b5e891e1845.jpg',
              title: '비틀즈 Anney Road',
              price: 2132000,
              updatedAt: 3000,
            },
            {
              id: 3,
              image:
                'https://www.soriaudio.com/files/attach/images/203/043/912/052/1cc15e3938920e1cfc0819ef49c7ed1f.JPG',
              title: '본조비 정규 2집',
              price: 50000000,
              updatedAt: 3000,
            },
            {
              id: 4,
              image:
                'https://img.discogs.com/dkeN32foQ0oHYH2SjJFsAdBqDyc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2210412-1270036580.jpeg.jpg',
              title: '너바나 네버마인드',
              price: 10008900,
              updatedAt: 3000,
            },
            {
              id: 5,
              image: 'http://m.drgroove.co.kr/web/product/big/20200107/057464b61f5a3cbcb7a09b5e891e1845.jpg',
              title: '비틀즈 Anney Road',
              price: 2132000,
              updatedAt: 3000,
            },
            {
              id: 6,
              image:
                'https://www.soriaudio.com/files/attach/images/203/043/912/052/1cc15e3938920e1cfc0819ef49c7ed1f.JPG',
              title: '본조비 정규 2집',
              price: 50000000,
              updatedAt: 3000,
            },
            {
              id: 7,
              image:
                'https://img.discogs.com/dkeN32foQ0oHYH2SjJFsAdBqDyc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2210412-1270036580.jpeg.jpg',
              title: '너바나 네버마인드',
              price: 10008900,
              updatedAt: 3000,
            },
            {
              id: 8,
              image: 'http://m.drgroove.co.kr/web/product/big/20200107/057464b61f5a3cbcb7a09b5e891e1845.jpg',
              title: '비틀즈 Anney Road',
              price: 2132000,
              updatedAt: 3000,
            },
          ]);
        }, 1500);
      });
    },
  };
}
