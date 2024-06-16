import tw from "tailwind-styled-components";

const MenuTotal = tw.div`
  flex
  flex-row
  items-center
  justify-center
  w-full
  px-[30px]
  box-border

`;

const MenuContainer = tw.div`
  flex
  flex-row
  items-center
  h-[50px]
  p-0
  gap-[20px]
  max-w-[1280px]
  w-full

`;

const MenuItems = tw.ul`
  flex
  flex-row
  items-center
  h-[39px]
  p-0
  gap-[22px]
  rounded-[6px]
  whitespace-nowrap
  list-none
  m-0
`;

const MenuStick = tw.div`
flex
items-center
w-[1px]
h-[15px]
bg-[#ddd]
`;

const CategoryMenu = tw.ul`
  flex
  flex-row
  items-center
  h-[39px]
  p-0
  gap-[22px]
  rounded-[6px]
  whitespace-nowrap
  list-none
  m-0
`;

const Styledli = tw.li`
  flex
  items-center 
  h-[39px]
  not-italic
  font-bold
  text-[16px]
  leading-[19px]
  border-b-[2px]
  border-solid
  border-transparent
  hover:border-[#000]
  cursor-pointer
`;
const StyledCategoryli = tw.li`
  flex
  items-center 
  h-[39px]
  not-italic
  font-bold
  text-[16px]
  leading-[19px]
  border-b-[2px]
  border-solid
  border-transparent
  hover:border-[#000]
  cursor-pointer
  text-[#8e43e7]
  hover:border-[#8e43e7]

`;

const Menu = () => {
    return (
        <MenuTotal>
            <MenuContainer>
                <MenuItems>
                    <Styledli>뮤지컬</Styledli>
                    <Styledli>콘서트</Styledli>
                    <Styledli>스포츠</Styledli>
                    <Styledli>전시/행사</Styledli>
                    <Styledli>클래식/무용</Styledli>
                    <Styledli>아동/가족</Styledli>
                    <Styledli>연극</Styledli>
                    <Styledli>레저/캠핑</Styledli>
                    <Styledli>토핑</Styledli>
                    <Styledli>MD샵</Styledli>
                </MenuItems>
                <MenuStick></MenuStick>
                <CategoryMenu>
                    <StyledCategoryli>랭킹</StyledCategoryli>
                    <StyledCategoryli>오픈공지</StyledCategoryli>
                    <StyledCategoryli>지역별</StyledCategoryli>
                    <StyledCategoryli>공연장</StyledCategoryli>
                </CategoryMenu>
            </MenuContainer>
        </MenuTotal>
    );
};

export default Menu;
