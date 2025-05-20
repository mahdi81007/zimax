import React, {useState} from 'react';
import { SimpleGrid} from "@mantine/core";
import Cart from "@/components/Cart";


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
function Z4Calculator() {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const selectedItem = numbers.find(item => item.number === selectedNumber);
    const cost = selectedItem ? selectedItem.value : 0;
    const result = cost * 4;
    return (

            <Cart
                isMore={false}
                children={ <div>
                    <p className=" text-center justify-center text-text-default-default text-sm  leading-7">More advanced program, designed for team work. Results are achieved here through direct partners, as well as through spillovers from other participants.</p>
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
                    <div className="self-stretch pt-2 inline-flex justify-start items-center w-full">
                        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-center">
                            <div className="self-stretch text-center justify-center text-text-default-dimmed text-sm  leading-7">Cost of all selected slots</div>
                            <div className="text-center justify-center text-text-default-default text-base font-semibold  leading-loose">{cost} USDT</div>
                        </div>
                        <div className="flex-1 self-stretch inline-flex flex-col justify-center items-center">
                            <div className="self-stretch text-center justify-end text-text-default-dimmed text-sm  leading-7">Results in 1 cycle</div>
                            <div className="text-center justify-center text-text-default-default text-base font-semibold  leading-loose">{result} USDT</div>
                        </div>
                    </div>
                    <div className="w-full mt-[16px] self-stretch p-6 bg-text-primary-default rounded-3xl inline-flex flex-col justify-center items-center gap-4">
                        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2">
                            <div className="text-center justify-center text-text-invert-title text-xs font-normal  leading-normal">Total cost</div>
                            <div className="self-stretch text-center justify-center text-text-invert-title text-xl font-bold  leading-tight">{cost} USDT</div>
                        </div>
                        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-2">
                            <div className="text-center justify-center text-text-invert-title text-xs font-normal  leading-normal">Total profit</div>
                            <div className="self-stretch text-center justify-center text-text-invert-title text-xl font-bold  leading-tight">{result} USDT</div>
                        </div>
                    </div>

                </div>}
            />
    );
}

export default Z4Calculator;