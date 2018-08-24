all :
	@echo "Tell me what you want to do: no default for your safety."

deploy :
	@echo "Deploying to server ..."
	rsync --checksum --delete -avz _site/* athena:/websites/crdh/www/

appendices :
	rsync --checksum -avz ../crdh-appendices/* \
	 athena:/websites/crdh/www/appendices 

.PHONY: all deploy appendices
