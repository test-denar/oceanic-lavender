import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.style')}>
                <div class="inner">
                    <header class="major">
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    <form method="post" action="#" class="combined">
                        <input type="email" name="email" id="email" placeholder="Your email address" class="alt accent4" />
                        <input type="submit" class="button primary accent4" value="Subscribe" />
                    </form>
                </div>
            </section>
        );
    }
}
