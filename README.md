# Cubbon Crayons catalog

Static website for four Kannada–English storybooks. Open `index.html` to preview it. No build step is required. The `assets` folder holds the public cover images.

## GitHub and checkout

Keep these files at the root of a dedicated GitHub repository. To publish the preview catalog with GitHub Pages, go to **Settings → Pages → Deploy from a branch**, select **main** and **/(root)**, and save. GitHub Pages restricts websites primarily designed for ecommerce or commercial transactions. Before turning on sales, deploy this repository to a host that allows commercial storefronts.

In Payhip, create a paid **Digital Product** for each story with its full PDF as the product file. Connect Razorpay there if desired. Once the Payhip listings are ready, fill in the four `productLinks` values at the top of `store.js` with the respective public `https://payhip.com/b/...` product URLs. Listing links are enabled individually. Payhip controls checkout and delivery. Keep full PDFs and payment credentials out of this repository.
