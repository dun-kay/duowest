# Duo West

Simple one-page static website for Duo West, built with plain HTML, CSS and minimal vanilla JavaScript so it works by opening `index.html` directly and can also be deployed to GitHub Pages.

## Run locally

1. Open `index.html` directly in a browser, or serve the folder with any simple static server if you prefer.
2. No build step, package manager or dependencies are required.

## Image filenames to replace

Add the final image files into [`assets/images/`](./assets/images/) using these exact names:

- `hero.jpg`
- `detail-01.jpg`
- `detail-02.jpg`
- `detail-03.jpg`
- `detail-04.jpg`
- `thompson-road-main.jpg`
- `thompson-road-plan.jpg`
- `thompson-road-detail.jpg`

If those files are missing, the site will show clean labelled placeholders instead of broken images.

## Where to replace the Tally URL

Replace every instance of:

`https://tally.so/r/REPLACE_ME`

You can find them in [`index.html`](./index.html).

## Deploy with GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` → `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the branch you want to publish, usually `main`.
5. Select the `/ (root)` folder and save.
6. Wait for GitHub Pages to publish the site.

Because all asset paths are relative, no path changes are needed for GitHub Pages.

## Connect a custom domain

1. In GitHub, open `Settings` → `Pages`.
2. Enter the custom domain in the `Custom domain` field.
3. Update your DNS records with your domain provider:
   - Use `A` records for the apex domain if needed.
   - Use a `CNAME` record for `www` if preferred.
4. Enable HTTPS in GitHub Pages once the domain is connected.
5. If you want to keep the domain in the repo, add a `CNAME` file at the project root with the final domain name.

## Important wording reminder

Duo West must not be described as an architecture practice, and Sonia must not be described as an architect unless registration changes.
