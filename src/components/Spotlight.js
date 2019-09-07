import React from 'react';
import _ from 'lodash';

import {cycler, getPages, safePrefix, htmlToReact, markdownify, Link} from '../utils';

export default class Spotlight extends React.Component {
    render() {
        let cyc_index = cycler('odd', 'even');
        return (
            _.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_sections.spotlight.enabled', true]), 'frontmatter.home_sections.spotlight.weight'), (page, page_idx) => (
                _.get(page, 'frontmatter.home_sections.spotlight') && 
                    <article key={page_idx} id={_.get(page, 'frontmatter.home_sections.spotlight.section_id')} class={'spotlight ' + cyc_index.next() + ' ' + _.get(page, 'frontmatter.home_sections.spotlight.background_accent')}>
                        <div class="inner">
                            <div class="image" data-position={_.get(page, 'frontmatter.home_sections.spotlight.data_position')}>
                                <img src={safePrefix(_.get(page, 'frontmatter.home_sections.spotlight.image'))} alt="" />
                            </div>
                            <h2>{htmlToReact(_.get(page, 'frontmatter.home_sections.spotlight.title').replace(/\n/g, '<br />'))}</h2>
                            <div class="content">
                                <h3>{htmlToReact(_.get(page, 'frontmatter.home_sections.spotlight.subtitle').replace(/\n/g, '<br />'))}</h3>
                                {markdownify(_.get(page, 'frontmatter.home_sections.spotlight.text'))}
                                <ul class="actions">
                                    <li><Link to={safePrefix(_.get(page, 'url'))} class={'button primary ' + _.get(page, 'frontmatter.home_sections.spotlight.button_accent')}>Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </article>
            ))
        );
    }
}
