# Playlist

## Tech stack
- Nodejs
- Redis Pub/sub
- Dockerize Container App
- Terraform

### Development
- npm install
- cp .env.example .env
- configure .env to certain configuration at your machine

### Deployment
- docker image build -t ${imagename} .
- configure image name in `/main.tf` with ${imagename}
- terraform init
- terraform plan
- terraform apply
