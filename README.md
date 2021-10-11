# ikcv-jsnative

# IMPORTANT
Due to implement routing by myself there are some limitation while use ```<a>``` tag. All outside redirections must starts with 'http' or 'https'<br/>
&nbsp;&nbsp;Exapmles:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Good:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<a href="https://example.com" target="_blank">Good example</a>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<a href="http://example.com">Good example</a>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Bad:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<a href="example.com" target="_blank">Bad example</a>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<a href="www.example.com" target="_blank">Bad example</a>`<br/>

# Production

  ## Build
  docker-compose -f docker-compose.yml build
  
  ## Push
  docker push ukrgerri4/ikcv:latest

  ## Then on server
	docker-compose pull
	docker-compose down
	docker-compose up -d

# Development

  ## Build
  docker-compose build

  ## Run
  docker-compose up