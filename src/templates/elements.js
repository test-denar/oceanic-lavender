import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {Link} from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section id="main" class="wrapper alt">
                    <div class="inner">
                        <header class="major">
                            <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        </header>
                        <div class="row gtr-200">
                            <div class="col-6 col-12-medium">
                                <h3>Text</h3>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                    This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                    This is <u>underlined</u> and this is code: <code>for (;;) &#123; ... &#125;</code>.
                                    Finally, this is a <Link to="#">link</Link>.</p>
                                <hr />
                                <h2>Heading Level 2</h2>
                                <h3>Heading Level 3</h3>
                                <h4>Heading Level 4</h4>
                                <h5>Heading Level 5</h5>
                                <h6>Heading Level 6</h6>
                                <hr />
                                <header>
                                    <h2>Heading with a Subtitle</h2>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h3>Heading with a Subtitle</h3>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h4>Heading with a Subtitle</h4>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <h3>Lists</h3>
                                <div class="row">
                                    <div class="col-6 col-12-small">
                                        <h4>Unordered</h4>
                                        <ul>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Sagittis adipiscing lorem eleifend.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ul>
                                        <h4>Alternate</h4>
                                        <ul class="alt">
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Sagittis adipiscing lorem eleifend.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-12-small">
                                        <h4>Ordered</h4>
                                        <ol>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Etiam vel felis at lorem sed viverra.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                            <li>Dolor pulvinar etiam magna etiam.</li>
                                            <li>Etiam vel felis at lorem sed viverra.</li>
                                            <li>Felis enim feugiat dolore viverra.</li>
                                        </ol>
                                        <h4>Icons</h4>
                                        <ul class="icons">
                                            <li><Link to="#" class="icon fa-twitter"><span class="label">Twitter</span></Link></li>
                                            <li><Link to="#" class="icon fa-facebook"><span class="label">Facebook</span></Link></li>
                                            <li><Link to="#" class="icon fa-instagram"><span class="label">Instagram</span></Link></li>
                                            <li><Link to="#" class="icon fa-github"><span class="label">Github</span></Link></li>
                                            <li><Link to="#" class="icon fa-dribbble"><span class="label">Dribbble</span></Link></li>
                                            <li><Link to="#" class="icon fa-tumblr"><span class="label">Tumblr</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>Definition</h4>
                                <dl>
                                    <dt>Item 1</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                    <dt>Item 2</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                    <dt>Item 3</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    </dd>
                                </dl>
                                <h4>Actions</h4>
                                <ul class="actions">
                                    <li><Link to="#" class="button primary">Primary</Link></li>
                                    <li><Link to="#" class="button">Default</Link></li>
                                </ul>
                                <ul class="actions small">
                                    <li><Link to="#" class="button primary small">Small</Link></li>
                                    <li><Link to="#" class="button small">Small</Link></li>
                                </ul>
                                <div class="row">
                                    <div class="col-3 col-12-small">
                                        <ul class="actions stacked">
                                            <li><Link to="#" class="button primary">Default</Link></li>
                                            <li><Link to="#" class="button">Default</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-3 col-12-small">
                                        <ul class="actions stacked">
                                            <li><Link to="#" class="button primary small">Small</Link></li>
                                            <li><Link to="#" class="button small">Small</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-3 col-12-small">
                                        <ul class="actions stacked">
                                            <li><Link to="#" class="button primary fit">Default</Link></li>
                                            <li><Link to="#" class="button fit">Default</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-3 col-12-small">
                                        <ul class="actions stacked">
                                            <li><Link to="#" class="button primary small fit">Small</Link></li>
                                            <li><Link to="#" class="button small fit">Small</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>Blockquote</h3>
                                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>
                                <h3>Table</h3>
                                <h4>Default</h4>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <h4>Alternate</h4>
                                <div class="table-wrapper">
                                    <table class="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item 5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div class="col-6 col-12-medium">
                                <h3>Buttons</h3>
                                <ul class="actions">
                                    <li><Link to="#" class="button primary">Primary</Link></li>
                                    <li><Link to="#" class="button">Default</Link></li>
                                </ul>
                                <ul class="actions">
                                    <li><Link to="#" class="button primary large">Large</Link></li>
                                    <li><Link to="#" class="button">Default</Link></li>
                                    <li><Link to="#" class="button small">Small</Link></li>
                                </ul>
                                <ul class="actions fit">
                                    <li><Link to="#" class="button primary fit">Fit</Link></li>
                                    <li><Link to="#" class="button fit">Fit</Link></li>
                                </ul>
                                <ul class="actions fit small">
                                    <li><Link to="#" class="button primary fit small">Fit + Small</Link></li>
                                    <li><Link to="#" class="button fit small">Fit + Small</Link></li>
                                </ul>
                                <ul class="actions">
                                    <li><Link to="#" class="button primary icon fa-search">Icon</Link></li>
                                    <li><Link to="#" class="button icon fa-download">Icon</Link></li>
                                </ul>
                                <ul class="actions">
                                    <li><span class="button primary disabled">Primary</span></li>
                                    <li><span class="button disabled">Default</span></li>
                                </ul>
                                <h3>Form</h3>
                                <form method="post" action="#">
                                    <div class="row gtr-uniform">
                                        <div class="col-6 col-12-xsmall">
                                            <input type="text" name="name" id="name" value="" placeholder="Name" />
                                        </div>
                                        <div class="col-6 col-12-xsmall">
                                            <input type="email" name="email" id="email" value="" placeholder="Email" />
                                        </div>
                                        <div class="col-12">
                                            <select name="category" id="category">
                                                <option value="">- Category -</option>
                                                <option value="1">Manufacturing</option>
                                                <option value="1">Shipping</option>
                                                <option value="1">Administration</option>
                                                <option value="1">Human Resources</option>
                                            </select>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="priority-low" name="priority" checked/>
                                            <label for="priority-low">Low Priority</label>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="priority-normal" name="priority"/>
                                            <label for="priority-normal">Normal Priority</label>
                                        </div>
                                        <div class="col-4 col-12-small">
                                            <input type="radio" id="priority-high" name="priority"/>
                                            <label for="priority-high">High Priority</label>
                                        </div>
                                        <div class="col-6 col-12-small">
                                            <input type="checkbox" id="copy" name="copy"/>
                                            <label for="copy">Email me a copy of this message</label>
                                        </div>
                                        <div class="col-6 col-12-small">
                                            <input type="checkbox" id="human" name="human" checked/>
                                            <label for="human">I am a human and not a robot</label>
                                        </div>
                                        <div class="col-12">
                                            <textarea name="message" id="message" placeholder="Enter your message" rows="6" />
                                        </div>
                                        <div class="col-12">
                                            <ul class="actions">
                                                <li><input type="submit" value="Send Message" class="primary" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form method="post" action="#">
                                    <div class="row gtr-uniform">
                                        <div class="col-9 col-12-small">
                                            <input type="text" name="query" id="query" value="" placeholder="Query" />
                                        </div>
                                        <div class="col-3 col-12-small">
                                            <input type="submit" value="Search" class="fit" />
                                        </div>
                                    </div>
                                </form>
                                <h3>Image</h3>
                                <h4>Fit</h4>
                                <span class="image fit"><img src="images/pic04.jpg" alt="" /></span>
                                <div class="box alt">
                                    <div class="row gtr-50 gtr-uniform">
                                        <div class="col-4"><span class="image fit"><img src="images/pic08.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic09.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic10.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic09.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic10.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic08.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic10.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic08.jpg" alt="" /></span></div>
                                        <div class="col-4"><span class="image fit"><img src="images/pic09.jpg" alt="" /></span></div>
                                    </div>
                                </div>
                                <h4>Left &amp; Right</h4>
                                <p><span class="image left"><img src="images/pic02.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>
                                <p><span class="image right"><img src="images/pic02.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>
                                <h3>Box</h3>
                                <div class="box">
                                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet nullam.</p>
                                </div>
                                <h3>Preformatted</h3>
                                <pre><code>{`i = 0;\n\nwhile (!deck.isInOrder()) {\n  print 'Iteration ' + i;\n  deck.shuffle();\n  i++;\n}\n\nprint 'It took ' + i + ' iterations to sort the deck.';\n`}</code></pre>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
