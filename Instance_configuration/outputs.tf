
output "ec2_instance_public_ip" {
  value = aws_instance.my_ec2.public_ip
}

# Output SSH Command
output "ssh_command" {
  value = "ssh -i ~/.ssh/id_rsa ubuntu@${aws_instance.my_ec2.public_ip}"
  description = "SSH command to connect to the Jenkins server"
}