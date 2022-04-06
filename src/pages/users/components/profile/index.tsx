import { CameraFilled, EditFilled, EditOutlined, StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { selectUser } from 'src/features/user/user.slice';
import { ProfileStyles } from './styles';

const rating = 3;
const open = 3;
const visit = 10000;
const sell = 30321;
const ship = 2112;
const info = '안녕하세요 ~ ';

function Profile() {
  const { name, id } = useSelector(selectUser);
  const params = useParams();

  return (
    <ProfileStyles.Wrapper>
      <ProfileStyles.ImageContainer>
        <ProfileStyles.ImageWrapper me={`${id}` === params.id}>
          <ProfileStyles.Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbD0iI0ZBRkFGQSIgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIi8+CiAgICAgICAgPHBhdGggZD0iTTM2LjIxNiA0MS42ODNjLjI0OC0xLjkzMS40OTgtMy44NjIuNzUtNS43OTRoNi43OWwtLjI4MyA1LjUzN2MwIC4wMTcuMDA3LjAzNC4wMDcuMDUxLS4wMDIuMDEtLjAwMi4wMi0uMDAyLjAzLS4wOTggMS44NzYtMS44OTcgMy4zOTItNC4wMzUgMy4zOTItMS4wNjYgMC0yLjAxOC0uMzktMi42MTUtMS4wNzItLjUxLS41ODUtLjcyMi0xLjMyNS0uNjEyLTIuMTQ0em04Ljg4OCA0LjA3OGMxLjIyNCAxLjI4OSAzLjAwOSAyLjAyOCA0Ljg5IDIuMDI4IDEuODkgMCAzLjY3NC0uNzQgNC45LTIuMDMzLjEwNy0uMTEyLjIwNy0uMjI4LjMwNC0uMzQ1IDEuMjggMS40NDcgMy4yMTcgMi4zNzggNS4zNSAyLjM3OC4xMTIgMCAuMjE2LS4wMjcuMzI4LS4wMzJWNjMuNkgzOS4xMTVWNDcuNzU3Yy4xMTIuMDA1LjIxNS4wMzIuMzI4LjAzMiAyLjEzMyAwIDQuMDcxLS45MzEgNS4zNTEtMi4zOC4wOTkuMTIxLjIuMjM4LjMxLjM1MnptMS41NDUtOS44NzJoNi42OThsLjI4MiA1LjYxOWMwIC4wMTUtLjAwNy4wMjctLjAwNy4wNGwuMDA0LjA4NmEyLjkzOSAyLjkzOSAwIDAgMS0uODI2IDIuMTMyYy0xLjM2NyAxLjQ0LTQuMjMzIDEuNDQxLTUuNjA0LjAwM2EyLjk1IDIuOTUgMCAwIDEtLjgzLTIuMTQybC4wMDQtLjA3OGMwLS4wMTYtLjAwOC0uMDMtLjAwOC0uMDQ4bC4yODctNS42MTJ6bTE2LjM3NiAwYy4yNTIgMS45MzMuNTAyIDMuODY1Ljc1MyA1LjgwNC4xMDkuODEtLjEwNCAxLjU0Ny0uNjE0IDIuMTMyLS41OTYuNjgzLTEuNTUgMS4wNzQtMi42MTYgMS4wNzQtMi4xMzcgMC0zLjkzMi0xLjUxNC00LjAzNC0zLjM4OGEuMzU5LjM1OSAwIDAgMC0uMDAzLS4wNDRjMC0uMDE1LjAwNi0uMDI3LjAwNi0uMDRsLS4yNzgtNS41MzhoNi43ODZ6TTM2LjIyNiA0Ni45NDZ2MTguMDk4YzAgLjc5OC42NDYgMS40NDUgMS40NDQgMS40NDVoMjQuNjVjLjc5OSAwIDEuNDQ1LS42NDcgMS40NDUtMS40NDVWNDYuOTQ2Yy41OS0uMzI4IDEuMTM3LS43MTkgMS41NzUtMS4yMiAxLjA2MS0xLjIxNCAxLjUyMi0yLjc4NSAxLjMwMS00LjQxLS4zLTIuMzU1LS42MDctNC43MDctLjkxOC03LjA2YTEuNDQzIDEuNDQzIDAgMCAwLTEuNDMxLTEuMjU3SDM1LjY5OWMtLjcyNCAwLTEuMzM4LjUzOC0xLjQzMSAxLjI1Ny0uMzExIDIuMzU0LS42MTcgNC43MDctLjkxNiA3LjA1LS4yMjEgMS42MzcuMjQgMy4yMDggMS4zIDQuNDIxLjQzOS41MDIuOTg0Ljg5MyAxLjU3NCAxLjIyeiIgZmlsbD0iI0NDQyIvPgogICAgPC9nPgo8L3N2Zz4K" />
          {`${id}` === params.id && <ProfileStyles.ImageEdit />}
        </ProfileStyles.ImageWrapper>
        <ProfileStyles.Account me={`${id}` === params.id}>
          {name} {`${id}` === params.id && <EditOutlined style={{ fontSize: 14 }} />}
        </ProfileStyles.Account>
        <ProfileStyles.Rating>
          {Array.from(Array(rating), (_, index) => (
            <StarTwoTone key={index} twoToneColor="red" style={{ fontSize: 14 }} />
          ))}
        </ProfileStyles.Rating>
        <ProfileStyles.DetailContainer>
          <ProfileStyles.Detail>
            <div>오픈일</div>
            <span>{open}일전</span>
          </ProfileStyles.Detail>
          <ProfileStyles.Detail>
            <div>방문수</div>
            <span>{visit}명</span>
          </ProfileStyles.Detail>
          <ProfileStyles.Detail>
            <div>판매수</div>
            <span>{sell}회</span>
          </ProfileStyles.Detail>
          <ProfileStyles.Detail>
            <div>택배 발송</div>
            <span>{ship}회</span>
          </ProfileStyles.Detail>
        </ProfileStyles.DetailContainer>
        <ProfileStyles.StyledLink to={RoutesUrl.MYPAGE}>내 상점 관리</ProfileStyles.StyledLink>
      </ProfileStyles.ImageContainer>
      <ProfileStyles.InfoContainer>
        <ProfileStyles.InfoEditButton me={`${id}` === params.id}>
          상점 소개 {`${id}` === params.id && <EditOutlined />}
        </ProfileStyles.InfoEditButton>
        <div>{info}</div>
      </ProfileStyles.InfoContainer>
    </ProfileStyles.Wrapper>
  );
}

export default Profile;
