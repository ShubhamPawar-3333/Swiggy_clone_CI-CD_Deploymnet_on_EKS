provider "aws" {
  region = "ap-south-1"  # Set the desired region
}

resource "aws_key_pair" "ec2_key" {
  key_name = "ec2-key"
  public_key = file("~/.ssh/id_rsa.pub") # Path to your public SSH key
}

resource "aws_iam_role" "ec2_role" {
  name               = "ec2-role-for-cli"
  assume_role_policy = data.aws_iam_policy_document.ec2_assume_role_policy.json
}

data "aws_iam_policy_document" "ec2_assume_role_policy" {
  statement {
    actions   = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_policy" "ec2_policy" {
  name        = "EC2FullAccess"
  description = "Provides full access to EC2"
  policy      = data.aws_iam_policy_document.ec2_policy.json
}

data "aws_iam_policy_document" "ec2_policy" {
  statement {
    actions   = ["ec2:DescribeInstances", "ec2:StartInstances", "ec2:StopInstances"]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy_attachment" "ec2_policy_attachment" {
  policy_arn = aws_iam_policy.ec2_policy.arn
  role       = aws_iam_role.ec2_role.name
}

resource "aws_instance" "my_ec2" {
  ami                    = var.ami_id # Change to your desired AMI ID
  instance_type          = var.instance_type
  key_name               = aws_key_pair.ec2_key.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name
  user_data              = <<-EOT
              #!/bin/bash
              # Update the system packages
              sudo apt update -y

              # Install AWS CLI
              sudo apt install awscli -y

              # Configure AWS CLI with the provided credentials and region
              sudo aws configure set aws_access_key_id ${var.aws_access_key_id}
              sudo aws configure set aws_secret_access_key ${var.aws_secret_access_key}
              sudo aws configure set region ap-south-1
              sudo aws configure set output json
            EOT
  security_groups        = [aws_security_group.ec2_sg.name]

  tags = {
    Name = "EC2-for-AWS-CLI"
  }
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "ec2-instance-profile"
  role = aws_iam_role.ec2_role.name
}

resource "aws_security_group" "ec2_sg" {
  name        = "ec2-security-group"
  description = "Allow SSH, HTTP, HTTPS, Jenkins, and custom ports"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 9000
    to_port     = 9000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ec2-security-group"
  }
}
