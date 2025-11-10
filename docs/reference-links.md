# Reference Links for Participants

This document contains useful resources for AEM Edge Delivery Services development.

## What is EDS?

- https://www.aem.live/docs/faq
- https://www.aem.live/developer/tutorial

---

## EDS Architecture

- https://www.aem.live/docs/architecture
- https://www.aem.live/docs/staging
- https://www.aem.live/docs/security
- https://www.aem.live/docs/global
- https://www.aem.live/developer/anatomy-of-a-project
- https://www.aem.live/docs/limits


---

## Authoring Approaches

- https://www.aem.live/docs/authoring
- https://www.aem.live/docs/aem-authoring
- https://www.aem.live/docs/authoring-guide
- https://www.aem.live/developer/byom

---

## Dev Best Practices

- https://www.aem.live/docs/dev-collab-and-good-practices
- https://www.aem.live/developer/keeping-it-100

### Content Modeling

- https://www.aem.live/blog/content-document-semantics
- https://www.aem.live/developer/component-model-definitions
- https://www.aem.live/developer/markup-sections-blocks
- https://www.aem.live/docs/davidsmodel

### Development Process & Tools

- https://www.aem.live/blog/testing-in-aem
- https://www.aem.live/developer/ai-coding-agents
- [Helix Website Repo](https://github.com/adobe/helix-website)

### Community

- https://www.aem.live/developer/block-collection
- https://www.aem.live/developer/block-party/
- https://www.aem.live/community
- https://www.aem.live/blog

---

## Advanced Topics & Patterns

- https://www.aem.live/developer/importer
- https://www.aem.live/docs/redirects
- https://www.aem.live/docs/translation-and-localization
- https://www.aem.live/developer/placeholders
- https://www.aem.live/docs/repoless
- https://www.aem.live/developer/indexing
- https://www.aem.live/developer/sitemap
- https://tools.aem.live/
- https://www.aem.live/docs/custom-headers
- https://www.aem.live/docs/authentication-setup
- https://www.aem.live/docs/byo-cdn-setup
- https://www.aem.live/docs/admin.html

---

## Web Performance

### Info

- [Lighthouse Overview](https://developer.chrome.com/docs/lighthouse/overview)
- [Web Vitals](https://web.dev/articles/vitals)
- [CWV and Search](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [About Page Speed Insights](https://developers.google.com/speed/docs/insights/v5/about)

### Metrics

- [TTFB](https://web.dev/articles/ttfb)
- [FCP](https://web.dev/articles/fcp)
- [LCP](https://web.dev/articles/lcp)
- [SI](https://developer.chrome.com/docs/lighthouse/performance/speed-index)
- [CLS](https://web.dev/articles/cls)
- [TBT](https://web.dev/articles/tbt)
- [INP](https://web.dev/articles/inp)

### Tools

- [CrUX Vis](https://cruxvis.withgoogle.com/)
- [TREO SiteSpeed](https://treo.sh/sitespeed)
- [OpTel Explorer Docs](https://www.aem.live/docs/optel-explorer)
- [LHS Calculator](https://googlechrome.github.io/lighthouse/scorecalc/)
- [PSI Home](https://pagespeed.web.dev/)
- [Deep PSI](https://labs.aem.live/tools/deep-psi/deep-psi.html)

### Bookmarklets

**Open in PageSpeed Insight**

```javascript
javascript:(function(){window.open('//developers.google.com/speed/pagespeed/insights/?url=%27+window.location);})()
```

**Open in Treo SiteSpeed**

```javascript
javascript:(function(){window.open('//treo.sh/sitespeed/' + window.location.origin);})()
```

**Open in CrUX Vis**

```javascript
javascript:(function(){window.open('//cruxvis.withgoogle.com/#/?view=cwvsummary&url='+window.location+'&identifier=url&device=PHONE&periodStart=0&periodEnd=-1&display=p75s');})()
```

---

## Integrations

- [Integration Overview](https://www.aem.live/docs/integrations)
- [Integration Patterns](https://www.aem.live/developer/integrations)
- [Github Actions](https://www.aem.live/developer/github-actions)
- [BYOM](https://www.aem.live/developer/byom)
- [Adobe Experience Cloud](https://www.aem.live/developer/martech-integration)
- [Adobe Target](https://www.aem.live/developer/target-integration)
- [Google Tag Manager](https://www.aem.live/developer/gtm-martech-integration)
- [Forms](https://www.aem.live/developer/forms)


### Workers

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Fastly Edge Compute](https://www.fastly.com/documentation/solutions/examples/javascript/)
- [AWS Lambda@Edge](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html)
- [Akamai EdgeWorkers](https://techdocs.akamai.com/edgeworkers/docs/hello-world)
- [The Cat API](https://thecatapi.com/)

