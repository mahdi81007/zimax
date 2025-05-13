import React from 'react';

function Index({
                   time,bonus,apy
               }) {
    return (
         <div className="self-stretch  rounded-3xl inline-flex flex-col justify-start items-start">
            <div className="self-stretch p-3 border-b border-Border-Gray-default flex flex-col justify-start items-start">
                <div className="self-stretch px-14 inline-flex justify-center items-center gap-1.5">
                      <i className={'icon-clock'}/>
                    <div className="text-center justify-center  text-sm font-normal  leading-7">Lock-up Period:</div>
                        <div className="text-center justify-center  text-base font-bold  leading-loose">{time}</div>
                </div>
            </div>
            <div className="self-stretch p-3 inline-flex justify-start items-center gap-3">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-Text-Default-default text-xs font-normal  leading-normal">{bonus}</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-Text-Primary-default text-base font-semibold  leading-loose">{apy} APY</div>
                </div>
            </div>
        </div>
    );
}

export default Index;