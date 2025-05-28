import  {useState} from 'react';
import Animation from "@/components/Animation";
import Cart from "@/components/Cart";
import {Badge, Box, Button, Center, Container, Input} from "@mantine/core";
import CartIcon from "@/components/Cart/CartIcon";
import bankImg from '@/assets/images/bank.png'
import BonusCart from "@/components/BonusCart";
import productImg from '@/assets/images/product.png'
import laptopImg from '@/assets/images/laptop.png'
import mobileImg from '@/assets/images/mobile.png'
import heroImg from '@/assets/images/2a8fea2b838db5a9089463d8638ece53c0548f00.png'
import marketplaceImg from '@/assets/images/marketplace.png'
import listGradiantImg from '@/assets/images/cart-icon/list-gradiant.png'
import massageGradiantImg from '@/assets/images/cart-icon/massage-gradiant.png'
import peopleGradiantImg from '@/assets/images/cart-icon/pepole-gradiant.png'
import worldImg from '@/assets/images/world.png'
import Z3Calculator from "@/components/Calculator/Z3";
import Z4Calculator from "@/components/Calculator/Z4";
import Table from "@/components/Table";
import Tokenomics from "@/components/Tokenomics";
import Supplay from "@/components/Supplay";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";
import {bonusCard, cartIconOne, links} from "@/content";
import Roadmap from "@/components/Roadmap";
import {useIsDesktop} from "@/utils/screen-size";
import classes from '@/styles/home.module.css'
import cx from 'clsx'
import {useRouter} from "next/router";
import BlueSection from "@/components/BlueSection";
import Branding from "@/components/Branding";

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


function Index() {
    const [inputValue, setInputValue] = useState()
    const [result, setResult] = useState(null);

    const handleInput = () => {
        const n = parseFloat(inputValue);
        if (isNaN(n)) return;

        const y = n * 1.27;
        const x = y * 1.4;

        setResult(Math.round(x));
    };

    const isPc = useIsDesktop();
    const [active, setActive] = useState();
    const router = useRouter()
    const items = links.map((item, index) => (
        <Box
            component="a"
            href={item.href}
            pt={8}
            onClick={(event) => {
                router.push(item.href)
                event.preventDefault();
                setActive(index);
            }}
            key={item.title}
            className={cx(classes.link, {[classes.linkActive]: active === index})}
            // style={{paddingLeft: `calc(${item.title} * var(--mantine-spacing-md))`}}
        >
            {item.title}
        </Box>
    ));


    return (
        <>
            <Animation/>
            <div
                className={' lg:grid w-full  lg:grid-cols-1   lg:grid-cols-[minmax(0,1fr)_var(--container-2xs)] md:relative'}>

                <Container px={isPc ? 96 : 0} className={'md:pr-[0]!'} >

                    <Container className={'w-max-[700px]! md:pr-[0]!'} mt={32}  px={isPc ? 96 : 24} m={isPc && 0}>
                        <Cart
                            isMore={!isPc} height={'110px'}
                            title={<h3 className={'text-blue-6 font-bold'}>Brand New Economy</h3>}
                            children={'The ZiMax Influencers Income Program is designed for influencers, celebrities, Vloggers, and individuals with a significant following and their own community. ZiMax provides a package that enables them to launch their decentralized crypto business independently with their customized landing page, website, own domain name'}/>
                        <Cart title={<p className=" text-center "><span className="text-text-default-title text-xl font-bold  leading-10">The World is changing<br/></span><span className="text-text-primary-default text-xl font-bold  leading-10">Web3</span><span className="text-text-default-title text-xl font-bold  leading-10"> is already here</span></p>}
                              height={isPc ? '110px' : '280px'}
                              children={'The ZiMax "Defi Center" platform is a comprehensive platform for blockchain-based income and investment products, offering users access to a range of decentralized income-generating programs without intermediaries. The platform provides a variety of programs such as ZiMax $ZMX token, ZiMax Bank Staking, NFT marketplace, NFT marketing programs, Bank15 Auto-Staking and Lottery, under one brand with varying interest rates, users can invest in one or multiple programs simultaneously using Tether.'}
                        />


                        <Cart title={<div className=" font-bold  leading-10 text-center justify-center">
                            <span>Fair marketing by ZiMax<br/></span><span
                            className={'text-text-primary-default'}>You Work</span><span> = </span><span
                            className={'text-text-primary-default'}>You Earn</span>
                        </div>} isMore={false}
                              children={<ul className="list-inside list-disc text-sm">
                                  {
                                      list.map((item) => (
                                          <li id={item.id} key={item.id}>{item.text}</li>
                                      ))
                                  }
                              </ul>}/>
                        <Cart isMore={false} children={<div>
                            <div className="text-center  text-xs font-semibold  leading-normal">3.9
                                Millions
                            </div>
                            <div className=" text-center justify-center"><span
                                className=" font-bold  leading-loose">Estimated </span><span
                                className=" text-text-primary-default font-bold  leading-loose">total trades:</span><b
                                className=" font-bold  leading-loose"> Approximately</b></div>
                            <div className="text-center justify-center  text-xs font-semibold  leading-normal">10,000
                            </div>
                        </div>}

                              title={<div className=" text-center w-full justify-center font-bold">
                          <span
                              className=" text-base font-bold  leading-loose">Estimated all-time </span><span
                                  className="text-text-primary-default  leading-loose">trade volume:<br/></span><span
                                  className=" font-bold  leading-loose">Approximately</span></div>}/>
                        <Cart
                            id={'zimax-token'}
                            className={'mt-[80px]'}
                            isMore={false}
                            titleClassName={'mb-[8px]!'}
                            title={<h2>ZiMax Token</h2>}
                            number={'01'}
                            children={
                                <p>The world's first pre-sale that offers rewards and Auto-Staking & Auto-Compounding
                                    protocol with up to %30.00 APY divided in Every 15 minutes.</p>
                            }
                        />
                        <Cart isMore={false} children={<div>
                            <p>Get automatic staking and compounding rewards every 15 minutes in your wallet.</p>
                            <p className={'mt-[8px]'}>We improved and accelerated the aging DeFi industry with our
                                passively
                                profitable ZMX solution.</p>
                            <a className={'w-full'} href={'https://dash.zimax.io/token'}><Button fullWidth={true}
                                                                                                 mt={16} mb={16}
                                                                                                 variant={'filled'}>Buy
                                ZMX</Button></a>
                            <p>$ZMX Token</p>
                            <p className={'font-bold text-[20px]'}>How it Works?</p>
                            <p className={'text-[14px] mt-[8px]'}>$ZMX - is a DeFi native token which pays 0.000854329%
                                p.a.
                                rewards to holders every 15 minutes.</p>
                            <p className={'text-[14px] mt-[8px]'}>Rewards are paid automatically, you just need to keep
                                the $ZMX
                                token in your wallet</p>
                        </div>}/>
                        {cartIconOne.map((item) => (
                            <Cart
                                key={item.id}
                                height={'110px'}
                                CartIcon={<CartIcon icon={item.icon}/>}
                                title={
                                    <p className={'text-[16px]! text-center'}>{item.title}</p>
                                }
                                children={item.content}
                            />
                        ))}
                        <Cart
                            id={'NFT-marketplace'}
                            isMore={false}
                            className={'mt-[80px]'}
                            title={<p>NFT MarketPlace</p>}
                            number={'02'}
                            children={<p>ZiMax's NFT marketplace is a platform that allows users to mint, buy, and sell
                                non-fungible tokens (NFTs) on the Binance Smart Chain (BSC). This marketplace offers a
                                unique
                                opportunity for users to generate extra income by creating and selling their own
                                NFTs.</p>}
                        />
                        <Cart
                            height={isPc?'280px':'110px'}
                            bottomImg={marketplaceImg.src}
                            children={'One of the key features of our NFT marketplace is the ability for users to mint new NFTs. This process involves creating a unique digital asset, such as an image or video, and then "minting" it as an NFT on the blockchain. This creates a unique, one-of-a-kind token that can be bought and sold on the marketplace.\n' +
                                'It\'s a marketplace that is open to creators, collectors, and investors, and it offers a wide range of possibilities for users to showcase their talent, and create a Audio . Video . Pictures . Digital art NFT\'s to new source of income through the sale of their unique digital assets. One of the key features of our NFT marketplace is the ability'}/>
                        <Cart id={'zimax-bank'} height={'110px'} number={'03'}
                              isMore={!isPc}
                              title={<div className=" inline-flex justify-between items-center w-full">
                                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                      <div className=" justify-center t text-xl font-bold  leading-10">ZiMax BANK</div>
                                      <div className=" justify-center  text-base   leading-loose">Exclusive STAKING from
                                          ZiMax DeFi
                                      </div>
                                  </div>
                                  <img alt={'bank-img'} className="w-28 md:hidden h-32 relative md:w-[270px] md:h-[311px]"
                                       src={bankImg.src}/>
                              </div>}
                              img={bankImg.src}
                              imgClassName={'hidden md:block w-[270px] h-[311px]'}
                              children={'ZiMax Bank is a premium staking feature offered by ZiMax that provides users with the opportunity to earn a higher rate of return on their ZiMax token investments by locking their tokens for a certain period of time. This feature is designed for users who are looking to maximize their'}/>
                        <div className={'w-full flex items-center justify-center my-[24px] gap-[8px]'}>
                            <a className={'w-full'} href={'https://dash.zimax.io/token'}><Button fullWidth={true}
                                                                                                 mr={8}>Buy ZMX</Button></a>
                            <a className={'w-full'} href={'https://dash.zimax.io/staking'}><Button fullWidth={true}>Lock
                                up ZMX</Button></a>
                        </div>
                        <h2 className={'font-bold text-center mt-[24px]'}> Bonus APR 15% to 60% edited15:58</h2>
                        <div className={'md:flex items-center justify-center flex-wrap gap-[16px]'}>

                            {bonusCard.map((item) => (
                                <BonusCart key={item.id} {...item}/>
                            ))}
                        </div>

                        <p className={'font-semibold mt-[24px] mb-[8px] text-center'}>How much can i earn?</p>
                        <p className={'text-[14px] text-center'}>At the end of the year and with</p>
                        <Input size={isPc ? "xl" : 'md'} mt={16} mb={22} pr={24} pl={24} type={'number'}
                               onChange={(e) => setInputValue(e.target.value)}
                               radius={'xl'} placeholder={'$500'}

                               classNames={{input: 'h-[48px]! text-center!'}}
                        />
                        <div
                            className="text-center text-text-primary-default text-sm md:text-lg font-semibold  leading-7 my-[16px]">You
                            can earn: {result}</div>
                        <p className={'text-center text-sm'}>{result} USD of $ZMX</p>
                        <Center mt={16}>
                            <Button size={isPc ? "lg" : 'md'} onClick={handleInput}
                                    rightSection={<i className={'icon-calculator'}></i>}>Use calculator</Button>
                        </Center>
                        <p className={'text-[14px] text-center text-text-default-default mt-[24px]'}>lock your ZiMax
                            tokens any period from 6 month to 2 years to receive higher APY</p>
                        <Cart
                            id={'bank15'}
                            className={'mt-[80px]'}
                            number={'04'}
                            height={'110px'}
                            title={<div className="w-full inline-flex justify-between items-center">
                                <div className="min-w-36 inline-flex flex-col justify-start items-start gap-2">
                                    <div
                                        className=" justify-center text-text-default-default text-xl font-bold  leading-10">Bank
                                        15
                                    </div>
                                    <div
                                        className=" justify-center text-text-default-title text-base   leading-loose">Auto-Staking
                                    </div>
                                </div>
                                <img alt={'product-img'} className="md:hidden w-[176px] h-28 relative" src={productImg.src}/>
                            </div>}
                            img={productImg.src}
                            imgClassName={'hidden md:block w-[170px] h-[162px] mb-[40px]'}
                            children={'Bank15 its Auto-Stake feature, also known as Buy-Hold-Earn.The process is simple, users purchase and hold $ZMX tokens in their wallet, and the platform\'s smart contract automatically distributes rebase rewards as interest payments to users proportionally based on the total amount of $ZMX tokens held.'}
                        />
                        <Cart
                            id={'NFT-income-program'}
                            // height={'110px'}
                            className={'mt-[80px]'}
                            number={'05'}
                            title={<div className=" justify-center"><span
                                className="text-text-primary-default text-xl font-bold  leading-10">AI </span><span
                                className="text-text-default-default text-xl font-bold  leading-10">&</span><span
                                className="text-text-primary-default text-xl font-bold  leading-10"> NFT</span><span
                                className="text-text-default-default text-xl font-bold  leading-10"> Income Program with Affiliate Marketing for Everyone</span>
                            </div>}
                            img={laptopImg.src}
                            imgClassName={'md:w-[270px] md:h-[180px] float-right'}
                            children={<div className=" inline-flex flex-col justify-start items-start gap-2">
                                    <p
                                        className=" justify-center text-text-primary-default text-base font-bold  leading-loose">How
                                        does it work?
                                    </p>
                                <p
                                    className="  text-text-default-default text-sm  leading-7">Zimax
                                    is a unique platform that integrates both a referral program and an
                                    automated algorithm for dispensing affiliate rewards. One of the
                                    standout features of Zimax is its transparent affiliate links, which
                                    allow users to track who referred whom and identify upline and downline
                                    partners. Thanks to his feature, users can easily see how
                                </p>
                            </div>}
                        />
                        {isPc&&<BlueSection isPc={isPc}/>}
                    </Container>
                    {!isPc&&<BlueSection isPc={isPc}/>}
                    <Container className={'w-max-[700px]! md:pr-[0]!'} px={isPc ? 96 : 24} m={isPc && 0}>
                        <Z3Calculator/>
                        <Z4Calculator/>
                        <Cart
                            title={<div>
                                <img className={'size-[80px] mx-auto'} alt={'icon'} src={listGradiantImg.src}/>
                                <p
                                    className=" text-center justify-center text-text-default-title text-base font-bold  leading-loose">Smart
                                    Contracton the blockchain
                                </p>
                            </div>}
                            isMore={false}

                            children={<p
                                className=" text-center justify-center text-text-default-default text-sm  leading-7">A
                                smart contract is self-executing code on a blockchain that ensures transparency and
                                security in executing logic or transfers. It automates contractual obligations,
                                eliminates intermediaries, and increases transaction efficiency and trust.</p>}
                        />
                        <Cart
                            title={<div>
                                <img className={'size-[80px] mx-auto'} alt={'icon'} src={peopleGradiantImg.src}/>

                                <p className=" text-center justify-center text-text-default-title text-base font-bold  leading-loose">Open
                                    and available to everyone.</p>
                            </div>}
                            isMore={false}
                            children={<p
                                className=" text-center justify-center text-text-default-default text-sm  leading-7">Joining
                                the community and earning profits is simple - just a laptop or smartphone with an
                                Internet connection is needed. This accessibility makes it easy to get started and
                                benefit from the opportunities available.</p>}
                        />
                        <Cart
                            title={<div>
                                <img className={'size-[80px] mx-auto'} alt={'icon'} src={massageGradiantImg.src}/>
                                <p className=" text-center justify-center text-text-default-title text-base font-bold  leading-loose">Easy
                                    to Transaction</p>
                            </div>}
                            isMore={false}
                            children={<p
                                className=" text-center justify-center text-text-default-default text-sm  leading-7">Earn
                                BNB cryptocurrency by creating matrix platforms and inviting partners to join. As your
                                network grows, you'll receive remuneration i n the form of USDT, providing an
                                opportunity for passive income and wealth growth.</p>}
                        />
                        <Cart
                            isMore={false}
                            title={<p
                                className=" text-center justify-center text-text-default-title text-base font-bold  leading-loose">Partner's
                                results</p>}
                            children={<div>
                                <p className=" text-center justify-center text-text-default-default text-sm  leading-7">The
                                    blockchain stores all data, which can be easily verified by clicking on the smart
                                    contract address. This ensures transparency and security in the storage and
                                    retrieval of information.</p>
                                <div className=" inline-flex flex-col justify-center items-center text-center gap-2">
                                    <p className="text-center  text-text-default-default text-xs leading-normal">Binance
                                        Smart Chain smart contract address:</p>
                                    <a className=" text-center text-text-default-link text-xs  leading-normal">0xA080dCB3350d99320Bf67A997D7f876284727ec7</a>
                                </div>
                            </div>}
                        />
                        <Cart
                            id={'lottery'}
                            className={'pt-[20px]! mt-[80px]'}
                            isMore={false}
                            number={'06'}
                            title={<>
                                <Center>
                                    <Badge size={'xl'}>Coming soon</Badge>
                                </Center>
                                <p className=" justify-center text-text-default-default text-lg font-extrabold  leading-loose">ZIMAX
                                    Lottery</p>
                            </>}
                            children={<p
                                className=" justify-center text-text-default-default text-sm  leading-loose">From the
                                ZeMax Defi Center A fun way to earn some extra ZMX in addition to the potential
                                financial benefits, it's also an enjoyable experience.</p>}
                        />
                        <div
                            className="mt-[24px] pb-[24px] pt-[12px]  bg-background-default-hover rounded-3xl inline-flex flex-col justify-start items-start gap-4">
                            <Tabs/>
                        </div>
                        <img className={'w-52 h-48 max-w-80 mt-[24px] mx-auto'} src={mobileImg.src} alt={'mobile-img'}/>
                        <Table/>
                        <p className="mt-[80px] justify-center text-text-default-title text-xl font-bold relative leading-10">No
                            admins needed - No human<br/>
                            involved - <span className={'p-[5px] rounded-[50%] border-2  border-blue-6'}>100%</span>transparent
                            on BSC Blockchain</p>
                        <p className="mt-[8px] justify-center text-text-default-default text-sm   leading-7">Don't wait
                            any longer - join ZiMax now and take advantage of the amazing opportunities available. Share
                            the news with your team and be a part of this exciting platform. Time is of the essence, so
                            act now to secure your place in this innovative community.</p>
                        <img src={heroImg.src} className={'w-64 h-60 mx-auto my-[24px]'} alt={'img'}/>
                        <div className=" justify-center"><span
                            className="text-text-primary-default text-xl font-bold leading-loose">No risk</span><span
                            className="text-text-default-default text-xs font-medium  leading-loose"> </span><span
                            className="text-text-default-default text-sm  leading-7">- ZiMax is different from other platforms, transactions are processed in a blockchain by a smart contract and cannot be changed or stopped even by the creators. Transfers go directly to participants' personal wallets with no hidden fees or use of third-party resources. Which means that every reward earned belongs entirely to the individual and can be used immediately.</span>
                        </div>
                        <Branding/>
                        <h1 className="mt-[80px] text-text-default-title text-xl font-bold  leading-10">ZiMax token
                            supports</h1>
                        <div className=" inline-flex flex-col justify-center items-start gap-2">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div className="justify-center text-text-default-default text-sm   leading-7">Insurance
                                    Fund
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div
                                    className="justify-center text-text-default-default text-sm   leading-7">Auto-Liquidity
                                    Engine
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div className="justify-center text-text-default-default text-sm   leading-7">Auto-Burn
                                    Fire Pit
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div className="justify-center text-text-default-default text-sm   leading-7">Long-term
                                    Interest Cycle
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div className="justify-center text-text-default-default text-sm   leading-7">Rebase
                                    Inflation
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div
                                    className="justify-center text-text-default-default text-sm   leading-7">Deflationary
                                    mechanism
                                </div>
                            </div>
                            <div className="inline-flex justify-center items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-text-primary-default rounded-full"/>
                                <div className="justify-center text-text-default-default text-sm   leading-7">ZiMax
                                    Treasury
                                </div>
                            </div>
                        </div>
                        <Tokenomics/>
                        <Supplay/>
                        <Roadmap/>
                        <p className="mt-[80px] justify-center text-text-default-title text-xl font-bold  leading-10">Decentralized
                            networking platform</p>
                        <p className="mt-[8px] justify-center text-text-default-default text-xs font-normal  leading-normal">Smart
                            contracts connect people from all over the world and unlock limitless possibilities for a
                            new economic and financial system. This global reach allows for a diverse range of languages
                            and cultures to participate in this innovative technology.</p>
                        <img src={worldImg.src} alt={'world-img'} className={'my-[24px]'}/>
                        <p className=" text-center justify-center text-text-default-title text-sm font-semibold  leading-7">Participate
                            now and score rewards of up to 30% APY every 15 minutes!</p>
                        <div
                            className={'w-full mt-[24px] mb-[80px] flex flex-col items-center justify-center gap-[8px]'}>
                            <a className={'w-full'} href={'https://dash.zimax.io/staking gap-[8px]'}><Button
                                fullWidth={true} className={'w-full'} size={'lg'}>Connect wallet</Button></a>
                            <div className={'w-full flex items-center justify-center gap-[8px]'}>
                                <a className={'w-full'} href={'https://docs.zimax.io/roadmap'}><Button
                                    fullWidth={true}>Roadmap</Button></a>
                                <a className={'w-full'} href={'https://docs.zimax.io/'}><Button
                                    fullWidth={true}>Gitbook</Button></a>
                            </div>
                            <div className={'w-full flex items-center justify-center gap-[8px]'}>
                                <a className={'w-full'}
                                   href={'https://bscscan.com/token/0xA080dCB3350d99320Bf67A997D7f876284727ec7'}><Button
                                    fullWidth={true}>Contract</Button></a>
                                <a className={'w-full'} href={'https://dash.zimax.io/token'}><Button fullWidth={true}>Buy
                                    zmx</Button></a>
                            </div>
                        </div>
                    </Container>
                </Container>

                {isPc && (
                    <div className={'w-fit  mt-[24px] pr-md'}>

                        <div className={'sticky top-[50px]'}>
                            <div className={'flex flex-col items-center'}>

                                <p className=" text-text-default-title  font-semibold  leading-7">Table of Content</p>
                                <div className={classes.root}>
                                    <div className={classes.links}>
                                        <div
                                            className={classes.indicator}
                                            style={{
                                                transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
                                            }}
                                        />
                                        {items}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </div>


            <Footer/>
        </>
    );
}

export default Index;