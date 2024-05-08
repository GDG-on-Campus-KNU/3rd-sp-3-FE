import { ReactElement } from 'react';
import styled from 'styled-components';
import { Google } from './google';
import { Logout } from '../api/logout';
import { GetEmail } from '../api/getEmail';

export const Home = (): ReactElement => {
    return (
            <HomeLayout>
                <Google />
                <GetEmail />
                <Logout />
            </HomeLayout>
    )
}

const HomeLayout = styled.div`
    width: 100%;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.25rem;
`