import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section id="main" class="wrapper">
                    <div class="inner">
                        <header class="major">
                            <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        </header>
                        {_.get(this.props, 'pageContext.frontmatter.image') && 
                            <span class="image main"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.image'))} alt="" /></span>
                        }
                        {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                </section>
            </Layout>
        );
    }
}
