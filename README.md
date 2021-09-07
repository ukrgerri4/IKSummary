# ikcv-jsnative

# IMPORTANT
  Due to implement routing by myself there are some limitation while use ```<a>``` tag. \
		1. All outside redirections must starts with 'http' or 'https' \
			Exapmles: \
				Good: \
					```
					<a href="https://example.com" target="_blank">Example</a>
					```
					```
					<a href="http://example.com">Example</a>
					```
				Bad: \
					```
					<a href="example.com" target="_blank">Example</a>
					```


# Production
  ## Build
  docker-compose -f docker-compose.yml build
  
  ## Push
  docker push ukrgerri4/ikcv:latest

# Development
  ## Build
  docker-compose build

  ## Run
  docker-compose up


# Troubleshooting:
  ## Assets
    - Due to documentation https://webpack.js.org/guides/asset-modules/ there is a possibility 
      to simply use this rule:
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        }
      but for me it is not working, thats why I just use 'copy-webpack-plugin' and copy
      all my assets to dist folder.

        