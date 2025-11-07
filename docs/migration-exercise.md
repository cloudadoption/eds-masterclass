# Content Imports, site configs, repoless, indexing, sitemaps and more!

This is a hands-on exercise. You will be migrating some content from https://deno.com over to Edge Delivery on DA and setting up some additional things.

## Prerequisites
As a pre-requisite to Masterclass, you should already have an org and a site up and running after having gone through the [Getting Started tutorial](https://www.aem.live/developer/tutorial). Lets expand on that now to:
- Create a new site under your org for Deno
- Import some blog content into the site
- Create two separate indices & sitemaps for the blog and site pages
- Create a repoless site called _deno-enterprise_
- Add a custom header for some deep paths
- Add a new user to the org
- Update the new user's access permissions
- Put site level authentication in front of the second repoless site

**IMPORTANT: Before going through the following steps, fork this `eds-masterclass` repo and checkout the `migration` branch.**

## Step 1: Create the Deno site in your org
- Go to https://labs.aem.live/tools/site-admin/index.html
- Create a new site
- Point it to your fork of this `eds-masterclass` repo

## Step 2: Import content
- Run `aem import` from the repo
- Review the transformation file at `/tools/importer/import.js`.
- Import the following pages:
    - https://deno.com/blog/fresh-and-vite
    - https://deno.com/blog/updates-from-tc39
    - https://deno.com/blog/deno-deploy-highlights
    - https://deno.com/blog/open-source
    - https://deno.com/blog/v2.5

The blog post metadata should contain fields for `Author` and `Tags` which are currently missing.

- Update the `handleBlogPosts` function in `import.js` to include these in the metadata table.

_Solution is available in the `migration-02` branch_

## Step 3: Create site and blog indices
- Create some dummy non-blog content on the site, throw some blocks on a couple of pages and publish them
- Go to https://labs.aem.live/tools/index-admin/index.html
- Create a `default` index for site content. It should include all site content excluding blog post pages
- Create a `blog` index for the blog pages that were imported
    - Value for `include` should be `/blog/**`

## Step 4: Create sitemaps pointing to their indices
- Go to https://labs.aem.live/tools/sitemap-admin/index.html
- Create sitemap configs for blog and site content pointing to the indices created in Step 3
- Generate the sitemaps for both
- Verify that things look correct at `/sitemap.xml` and `/blog-sitemap.xml`

## Step 5: Create a repoless site
- Create a second, repoless site, pointing to the same codebase
- Create a metadata sheet and apply the `deno-enterprise` theme to all pages
- Change the value of `--link-color` or something global for `deno-enterprise`

You now have two sites with a separatation in styling powered by the same codebase!

## Step 6: Add a custom header
- Apply a custom HTTP header to any content or code path
    - You can use Postman, CURL or the HTTP Headers Editor tool: https://labs.aem.live/tools/headers-edit/index.html
- Verify that the response header exists by making a `GET` request to the resource

## Step 7: Add a new user to your org
- Go to https://labs.aem.live/tools/user-admin/index.html
- Add a new user to your org with the role `config_admin`

