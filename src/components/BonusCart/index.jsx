import React from 'react';

function Index({
                   time,bonus,apy
               }) {
    return (

        <div className="mt-[16px] md:w-fit w-full md:w-w-fit rounded-3xl inline-flex flex-col bg-background-default-hover">
            <div className=" p-3 border-b border-dashed border-border-gray-default flex flex-col justify-start items-start">
                <div className=" px-14 inline-flex justify-center items-center gap-1.5">
                      <i className={'icon-clock'}/>
                    <div className="text-center justify-center  text-sm font-normal  leading-7">Lock-up Period:</div>
                        <div className="text-center justify-center  text-base font-bold  leading-loose">{time}</div>
                </div>
            </div>
            <div className=" p-3 inline-flex justify-start items-center gap-3">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-text-default-default text-xs font-normal  leading-normal">{bonus}</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-text-primary-default text-base font-semibold  leading-loose">{apy}</div>
                </div>
            </div>
        </div>
    );
}

export default Index;