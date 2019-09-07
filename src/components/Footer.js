import React from 'react';
import _ from 'lodash';

import {Link, htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <ul class="contact-icons">
                    {_.get(this.props, 'pageContext.site.data.footer.social_links') && 
                        _.map(_.get(this.props, 'pageContext.site.data.footer.social_links'), (link, link_idx) => (
                            <li key={link_idx} class={'icon ' + _.get(link, 'icon')}><Link to={_.get(link, 'link_url')}>{_.get(link, 'link_text')}</Link></li>
                        ))
                    }
                </ul>
                <div class="copyright">
                    {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                    &nbsp;
                    {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                        <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                    </React.Fragment>))}
                </div>
            </footer>
        );
    }
}
