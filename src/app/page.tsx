"use client";

import { getImage } from "@/utils/asset";
import tw from "tailwind-styled-components";

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

const InfoLabel = tw.li`
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
`;

export default function Home() {
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
                                </Info>
                            </SummaryBody>
                        </Summary>
                    </ProductMainTop>
                </ProductMain>
                <ProductSide></ProductSide>
            </ProductWrapper>
        </Contents>
    );
}
