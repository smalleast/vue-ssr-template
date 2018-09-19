upload: # upload assets to production machine
	yarn build
	zip nuxt.zip -r .nuxt/*
	scp nuxt.zip deployer@120.55.125.14:/var2/deploy/node/zhulogic-ssr
remote-deploy: # execute deploy script on production machine
	ssh deployer@120.55.125.14 < remote-deploy.sh
