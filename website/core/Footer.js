/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('index.html')}>
              Home
            </a>
            <a href={this.docUrl('about.html')}>
              About
            </a>
            <a href={this.docUrl('getting-started.html')}>
              Getting Started
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.gg/MQNUGgB"
              target="_blank"
              rel="noreferrer noopener">
              Discord Server
            </a>
            <a
              href="https://github.com/topics/webaverse"
              target="_blank"
              rel="noreferrer noopener">
              Github Topic
            </a>
            <a
              href="https://twitter.com/search?q=webaverse"
              target="_blank"
              rel="noreferrer noopener">
              Twitter Discussion
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://webaverse.com">Website</a>
            <a href="https://github.com/webaverse/">GitHub</a>
            <a href="https://twitter.com/webmixedreality/">Twitter</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
