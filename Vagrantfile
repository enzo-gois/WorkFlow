Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  # VM2: Servidor de aplicação Node.js
  config.vm.define :vm2 do |vm2|
    vm2.vm.network :private_network, ip: "192.168.56.20"
    vm2.vm.synced_folder ".", "/home/vagrant/vagrant_data"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
    end
  end

  # VM1: Nó de controle Ansible
  config.vm.define :vm1 do |vm1|
    vm1.vm.network :private_network, ip: "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end

    vm1.vm.provision "shell", inline: <<-SHELL
      echo ">> Instalando Ansible e dependências..."
      sudo apt-get update
      sudo apt-get install -y ansible openssh-client git curl gnupg ca-certificates

      echo ">> Aguardando a chave privada da VM2..."
      while [ ! -f /vagrant/.vagrant/machines/vm2/virtualbox/private_key ]; do
        sleep 1
      done

      echo ">> Preparando chave e inventário Ansible..."
      mkdir -p /home/vagrant/.ssh
      cp /vagrant/.vagrant/machines/vm2/virtualbox/private_key /home/vagrant/.ssh/id_rsa_vm2
      chmod 600 /home/vagrant/.ssh/id_rsa_vm2

      echo "[api]" > /home/vagrant/inventory
      echo "192.168.56.20 ansible_user=vagrant ansible_ssh_private_key_file=/home/vagrant/.ssh/id_rsa_vm2" >> /home/vagrant/inventory

      chown vagrant:vagrant /home/vagrant/.ssh/id_rsa_vm2 /home/vagrant/inventory
    SHELL
  end
end
