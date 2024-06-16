import tw from "tailwind-styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchContainer = tw.div`
  flex 
  justify-center 
  items-center
  h-full
`;

const SearchBorder = tw.div`
  relative
  w-96
`;

const SearchInput = tw.input`
w-full py-3 pl-4 pr-10 text-sm border-[1px] border-solid border-[rgba(0,0,0,15%)]  rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500
`;

const SearchIcon = tw.div`
absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none
`;

const Search = () => {
    return (
        <SearchContainer>
            <SearchBorder>
                <SearchInput type="text" placeholder="뮤지컬, 전시, 연극으로 찾아보세요." />
                <SearchIcon>
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </SearchIcon>
            </SearchBorder>
        </SearchContainer>
    );
};

export default Search;
