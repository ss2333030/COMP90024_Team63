#!/bin/bash

# @author Team 63, Melbourne, 2023
# Hanying Li (1181148) Haichi Long (1079593) Ji Feng (1412053)
# Jiayao Lu (1079059) Xinlin Li (1068093)

ansible-galaxy collection install openstack.cloud:1.10.0  # install openstack collection
ansible-galaxy collection install community.docker
. ./openrc.sh; ansible-playbook playbook.yaml -i inventory/inventory --ask-become-pass


