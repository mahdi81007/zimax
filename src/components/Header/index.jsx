import logoImg from '@/assets/images/logo/Logo.png'
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
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        {/*<Button variant="default">Log in</Button>*/}
                        {/*<Button>Sign up</Button>*/}
                    </Group>
                </ScrollArea>
            </Drawer>
        </Container>
    );
}