import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charset="utf-8"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                </Helmet>
                    <Header {...this.props} />
                    <Menu {...this.props} />
                    {this.props.children}
                    <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
