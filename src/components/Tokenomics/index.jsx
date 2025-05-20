import React from 'react';

function Index(props) {
    return (
        <div className="w-full mt-[24px] p-6 rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start gap-4">
            <div className=" text-center justify-center text-text-default-title text-base font-bold  leading-loose">ZiMax Tokenomics</div>
            <div className=" flex flex-col justify-start items-start gap-2 w-full">
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Total supplay</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">280 m</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Initial supplay</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">30 m</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Bank Rewards</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">250 m</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Pre-sale price</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">$0.15</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Max reward Supply</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">2B</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Pre-Sale</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">1.800.000</div>
                </div>
                <div className=" inline-flex justify-between items-center w-full">
                    <div className="justify-center text-text-default-title text-sm   leading-7">Initial market cap</div>
                    <div className="justify-center text-text-default-dimmed text-sm font-semibold  leading-7">$42.000.000</div>
                </div>
            </div>
        </div>
    );
}

export default Index;