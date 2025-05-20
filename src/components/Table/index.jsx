import React from 'react';


const bracket=[
    'first 1 number','first 2 number','first 3 number','first 4 number','first 5 number','first 6 number','ziMax tax'
]
const prizes=[
    '2٪','3٪','5٪','10٪','20٪','40٪','20٪'
]
function Index() {
    return (
        <div className="w-full mt-[12px] inline-flex flex-col justify-start items-start">
            <table className="w-full  ">
                <thead>
                <tr className={' border-b border-blue-6'}>
                    <th className={'border-r-2 px-[8px] py-[16px]  border-blue-6'}>Bracket <br/> <small className={'text-text-default-dimmed'}>numbers matched in order</small></th>
                    <th className={'px-[8px] py-[16px]'}>Prizes <br/> <small className={'text-text-default-dimmed'}>Of ZMX allocation in %</small></th>
                </tr>
                </thead>
                <tbody className={'p-[8px] text-center '}>
                <tr className={'text-text-default-dimmed text-sm '}>
                    <td className={'border-r-2  border-blue-6 pt-[12] '}>first 1 number</td>
                    <td className={'pt-[12]'}>2٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm mt-[12]'}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>first 2 number</td>
                    <td className={'pt-[12]'}>3٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm '}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>first 3 number</td>
                    <td className={'pt-[12]'}>5٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm mt-[12]'}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>first 4 number</td>
                    <td className={'pt-[12]'}>10٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm mt-[12]'}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>first 5 number</td>
                    <td className={'pt-[12]'}>20٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm mt-[12]'}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>first 6 number</td>
                    <td className={'pt-[12]'}>40٪</td>
                </tr>
                <tr className={'text-text-default-dimmed text-sm mt-[12]'}>
                    <td className={'border-r-2  border-blue-6 pt-[12]'}>ziMax tax</td>
                    <td className={'pt-[12]'}>20٪</td>
                </tr>
                </tbody>
            </table>

            {/*<div className="w-full inline-flex justify-center items-end">*/}
            {/*    <div className="flex-1  px-2 py-4 border-r-2 border-b border-text-primary-default inline-flex flex-col justify-start items-center gap-1">*/}
            {/*        <div className="text-center justify-center text-text-default-default text-sm font-semibold  leading-7">Bracket</div>*/}
            {/*        <div className=" text-center justify-center text-text-default-default text-xs font-normal  leading-normal">numbers matched in order</div>*/}
            {/*    </div>*/}
            {/*    <div className="flex-1  px-2 py-4 border-l border-b border-text-primary-default inline-flex flex-col justify-start items-center gap-1">*/}
            {/*        <div className="text-center justify-center text-text-default-default text-sm font-semibold  leading-7">Prizes</div>*/}
            {/*        <div className=" text-center justify-center text-text-default-default text-xs font-normal  leading-normal">Of ZMX allocation in %</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full h-72 flex flex-col justify-center items-start">*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 1 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">2٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 2 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">3٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 3 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">5٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 4 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">10٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 5 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">20٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">first 6 number</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">40٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" h-10 inline-flex justify-center items-start">*/}
            {/*        <div className="flex-1  border-r-2 border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">ziMax tax</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-1  border-l border-text-primary-default inline-flex flex-col justify-center items-center">*/}
            {/*            <div className="text-center justify-center text-text-default-dimmed text-sm font-normal  leading-7">20٪</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Index;