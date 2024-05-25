import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 9502,
		host: "0.0.0.0"
	},
	site: "https://api.dream.memorial",
	trailingSlash: "never",
	integrations: [],
	build: {
		format: "file"
	},
	output: "server",
	adapter: cloudflare()
});
