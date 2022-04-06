import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ProductsApi } from 'src/apis/products';
import { RoutesUrl } from 'src/constants/routesUrl';
import { TabsStyles } from './styles';

function Tabs() {
  const params = useParams<{ activity: string; id: string }>();
  const { data: products } = useQuery('/products', () => ProductsApi.get.products());

  return (
    <TabsStyles.Wrapper>
      <TabsStyles.Links>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.PRODUCTS}`}
        >
          상품 <span>{products?.length}</span>
        </TabsStyles.ActiveLink>
        <TabsStyles.ActiveLink
          className={(nav) => (nav.isActive ? 'active' : '')}
          to={`${RoutesUrl.USERS}/${params.id}${RoutesUrl.COMMENTS}`}
        >
          상점문의
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
