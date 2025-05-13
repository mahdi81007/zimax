import React from 'react';
import Animation from "@/components/Animation";
import Cart from "@/components/Cart";
import {Button, Center, Container, Input} from "@mantine/core";
import CartIcon from "@/components/Cart/CartIcon";
import bankImg from '@/assets/images/bank.png'
import BonusCart from "@/components/BonusCart";
import productImg from '@/assets/images/product.png'
import laptopImg from '@/assets/images/laptop.png'
const list = [
    {
        id: 1,
        text: 'All rewards is sent directly to participants wallet and can be tracked on the blockchain.'
    }, {
        id: 2,
        text: 'The platform does not store users fund and has no access to them.'
    }, {
        id: 3,
        text: 'No need to request a withdrawal and wait.'
    }, {
        id: 4,
        text: 'Maximum income depends on nothing but participants own efforts.'
    }, {
        id: 5,
        text: 'This program only accepts USDT (on Binance Smart Chain) as a means of payment to ensure greater convenience, clarity, and stability of income for the participants.'
    },
]
const cartIconOne = [
    {
        title: 'Auto-Compounding',
        icon: 'icon-card-coin',
        content: 'Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest APY in the industry up to 0.000854329%. Interest rewards are compounded every 15 MINUTES for every BSC wallet holding any $ZMX tokens.'
    }, {
        title: 'Risk Insurance Fund',
        icon: 'icon-command',
        content: 'RIF ensures holders safety from sudden market crash, long-term stability and future growth of ZiMax DeFi and minimum risk of price reduction. Therefore, staking rewards, which are distributed every 15 MINUTES at a rate of 0.000854329% are backed by the RIF parameter, which ensures a high and stable interest rate for $ZMX token holders.'
    }, {
        title: 'icon-bank',
        icon: 'icon-card-coin',
        content: 'One of the most important departments in ZiMax DeFi is the treasury. The treasury is designed for additional financial support of RIF. In case of a strong price fall of token $ZMX, it will receive additional financing from this department. The treasury can be used for financing new products and projects that will be released on the basis of ZiMax DeFi.'
    }, {
        title: 'ZiMax Treasury',
        icon: 'icon-money-tick',
        content: 'Large trading amount increases the number of tokens burned, thus reducing circulating supply and maintained stability of ZiMax DeFi.\n' +
            'This system has another important advantage. The fact that it is deflationary allows the $ZMX token to maintain a higher value.'
    },
]
const bonusCard = [
    {time: '6 Months', apy :'33.25% APY',bonus :'Total Reward including 15%  Bonus'},
    {time: '1 Year', apy :'76,10% APY',bonus :'Total Reward including 40% Bonus'},
    {time: '2 Years', apy :'98,40% APY',bonus :'Total Reward including 60% Reward 16:09'},
]
function Index() {

    return (
        <>
            <Animation/>
            <Container mt={32}>

                <Cart height={'226px'} title={<p className={'text-blue-600 font-bold'}>Brand New Economy</p>}
                      children={'The ZiMax Influencers Income Program is designed for influencers, celebrities, Vloggers, and individuals with a significant following and their own community. ZiMax provides a package that enables them to launch their decentralized crypto business independently with their customized landing page, website, own domain name'}/>
                <Cart title={''}
                      height={'444px'}
                      children={'The ZiMax "Defi Center" platform is a comprehensive platform for blockchain-based income and investment products, offering users access to a range of decentralized income-generating programs without intermediaries. The platform provides a variety of programs such as ZiMax $ZMX token, ZiMax Bank Staking, NFT marketplace, NFT marketing programs, Bank15 Auto-Staking and Lottery, under one brand with varying interest rates, users can invest in one or multiple programs simultaneously using Tether.'}
                />
                <Cart isMore={false} children={<div>
                    <div className="text-center  text-xs font-semibold  leading-normal">3.9
                        Millions
                    </div>
                    <div className="self-stretch text-center justify-center"><span
                        className=" font-bold  leading-loose">Estimated </span><span
                        className=" font-bold  leading-loose">total trades:</span><b
                        className=" font-bold  leading-loose"> Approximately</b></div>
                    <div className="text-center justify-center  text-xs font-semibold  leading-normal">10,000</div>
                </div>}

                      title={<div className="self-stretch text-center justify-center font-bold">
                          <span
                              className=" text-base font-bold  leading-loose">Estimated all-time </span><span
                          className="    leading-loose">trade volume:<br/></span><span
                          className=" font-bold  leading-loose">Approximately</span></div>}/>

                <Cart title={<div className=" font-bold  leading-10 text-center justify-center">
                    <span>Fair marketing by ZiMax<br/></span><span
                    className={'text-blue-600'}>You Work</span><span> = </span><span
                    className={'text-blue-600'}>You Earn</span>
                </div>} isMore={false}
                      children={<ul className="list-inside list-disc text-sm">
                          {
                              list.map((item) => (
                                  <li id={item.id}>{item.text}</li>
                              ))
                          }
                      </ul>}/>

                <Cart className={'mt-[80px]'}
                      isMore={false}
                      titleClassName={'mb-[8px]!'}
                      title={<p>ZiMax Token</p>}
                      number={'01'}
                      children={
                          <p>The world's first pre-sale that offers rewards and Auto-Staking & Auto-Compounding
                              protocol with up to %30.00 APY divided in Every 15 minutes.</p>
                      }
                />
                <Cart isMore={false} children={<div>
                    <p>Get automatic staking and compounding rewards every 15 minutes in your wallet.</p>
                    <p className={'mt-[8px]'}>We improved and accelerated the aging DeFi industry with our passively
                        profitable ZMX solution.</p>
                    <Button fullWidth={true} mt={16} mb={16} variant={'filled'} >Buy ZMX</Button>
                    <p>$ZMX Token</p>
                    <p className={'font-bold text-[20px]'}>How it Works?</p>
                    <p className={'text-[14px] mt-[8px]'}>$ZMX - is a DeFi native token which pays 0.000854329% p.a.
                        rewards to holders every 15 minutes.</p>
                    <p className={'text-[14px] mt-[8px]'}>Rewards are paid automatically, you just need to keep the $ZMX
                        token in your wallet</p>
                </div>}/>
                {cartIconOne.map((item) => (
                    <Cart
                        title={<div>
                            <CartIcon icon={item.icon}/>
                            <p className={'text-[16px]! text-center'}>{item.title}</p>
                        </div>}
                        children={item.content}
                    />
                ))}
                <Cart isMore={false}
                      className={'mt-[80px]'}
                      title={<p>NFT MarketPlace</p>}
                      number={'02'}
                      children={<p>ZiMax's NFT marketplace is a platform that allows users to mint, buy, and sell
                          non-fungible tokens (NFTs) on the Binance Smart Chain (BSC). This marketplace offers a unique
                          opportunity for users to generate extra income by creating and selling their own NFTs.</p>}
                />
                <Cart />
                <Cart title={<p>NFT MarketPlace</p>} children={<p>ZiMax's NFT marketplace is a platform that allows users to mint, buy, and sell non-fungible tokens (NFTs) on the Binance Smart Chain (BSC). This marketplace offers a unique opportunity for users to generate extra income by creating and selling their own NFTs.</p>} isMore={false}/>
                <Cart/>
                <Cart number={'03'} title={<div className="self-stretch inline-flex justify-between items-center w-full">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch justify-center t text-xl font-bold  leading-10">ZiMax BANK</div>
                        <div className="self-stretch justify-center  text-base font-normal  leading-loose">Exclusive STAKING from ZiMax DeFi</div>
                    </div>
                    <img alt={'bank-img'} className="w-28 h-32 relative" src={bankImg.src} />
                </div>} children={'ZiMax Bank is a premium staking feature offered by ZiMax that provides users with the opportunity to earn a higher rate of return on their ZiMax token investments by locking their tokens for a certain period of time. This feature is designed for users who are looking to maximize their'}/>
                <div className={'w-full flex items-center justify-center my-[24px]'}>
                    <Button fullWidth={true} mr={8}>Buy ZMX</Button>
                    <Button fullWidth={true}>Lock up ZMX</Button>
                </div>
                <h2 className={'font-bold text-center mt-[24px]'}>  Bonus APR  15% to 60% edited15:58</h2>
                {bonusCard.map((item)=>(
                    <BonusCart {...item}/>
                ))}
                <p className={'font-semibold mt-[24px] mb-[8px]'}>How much can i earn?</p>
                <p className={'text-[14px]'}>At the end of the year and with</p>
                <Input mt={16} mb={22} pr={24} pl={24}  radius={'xl'} placeholder={'$500'}

                classNames={{input:'h-[48px]!'}}
                />
                <p className={'text-center text-[14px]'}>USD of $ZMX</p>
                <Center mt={16}>
                    <Button  rightSection={<i className={'icon-calculator'}></i>}>Use calculator</Button>
                </Center>
                <p className={'text-[14px]'}>lock your ZiMax tokens any period from 6 month to 2 years to receive higher APY</p>
                <Cart
                className={'mt-[80px]'}
                number={'04'}
                title={<div className="self-stretch inline-flex justify-between items-center">
                    <div className="min-w-36 inline-flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch justify-center text-Text-Default-default text-xl font-bold  leading-10">Bank 15</div>
                        <div className="self-stretch justify-center text-Text-Default-title text-base font-normal  leading-loose">Auto-Staking</div>
                    </div>
                    <img alt={'product-img'} className="flex-1 h-28 relative" src={productImg.src} />
                </div>}
                children={'Bank15 its Auto-Stake feature, also known as Buy-Hold-Earn.The process is simple, users purchase and hold $ZMX tokens in their wallet, and the platform\'s smart contract automatically distributes rebase rewards as interest payments to users proportionally based on the total amount of $ZMX tokens held.'}
                />
                <Cart
                className={'mt-[80px]'}
                number={'05'}
                title={<div className="self-stretch justify-center"><span className="text-Text-Primary-default text-xl font-bold font-['Poppins'] leading-10">AI </span><span className="text-Text-Default-default text-xl font-bold font-['Poppins'] leading-10">&</span><span className="text-Text-Primary-default text-xl font-bold font-['Poppins'] leading-10"> NFT</span><span className="text-Text-Default-default text-xl font-bold  leading-10"> Income Program with Affiliate Marketing for Everyone</span></div>}
                img={laptopImg.src}
                children={<div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-Text-Primary-default text-base font-bold  leading-loose">How does it work?</div>
                    </div>
                    <div data-align="Left" data-height="Short" data-show-button="true" data-show-linear="true" className="self-stretch h-32 relative flex flex-col justify-start items-center overflow-hidden">
                        <div className="self-stretch relative flex flex-col justify-start items-start gap-2.5">
                            <div className="self-stretch h-32 bg-gradient-to-b from-white to-white/0" />
                            <div data-property-1="Default" className="w-80 left-0 top-0 absolute flex flex-col justify-center items-center gap-2.5">
                                <div className="self-stretch justify-center text-Text-Default-default text-sm  leading-7">Zimax is a unique platform that integrates both a referral program and an automated algorithm for dispensing affiliate rewards. One of the standout features of Zimax is its transparent affiliate links, which allow users to track who referred whom and identify upline and downline partners. Thanks to  his feature, users can easily see how</div>
                            </div>
                        </div>
                    </div>
                </div>}
                />
                <div>

                </div>
            </Container>

        </>
    );
}

export default Index;