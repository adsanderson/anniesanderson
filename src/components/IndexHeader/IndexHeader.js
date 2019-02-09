import React from 'react'

export const IndexHeader = () => {
  return< header className="main-header {{#if @blog.cover}}" style={{backgroundImage: "url(img/xAnnie-Sanderson-Main-Blog-Picture-1.jpeg.pagespeed.ic.dYas82VPcR.webp)"}}>
    {/* <nav className="main-nav overlay clearfix">
        {{#if @blog.logo}}<a className="blog-logo" href="{{@blog.url}}"><img src="{{@blog.logo}}" alt="{{@blog.title}}" /></a>{{/if}}
    </nav> */}
    <div>
        <div className="main-header-content inner">
            <h1 className="page-title">Annie Sanderson</h1>
            <h2 className="as-nav-links as-social">
                <a href="/About/" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa-stack-1x" style={{bottom:"4px"}}>me</span>
                </a>
                <a href="mailto:annie_walton@hotmail.com" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-envelope-o fa-stack-1x"></span>
                </a>
                <a href="http://twitter.com/annie_sanderson" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-twitter fa-stack-1x"></span>
                </a>
                <a href="https://instagram.com/anniesanderson80/" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-instagram fa-stack-1x"></span>
                </a>
            </h2>
            {/* <h2 className="page-description">{{@blog.description}}</h2> */}
        </div>
    </div>
  </header>
  {/*

    <div className="vertical">
        <div className="main-header-content inner">
            <h1 className="page-title">{{@blog.title}}</h1>
            <h2 className="as-nav-links as-social">
                <a href="/About/" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa-stack-1x" style="bottom:4px;">me</span>
                </a>
                <a href="mailto:annie_walton@hotmail.com" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-envelope-o fa-stack-1x"></span>
                </a>
                <a href="http://twitter.com/annie_sanderson" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-twitter fa-stack-1x"></span>
                </a>
                <a href="https://instagram.com/anniesanderson80/" className="fa-stack">
                    <span className="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span className="fa fa-circle-thin fa-stack-2x"></span>
                    <span className="fa fa-instagram fa-stack-1x"></span>
                </a>
            </h2>
            <h2 className="page-description">{{@blog.description}}</h2>
        </div>
    </div>
    <a className="scroll-down fa fa-chevron-down" href="#content" data-offset="-45"><span className="hidden">Scroll Down</span></a> */}
}