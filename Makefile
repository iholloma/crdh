preview :
	gulp

deploy :
	@echo "Deploying to server ..."
	rsync --checksum --delete -avz _site/* athena:/websites/crdh/www/

appendices :
	rsync --checksum -avz ../crdh-appendices/* \
	 athena:/websites/crdh/www/appendices 

.PHONY: preview deploy appendices
