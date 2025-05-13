import logoImg from '../../../Logo.svg'
import {
    Box,
    Burger,
    Center, Container,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './index.module.css';




export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const links =[
        {title :'Home' ,href : 'Home'},
        {title :'Zimax Token' ,href : 'Home'},
        {title :'NFT Marketplace' ,href : 'Home'},
        {title :'Zimax Bank' ,href : 'Home'},
        {title :'Bank15' ,href : 'Home'},
        {title :'NFT Income Program' ,href : 'Home'},
        {title :'Lottery' ,href : 'Home'},
    ]
    return (
        <Container  size="md" pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <img className={'w-[100px] h-[30px]'} src={logoImg.src} alt={'logo'} />
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="#" className={classes.link}>
                            Home
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Features
                                        </Box>
                                        {/*<IconChevronDown size={16} color={theme.colors.blue[6]} />*/}
                                    </Center>
                                </a>
                            </HoverCard.Target>
                        </HoverCard>
                        <a href="#" className={classes.link}>
                            Learn
                        </a>
                        <a href="#" className={classes.link}>
                            Academy
                        </a>
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<img className={'h-[46px]'} src={logoImg.src} alt={'logo'}/>}
                hiddenFrom="sm"
                zIndex={1000000}
                classNames={{body: 'px-[24px]'}}
            >


                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <div className={'flex flex-col text-[20px] px-[24px]'}>
                        {links.map((link)=>(
                            <a className={'py-[12px] border-b border-gray-400'} href={link.href}>{link.title}</a>
                        ))}
                    </div>
                    {/*<a href="#" className={classes.link}>*/}
                    {/*    Home*/}
                    {/*</a>*/}
                    {/*<a href="#" className={classes.link}>*/}
                    {/*    Learn*/}
                    {/*</a>*/}
                    {/*<a href="#" className={classes.link}>*/}
                    {/*    Academy*/}
                    {/*</a>*/}

                    <Group justify="center" grow pb="xl" px="md">
                        {/*<Button variant="default">Log in</Button>*/}
                        {/*<Button>Sign up</Button>*/}
                    </Group>
                </ScrollArea>
            </Drawer>
        </Container>
    );
}