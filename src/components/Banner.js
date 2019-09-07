import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, toUrl, safePrefix, classNames} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'pageContext.frontmatter.banner.section_id')}>
                <div class="inner">
                    <h1>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.banner.title').replace(/\n/g, '<br />'))}</h1>
                    {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))}
                    {_.get(this.props, 'pageContext.frontmatter.banner.actions') && 
                        <ul class="actions special">
                            {_.map(_.get(this.props, 'pageContext.frontmatter.banner.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(toUrl(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', 'large', 'wide', {'primary': _.get(action, 'is_primary')}, {'scrolly-middle': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
