import React from 'react';
import _ from 'lodash';

import {getPages, safePrefix, markdownify, Link} from '../utils';

export default class Carousel extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.background_color_style')}>
                <div class="inner">
                    <header class="major">
                        <h2>{_.get(this.props, 'section.title')}</h2>
                    </header>
                    <div class="carousel">
                        {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_sections.carousel.enabled', true]), 'frontmatter.home_sections.carousel.weight'), (page, page_idx) => (
                            _.get(page, 'frontmatter.home_sections.carousel') && 
                                <article key={page_idx}>
                                    <div class="image" data-position={_.get(page, 'frontmatter.home_sections.carousel.data_position')}>
                                        <img src={safePrefix(_.get(page, 'frontmatter.home_sections.carousel.image'))} alt="" />
                                    </div>
                                    <div class="content">
                                        <h3>{_.get(page, 'frontmatter.home_sections.carousel.title')}</h3>
                                        {markdownify(_.get(page, 'frontmatter.home_sections.carousel.text'))}
                                        <ul class="actions special">
                                            <li><Link to={safePrefix(_.get(page, 'url'))} class={'button primary ' + _.get(page, 'frontmatter.home_sections.carousel.button_background_color')}>Learn more</Link></li>
                                        </ul>
                                    </div>
                                </article>
                        ))}
                        <nav>
                            <Link to="#" class="previous"><span class="label">Previous</span></Link>
                            <Link to="#" class="next"><span class="label">Next</span></Link>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}
