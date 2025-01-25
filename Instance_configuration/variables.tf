variable "ami_id" {
  description = "AMI ID for the EC2 instance OS"
  type = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type = string
}

variable "aws_access_key_id" {
  description = "AWS access key ID"
  type        = string
}

variable "aws_secret_access_key" {
  description = "AWS secret access key"
  type        = string
}