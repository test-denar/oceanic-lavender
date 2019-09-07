import React from 'react';
import _ from 'lodash';

import {classNames, Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className={classNames({'alt': _.get(this.props, 'pageContext.frontmatter.template') === 'home'})}>
                <Link class="logo" to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="#menu">Menu</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
