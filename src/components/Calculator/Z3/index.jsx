import React, {useState} from 'react';
import { SimpleGrid} from "@mantine/core";
import Cart from "@/components/Cart";
import {useIsDesktop} from "@/utils/screen-size";


const numbers =[
    {number:1,value:5},
    {number:2,value:15},
    {number:3,value:35},
    {number:4,value:75},
    {number:5,value:155},
    {number:6,value:315},
    {number:7,value:635},
    {number:8,value:1275},
    {number:9,value:2525},
    {number:10,value:5025},
    {number:11,value:10025},
    {number:12,value:19925},
]
function Z3Calculator() {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const selectedItem = numbers.find(item => item.number === selectedNumber);
    const cost = selectedItem ? selectedItem.value : 0;
    const result = cost * 3;
    const isPc = useIsDesktop();

    return (
        <>
        <Cart
            isMore={false}
        children={
            <div>
            <div className={'md:flex '}>
            <div className={'w-full md:mr-[16px] md:flex md:flex-col items-between justify-center gap-4'}>
                <div className=" font-bold  text-center leading-10 text-xl"><span >Affiliate</span><span className="text-blue-6"> NFT Income </span><span>Calculator</span></div>
                <p className="self-stretch text-center justify-center text-text-default-default text-sm  leading-7 mt-[8px]">Calculate your potential result from participating in ZiMax by selecting NFT levels to activate below. The results are calculated for 1 cycle of all selected levels. All calculations are for informational purposes only, and are not a public offer.</p>

                {isPc&&<p className="self-stretch  justify-center text-text-default-default text-sm  leading-7">Basic NFT level program, which is best for those who are self-reliant and prefer independent development.</p>}
                {!isPc&&(
                    <div className={'w-full'}>
                        <div className=" w-full my-[16px] p-2 rounded-[20px] outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start">
                            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                <div className="size-12 px-3.5 bg-text-primary-default rounded-2xl inline-flex flex-col justify-center items-center">
                                    <div className="text-center justify-center text-text-invert-title text-xl font-bold  leading-10">Z3</div>
                                </div>
                                <div className="text-center justify-center text-text-default-dimmed text-xl font-bold  leading-10">ZiMax</div>
                            </div>

                        </div>
                        <p className="self-stretch md:hidden justify-center text-text-default-default text-sm  leading-7">Basic NFT level program, which is best for those who are self-reliant and prefer independent development.</p>

                        <SimpleGrid mt={16} cols={3}>
                            {numbers.map((item) => (
                                <div
                                    key={item.number}
                                    onClick={() => setSelectedNumber(item.number)}
                                    className={`cursor-pointer h-12 min-w-20 px-7 text-center justify-center text-base font-semibold leading-loose rounded-[10px] inline-flex flex-col justify-center items-center
                         ${selectedNumber !== null && item.number <= selectedNumber
                                        ? 'bg-blue-6 text-white'
                                        : 'bg-background-gray-filled-hover text-text-invert-default'
                                    }`}
                                >
                                    {item.number}
                                </div>
                            ))}

                        </SimpleGrid>
                    </div>
                )}
                <div className="flex pt-2 inline-flex justify-around items-center w-full">
                    <div className=" flex-col justify-start items-center">
                        <div className="self-stretch text-center justify-center text-text-default-dimmed text-sm  leading-7">Cost of all selected slots</div>
                        <div className="text-center justify-center text-text-default-default text-base font-semibold  leading-loose">{cost} USDT</div>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <div className="self-stretch text-center justify-end text-text-default-dimmed text-sm  leading-7">Results in 1 cycle</div>
                        <div className="text-center justify-center text-text-default-default text-base font-semibold  leading-loose">{result} USDT</div>
                    </div>
                </div>


            </div>

            {isPc&&(
                <div className={'w-full'}>
                    <div className=" w-full my-[16px] p-2 rounded-[20px] outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start">
                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                            <div className="size-12 px-3.5 bg-text-primary-default rounded-2xl inline-flex flex-col justify-center items-center">
                                <div className="text-center justify-center text-text-invert-title text-xl font-bold  leading-10">Z3</div>
                            </div>
                            <div className="text-center justify-center text-text-default-dimmed text-xl font-bold  leading-10">ZiMax</div>
                        </div>
                    </div>
                    <SimpleGrid mt={16} cols={3}>
                        {numbers.map((item) => (
                            <div
                                key={item.number}
                                onClick={() => setSelectedNumber(item.number)}
                                className={`cursor-pointer h-12 min-w-20 px-7 text-center justify-center text-base font-semibold leading-loose rounded-[10px] inline-flex flex-col justify-center items-center
                         ${selectedNumber !== null && item.number <= selectedNumber
                                    ? 'bg-blue-6 text-white'
                                    : 'bg-background-gray-filled-hover text-text-invert-default'
                                }`}
                            >
                                {item.number}
                            </div>
                        ))}

                    </SimpleGrid>
                </div>
            )}

        </div>
                <div className="w-full mt-[16px] self-stretch p-6 bg-text-primary-default rounded-3xl inline-flex md:flex-row flex-col justify-center items-center gap-4">
                    <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2">
                        <div className="text-center justify-center text-text-invert-title text-xs font-normal  leading-normal">Total cost</div>
                        <div className="self-stretch text-center justify-center text-text-invert-title text-xl font-bold  leading-tight">{cost} USDT</div>
                    </div>
                    <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2">
                        <div className="text-center justify-center text-text-invert-title text-xs font-normal  leading-normal">Total profit</div>
                        <div className="self-stretch text-center justify-center text-text-invert-title text-xl font-bold  leading-tight">{result} USDT</div>
                    </div>
                </div>
            </div>
        }
        />
        </>


    );
}

export default Z3Calculator;