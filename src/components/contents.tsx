import tw from "tailwind-styled-components";

const Container = tw.div`
    w-full
    relative
`;

const Contents = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <Container>{children}</Container>;
};

export default Contents;
