import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Posts extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="wrapper">
                <div class="inner">
                    <header class="major">
                        <h2>{_.get(this.props, 'section.title')}</h2>
                    </header>
                    <div class="posts">
                        {_.map(_.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc'), (post, post_idx) => (
                            <article key={post_idx}>
                                {_.get(post, 'frontmatter.home_image') && 
                                    <Link to={safePrefix(_.get(post, 'url'))} class="image"><img src={safePrefix(_.get(post, 'frontmatter.home_image'))} alt="" /></Link>
                                }
                                <div class="content">
                                    <h3><Link to={safePrefix(_.get(post, 'url'))}>{_.get(post, 'frontmatter.title')}</Link></h3>
                                    {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                    <ul class="actions special">
                                        <li><Link to={safePrefix(_.get(post, 'url'))} class={'button primary ' + _.get(post, 'frontmatter.home_button_color')}>Learn more</Link></li>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
