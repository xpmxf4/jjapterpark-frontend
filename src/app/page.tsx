"use client";

import { getImage } from "@/utils/asset";
import tw from "tailwind-styled-components";
import Calander from "@/components/calander";
import { useEffect, useState } from "react";

const Contents = tw.div`
    container
    w-[1280px]
    mx-auto
`;

const ProductWrapper = tw.div`
    relative
    flex
    justify-between
`;

const ProductMain = tw.div`
    w-[830px]
    mt-[20px]
    mb-[98px]
    ml-[20px]
`;

const ProductSide = tw.div`
    relative
    w-[370px]
    mt-[40px]
    pb-[10px]
`;

const ProductMainTop = tw.div`
`;

const Summary = tw.div`
    relative
    pb-[65px]
   
`;

const SummaryTop = tw.div`
    mt-[4px]
    mb-[24px]
`;

const PrdTitle = tw.h2`
    line-clamp-2
    text-ellipsis
    text-[#222]
    text-[26px]
    not-italic
    font-bold
`;

const Tag = tw.div`
    inline-block
    mb-[9px]
    w-full
    text-[#666]
    
`;

const TagList = tw.div`
    inline-block
    mr-[11px]
    align-middle
`;

const TagItem = tw.div`
    first:ml-0
    ml-[6px]
    inline-block
`;

const TagButton = tw.div`
    cursor-pointer
    inline-block
    min-w-[67px]
    h-[24px]
    py-0
    px-[6px]
    text-[12px]
    leading-[22px]
    align-middle
    border-[1px]
    border-solid
    border-[#ddd]
    rounded-[4px]
    box-border
    bg-[right_8px_top_50%]
    font-bold
     after:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_tagarrow_new2.png')]
    after:bg-no-repeat
    after:relative
    after:left-[2px]
    after:inline-block
    after:w-[9px]
    after:h-[9px]
    after:content-['']
    after:bg-contain
`;

const IsAccentTagBtn = tw(TagButton)`
    font-bold
    border-[#ffe4d5]
    text-[#ff7262]
    after:bg-[url('http://openimage.interpark.com/ticket-desktop/pages/product/icon_tagarrow_new.png')]
    after:bg-no-repeat
    after:relative
    after:left-[2px]
    after:inline-block
    after:w-[9px]
    after:h-[9px]
    after:content-['']
    after:bg-contain
`;

const PrdSection = tw.div`
    flex
    flex-row
    items-center
    mt-[12px]
    text-[#666]
`;

const TagText = tw.div`
    inline-block
    text-[14px]
    align-middle
`;

const SummaryBody = tw.div`

`;

const PosterBox = tw.div`
    inline-block
    w-[300px]
`;

const PosterBoxTop = tw.div`
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/noImage_logo.png')]
    bg-no-repeat
    bg-[#f0f0f0]
    bg-[50% 50%]
    relative
    h-[400px]

`;

const PosterImg = tw.img`
    block
    w-full
    h-full
    border-[1px]
    border-solid
    border-[#dadee3]
    box-border
`;

const PosterBoxBottom = tw.div`
    mt-[12px]
`;

const PrdCast = tw.div`
    float-left
    mt-[2px]
    
`;

const Share = tw.div`
    float-right
`;

const PrdCastWrap = tw.div`
    inline-block
`;

const PrdCastNum = tw.p`
    inline-block
    ml-[5px]
    text-[14px]
    font-bold
`;

const PrdCastBtn = tw.a`
    relative
    inline-block
    text-[14px]
    font-inherit
    leading-[24px]
    outline-none
    cursor-pointer
    before:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_heart.png')]
    before:bg-no-repeat
    before:relative
    before:inline-block
    before:top-[2px]
    before:w-[20px]
    before:h-[15px]
    before:pr-[6px]
    before:content-[' ']
    before:bg-[top_bottom_left_right_0px]
`;

const ShareList = tw.ul`
    
`;

const ShareItem = tw.li`
    first:ml-0
`;

const ShareFacebookItem = tw(ShareItem)`
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_sns.png')]
    bg-no-repeat
    inline-block
    w-[27px]
    h-[27px]
    rounded-[50%]
    bg-[#999]
`;
const ShareTwitterItem = tw(ShareItem)`
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_sns.png')]
    bg-no-repeat
    inline-block
    w-[27px]
    h-[27px]
    rounded-[50%]
    bg-[#999]
    ml-[9px]
    bg-[bottom]
`;

const Info = tw.ul`
    inline-block
    w-[505px]
    mt-[4px]
    ml-[25px]
    align-top
`;

const InfoItem = tw.li`
    mt-[15px]
    pl-[25px]
`;

const InfoLabel = tw.div`
    inline-block
    w-[90px]
    pr-[5px]
    text-[#000]
    text-[16px]
    font-normal
    leading-[160%]
    align-top
    border-box
`;

const InfoDesc = tw.div`
    inline-block
    max-w-[390px]
    align-top
`;

const InfoText = tw.p`
    relative
    max-w-[415px]
    text-[#000]
    text-[16px]
    leading-[160%]
    break-keep
    text-[14px]

`;

const InfoShipping = tw(InfoText)`
    text-[#666]
`;

const InfoPrice = tw(InfoItem)`

`;

const InfoPriceList = tw.ul`
    mb-[8px]
`;

const InfoPriceItem = tw.li`
    first:mt-0
    flex
    gap-[7px]
    mt-[13px]
    text-[#000]
    leading-[20px]
`;

const IsLargePrice = tw(InfoPriceItem)`
    mb-[15px]
    font-bold
`;

const ItemName = tw.span`
    overflow-hidden
    text-ellipsis
    whitespace-nowrap
    min-w-[30px]
    max-w-[300px]
    text-[#666]
    align-top
    inline-block
    text-[14px]
    break-keep
`;

const ItemPrice = tw.span`
    align-top
    font-bold
    inline-block
    text-[14px]
    break-keep
`;

const InfoBenefitGuide = tw.div`
    inline-block
    mr-[2px]
`;

const InfoBenefitList = tw.div`
    mt-[10px]
    mb-[5px]
`;

const InfoLink = tw.div`
    relative
    block
    text-[14px]
    leading-[150%]
    text-[#666]
    pr-[6px]
    align-top
    after:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_smallArrow.png')]
    after:content-['']
    after:bg-no-repeat
    after:inline-block
    after:w-[4px]
    after:h-[7px]
    after:mt-[-3px]
    after:ml-[4px]
    after:align-middle
    last:mt-[12px]
`;

const InfoLink2 = tw(InfoLink)`
    inline-block !important;
`;

const LogoNolPoint = tw.span`
    bg-[url('https://openimage.interpark.com/ticket-mobile/pages/product/log_nol.png')]
    bg-no-repeat
    w-[32px]
    h-[20px]
    bg-contain
    pr-[40px]
`;

const LogoToping = tw.span`
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/logo_toping_new.png')]
    bg-no-repeat
    w-[42px]
    h-[13px]
    mt-[3px]
    bg-contain
    pr-[60px]

`;

const InfoPromo = tw(InfoItem)`

`;

const InfoPromoLink = tw.span`
    inline-block
     after:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_smallArrow.png')]
    after:content-['']
    after:bg-no-repeat
    after:inline-block
    after:w-[4px]
    after:h-[7px]
    after:mt-[-3px]
    after:ml-[4px]
    after:align-middle
    last:mt-[12px]

`;

const InfoWarn = tw.span`
    relative
    top-[-4px]
    text-[14px]
    leading-[30px]
    break-keep
`;

const InfoRelated = tw(InfoItem)`

    mt-[30px]
    pt-[20px]
    px-[25px]
    pb-[22px]
    bg-[#f4f6f9]
    rounded-[6px]
`;

const InfoRelatedItem = tw.div`
    block;
`;

const InfoRelatedItem2 = tw.div`
    mt-[10px]
`;

const InfoRelatedName = tw.span`
    overflow-hidden
    text-ellipsis
    whitespace-nowrap
    text-[14px]
    leading-[185%]
    text-[#000]

`;

const InfoRelatedDate = tw.span`
    block
    text-[12px]
    text-[#666]
`;

const InfoRelatedMore = tw.div`
    inline-block
    mt-[8px]
    p-[5px 5px 0px 0px]
    leading-[120%]
    text-[14px]
    text-[#666]
    bg-[right_8px_top_50%]">
    after:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_tagArrow.png')]
    after:content-['']
    after:bg-no-repeat
    after:inline-block
    after:relative
    after:w-[7px]
    after:h-[5px]
    after:top-[-3px]
    after:left-[3px]
    after:align-middle
    after:bg-[left_0px_top_-5px]
`;

const StickyWrap = tw.div`
    sticky
    top-[10px]
    w-[340px]
    h-auto
    m-[10px 0 0 20px]
    z-[5]

`;

const SideMain = tw.div`
    w-[330px]
    my-0
    mx-auto
    border-[1px]
    border-[#b6bdc7]
    rounded-[15px]

`;

const ContainerTop = tw.div`
    rounded-t-[0px]
    pt-[5px]
    relative
    pb-[14px]
    box-border
`;

const SideHeader = tw.div`
    px-[20px]
    pt-[15px]
    pb-[0]
    box-border
`;

const SideToggleButton = tw.div`
    after:bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_sideToggle.png')]
    after:content-['']
    after:bg-no-repeat
    after:absolute
    after:top-[25px]
    after:right-[20px]
    after:w-[16px]
    after:h-[9px]

`;

const SideTitle = tw.h4`
    text-[14px]
    font-bold
    select-none
`;

const ToggleCalendar = tw.div`1
    p-[2px]
    max-h-[330px]
    transition-all
    
`;

const Date = tw.div`
    text-[16px]
    font-bold
    text-[#000]
`;

const ContainerMiddle = tw.div`
    pb-[20px]
    relative
    box-border
    border-t-[1px]
    border-t-[#dadee3]
`;

const SideContent = tw.div`
    px-[20px]
    py-0
`;
const SideTimeTable = tw.div`
    max-h-[170px]
    mt-[8px]
`;

const TimeTableList = tw.ul`
    table
    align-middle
    text-center
`;

const TimeTableItem = tw.li`
    relative
    table-cell
    w-[146px]
`;

const TimeTableLabel = tw.div`
    cursor-pointer
    font-bold
    rounded-[6px]
    text-[#8e43e7]
    border-[#8e43e7]
    box-border
    border-[1px]
    relative
    block
    w-full
    h-[45px]
    text-[14px]
    leading-[43px]
    
`;

const SideSeatTable = tw.div`
    mt-[11px]
`;

const SeatTableList = tw.ul`

`;

const SeatTableItem = tw.li`
    inline-block
    after:inline
    after:my-0
    after:mx-[4px]
    after:text-[12px]
    after:content-['/']
    after:text-[#ccc]
   
`;
const LastTableItem = tw.li`
    inline-block
`;

const SeatTableName = tw.strong`
    text-[12px]
    leading-[160%]
    font-normal
`;
const SeatTableStatus = tw.span`
    text-[12px]
    leading-[160%]
    font-bold
    ml-[4px]
`;
const SoldOut = tw(SeatTableStatus)`
    text-[#ccc]
`;

const SideBtnWrap = tw.div`
    mt-[20px]
`;

const SideBtnPrimary = tw.div`
    cursor-pointer
    text-[18px]
    table
    w-full
    min-h-[54px]
    px-[10px]
    py-0
    font-bold
    text-[#fff]
    bg-[#8e43e7]
    border-[1px]
    border-[#8e43e7]
    rounded-[10px]
    text-center
    box-border
   
`;

const SideBtnForeign = tw.div`
    cursor-pointer
    mt-[10px]
    h-[52px]
    leading-[52px]
    box-border
    text-center
    table
    w-full

     border-[1px]
    border-[#8e43e7]
    rounded-[10px]
    text-[#8e43e7]
    text-[14px]
    bg-[#fff]
    font-bold
`;

const SideBtnSpan = tw.span`
    table-cell
    align-middle
    text-center
    leading-[120%]
    h-full
`;

const SideBtnLinkIsNolpoint = tw.div`
    cursor-pointer
    block
    mb-[10px]
    w-full
    min-h-[16px]
    text-[14px]
    text-right
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_smallArrow.png')]
    bg-no-repeat
    text-[#666]
    mt-[18px]
    pr-[15px]
    bg-[center_right_6px]
    box-border
    leading-[16px]
    align-middle
`;
const SideBtnLinkIsPlaydb = tw.div`
cursor-pointer
    block
    mb-[10px]
    w-full
    min-h-[16px]
    text-[14px]
    text-right
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/icon_smallArrow.png')]
    bg-no-repeat
    text-[#666]
    mt-[18px]
    pr-[15px]
    bg-[center_right_6px]
    box-border
    leading-[16px]
    align-middle
`;

const LogoPlaydb = tw.div`
    inline-block
    align-middle
    w-[56px]
    h-[15px]
    ml-[5px]
    bg-[url('https://openimage.interpark.com/ticket-desktop/pages/product/logo_playdb.png')]
    bg-[top_0_left_0]
    bg-no-repeat


`;

export default function Home() {
    const [openCalendar, setOpenCalendar] = useState(true);

    return (
        <Contents>
            <ProductWrapper>
                <ProductMain>
                    <ProductMainTop>
                        <Summary>
                            <SummaryTop>
                                <Tag>
                                    <TagList>
                                        <TagItem>
                                            <IsAccentTagBtn>단독판매</IsAccentTagBtn>
                                        </TagItem>
                                        <TagItem>
                                            <TagButton>안심예매</TagButton>
                                        </TagItem>
                                    </TagList>
                                </Tag>
                                <PrdTitle>싸이흠뻑쇼 SUMMERSWAG2024 - 과천</PrdTitle>
                                <PrdSection>
                                    <TagText>
                                        <span>콘서트</span>
                                        <span>주간 4위</span>
                                    </TagText>
                                </PrdSection>
                            </SummaryTop>
                            <SummaryBody>
                                <PosterBox>
                                    <PosterBoxTop>
                                        <PosterImg src="https://ticketimage.interpark.com/Play/image/large/24/24007166_p.gif" />
                                    </PosterBoxTop>
                                    <PosterBoxBottom>
                                        <PrdCast>
                                            <PrdCastWrap>
                                                <PrdCastBtn>티켓캐스트</PrdCastBtn>
                                            </PrdCastWrap>
                                            <PrdCastNum>3134</PrdCastNum>
                                        </PrdCast>
                                        <Share>
                                            <ShareList>
                                                <ShareFacebookItem></ShareFacebookItem>
                                                <ShareTwitterItem></ShareTwitterItem>
                                            </ShareList>
                                        </Share>
                                    </PosterBoxBottom>
                                </PosterBox>
                                <Info>
                                    <InfoItem>
                                        <InfoLabel>장소</InfoLabel>
                                        <InfoDesc>
                                            <InfoText>서울대공원 주차광장</InfoText>
                                        </InfoDesc>
                                    </InfoItem>
                                    <InfoItem>
                                        <InfoLabel>공연기간</InfoLabel>
                                        <InfoDesc>
                                            <InfoText>2024.07.20 ~ 2024.07.21</InfoText>
                                        </InfoDesc>
                                    </InfoItem>
                                    <InfoItem>
                                        <InfoLabel>관람연령</InfoLabel>
                                        <InfoDesc>
                                            <InfoText>전체관람가</InfoText>
                                        </InfoDesc>
                                    </InfoItem>
                                    <InfoPrice>
                                        <InfoLabel>가격</InfoLabel>
                                        <InfoDesc>
                                            <InfoPriceList>
                                                <IsLargePrice>전체가격보기</IsLargePrice>
                                                <InfoPriceItem>
                                                    <ItemName>스탠딩SR</ItemName>
                                                    <ItemPrice>175.000원</ItemPrice>
                                                </InfoPriceItem>
                                                <InfoPriceItem>
                                                    <ItemName>스탠딩R</ItemName>
                                                    <ItemPrice>165.000원</ItemPrice>
                                                </InfoPriceItem>
                                                <InfoPriceItem>
                                                    <ItemName>지정석SR</ItemName>
                                                    <ItemPrice>175.000원</ItemPrice>
                                                </InfoPriceItem>
                                                <InfoPriceItem>
                                                    <ItemName>지정석R</ItemName>
                                                    <ItemPrice>165.000원</ItemPrice>
                                                </InfoPriceItem>
                                            </InfoPriceList>
                                        </InfoDesc>
                                    </InfoPrice>
                                    <InfoItem>
                                        <InfoLabel>혜택</InfoLabel>
                                        <InfoDesc>
                                            <InfoBenefitGuide>무이자할부</InfoBenefitGuide>
                                            <InfoBenefitList>
                                                <InfoLink>
                                                    <LogoNolPoint></LogoNolPoint>
                                                    NOL 카드로 최대 7만원 혜택받기
                                                </InfoLink>
                                                <InfoLink>
                                                    <LogoToping></LogoToping>
                                                    가입하고 중복할인 쿠폰받기
                                                </InfoLink>
                                            </InfoBenefitList>
                                        </InfoDesc>
                                    </InfoItem>
                                    <InfoPromo>
                                        <InfoLabel>배송</InfoLabel>
                                        <InfoDesc>
                                            <InfoText>2024년 06월 24일 일괄 배송되는 상품입니다.</InfoText>
                                            <InfoShipping>
                                                ※ 일괄배송일: 6월 24일(월) ~ 6월 28일(금) <InfoPromoLink>배송주소 확인</InfoPromoLink>
                                            </InfoShipping>
                                        </InfoDesc>
                                    </InfoPromo>
                                    <InfoItem>
                                        <InfoLabel>유의사항</InfoLabel>
                                        <InfoDesc>
                                            <InfoWarn>
                                                2024년 06월 12일 14시 00분~2024년 06월 28일 23시 59분까지 <br /> 무통장입금 결제가 불가능합니다.
                                            </InfoWarn>
                                        </InfoDesc>
                                    </InfoItem>
                                    <InfoRelated>
                                        <InfoLabel>관련 공연</InfoLabel>
                                        <InfoDesc>
                                            <InfoRelatedItem>
                                                <InfoRelatedName>싸이흠뻑쇼 SUMMERSWAG2024 - 원주</InfoRelatedName>
                                                <InfoRelatedDate>2024.06.29</InfoRelatedDate>
                                            </InfoRelatedItem>
                                            <InfoRelatedItem2>
                                                <InfoRelatedName>싸이흠뻑쇼 SUMMERSWAG2024 - 광주</InfoRelatedName>
                                                <InfoRelatedDate>2024.07.06~2024.07.07</InfoRelatedDate>
                                            </InfoRelatedItem2>
                                            <InfoRelatedMore>더보기</InfoRelatedMore>
                                        </InfoDesc>
                                    </InfoRelated>
                                </Info>
                            </SummaryBody>
                        </Summary>
                    </ProductMainTop>
                </ProductMain>
                <ProductSide>
                    <StickyWrap>
                        <SideMain>
                            <ContainerTop>
                                <SideHeader>
                                    <SideToggleButton onClick={() => setOpenCalendar(!openCalendar)}>
                                        <SideTitle>관람일</SideTitle>
                                        {!openCalendar && (
                                            <>
                                                <Date>{}</Date>
                                            </>
                                        )}
                                    </SideToggleButton>
                                    {openCalendar && (
                                        <ToggleCalendar>
                                            <Calander />
                                        </ToggleCalendar>
                                    )}
                                </SideHeader>
                            </ContainerTop>
                            <ContainerMiddle>
                                <SideHeader>
                                    <SideTitle>회차</SideTitle>
                                </SideHeader>
                                <SideContent>
                                    <SideTimeTable>
                                        <TimeTableList>
                                            <TimeTableItem>
                                                <TimeTableLabel>1회 18:00</TimeTableLabel>
                                            </TimeTableItem>
                                        </TimeTableList>
                                    </SideTimeTable>
                                    <SideSeatTable>
                                        <SeatTableList>
                                            <SeatTableItem>
                                                <SeatTableName>스탠딩SR</SeatTableName>
                                                <SeatTableStatus>1</SeatTableStatus>
                                            </SeatTableItem>
                                            <SeatTableItem>
                                                <SeatTableName>스탠딩R</SeatTableName>
                                                <SoldOut>0석</SoldOut>
                                            </SeatTableItem>
                                            <SeatTableItem>
                                                <SeatTableName>지정석SR</SeatTableName>
                                                <SoldOut>0석</SoldOut>
                                            </SeatTableItem>
                                            <LastTableItem>
                                                <SeatTableName>지정석R</SeatTableName>
                                                <SeatTableStatus>1</SeatTableStatus>
                                            </LastTableItem>
                                        </SeatTableList>
                                    </SideSeatTable>
                                </SideContent>
                            </ContainerMiddle>
                        </SideMain>
                        <SideBtnWrap>
                            <SideBtnPrimary>
                                <SideBtnSpan>예매하기</SideBtnSpan>
                            </SideBtnPrimary>
                            <SideBtnForeign>
                                <SideBtnSpan>BOOKING / 外國語</SideBtnSpan>
                            </SideBtnForeign>
                            <SideBtnLinkIsNolpoint>NOL 카드로 최대 7만원 혜택받기</SideBtnLinkIsNolpoint>
                            <SideBtnLinkIsPlaydb>
                                이 공연이 더 궁금하다면<LogoPlaydb></LogoPlaydb>
                            </SideBtnLinkIsPlaydb>
                        </SideBtnWrap>
                    </StickyWrap>
                </ProductSide>
            </ProductWrapper>
        </Contents>
    );
}
