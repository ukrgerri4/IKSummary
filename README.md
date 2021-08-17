# IKSummary

# IMPORTANT
  Due to implement routing by myself there are some limitation while use <a> tag.
		1. All outside redirections must starts with 'http' or 'https'
			Exapmles: 
				Good:
					<a href="https://example.com" target="_blank">Example</a>
					<a href="http://example.com">Example</a>
				Bad:
					<a href="example.com" target="_blank">Example</a>


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