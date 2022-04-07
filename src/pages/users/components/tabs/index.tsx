import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CommentsApi } from 'src/apis/comments';
import { ProductsApi } from 'src/apis/products';
import { RoutesUrl } from 'src/constants/routesUrl';
import { TabsStyles } from './styles';

function Tabs() {
  const params = useParams<{ activity: string; id: string }>();
  const { data: products } = useQuery('/products', () => ProductsApi.get.products());
  const { data: comments } = useQuery('/comments', () => CommentsApi.get.comments());

  return (
    <TabsStyles.Wrapper>
      <TabsStyles.Links>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.PRODUCTS}`}
        >
          상품 &nbsp; {products?.length}
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.COMMENTS}`}
        >
          상점문의 &nbsp; {comments?.length}
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.LIKES}`}
        >
          찜
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.REVIEWS}`}
        >
          상점후기
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.FOLLOWINGS}`}
        >
          팔로잉
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.FOLLOWERS}`}
        >
          팔로워
        </TabsStyles.ActiveLink>
      </TabsStyles.Links>
    </TabsStyles.Wrapper>
  );
}

export default Tabs;
