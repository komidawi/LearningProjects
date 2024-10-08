# Create the mynetwork network
resource "google_compute_network" "mynetwork" {
  name = "mynetwork"

  # By definition, an auto mode network automatically creates a subnetwork in each region.
  auto_create_subnetworks = "true"
}


# Add a firewall rule to allow HTTP, SSH, RDP and ICMP traffic on mynetwork
resource "google_compute_firewall" "mynetwork-allow-http-ssh-rdp-icmp" {
  name = "mynetwork-allow-http-ssh-rdp-icmp"

  # Because this firewall rule depends on its network, use google_compute_network.mynetwork.self_link reference
  # to instruct Terraform to resolve these resources in a dependent order.
  # In this case, the network is created before the firewall rule.
  network = google_compute_network.mynetwork.self_link
  allow {
    protocol = "tcp"
    ports = ["22", "80", "3389"]
  }
  allow {
    protocol = "icmp"
  }
  source_ranges = ["0.0.0.0/0"]
}


# These resources are leveraging the module in the instance folder and provide the name, zone, and network as inputs.
# Because these instances depend on a VPC network, use google_compute_network.mynetwork.self_link reference
# to instruct Terraform to resolve these resources in a dependent order.
# In this case, the network is created before an instance.

# Create the mynet-us-vm instance
module "mynet-us-vm" {
  source           = "instance"
  instance_name    = "mynet-us-vm"
  instance_zone    = "us-east1-c"
  instance_network = google_compute_network.mynetwork.self_link
}

# Create the mynet-eu-vm" instance
module "mynet-eu-vm" {
  source           = "instance"
  instance_name    = "mynet-eu-vm"
  instance_zone    = "europe-west1-d"
  instance_network = google_compute_network.mynetwork.self_link
}


# Note: The benefit of writing a Terraform module is that it can be reused across many configurations.
# Instead of writing your own module, you can also leverage existing modules from the Terraform Module registry.
