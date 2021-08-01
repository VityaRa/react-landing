import { Switch, Route } from 'react-router';

import { StyledWrapper, StyledContainer } from './styled';

import { Page } from '../pages/page';

import { IPage } from '../../types/interfaces';

import { pages } from '../../utils/data';

const Content = () => {
    return (
        <StyledContainer as="main">
            <StyledWrapper>
                <Switch>
                    {
                        pages.map((page: IPage, index: number) => (
                            <Route key={index} exact path={page.route}>
                                <Page title={page.title} component={page.component}></Page>
                            </Route>
                        ))
                    }
                </Switch>
            </StyledWrapper>
        </StyledContainer>

    )
}

export default Content
