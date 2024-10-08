resource "google_compute_instance" "vm_instance" {
  # Because of using this module for multiple VM instances, define instance name as an input variable. 
  # This allows to control the name of the variable from mynetwork.tf.
  name = var.instance_name

  # These properties define the zone and machine type of the instance as input variables.
  zone         = var.instance_zone
  machine_type = var.instance_type

  # Defines the boot disk to use the Debian 11 OS image. 
  # Because both VM instances will use the same image, it can be hardcoded in the module.
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  # Defines the network interface by providing the network name as an input variable and the access configuration. 
  # Leaving the access configuration empty results in an ephemeral external IP address.
  # To create instances with only an internal IP address, remove the access_config section.
  network_interface {
    network = var.instance_network
    access_config {
    }
  }
}
