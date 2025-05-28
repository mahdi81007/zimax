import Cart from "@/components/Cart";

function Index({isPc}) {
    return (
        <div className={'p-[24px]  mt-[24px] bg-blue-4 md:rounded-3xl'}>
            <Cart
                height={'280px'}
                isMore={!isPc}
                title={<div
                    className=" text-center justify-center text-text-primary-default text-xl font-medium font-['Inter'] leading-loose">Fair
                    marketing by ZiMax<br/>You Work = You Earn</div>}
                titleClassName={'text-center'}
                children={<>
                    <div data-property-1="1"
                         className=" inline-flex flex-col justify-start items-start gap-2.5">
                        <div className=" justify-center"><span
                            className="text-text-default-link text-sm font-bold  leading-loose">All rewards</span><span
                            className="text-text-default-default text-sm   leading-loose"> is sent directly to your wallet and can be tracked on the blockchain. The platform does not store your funds and has no access to them.</span>
                        </div>
                        <div className=" justify-center"><span
                            className="text-text-default-link text-sm font-bold  leading-loose">No need</span><span
                            className="text-text-default-default text-sm   leading-loose"> to request a withdrawal and wait.</span>
                        </div>
                        <div className=" justify-center"><span
                            className="text-text-default-link text-sm font-bold  leading-loose">Maximum income</span><span
                            className="text-text-default-default text-sm   leading-loose"> depends on nothing but your own efforts.</span>
                        </div>
                        <div className=" justify-center"><span
                            className="text-text-default-default text-sm   leading-loose">This program </span><span
                            className="text-text-default-link text-sm font-bold  leading-loose">only accepts USDT</span><span
                            className="text-text-default-default text-sm   leading-loose"> (Tether on Binance Smart Chain) as a means of payment to ensure greater convenience, clarity, and stability of income for the participants.</span>
                        </div>
                    </div>
                </>}
            />
            <Cart
                height={'280px'}
                className={'mt-[24px]'}
                isMore={!isPc}
                title={<div
                    className=" text-center justify-center text-text-primary-default text-xl font-medium font-['Inter'] leading-loose">How
                    much i earn with NFT marketing program?</div>}
                titleClassName={'text-center'}
                children={
                    <ul className={'list-inside list-disc'}>
                        <li>You can estimate your potential earnings from ZiMax Marketing by choosing the
                            programs and number of slots you wish to participate in. The total earnings for
                            one cycle of all selected slots will be displayed.
                        </li>
                        <li>It's important to note that these calculations are for informational purposes
                            only and do not constitute an offer.
                        </li>
                    </ul>
                }
            />
        </div>

    );
}

export default Index;