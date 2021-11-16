import { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Header from "../header/Header";

const LayoutContainer = styled('div')({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    position: 'relative'
});

const Page = styled('div')({
    height: '100%',
})

const Layout = (props: PropsWithChildren<{}>) => {
    return (
        <LayoutContainer>
            <Header/>
            <Page>{props.children}</Page>
        </LayoutContainer>
    );
}

export default Layout