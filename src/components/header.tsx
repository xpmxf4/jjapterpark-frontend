"use client";

import { getLogo } from "@/utils/asset";
import tw from "tailwind-styled-components";
import Search from "./search";
import { useState } from "react";
import Menu from "./menu";

const HeaderTotalContainer = tw.div`
  flex
  flex-col
  items-center
  justify-start
  w-full
  relative
  text-left
  border-b-[1px]
  border-solid
  border-[rgba(0,0,0,.08]
`;

const HeaderContainer = tw.div`
  px-[30px]  
  w-[100%]
  h-[100px]
  box-border
  flex
  justify-center
  flex-row
  items-center
 
`;

const HeaderWrapper = tw.div`
  flex
  flex-row
  items-center
  justify-between
  max-w-[1280px]
  w-full
  h-[50px]
`;

const HeaderLogo = tw.img`
  w-[200px]

`;

const HeaderSearch = tw.div`
  flex
  flex-row
  items-center
  gap-[20px]
  h-[50px]
  p-0
  w-full
`;

const HeaderLoginMenu = tw.div`
  flex
  flex-row
  justify-end
  items-center
  gap-[20px]
  w-full
  p-0
  max-w-[312px]
  h-[18px]
  rounded-[6px]
  text-nowrap
  flex-1
 
`;

const LoginMenuText = tw.div`
  cursor-pointer
  font-normal
  text-[15px]
  text-[#111]
  leading-[18px]
`;

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <HeaderTotalContainer>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderSearch>
                        <HeaderLogo src={getLogo("jjapterpark-logo.svg")} />
                        <Search />
                    </HeaderSearch>
                    <HeaderLoginMenu>
                        {isLogin ? <LoginMenuText onClick={() => setIsLogin(false)}>로그아웃</LoginMenuText> : <LoginMenuText onClick={() => setIsLogin(true)}>로그인</LoginMenuText>}
                        <LoginMenuText>회원가입</LoginMenuText>
                        <LoginMenuText>마이페이지</LoginMenuText>
                    </HeaderLoginMenu>
                </HeaderWrapper>
            </HeaderContainer>
            <Menu />
        </HeaderTotalContainer>
    );
};

export default Header;
