import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, toUrl, classNames} from '../utils';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <ul class="links">
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link></li>
                    ))}
                    {_.map(_.get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                        <li key={action_idx}><Link to={safePrefix(toUrl(this.props.pageContext.pages, _.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')})}>{_.get(action, 'title')}</Link></li>
                    ))}
                </ul>
                <Link to="#menu" class="close" />
            </nav>
        );
    }
}
