import React from 'react'

export const IndexHeader = () => {
  return <header class="main-header {{#if @blog.cover}}" style={{backgroundImage: "url(img/xAnnie-Sanderson-Main-Blog-Picture-1.jpeg.pagespeed.ic.dYas82VPcR.webp)"}}>
  {/* <!-- <video class="main-header__video" src="https://s3-eu-west-1.amazonaws.com/anniesanderson-blog-uploads/Stone_720.webm" {{#if @blog.cover}} poster="url({{@blog.cover}})"{{/if}} autoplay="autoplay" loop="loop" muted="muted" preload="auto"></video>
  <video class="main-header__video" autoplay="autoplay" id="video" loop="loop" muted="muted" preload="auto">
    <source src="https://s3-eu-west-1.amazonaws.com/anniesanderson-blog-uploads/Stone_720.webm" type="video/webm">
    <source src="https://s3-eu-west-1.amazonaws.com/anniesanderson-blog-uploads/Stone_480.webm" type="video/webm">
    <source src="https://s3-eu-west-1.amazonaws.com/anniesanderson-blog-uploads/Stone_480.mp4" type="video/mp4">
  </video> --> */}
    <nav class="main-nav overlay clearfix">
        {/* {{#if @blog.logo}}<a class="blog-logo" href="{{@blog.url}}"><img src="{{@blog.logo}}" alt="{{@blog.title}}" /></a>{{/if}} */}
    </nav>
    <div class="vertical">
        <div class="main-header-content inner">
            <h1 class="page-title">Annie Sanderson</h1>
            <h2 class="as-nav-links as-social">
                <a href="/about/" class="fa-stack">
                    <span class="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span class="fa fa-circle-thin fa-stack-2x"></span>
                    <span class="fa-stack-1x" style={{bottom:"4px"}}>me</span>
                </a>
                <a href="mailto:annie_walton@hotmail.com" class="fa-stack">
                    <span class="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span class="fa fa-circle-thin fa-stack-2x"></span>
                    <span class="fa fa-envelope-o fa-stack-1x"></span>
                </a>
                <a href="http://twitter.com/annie_sanderson" class="fa-stack">
                    <span class="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span class="fa fa-circle-thin fa-stack-2x"></span>
                    <span class="fa fa-twitter fa-stack-1x"></span>
                </a>
                <a href="https://instagram.com/anniesanderson80/" class="fa-stack">
                    <span class="as-social-bg fa fa-circle fa-stack-1x"></span>
                    <span class="fa fa-circle-thin fa-stack-2x"></span>
                    <span class="fa fa-instagram fa-stack-1x"></span>
                </a>
            </h2>
            <h2 class="page-description"></h2>
        </div>
    </div>
    <a class="scroll-down fa fa-chevron-down" href="#content" data-offset="-45"><span class="hidden">Scroll Down</span></a>
</header>

}