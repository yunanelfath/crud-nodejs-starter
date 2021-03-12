provider "docker" {}

resource "docker_volume" "redis" {}
resource "docker_volume" "application" {}
resource "docker_volume" "mysql" {}
resource "docker_network" "worker_network" {
  name = "worker_network"
  driver = "bridge"
  attachable = true

  ipam_config {
    subnet  = "10.0.1.0/24"
    gateway = "10.0.1.254"
  }

}


# resource "docker_container" "application" {
#   name  = "application"
#   image = "playlist"
#   restart = "always"
#   env = [
#     "APP_DEBUG=false",
#     "REDIS_HOST=10.0.1.2",
#     "REDIS_PORT=6379"
#   ]
#
#   volumes {
#     container_path = "/usr/src/app"
#     volume_name = "application"
#   }
#
#   ports {
#     internal = "3000"
#     external = "3000"
#   }
#
#   networks_advanced {
#     name = "${docker_network.worker_network.name}"
#     ipv4_address = "10.0.1.1"
#   }
#   depends_on = [docker_network.worker_network, docker_container.redis, docker_container.mongodb]
# }

resource "docker_container" "redis" {
  name  = "redis"
  image = "redis"
  restart = "always"

  volumes {
    container_path = "/usr/local/etc/redis"
    volume_name = "redis"
  }
  networks_advanced {
    name = "${docker_network.worker_network.name}"
    ipv4_address = "10.0.1.2"
  }
  depends_on = [docker_network.worker_network]
  ports {
    internal = "6379"
    external = "6379"
  }
}


resource "docker_container" "mysql" {
	name = "mysql"
	image = "mysql:5.6"
	env = ["MYSQL_ROOT_HOST=%", "MYSQL_ROOT_PASSWORD=secret"]
  command = ["--default-authentication-plugin=mysql_native_password"]

  networks_advanced {
    name = "worker_network"
    ipv4_address = "10.0.1.3"
  }
  depends_on = [docker_network.worker_network]

  volumes {
    container_path = "/var/lib/mysql"
    volume_name = "mysql"
  }

	ports {
		internal = "3306"
		external = "3306"
	}
}
